import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
  selectedProduct: null,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    case ActionTypes.FETCH_PRODUCTS:
      return { ...state, products: action.payload };
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, selectedProduct: action.payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return { ...state, selectedProduct: null };
    default:
      return state;
  }
};