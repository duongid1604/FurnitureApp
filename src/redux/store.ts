import {configureStore} from '@reduxjs/toolkit';
import {
  authReducer,
  exampleReducer,
  paymentReducer,
  productsReducer,
} from './reducers';

const store = configureStore({
  reducer: {
    example: exampleReducer,
    auth: authReducer,
    products: productsReducer,
    payment: paymentReducer,
  },
});

export default store;
