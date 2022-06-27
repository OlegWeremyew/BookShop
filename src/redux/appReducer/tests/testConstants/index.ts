import { OrderType } from 'components/types';
import { GoodsType } from 'redux/appReducer/data/types';

export const goodsTest: GoodsType[] = [
  {
    id: 'js01',
    category: 'education',
    name: 'Дэвид Флэнаган. JavaScript Карманный справочник',
    poster:
      'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    price: 750,
  },
  {
    id: 'js02',
    category: 'education',
    name: 'Дэвид Флэнаган. JavaScript Подробное руководство',
    poster:
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    price: 1450,
  },
  {
    id: 'js03',
    category: 'education',
    name: 'Алекс Бэнкс и Ева Порселло. React и Redux',
    poster:
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
    price: 950,
  },
];

export const basketTest: OrderType[] = [
  {
    id: 'js01',
    name: 'Дэвид Флэнаган. JavaScript Карманный справочник',
    price: 750,
    quantity: 1,
  },
  {
    id: 'js02',
    name: 'Дэвид Флэнаган. JavaScript Подробное руководство',
    price: 1450,
    quantity: 2,
  },
];
