import {
  ADD_BOOK_IN_BASKET_LIST,
  CLEAN_BASKET_LIST,
  DELETE_BOOK_FROM_BASKET_LIST,
  SET_FILTER_VALUE,
  SET_SEARCH_LIST,
} from '../constants';
import { GoodsType } from '../data/types';
import { OrderType } from '../../../components/types';

export const appAction = {
  setFilterValue(filter: string) {
    return {
      type: SET_FILTER_VALUE,
      payload: {
        filter,
      },
    } as const;
  },
  setSearchList(searchList: GoodsType[]) {
    return {
      type: SET_SEARCH_LIST,
      payload: {
        searchList,
      },
    } as const;
  },
  addBookInBasketList(book: OrderType[]) {
    return {
      type: ADD_BOOK_IN_BASKET_LIST,
      payload: {
        book,
      },
    } as const;
  },
  deleteBookFromBasketList(bookID: string) {
    return {
      type: DELETE_BOOK_FROM_BASKET_LIST,
      payload: {
        bookID,
      },
    } as const;
  },
  cleanBasketList() {
    return {
      type: CLEAN_BASKET_LIST,
    } as const;
  },
};
