import {createSlice} from '@reduxjs/toolkit';
import {ProductStateProps} from '../../types';
import {fetchProducts} from '../thunks/product.thunk';

const initialState: ProductStateProps = {
  loading: false,
  products: [],
  error: '',
  nextPage: 1,
  field: 'popular',
  type: 3,
  condition: '>',
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    clear: state => {
      state.products = [];
      state.nextPage = 1;
    },
    loadMore: state => {
      state.nextPage += 1;
    },
    chooseCategory: (state, action) => {
      switch (action.payload) {
        case 0:
          state.field = 'popular';
          state.condition = '>';
          state.type = 3;
          break;
        case 1:
          state.field = 'category';
          state.condition = '==';
          state.type = 'chair';
          break;
        case 2:
          state.field = 'category';
          state.condition = '==';
          state.type = 'table';
          break;
        case 3:
          state.field = 'category';
          state.condition = '==';
          state.type = 'armchair';
          break;
        case 4:
          state.field = 'category';
          state.condition = '==';
          state.type = 'bed';
          break;

        default:
          break;
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = '';
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});

export const {clear, loadMore, chooseCategory} = productSlice.actions;

export default productSlice.reducer;
