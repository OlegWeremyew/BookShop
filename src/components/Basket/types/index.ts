import { OrderType } from '../../types';

export type BasketPropsType = {
  cartOpen: boolean;
  closeCart: any;
  order: OrderType[];
  removeFromOrder: (goodsItem: string) => void;
  cleanOrderList: () => void;
};
