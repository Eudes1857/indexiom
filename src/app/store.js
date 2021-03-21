import { configureStore } from '@reduxjs/toolkit';
import BasketReducer from "../features/reducers/BasketSlice"
import ProductViewReducer from "../features/reducers/ProductViewSlice"

export default configureStore({
  reducer: {
    baskets: BasketReducer,
    product: ProductViewReducer
  }, 
});