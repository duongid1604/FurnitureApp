import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';
import {Alert} from 'react-native';

import {AuthStateProps} from '../../types';
import {loginThunk} from '../thunks/auth.thunks';

const initialState: AuthStateProps = {
  userUid: '',
  isSignedIn: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUid: (state: AuthStateProps, action) => {
      state.userUid = action.payload;
      state.isSignedIn = true;
      state.isLoading = false;
    },
    removeUid: (state: AuthStateProps) => {
      AsyncStorage.removeItem('userUid');
      state.userUid = '';
      state.isSignedIn = false;
      state.isLoading = false;
    },
    enableLoading: (state: AuthStateProps) => {
      state.isLoading = true;
    },
    disableLoading: (state: AuthStateProps) => {
      state.isLoading = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginThunk.pending, state => {
        state.isLoading = true;
        state.isSignedIn = false;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        if (action.payload) {
          state.userUid = action.payload;
          AsyncStorage.setItem('userUid', action.payload);
          state.isSignedIn = true;
        }
        state.isLoading = false;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isSignedIn = false;
        Alert.alert('Sign in failed', action.payload as string);
      });
  },
});

export const {addUid, removeUid, enableLoading, disableLoading} =
  authSlice.actions;

export default authSlice.reducer;
