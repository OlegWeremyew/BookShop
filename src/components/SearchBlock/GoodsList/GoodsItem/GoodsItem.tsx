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
import styles from './GoodItem.module.scss';

export const GoodsItem: React.FC<GoodsItemPropsType> = ({
  name,
  price,
  setOrder,
  poster,
  id,
}): ReturnComponentType => (
  <Grid item xs={12} md={4}>
    <Card className={styles.item}>
      <CardMedia
        image={poster}
        component="img"
        alt={name}
        title={name}
        sx={{ height: 140 }}
      />
      <CardContent className={styles.cardContent}>
        <Typography className={styles.name} variant="h6" component="h5">
          {name}
        </Typography>
        <Typography className={styles.price} variant="body1">
          Цена: {price} руб.
        </Typography>
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
