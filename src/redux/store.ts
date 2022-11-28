import {configureStore} from '@reduxjs/toolkit';
import {authReducer, exampleReducer} from './reducers';

const store = configureStore({
  reducer: {
    example: exampleReducer,
    auth: authReducer,
  },
});

export default store;
