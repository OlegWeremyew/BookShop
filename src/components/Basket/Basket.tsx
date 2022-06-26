import React, { FC } from 'react';
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { Delete, ShoppingBasket } from '@material-ui/icons';
import { BasketItem } from './BasketItem';
import { BasketPropsType } from './types';
import { EMPTY_ARRAY } from '../../constants';
import { appAction } from '../../redux/appReducer';
import { useDispatch } from 'react-redux';

export const Basket: FC<BasketPropsType> = ({
  cartOpen,
  closeCart = Function.prototype,
  order = EMPTY_ARRAY,
}) => {
  const dispatch = useDispatch();

  const cleanOrderList = (): void => {
    dispatch(appAction.cleanBasketList());
  };

  return (
    <Drawer anchor="right" open={cartOpen} onClose={closeCart}>
      <List>
        <ListItem>
          <ListItemIcon>
            <ShoppingBasket />
          </ListItemIcon>
          <ListItemText primary="Корзина" />
          <label htmlFor="empty_basket">
            <Typography>Очистить корзину</Typography>
          </label>
          <IconButton id="empty_basket" onClick={cleanOrderList}>
            <Delete />
          </IconButton>
        </ListItem>
        <Divider />

        {!order.length ? (
          <ListItem>Корзина пуста</ListItem>
        ) : (
          <>
            {order.map(item => (
              <BasketItem key={item.id} {...item} />
            ))}
            <Divider />
            <Typography
              sx={{
                fontWeight: 700,
                ml: '15px',
              }}
            >
              Общая стоимость:{' '}
              {order.reduce((acc, item) => acc + item.price * item.quantity, 0)}{' '}
            </Typography>
          </>
        )}
      </List>
    </Drawer>
  );
};
