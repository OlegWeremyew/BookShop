import { Button, ButtonGroup, IconButton, ListItem, Typography } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React from 'react';
import { BasketItemPropsType } from './types';
import { ReturnComponentType } from '../../../types/ReturnComponentType';
import { useDispatch } from 'react-redux';
import { appAction } from '../../../redux/appReducer';
import styles from './BasketItem.module.scss';

export const BasketItem: React.FC<BasketItemPropsType> = ({
  removeFromOrder,
  id,
  name,
  price,
  quantity,
}): ReturnComponentType => {
  const INC = quantity + 1;
  const DEC = quantity - 1;

  const dispatch = useDispatch();

  const decQuantity = (bookID: string, quantityINC: number): void => {
    dispatch(appAction.decrementBookQuantityInBasketList(bookID, quantityINC));
  };

  const incQuantity = (bookID: string, quantityDEC: number): void => {
    dispatch(appAction.incrementBookQuantityInBasketList(bookID, quantityDEC));
  };

  return (
    <ListItem>
      <div className={styles.container}>
        <Typography variant="body1">
          {name} {price}руб x{quantity}
        </Typography>
        <ButtonGroup
          className={styles.buttonGroup}
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button onClick={() => incQuantity(id, INC)} color="success">
            Увеличить +1
          </Button>
          <Button onClick={() => decQuantity(id, DEC)} color="error">
            Уменьшить -1
          </Button>
        </ButtonGroup>
      </div>
      <IconButton onClick={() => removeFromOrder(id)}>
        <Close />
      </IconButton>
    </ListItem>
  );
};
