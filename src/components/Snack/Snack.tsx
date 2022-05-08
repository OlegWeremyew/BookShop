import React from 'react';
import {Alert, Snackbar} from "@material-ui/core";
import {SnackPropsType} from "./types";
import {ReturnComponentType} from "../../types/ReturnComponentType";

export const Snack:React.FC<SnackPropsType> = ({isOpen, handleClose}): ReturnComponentType => {
    return (
        <Snackbar
            open={isOpen}
            onClose={handleClose}
            autoHideDuration={3000}
        >
            <Alert severity="success">
                Товар добавлен в корзину
            </Alert>
        </Snackbar>
    );
};
