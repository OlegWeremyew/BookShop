import { ActionAppReducerType, InitialAppStateType } from '../types';
import { goods } from '../data';
import { OrderType } from '../../../components/types';

export const initialAppState = {
  books: goods,
  order: [] as OrderType[],
};

export const appReducer = (
  state: InitialAppStateType = initialAppState,
  action: ActionAppReducerType,
): InitialAppStateType => {
  switch (action.type) {
    /* case DELETE_BOOK_IN_BASKET:
      return {
        ...state,
        order: state.order.filter(item => item.id !== action.payload.bookID),
      }; */
    default:
      return state;
  }
};
