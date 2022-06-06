import { IconButton, ListItem, Typography } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React from 'react';
import { BasketItemPropsType } from './types';
import { ReturnComponentType } from '../../../types/ReturnComponentType';

export const BasketItem: React.FC<BasketItemPropsType> = ({
  removeFromOrder,
  id,
  name,
  price,
  quantity,
}): ReturnComponentType => (
  <ListItem>
    <Typography variant="body1">
      {name} {price}руб x{quantity}
    </Typography>
    <IconButton onClick={() => removeFromOrder(id)}>
      <Close />
    </IconButton>
  </ListItem>
);
