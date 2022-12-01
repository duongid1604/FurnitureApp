import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ProductStateProps, ProductType, WhereFilterOp} from '../../types';
import firestore from '@react-native-firebase/firestore';

const initialState: ProductStateProps = {
  loading: false,
  products: [],
  isFavourite: false,
  error: '',
  nextPage: 1,
  field: 'popular',
  type: 0,
  condition: '>',
  cart: [],
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({
    field,
    condition,
    type,
  }: {
    field: string;
    condition: WhereFilterOp;
    type: string | number;
  }) => {
    const data: ProductType[] = [];

    const response = await firestore()
      .collection('products')
      .where(field, condition, type)
      .get();
    response.forEach(querySnapshot =>
      data.push({
        ...(querySnapshot.data() as ProductType),
        id: querySnapshot.id,
      }),
    );
    return data;
  },
);
export const updateProducts = createAsyncThunk(
  'products/updateProducts',
  async (body: ProductType) => {
    await firestore()
      .collection('users')
      .doc('C5jzDdJTGDbxTtJywxSOeCIjglr2')
      .update({
        cart: body,
      });
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
    chooseCategory: (state, action) => {
      switch (action.payload) {
        case 0:
          state.products = [];
          state.field = 'popular';
          state.condition = '>';
          state.type = 0;
          break;
        case 1:
          state.products = [];
          state.field = 'category';
          state.condition = '==';
          state.type = 'chair';
          break;
        case 2:
          state.products = [];
          state.field = 'category';
          state.condition = '==';
          state.type = 'table';
          break;
        case 3:
          state.products = [];
          state.field = 'category';
          state.condition = '==';
          state.type = 'armchair';
          break;
        case 4:
          state.products = [];
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
