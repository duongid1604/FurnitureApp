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
    console.log('create user with id res: ', res);
    return res;
  } catch (error) {
    let errorMessage = 'Could not create new user!';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    throw new Error(errorMessage);
  }
};

export const updateUserById = async (uid: string, updatedUser: UserType) => {
  try {
    const res = await firestore()
      .collection('users')
      .doc(uid)
      .update(updatedUser);
    return res;
  } catch (error) {
    let errorMessage = 'Could not update user!';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    throw new Error(errorMessage);
  }
};
