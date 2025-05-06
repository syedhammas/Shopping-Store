// src/redux/actions/productActions.js

export const selectedProduct = (product) => {
    return {
        type: "SELECTED_PRODUCT",
        payload: product,
    };
};

export const removeSelectedProduct = () => {
    return {
        type: "REMOVE_SELECTED_PRODUCT",
    };
};