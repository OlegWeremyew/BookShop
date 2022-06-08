import { SET_FILTER_VALUE, SET_SEARCH_LIST } from '../constants';
import { GoodsType } from '../data/types';

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
};
