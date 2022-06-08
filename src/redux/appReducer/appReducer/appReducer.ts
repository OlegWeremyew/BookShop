import { InitialAppStateType } from '../types';
import { goods } from '../data';
import { SET_FILTER_VALUE, SET_SEARCH_LIST } from '../constants';
import { EMPTY_STRING } from '../../../constants';

export const initialAppState = {
  books: goods,
  search: EMPTY_STRING,
  searchList: goods,
};

export const appReducer = (
  state: InitialAppStateType = initialAppState,
  action: any,
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
    default:
      return state;
  }
};
