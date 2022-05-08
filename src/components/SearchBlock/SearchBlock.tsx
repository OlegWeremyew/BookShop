import React from 'react';
import {Container} from "@material-ui/core";
import {Search} from "./Search";
import {GoodsList} from "./GoodsList";
import {ReturnComponentType} from "../../types/ReturnComponentType";
import {SearchBlockPropsType} from "./types";

export const SearchBlock: React.FC<SearchBlockPropsType> = ({
                                                                search,
                                                                handleChange,
                                                                products,
                                                                addToOrder
                                                            }): ReturnComponentType => {
    return (
        <Container sx={{mt: '1rem',}}>
            <Search
                value={search}
                handleChange={handleChange}
            />
            <GoodsList
                products={products}
                setOrder={addToOrder}
            />
        </Container>
    );
};
