import { ChangeEvent, useState } from 'react';
import { EMPTY_ARRAY, EMPTY_STRING } from '../constants';
import { OrderType } from './types';
import { Snack } from './Snack';
import { Header } from './Header';
import { Basket } from './Basket';
import { ReturnComponentType } from '../types/ReturnComponentType';
import { SearchBlock } from './SearchBlock';
import { GoodsType } from '../data/types';
import { goods } from '../data';
import styles from './App.module.css';

export const App = (): ReturnComponentType => {
  const [order, setOrder] = useState<OrderType[]>(EMPTY_ARRAY);
  const [search, setSearch] = useState<string>(EMPTY_STRING);
  const [products, setProducts] = useState<GoodsType[]>(goods);
  const [isCartOpen, setCartOpen] = useState<boolean>(false);
  const [isSnackOpen, setSnackOpen] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (!e.target.value) {
      setProducts(goods);
      setSearch(EMPTY_STRING);
      return;
    }
    setSearch(e.target.value);
    setProducts(
      products.filter(good =>
        good.name.toLowerCase().includes(e.target.value.toLowerCase()),
      ),
    );
  };

  const addToOrder = (goodsItem: OrderType): void => {
    let quantity = 1;
    const indexInOrder = order.findIndex(item => item.id === goodsItem.id);

    if (indexInOrder > -1) {
      quantity = order[indexInOrder].quantity + 1;
      setOrder(
        order.map(item => {
          if (item.id !== goodsItem.id) return item;

          return {
            id: item.id,
            name: item.name,
            price: item.price,
            quantity,
          };
        }),
      );
    } else {
      setOrder([
        ...order,
        {
          id: goodsItem.id,
          name: goodsItem.name,
          price: goodsItem.price,
          quantity,
        },
      ]);
    }
    setSnackOpen(true);
  };

  const removeFromOrder = (goodsItem: string): void => {
    setOrder(order.filter(item => item.id !== goodsItem));
  };

  return (
    <div className={styles.appWrapper}>
      <div className={styles.mainContent}>
        <Header handleCart={() => setCartOpen(true)} orderLen={order.length} />
        <SearchBlock
          search={search}
          handleChange={handleChange}
          products={products}
          addToOrder={addToOrder}
        />
        <Basket
          order={order}
          removeFromOrder={removeFromOrder}
          cartOpen={isCartOpen}
          closeCart={() => setCartOpen(false)}
        />
        <Snack isOpen={isSnackOpen} handleClose={() => setSnackOpen(false)} />
      </div>
    </div>
  );
};