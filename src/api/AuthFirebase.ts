import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import {ErrorException, LoginFormFields} from '../types';

export const loginWithEmail = async (data: LoginFormFields) => {
  try {
    const res = await auth().signInWithEmailAndPassword(
      data.email,
      data.password,
    );
    return res;
  } catch (error) {
    console.log(error);
    if ((error as ErrorException).code === 'auth/user-not-found') {
      throw new Error('That email address is not found.');
    }
    if ((error as ErrorException).code === 'auth/wrong-password') {
      throw new Error('The password is invalid.');
    }
  }
};
