import { ADD_BOOK_IN_BASKET_LIST, SET_FILTER_VALUE, SET_SEARCH_LIST } from '../constants';
import { GoodsType } from '../data/types';
import { OrderType } from '../../../components/types';

export const appAction = {
  setFilterValue(filter: string) {
    return {
      type: SET_FILTER_VALUE,
      payload: {
        filter,
      },
    };
  },
  setSearchList(searchList: GoodsType[]) {
    return {
      type: SET_SEARCH_LIST,
      payload: {
        searchList,
      },
    };
  },
  addBookInBasketList(book: OrderType[]) {
    return {
      type: ADD_BOOK_IN_BASKET_LIST,
      payload: {
        book,
      },
    };
  },
  deleteBookFromBasketList(bookID: string) {
    return {
      type: ADD_BOOK_IN_BASKET_LIST,
      payload: {
        bookID,
      },
    };
  },
};
