import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import productReducer from './productReducer'; // Assuming you have a productReducer

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer, // Include other reducers as needed
});

export default rootReducer;