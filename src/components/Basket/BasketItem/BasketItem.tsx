import {IconButton, ListItem, Typography} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import React from "react";
import {BasketItemPropsType} from "./types";

export const BasketItem: React.FC<BasketItemPropsType> = ({removeFromOrder, id, name, price, quantity}) => {
    return (
        <ListItem>
            <Typography variant='body1'>
                {name} {price}руб x{quantity}
            </Typography>
            <IconButton onClick={() => removeFromOrder(id)}>
                <Close/>
            </IconButton>
        </ListItem>
    );
};