import {configureStore} from '@reduxjs/toolkit';
import {
  authReducer,
  exampleReducer,
  paymentReducer,
  productsReducer,
  searchReducer,
} from './reducers';

const store = configureStore({
  reducer: {
    example: exampleReducer,
    auth: authReducer,
    products: productsReducer,
    payment: paymentReducer,
    searchProducts: searchReducer,
  },
});

export default store;
