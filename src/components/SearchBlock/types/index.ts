import {ChangeEvent} from "react";
import {GoodsType} from "../../../data/goods";
import {OrderType} from "../../types";

export type SearchBlockPropsType = {
    search: string
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
    products: GoodsType[]
    addToOrder: (goodsItem: OrderType) => void
}