import { OrderType } from 'components/types';
import { GoodsType } from 'redux/appReducer/data/types';
import { InferActionTypes } from 'redux/types';
import { appAction } from 'redux/appReducer';

export type InitialAppStateType = {
  books: GoodsType[];
  search: string;
  searchList: GoodsType[];
  basket: OrderType[];
};

export type ActionAppReducerType = InferActionTypes<typeof appAction>;
