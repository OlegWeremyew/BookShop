import { AppRootStateType } from '../redux/store';
import { GoodsType } from '../redux/appReducer/data/types';

export const getAllBooksAppSelector = (state: AppRootStateType): GoodsType[] =>
  state.app.books;

export const getSearchValueAppSelector = (state: AppRootStateType): string =>
  state.app.search;

export const getSearchListAppSelector = (state: AppRootStateType): GoodsType[] =>
  state.app.searchList;
