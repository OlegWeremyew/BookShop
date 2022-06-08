import { GoodsType } from '../data/types';
import { InferActionTypes } from '../../types';
import { appAction } from '../appAction';

export type InitialAppStateType = {
  books: GoodsType[];
  search: string;
  searchList: GoodsType[];
};

export type ActionAppReducerType = InferActionTypes<typeof appAction>;
