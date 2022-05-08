import {TextField} from "@material-ui/core";
import React from "react";
import {SearchPropsType} from "./types";
import {ReturnComponentType} from "../../../types/ReturnComponentType";

export const Search: React.FC<SearchPropsType> = ({value, handleChange}): ReturnComponentType => {
    return (
        <TextField
            label='search'
            variant='standard'
            fullWidth={true}
            type='search'
            value={value}
            onChange={handleChange}
            sx={{mb: '1.5rem'}}
        />
    )
};