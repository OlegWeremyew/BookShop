import React from 'react';
import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import {ShoppingBasket} from "@material-ui/icons";
import {BasketItem} from "./BasketItem";
import {BasketPropsType} from "./types";
import {ReturnComponentType} from "../../types/ReturnComponentType";
import {EMPTY_ARRAY} from "../../constants";

export const Basket: React.FC<BasketPropsType> = ({
                                                      cartOpen,
                                                      closeCart = Function.prototype,
                                                      order = EMPTY_ARRAY,
                                                      removeFromOrder
                                                  }): ReturnComponentType => {
    return (
        <Drawer
            anchor='right'
            open={cartOpen}
            onClose={closeCart}
        >
            <List sx={{width: '400px'}}>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket/>
                    </ListItemIcon>
                    <ListItemText primary="Корзина"/>
                </ListItem>
                <Divider/>

                {!order.length ? (
                    <ListItem>Корзина пуста</ListItem>
                ) : (
                    <>
                        {order.map(item =>
                            <BasketItem
                                key={item.name}
                                removeFromOrder={removeFromOrder}
                                {...item}
                            />
                        )}
                        <Divider/>
                        <Typography sx={{
                            fontWeight: 700,
                            ml: '15px'
                        }}>
                            Общая стоимость: {' '}
                            {order.reduce((acc, item) => {
                                return acc + item.price * item.quantity
                            }, 0)}{' '}
                        </Typography>
                    </>
                )}
            </List>
        </Drawer>
    );
};