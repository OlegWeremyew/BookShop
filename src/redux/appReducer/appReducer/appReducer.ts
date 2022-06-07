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
    default:
      return state;
  }
};
