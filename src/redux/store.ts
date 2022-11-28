import {configureStore} from '@reduxjs/toolkit';
import {authReducer, exampleReducer, productsReducer} from './reducers';

const store = configureStore({
  reducer: {
    example: exampleReducer,
    auth: authReducer,
    products: productsReducer,
  },
});

export default store;
