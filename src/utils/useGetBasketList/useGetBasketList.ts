import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getBasketListAppSelector } from 'selectors/appSelectors';
import { OrderType } from 'components/types';
import { appAction } from 'redux/appReducer';

export const useGetHistoryList = (): OrderType[] => {
  const dispatch = useDispatch();

  const currentBasketList = useSelector(getBasketListAppSelector);

  useEffect(() => {
    const currentBasketListAsString = localStorage.getItem('currentBasketList');
    currentBasketListAsString &&
      dispatch(
        appAction.setHistoryFromSessionStorage(JSON.parse(currentBasketListAsString)),
      );
  }, []);

  useEffect(() => {
    localStorage.setItem('currentBasketList', JSON.stringify(currentBasketList));
  }, [currentBasketList]);
  return currentBasketList;
};
