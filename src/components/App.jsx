import {useState} from 'react';

import GoodsList from './GoodsList/GoodsList';
import Search from './Search/Search';

import {goods} from '../data/goods';
import Header from "./Header/Header";
import {Container} from "@material-ui/core";
import Basket from "./Basket/Basket";
import Snack from "./Snack/Snack";
import {EMPTY_STRING} from "../constants";

const App = () => {
    const [order, setOrder] = useState([]);
    const [search, setSearch] = useState(EMPTY_STRING);
    const [products, setProducts] = useState(goods);
    const [isCartOpen, setCartOpen] = useState(false);
    const [isSnackOpen, setSnackOpen] = useState(false);

    const handleChange = (e) => {
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

    const addToOrder = (goodsItem) => {
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

    const removeFromOrder = (goodsItem) => {
        setOrder(order.filter((item) => item.id !== goodsItem));
    };

    return (
        <div style={{backgroundColor: '#e8ded5'}}>
            <Header
                handleCart={() => setCartOpen(true)}
                orderLen={order.length}
            />
            <Container
                sx={{
                    mt: '1rem',
                }}
            >
                <Search
                    value={search}
                    onChange={handleChange}
                />
                <GoodsList
                    goods={products}
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
    );
}

export default App;
