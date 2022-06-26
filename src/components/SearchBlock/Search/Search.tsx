import { TextField } from '@material-ui/core';
import React, { FC } from 'react';
import { SearchPropsType } from './types';

export const Search: FC<SearchPropsType> = ({ value, handleChange }) => (
  <TextField
    label="search"
    variant="standard"
    fullWidth
    type="search"
    value={value}
    onChange={handleChange}
    sx={{ mb: '1.5rem' }}
  />
);
