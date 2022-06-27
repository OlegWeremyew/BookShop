import { GoodsType } from 'redux/appReducer/data/types';
import { OrderType } from 'components/types';

export type GoodsListPropsType = {
  products: GoodsType[];
  setOrder: (goodsItem: OrderType) => void;
};
