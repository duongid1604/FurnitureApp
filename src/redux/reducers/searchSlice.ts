import {createSlice} from '@reduxjs/toolkit';
import {SearchProductStateProps} from '../../types';
import {fetchSearchProducts} from '../thunks/search.thunk';

const initialState: SearchProductStateProps = {
  loading: false,
  searchProducts: [],
  error: '',
};

const searchProductSlice = createSlice({
  name: 'searchProducts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchSearchProducts.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchSearchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.searchProducts = action.payload;
      state.error = '';
    });
    builder.addCase(fetchSearchProducts.rejected, (state, action) => {
      state.loading = false;
      state.searchProducts = [];
      state.error = action.error.message;
    });
  },
});

export default searchProductSlice.reducer;
