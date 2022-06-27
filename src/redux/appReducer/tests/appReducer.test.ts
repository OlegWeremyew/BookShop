import { EMPTY_STRING } from 'constants/variables';
import { basketTest, goodsTest } from './testConstants';
import { InitialAppStateType } from 'redux/appReducer/types';
import { appAction, appReducer } from 'redux/appReducer';

const startState: InitialAppStateType = {
  books: goodsTest,
  search: EMPTY_STRING,
  searchList: goodsTest,
  basket: basketTest,
};

test('basket length should be equal 1', () => {
  const endState = appReducer(startState, appAction.deleteBookFromBasketList('js02'));

  const arrayLength: number = 1;

  expect(endState.basket.length).toBe(arrayLength);
  expect(endState.basket[0].id).toBe('js01');
});

test('basket length should be equal 0', () => {
  const endState1 = appReducer(startState, appAction.deleteBookFromBasketList('js02'));
  const endState2 = appReducer(endState1, appAction.deleteBookFromBasketList('js01'));

  const arrayLength: number = 0;

  expect(endState2.basket.length).toBe(arrayLength);
});

test('basket should be empty', () => {
  const endState = appReducer(startState, appAction.cleanBasketList());

  const arrayLength: number = 0;

  expect(endState.basket.length).toBe(arrayLength);
});

test('search value should be equal "авт"', () => {
  const endState = appReducer(startState, appAction.setFilterValue('авт'));

  expect(endState.search).toBe('авт');
});

test('searchList length should be equal 2', () => {
  const searchList = startState.searchList.filter(item =>
    item.name.includes('JavaScript'),
  );
  const endState2 = appReducer(startState, appAction.setSearchList(searchList));

  expect(endState2.searchList.length).toBe(2);
  expect(endState2.searchList[0].id).toBe('js01');
  expect(endState2.searchList[1].id).toBe('js02');
});
