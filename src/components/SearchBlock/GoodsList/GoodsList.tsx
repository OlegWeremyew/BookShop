import React, { FC } from 'react';

import { Grid } from '@material-ui/core';
import { GoodsItem } from './GoodsItem';
import { GoodsListPropsType } from './types';

export const GoodsList: FC<GoodsListPropsType> = ({ products, setOrder }) => (
  <Grid container spacing={2}>
    {products.map(item => (
      <GoodsItem key={item.id} setOrder={setOrder} {...item} />
    ))}
  </Grid>
);
