import firestore from '@react-native-firebase/firestore';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {ProductType} from '../../types';

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
