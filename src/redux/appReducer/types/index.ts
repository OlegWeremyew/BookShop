import { GoodsType } from '../data/types';
import { InferActionTypes } from '../../types';
import { appAction } from '../appAction';
import { OrderType } from '../../../components/types';

export type InitialAppStateType = {
  books: GoodsType[];
  search: string;
  searchList: GoodsType[];
  basket: OrderType[];
};

export type ActionAppReducerType = InferActionTypes<typeof appAction>;
