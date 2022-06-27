import { OrderType } from 'components/types';

export type BasketPropsType = {
  cartOpen: boolean;
  closeCart: any;
  order: OrderType[];
};
