import firestore from '@react-native-firebase/firestore';
import {createAsyncThunk} from '@reduxjs/toolkit';

import {loginWithEmail, signupWithEmail} from '../../api';
import {LoginFormFields, SignupFormFields, UserType} from '../../types';

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (data: LoginFormFields, {rejectWithValue}) => {
    try {
      const res = await loginWithEmail(data);
      const userUid = res?.user.uid;
      if (!userUid) {
        return undefined;
      }

      const userRes = await firestore().collection('users').doc(userUid).get();

      return {userUid, user: userRes.data() as UserType};
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

export const signupThunk = createAsyncThunk(
  'auth/signup',
  async (data: SignupFormFields, {rejectWithValue}) => {
    try {
      const res = await signupWithEmail(data);
      const userUid = res?.user.uid;

      if (!userUid) {
        return undefined;
      }

      const newUser: UserType = {
        id: userUid,
        name: data.name,
        email: data.email,
        password: data.password,
        cart: [],
        orders: [],
        paymentMethods: [],
        reviews: [],
        shippingAddress: [],
      };

      await firestore().collection('users').doc(userUid).set(newUser);

      return {userUid, newUser};
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);
