import firestore from '@react-native-firebase/firestore';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {useAppSelector} from '../../hooks';
import {AddPaymentField, PaymentCardType} from '../../types';

export const updatePaymentThunk = createAsyncThunk(
  'auth/payment',
  async (data: AddPaymentField, {rejectWithValue}) => {
    const userUid = useAppSelector(state => state.auth.userUid);

    try {
      const newPayment: PaymentCardType = {
        id: data.id,
        cardHolderName: data.cardHolderName,
        cardNumber: +data.cardHolderName,
        cvv: +data.cvv,
        expirationDate: data.expirationDate,
      };
      console.log(newPayment);
      await firestore()
        .collection('users')
        .doc(userUid)
        .update({paymentMethods: newPayment});
      return {userUid, newPayment};
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);
