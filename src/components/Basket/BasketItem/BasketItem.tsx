import { IconButton, ListItem, Typography } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React, { FC } from 'react';
import { BasketItemPropsType } from './types';
import { useDispatch } from 'react-redux';
import { appAction } from '../../../redux/appReducer';
import styles from './BasketItem.module.scss';
import { ChangeQuantityBlock } from './ChangeQuantityBlock';

export const BasketItem: FC<BasketItemPropsType> = ({ id, name, price, quantity }) => {
  const dispatch = useDispatch();

  const removeFromOrder = (goodsItem: string): void => {
    dispatch(appAction.deleteBookFromBasketList(goodsItem));
  };

  return (
    <ListItem>
      <div className={styles.container}>
        <Typography variant="body1" className={styles.text}>
          {name}. Цена:{' '}
          <b>
            {price} руб x{quantity}
          </b>
        </Typography>
        <ChangeQuantityBlock id={id} quantity={quantity} />
      </div>
      <IconButton onClick={() => removeFromOrder(id)}>
        <Close />
      </IconButton>
    </ListItem>
  );
};
