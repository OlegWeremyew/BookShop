import React, { FC } from 'react';
import { Container } from '@material-ui/core';
import { Search } from './Search';
import { GoodsList } from './GoodsList';
import { SearchBlockPropsType } from './types';

export const SearchBlock: FC<SearchBlockPropsType> = ({
  search,
  handleChange,
  products,
  addToOrder,
}) => (
  <Container sx={{ mt: '1rem' }}>
    <Search value={search} handleChange={handleChange} />
    <GoodsList products={products} setOrder={addToOrder} />
  </Container>
);
