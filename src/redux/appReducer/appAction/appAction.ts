import { ADD_BOOK_IN_BASKET, DELETE_BOOK_IN_BASKET } from '../constants';
import { OrderType } from '../../../components/types';

export const appAction = {
  addBookInBasket(order: OrderType[]) {
    return {
      type: ADD_BOOK_IN_BASKET,
      payload: {
        order,
      },
    };
  },
  deleteBookInBasket(bookID: string) {
    return {
      type: DELETE_BOOK_IN_BASKET,
      payload: {
        bookID,
      },
    };
  },
};
