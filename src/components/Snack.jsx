import React from 'react';
import {Alert, Snackbar} from "@material-ui/core";

const Snack = ({isOpen, handleClose}) => {
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

export default Snack;