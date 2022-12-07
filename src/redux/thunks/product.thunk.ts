import firestore from '@react-native-firebase/firestore';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {ProductType, ReviewType, WhereFilterOp} from '../../types';

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

export const updateReview = createAsyncThunk(
  'products/updateReview',
  async ({id, review}: {id: string; review: ReviewType}) => {
    const response = await firestore()
      .collection('products')
      .doc(id)
      .update({review: review});

    return response;
  },
);
