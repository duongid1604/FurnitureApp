import {createAsyncThunk} from '@reduxjs/toolkit';
import {loginWithEmail} from '../../api';
import {LoginFormFields} from '../../types';

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (data: LoginFormFields, {rejectWithValue}) => {
    try {
      const res = await loginWithEmail(data);
      return res?.user.uid;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);
