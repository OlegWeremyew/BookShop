import {GoodsType} from "../../../data/goods";
import {OrderType} from "../../types";

export type GoodsListPropsType = {
    products: GoodsType[]
    setOrder: (goodsItem: OrderType) => void
}