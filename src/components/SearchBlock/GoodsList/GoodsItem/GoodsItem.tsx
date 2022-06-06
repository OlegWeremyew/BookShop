import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import { GoodsItemPropsType } from './types';
import { ReturnComponentType } from '../../../../types/ReturnComponentType';

export const GoodsItem: React.FC<GoodsItemPropsType> = ({
  name,
  price,
  setOrder,
  poster,
  id,
}): ReturnComponentType => (
  <Grid item xs={12} md={4}>
    <Card sx={{ height: '100%' }}>
      <CardMedia
        image={poster}
        component="img"
        alt={name}
        title={name}
        sx={{ height: 140 }}
      />
      <CardContent>
        <Typography variant="h6" component="h5">
          {name}
        </Typography>
        <Typography variant="body1">Цена: {price} руб.</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="text"
          onClick={() =>
            setOrder({
              id,
              name,
              price,
            })
          }
        >
          Купить
        </Button>
      </CardActions>
    </Card>
  </Grid>
);
