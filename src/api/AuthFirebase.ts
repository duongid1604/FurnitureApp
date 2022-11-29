import auth from '@react-native-firebase/auth';
import {ErrorException, LoginFormFields, SignupFormFields} from '../types';

export const loginWithEmail = async (data: LoginFormFields) => {
  try {
    const res = await auth().signInWithEmailAndPassword(
      data.email,
      data.password,
    );
    return res;
  } catch (error) {
    if ((error as ErrorException).code === 'auth/user-not-found') {
      throw new Error('That email address is not found.');
    }
    if ((error as ErrorException).code === 'auth/wrong-password') {
      throw new Error('The password is invalid.');
    }
    if ((error as ErrorException).code === 'auth/too-many-requests') {
      throw new Error('Too many requests from this device. Try again later!');
    }
  }
};

export const signupWithEmail = async (data: SignupFormFields) => {
  try {
    const res = await auth().createUserWithEmailAndPassword(
      data.email,
      data.password,
    );
    return res;
  } catch (error) {
    if ((error as ErrorException).code === 'auth/email-already-in-use') {
      throw new Error('That email address is already in use!');
    }

    if ((error as ErrorException).code === 'auth/invalid-email') {
      throw new Error('That email address is invalid!');
    }
  }
};
