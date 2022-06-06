import { OrderType } from '../../../types';
import { GoodsType } from '../../../../data/types';

export type GoodsListPropsType = {
  products: GoodsType[];
  setOrder: (goodsItem: OrderType) => void;
};
