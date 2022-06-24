import { ChangeEvent } from 'react';
import { OrderType } from '../../types';
import { GoodsType } from '../../../redux/appReducer/data/types';

export type SearchBlockPropsType = {
  search: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  products: GoodsType[];
  addToOrder: (goodsItem: OrderType) => void;
};