import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';
import {Alert} from 'react-native';

import {PaymentStateProp} from '../../types';
import {updatePaymentThunk} from '../thunks/payment.thunk';

const initialState: PaymentStateProp = {
  userId: '',
  payment: undefined,
  isLoading: false,
  isAdd: false,
  isSelect: false,
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
      state.isAdd = true;
      state.isLoading = false;
    },
    enableLoading: (state: PaymentStateProp) => {
      state.isLoading = true;
    },
    disableLoading: (state: PaymentStateProp) => {
      state.isLoading = false;
    },
    // chooseCard: (state, action) => {
    //   switch (action.payload) {
    //     case 0:
    //       state.products = [];
    //       state.field = 'popular';
    //       state.condition = '>';
    //       state.type = 0;
    //       break;
    //     case 1:
    //       state.products = [];
    //       state.field = 'category';
    //       state.condition = '==';
    //       state.type = 'chair';
    //       break;
    //     case 2:
    //       state.products = [];
    //       state.field = 'category';
    //       state.condition = '==';
    //       state.type = 'table';
    //       break;
    //     case 3:
    //       state.products = [];
    //       state.field = 'category';
    //       state.condition = '==';
    //       state.type = 'armchair';
    //       break;
    //     case 4:
    //       state.products = [];
    //       state.field = 'category';
    //       state.condition = '==';
    //       state.type = 'bed';
    //       break;

    //     default:
    //       break;
    //   }
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(updatePaymentThunk.pending, state => {
        state.isLoading = true;
        state.isAdd = false;
      })
      .addCase(updatePaymentThunk.fulfilled, (state, action) => {
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
      .addCase(updatePaymentThunk.rejected, (state, action) => {
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
