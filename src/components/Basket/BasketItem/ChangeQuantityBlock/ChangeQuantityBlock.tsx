import React, { FC } from 'react';
import styles from '../BasketItem.module.scss';
import { Button, ButtonGroup } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { appAction } from '../../../../redux/appReducer';
import { ChangeQuantityType } from './types';

export const ChangeQuantityBlock: FC<ChangeQuantityType> = ({ id, quantity }) => {
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
    <ButtonGroup
      className={styles.buttonGroup}
      variant="contained"
      aria-label="outlined primary button group"
    >
      <Button
        className={styles.button}
        onClick={() => incQuantity(id, INC)}
        color="success"
      >
        Увеличить +1
      </Button>
      <Button
        className={styles.button}
        onClick={() => decQuantity(id, DEC)}
        color="error"
      >
        Уменьшить -1
      </Button>
    </ButtonGroup>
  );
};
