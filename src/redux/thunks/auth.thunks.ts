import {createAsyncThunk} from '@reduxjs/toolkit';

import {
  createUserWithUid,
  getUserByUid,
  loginWithEmail,
  resetPasswordWithEmail,
  signinWithFacebook,
  signinWithGoogle,
  signupWithEmail,
} from '../../api';
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

      const userRes = await getUserByUid(userUid);

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
        // password: data.password,
        cart: [],
        orders: [],
        paymentMethods: [],
        reviews: [],
        shippingAddress: [],
      };

      await createUserWithUid(userUid, newUser);

      return {userUid, newUser};
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

export const loginWithGoogleThunk = createAsyncThunk(
  'auth/loginWithGoogle',
  async (_, {rejectWithValue}) => {
    try {
      const res = await signinWithGoogle();
      if (!res) {
        return undefined;
      }
      const googleUser = res.user;
      const userUid = googleUser.uid;
      if (!userUid) {
        return undefined;
      }
      const userRes = await getUserByUid(userUid);
      const userData = userRes.data() as UserType;
      console.log(userData);
      let user: UserType;
      if (userData) {
        user = userData;
      } else {
        user = {
          id: userUid,
          name: googleUser.displayName || 'Noname',
          email: googleUser.email || 'no email',
          cart: [],
          orders: [],
          paymentMethods: [],
          reviews: [],
          shippingAddress: [],
        };
        await createUserWithUid(userUid, user);
      }
      return {userUid, user};
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

export const loginWithFacebookThunk = createAsyncThunk(
  'auth/loginWithFacebook',
  async (_, {rejectWithValue}) => {
    try {
      const res = await signinWithFacebook();
      if (!res) {
        return undefined;
      }
      const facebookUser = res.user;
      const userUid = facebookUser.uid;
      if (!userUid) {
        return undefined;
      }
      const userRes = await getUserByUid(userUid);
      const userData = userRes.data() as UserType;
      console.log('userData: ', userData);
      let user: UserType;
      if (userData) {
        user = userData;
      } else {
        user = {
          id: userUid,
          name: facebookUser.displayName || 'Noname',
          email: facebookUser.email || 'no email',
          cart: [],
          orders: [],
          paymentMethods: [],
          reviews: [],
          shippingAddress: [],
        };
        await createUserWithUid(userUid, user);
      }
      return {userUid, user};
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

export const resetPasswordWithEmailThunk = createAsyncThunk(
  'auth/resetPasswordWithEmail',
  async (email: string, {rejectWithValue}) => {
    try {
      const res = await resetPasswordWithEmail(email);
      return res;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);
