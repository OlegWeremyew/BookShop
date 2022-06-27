import { AppRootStateType } from 'redux/store';
import { GoodsType } from 'redux/appReducer/data/types';
import { OrderType } from 'components/types';

export const getAllBooksAppSelector = (state: AppRootStateType): GoodsType[] =>
  state.app.books;

export const getBasketListAppSelector = (state: AppRootStateType): OrderType[] =>
  state.app.basket;

export const getSearchValueAppSelector = (state: AppRootStateType): string =>
  state.app.search;

export const getSearchListAppSelector = (state: AppRootStateType): GoodsType[] =>
  state.app.searchList;
