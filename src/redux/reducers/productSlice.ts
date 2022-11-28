import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ProductStateProps, ProductType} from '../../types';
import firestore from '@react-native-firebase/firestore';

const initialState: ProductStateProps = {
  loading: false,
  products: [],
  isFavourite: false,
  error: '',
  nextPage: 1,
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const data: ProductType[] = [];
    const response = await firestore().collection('products').get();
    response.forEach(querySnapshot =>
      data.push(querySnapshot.data() as ProductType),
    );
    return data;
  },
);

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
  },
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = [...state.products, ...action.payload];
      state.error = '';
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});

export const {clear, loadMore} = productSlice.actions;

export default productSlice.reducer;
