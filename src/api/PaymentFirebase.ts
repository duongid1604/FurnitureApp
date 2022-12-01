// import {FirebaseAuthTypes} from '@react-native-firebase/auth';
// import {AddPaymentField} from '../types';

// export const AddPayment = async (data: AddPaymentField) => {
//   try {
//     const res = await FirebaseAuthTypes().AddPaymentField(
//       data.email,
//       data.password,
//     );
//     return res;
//   } catch (error) {
//     if ((error as ErrorException).code === 'auth/email-already-in-use') {
//       throw new Error('That email address is already in use!');
//     }

//     if ((error as ErrorException).code === 'auth/invalid-email') {
//       throw new Error('That email address is invalid!');
//     }
//   }
// };
