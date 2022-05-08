import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import {GoodsItemPropsType} from "./types";
import {ReturnComponentType} from "../../../../types/ReturnComponentType";

export const GoodsItem: React.FC<GoodsItemPropsType> = ({name, price, setOrder, poster, id}): ReturnComponentType => {
    return (
        <Grid item xs={12} md={4}>
            <Card sx={{height: '100%'}}>
                <CardMedia
                    image={poster}
                    component="img"
                    alt={name}
                    title={name}
                    sx={{height: 140}}
                />
                <CardContent>
                    <Typography variant='h6' component='h5'>
                        {name}
                    </Typography>
                    <Typography variant='body1'>Цена: {price} руб.</Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant='text'
                        onClick={() =>
                            setOrder({
                                id: id,
                                name: name,
                                price: price,
                            })
                        }
                    >
                        Купить
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};
