import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';
import {Alert} from 'react-native';

import {AuthStateProps} from '../../types';
import {
  loginThunk,
  loginWithFacebookThunk,
  loginWithGoogleThunk,
  resetPasswordWithEmailThunk,
  signupThunk,
} from '../thunks/auth.thunks';

const initialState: AuthStateProps = {
  userUid: '',
  isSignedIn: false,
  isLoading: false,
  user: null,
  isResetEmailSent: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUid: (state: AuthStateProps, action) => {
      console.log('signed in before: ', action.payload);
      state.userUid = action.payload.newUserUid;
      state.user = action.payload.newUserObj;
      state.isSignedIn = true;
      state.isLoading = false;
    },
    removeUid: (state: AuthStateProps) => {
      AsyncStorage.removeItem('userUid');
      AsyncStorage.removeItem('user');
      state.userUid = '';
      state.user = null;
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
          console.log('first time sign in:  ', action.payload);
          state.userUid = action.payload.userUid;
          state.user = action.payload.user;
          AsyncStorage.setItem('userUid', action.payload.userUid);
          AsyncStorage.setItem('user', JSON.stringify(action.payload.user));
          state.isSignedIn = true;
        }
        state.isLoading = false;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isSignedIn = false;
        Alert.alert('Sign in failed', action.payload as string);
      });
    builder
      .addCase(signupThunk.pending, state => {
        state.isLoading = true;
        state.isSignedIn = false;
      })
      .addCase(signupThunk.fulfilled, (state, action) => {
        if (action.payload) {
          console.log('sign up: ', action.payload);
          state.userUid = action.payload.userUid;
          state.user = action.payload.newUser;
          AsyncStorage.setItem('userUid', action.payload.userUid);
          AsyncStorage.setItem('user', JSON.stringify(action.payload.newUser));
          state.isSignedIn = true;
        }
        state.isLoading = false;
      })
      .addCase(signupThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isSignedIn = false;
        Alert.alert('Sign up failed', action.payload as string);
      });
    builder
      .addCase(loginWithGoogleThunk.pending, state => {
        state.isLoading = true;
        state.isSignedIn = false;
      })
      .addCase(loginWithGoogleThunk.fulfilled, (state, {payload}) => {
        if (payload) {
          console.log('Login with google:  ', payload);
          state.userUid = payload.userUid;
          state.user = payload.user;
          state.isSignedIn = true;
          AsyncStorage.setItem('userUid', payload.userUid);
          AsyncStorage.setItem('user', JSON.stringify(payload.user));
        }
        state.isLoading = false;
      })
      .addCase(loginWithGoogleThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isSignedIn = false;
        Alert.alert('Failed login with Google: ', action.payload as string);
      });
    builder
      .addCase(loginWithFacebookThunk.pending, state => {
        state.isLoading = true;
        state.isSignedIn = false;
      })
      .addCase(loginWithFacebookThunk.fulfilled, (state, {payload}) => {
        if (payload) {
          console.log('Login with facebook:  ', payload);
          state.userUid = payload.userUid;
          state.user = payload.user;
          state.isSignedIn = true;
          AsyncStorage.setItem('userUid', payload.userUid);
          AsyncStorage.setItem('user', JSON.stringify(payload.user));
        }
        state.isLoading = false;
      })
      .addCase(loginWithFacebookThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isSignedIn = false;
        Alert.alert('Failed login with facebook: ', action.payload as string);
      });
    builder
      .addCase(resetPasswordWithEmailThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(resetPasswordWithEmailThunk.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(resetPasswordWithEmailThunk.rejected, (state, action) => {
        state.isLoading = false;
        Alert.alert(
          'Failed to send reset password email: ',
          action.payload as string,
        );
      });
  },
});

export const {addUid, removeUid, enableLoading, disableLoading} =
  authSlice.actions;

export default authSlice.reducer;
