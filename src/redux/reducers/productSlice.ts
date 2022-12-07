import firestore from '@react-native-firebase/firestore';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ProductStateProps, ProductType, WhereFilterOp} from '../../types';

const initialState: ProductStateProps = {
  loading: false,
  products: [],
  isFavourite: false,
  error: '',
  nextPage: 1,
  field: 'popular',
  type: 3,
  condition: '>',
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
      data.push(querySnapshot.data() as ProductType),
    );
    return data;
  },
);

export const updateProducts = createAsyncThunk(
  'products/updateProducts',
  async ({id, popular}: {id: string; popular: number}) => {
    const response = await firestore()
      .collection('products')
      .doc(id)
      .update({popular: popular});

    return response;
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
