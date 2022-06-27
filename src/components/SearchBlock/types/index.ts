import { ChangeEvent } from 'react';
import { GoodsType } from 'redux/appReducer/data/types';
import { OrderType } from 'components/types';

export type SearchBlockPropsType = {
  search: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  products: GoodsType[];
  addToOrder: (goodsItem: OrderType) => void;
};
