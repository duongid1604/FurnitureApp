import firestore from '@react-native-firebase/firestore';
import {UserType} from '../types';

export const getUserByUid = async (uid: string) => {
  try {
    const res = await firestore().collection('users').doc(uid).get();
    return res;
  } catch (error) {
    let errorMessage = 'User not found!';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    throw new Error(errorMessage);
  }
};

export const createUserWithUid = async (uid: string, newUser: UserType) => {
  try {
    const res = await firestore().collection('users').doc(uid).set(newUser);
    return res;
  } catch (error) {
    let errorMessage = 'Could not create new user!';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    throw new Error(errorMessage);
  }
};
