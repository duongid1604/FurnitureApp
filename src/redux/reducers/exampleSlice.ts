import {ExampleStateProps} from '../../types/redux.types';
import {createSlice} from '@reduxjs/toolkit';

const initialState: ExampleStateProps = {
  value: 0,
};

export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    increase: (state: ExampleStateProps) => {
      state.value++;
    },
    decrease: (state: ExampleStateProps) => {
      state.value--;
    },
  },
});

export const {increase, decrease} = exampleSlice.actions;

export default exampleSlice.reducer;
