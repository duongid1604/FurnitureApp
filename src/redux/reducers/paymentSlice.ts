import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';
import {Alert} from 'react-native';

import {PaymentStateProp} from '../../types';
import {updatethunk} from '../thunks/payment.thunk';

const initialState: PaymentStateProp = {
  userId: '',
  payment: undefined,
  isLoading: false,
  isAdd: false,
  // cardHolderName: '',
  // cardNumber: '',
  // number: '',
  // cvv: '',
  // expirationDate: '',
  // isSignedIn: false,
  // user: undefined,
};

export const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    // addUid: (state: AuthStateProps, action) => {
    //   console.log('signed in before: ', action.payload);
    //   state.userUid = action.payload.userUid;
    //   state.user = action.payload.user;
    //   state.isSignedIn = true;
    //   state.isLoading = false;
    // },
    addPayment: (state: PaymentStateProp, action) => {
      state.userId = action.payload.userId;
      state.payment = action.payload.payment;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(updatethunk.pending, state => {
        state.isLoading = true;
        state.isAdd = false;
      })
      .addCase(updatethunk.fulfilled, (state, action) => {
        if (action.payload) {
          state.userId = action.payload.userUid;
          state.payment = action.payload.newPayment;
          AsyncStorage.setItem('userId', action.payload.userUid);
          AsyncStorage.setItem(
            'payment',
            JSON.stringify(action.payload.newPayment),
          );
          state.isAdd = true;
        }
        state.isLoading = false;
      })
      .addCase(updatethunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isAdd = false;
        Alert.alert('Upload Credit Card failed', action.payload as string);
      });
    // builder
    //   .addCase(loginThunk.pending, state => {
    //     state.isLoading = true;
    //     state.isSignedIn = false;
    //   })
    //   .addCase(loginThunk.fulfilled, (state, action) => {
    //     if (action.payload) {
    //       console.log('first time sign in:  ', action.payload);
    //       state.userUid = action.payload.userUid;
    //       state.user = action.payload.user;
    //       AsyncStorage.setItem('userUid', action.payload.userUid);
    //       AsyncStorage.setItem('user', JSON.stringify(action.payload.user));
    //       state.isSignedIn = true;
    //     }
    //     state.isLoading = false;
    //   })
    //   .addCase(loginThunk.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.isSignedIn = false;
    //     Alert.alert('Sign in failed', action.payload as string);
    //   });
    // builder
    //   .addCase(signupThunk.pending, state => {
    //     state.isLoading = true;
    //     state.isSignedIn = false;
    //   })
    //   .addCase(signupThunk.fulfilled, (state, action) => {
    //     if (action.payload) {
    //       console.log('sign up: ', action.payload);
    //       state.userUid = action.payload.userUid;
    //       state.user = action.payload.newUser;
    //       AsyncStorage.setItem('userUid', action.payload.userUid);
    //       AsyncStorage.setItem('user', JSON.stringify(action.payload.newUser));
    //       state.isSignedIn = true;
    //     }
    //     state.isLoading = false;
    //   })
    //   .addCase(signupThunk.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.isSignedIn = false;
    //     Alert.alert('Sign up failed', action.payload as string);
    //   });
  },
});

export const {addPayment} = paymentSlice.actions;

export default paymentSlice.reducer;
