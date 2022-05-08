import {OrderType} from "../../../../types";

export type GoodsItemPropsType = {
    name: string
    price: number
    category:string
    setOrder: (goodsItem: OrderType) => void
    poster: string
    id:string
}