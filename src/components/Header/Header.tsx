import React from 'react';
import { AppBar, Badge, IconButton, Toolbar, Typography } from '@material-ui/core';
import { ShoppingBasket } from '@material-ui/icons';
import { HeaderPropsType } from './types';
import { ReturnComponentType } from '../../types/ReturnComponentType';

export const Header: React.FC<HeaderPropsType> = ({
  handleCart,
  orderLen,
}): ReturnComponentType => (
  <AppBar position="static">
    <Toolbar>
      <Typography
        variant="h6"
        component="span"
        sx={{
          flexGrow: 1,
          fontFamily: 'Fredoka',
          fontWeight: 600,
        }}
      >
        Book shop 📚
      </Typography>
      <IconButton color="inherit" onClick={handleCart}>
        <Badge color="secondary" badgeContent={orderLen}>
          <ShoppingBasket />
        </Badge>
      </IconButton>
    </Toolbar>
  </AppBar>
);
