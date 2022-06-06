export type BasketItemPropsType = {
  removeFromOrder: (goodsItem: string) => void;
  id: string;
  name: string;
  price: number;
  quantity?: any;
};
