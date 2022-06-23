import { ChangeEvent, useState } from 'react';
import { EMPTY_STRING } from '../constants';
import { OrderType } from './types';
import { Snack } from './Snack';
import { Header } from './Header';
import { Basket } from './Basket';
import { ReturnComponentType } from '../types/ReturnComponentType';
import { SearchBlock } from './SearchBlock';
import styles from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllBooksAppSelector,
  getSearchListAppSelector,
  getSearchValueAppSelector,
} from '../selectors/appSelectors';
import { appAction } from '../redux/appReducer';
import { useGetHistoryList } from '../utils';
import { Button } from '@material-ui/core';
import { Home } from '@material-ui/icons';

export const App = (): ReturnComponentType => {
  const dispatch = useDispatch();

  const bookList = useSelector(getAllBooksAppSelector);
  const searchList = useSelector(getSearchListAppSelector);
  const search = useSelector(getSearchValueAppSelector);
  const basketList = useGetHistoryList();

  const [isCartOpen, setCartOpen] = useState<boolean>(false);
  const [isSnackOpen, setSnackOpen] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (!e.target.value) {
      dispatch(appAction.setSearchList(bookList));
      dispatch(appAction.setFilterValue(EMPTY_STRING));
      return;
    }
    const newBookList = searchList.filter(good =>
      good.name.toLowerCase().includes(e.target.value.toLowerCase()),
    );
    dispatch(appAction.setFilterValue(e.target.value));
    dispatch(appAction.setSearchList(newBookList));
  };

  const addToOrder = (goodsItem: OrderType): void => {
    let quantity = 1;
    const indexInOrder = basketList.findIndex(item => item.id === goodsItem.id);

    if (indexInOrder > -1) {
      quantity = basketList[indexInOrder].quantity + 1;
      const orderList = basketList.map(item => {
        if (item.id !== goodsItem.id) return item;

        return {
          id: item.id,
          name: item.name,
          price: item.price,
          quantity,
        };
      });
      dispatch(appAction.addBookInBasketList(orderList));
    } else {
      const orderList = [
        ...basketList,
        {
          id: goodsItem.id,
          name: goodsItem.name,
          price: goodsItem.price,
          quantity,
        },
      ];
      dispatch(appAction.addBookInBasketList(orderList));
    }
    setSnackOpen(true);
  };

  const removeFromOrder = (goodsItem: string): void => {
    dispatch(appAction.deleteBookFromBasketList(goodsItem));
  };

  const cleanOrderList = (): void => {
    dispatch(appAction.cleanBasketList());
  };

  const returnUp = (): void => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles.appWrapper}>
      <div className={styles.mainContent}>
        <Header handleCart={() => setCartOpen(true)} orderLen={basketList.length} />
        <SearchBlock
          search={search}
          handleChange={handleChange}
          products={searchList}
          addToOrder={addToOrder}
        />
        <Basket
          order={basketList}
          cleanOrderList={cleanOrderList}
          removeFromOrder={removeFromOrder}
          cartOpen={isCartOpen}
          closeCart={() => setCartOpen(false)}
        />
        <Snack isOpen={isSnackOpen} handleClose={() => setSnackOpen(false)} />
        <Button onClick={returnUp} variant="contained">
          На верх страницы <Home style={{ color: 'white', paddingLeft: '10px' }} />
        </Button>
      </div>
    </div>
  );
};
