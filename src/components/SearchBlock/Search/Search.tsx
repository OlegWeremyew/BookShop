import { TextField } from '@material-ui/core';
import React from 'react';
import { SearchPropsType } from './types';
import { ReturnComponentType } from '../../../types/ReturnComponentType';

export const Search: React.FC<SearchPropsType> = ({
  value,
  handleChange,
}): ReturnComponentType => (
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
