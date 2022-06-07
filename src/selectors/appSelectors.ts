import { AppRootStateType } from '../redux/store';
import { GoodsType } from '../redux/appReducer/data/types';
import { OrderType } from '../components/types';

export const getAllBooksAppSelector = (state: AppRootStateType): GoodsType[] =>
  state.app.books;

export const getBasketCurrentValueAppSelector = (state: AppRootStateType): OrderType[] =>
  state.app.order;
