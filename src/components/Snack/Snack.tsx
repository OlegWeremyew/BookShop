import React, { FC } from 'react';
import { Alert, Snackbar } from '@material-ui/core';
import { SnackPropsType } from './types';

export const Snack: FC<SnackPropsType> = ({ isOpen, handleClose }) => (
  <Snackbar open={isOpen} onClose={handleClose} autoHideDuration={3000}>
    <Alert severity="success">Товар добавлен в корзину</Alert>
  </Snackbar>
);
