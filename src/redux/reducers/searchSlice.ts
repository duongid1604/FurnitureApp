import firestore from '@react-native-firebase/firestore';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ProductType, SearchProductStateProps, WhereFilterOp} from '../../types';

const initialState: SearchProductStateProps = {
  loading: false,
  searchProducts: [],
  error: '',
  field: '',
  type: '',
  condition: '==',
};

export const fetchSearchProducts = createAsyncThunk(
  'searchProducts/fetchSearchProducts',
  async () => {
    const data: ProductType[] = [];

    const response = await firestore().collection('products').get();

    response.forEach(querySnapshot =>
      data.push({
        ...(querySnapshot.data() as ProductType),
        id: querySnapshot.id,
      }),
    );
    return data;
  },
);

const searchProductSlice = createSlice({
  name: 'searchProducts',
  initialState,
  reducers: {
    Search: (state, action) => {
      state.field = 'name';
      state.condition = '==';
      state.type = action.payload;
    },
    ClearSearch: state => {
      state.searchProducts = [];
      state.field = '';
      state.type = '';
    },
  },
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

export const {Search, ClearSearch} = searchProductSlice.actions;

export default searchProductSlice.reducer;
