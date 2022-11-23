import {configureStore} from '@reduxjs/toolkit';
import exampleReducer from './reducers/exampleSlice';

const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
});

export default store;
