import { OrderType } from '../../../types';
import { GoodsType } from '../../../../redux/appReducer/data/types';

export type GoodsListPropsType = {
  products: GoodsType[];
  setOrder: (goodsItem: OrderType) => void;
};
