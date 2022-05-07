import {ChangeEvent, useState} from 'react';
import {goods, GoodsType} from '../data/goods';
import {Container} from "@material-ui/core";
import {EMPTY_STRING} from "../constants";
import {OrderType} from "./types";
import {Search} from "./Search";
import {Snack} from "./Snack";
import {Header} from "./Header";
import {GoodsList} from "./GoodsList";
import {Basket} from "./Basket";

export const App = () => {
    const [order, setOrder] = useState<OrderType[]>([]);
    const [search, setSearch] = useState<string>(EMPTY_STRING);
    const [products, setProducts] = useState<GoodsType[]>(goods);
    const [isCartOpen, setCartOpen] = useState<boolean>(false);
    const [isSnackOpen, setSnackOpen] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.value) {
            setProducts(goods);
            setSearch(EMPTY_STRING);
            return;
        }
        setSearch(e.target.value);
        setProducts(
            products.filter((good) =>
                good.name.toLowerCase().includes(e.target.value.toLowerCase())
            ))
    };

    const addToOrder = (goodsItem: OrderType) => {
        let quantity = 1;
        const indexInOrder = order.findIndex(
            (item) => item.id === goodsItem.id
        );

        if (indexInOrder > -1) {
            quantity = order[indexInOrder].quantity + 1;
            setOrder(order.map((item) => {
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
                ],
            );
        }

        setSnackOpen(true)

    };

    const removeFromOrder = (goodsItem: string) => {
        setOrder(order.filter((item) => item.id !== goodsItem));
    };

    return (
        <div style={{backgroundColor: '#e8ded5'}}>
            <div style={{paddingBottom: '40px'}}>
                <Header
                    handleCart={() => setCartOpen(true)}
                    orderLen={order.length}
                />
                <Container sx={{mt: '1rem',}}>
                    <Search
                        value={search}
                        handleChange={handleChange}
                    />
                    <GoodsList
                        products={products}
                        setOrder={addToOrder}
                    />
                </Container>
                <Basket
                    order={order}
                    removeFromOrder={removeFromOrder}
                    cartOpen={isCartOpen}
                    closeCart={() => setCartOpen(false)}
                />
                <Snack
                    isOpen={isSnackOpen}
                    handleClose={() => setSnackOpen(false)}
                />
            </div>
        </div>
    );
}