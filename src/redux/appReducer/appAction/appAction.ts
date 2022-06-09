import {
  ADD_BOOK_IN_BASKET_LIST,
  CLEAN_BASKET_LIST,
  DECREMENT_BOOK_QUANTITY_IN_BASKET_LIST,
  DELETE_BOOK_FROM_BASKET_LIST,
  INCREMENT_BOOK_QUANTITY_IN_BASKET_LIST,
  SET_FILTER_VALUE,
  SET_HISTORY_FROM_SESSION_STORAGE,
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
  incrementBookQuantityInBasketList(bookID: string, quantityINC: number) {
    return {
      type: INCREMENT_BOOK_QUANTITY_IN_BASKET_LIST,
      payload: {
        bookID,
        quantityINC,
      },
    } as const;
  },
  decrementBookQuantityInBasketList(bookID: string, quantityDEC: number) {
    return {
      type: DECREMENT_BOOK_QUANTITY_IN_BASKET_LIST,
      payload: {
        bookID,
        quantityDEC,
      },
    } as const;
  },
  setHistoryFromSessionStorage(basketList: OrderType[]) {
    return {
      type: SET_HISTORY_FROM_SESSION_STORAGE,
      payload: {
        basketList,
      },
    } as const;
  },
};
