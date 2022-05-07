import React from 'react';

import {Grid} from "@material-ui/core";
import {GoodsItem} from "./GoodsItem";
import {GoodsListPropsType} from "./types";

export const GoodsList: React.FC<GoodsListPropsType> = ({products, setOrder}) => {
    return (
        <Grid container spacing={2}>
            {
                products.map((item) => (
                    <GoodsItem key={item.id} setOrder={setOrder} {...item} />
                ))
            }
        </Grid>
    );
};
