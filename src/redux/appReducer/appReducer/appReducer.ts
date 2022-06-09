import { ActionAppReducerType, InitialAppStateType } from '../types';
import { goods } from '../data';
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
import { EMPTY_STRING } from '../../../constants';
import { OrderType } from '../../../components/types';

export const initialAppState = {
  books: goods,
  search: EMPTY_STRING,
  searchList: goods,
  basket: [] as OrderType[],
};

export const appReducer = (
  state: InitialAppStateType = initialAppState,
  action: ActionAppReducerType,
): InitialAppStateType => {
  switch (action.type) {
    case SET_FILTER_VALUE: {
      return {
        ...state,
        search: action.payload.filter,
      };
    }
    case SET_SEARCH_LIST: {
      return {
        ...state,
        searchList: action.payload.searchList,
      };
    }
    case ADD_BOOK_IN_BASKET_LIST: {
      return {
        ...state,
        basket: action.payload.book,
      };
    }
    case DELETE_BOOK_FROM_BASKET_LIST: {
      return {
        ...state,
        basket: state.basket.filter(item => item.id !== action.payload.bookID),
      };
    }
    case CLEAN_BASKET_LIST: {
      return {
        ...state,
        basket: [],
      };
    }
    case INCREMENT_BOOK_QUANTITY_IN_BASKET_LIST: {
      return {
        ...state,
        basket: state.basket.map(item =>
          item.id === action.payload.bookID
            ? { ...item, quantity: action.payload.quantityINC }
            : item,
        ),
      };
    }
    case DECREMENT_BOOK_QUANTITY_IN_BASKET_LIST: {
      return {
        ...state,
        basket: state.basket.map(item =>
          item.id === action.payload.bookID && item.quantity > 0
            ? { ...item, quantity: action.payload.quantityDEC }
            : item,
        ),
      };
    }
    case SET_HISTORY_FROM_SESSION_STORAGE: {
      return {
        ...state,
        basket: action.payload.basketList,
      };
    }
    default:
      return state;
  }
};
