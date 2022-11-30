import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';

import {ErrorException, LoginFormFields, SignupFormFields} from '../types';

GoogleSignin.configure({
  webClientId:
    '32210294035-ago7t1vjss2ok8darkicgdj6rr49d32l.apps.googleusercontent.com',
});

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

export const signinWithGoogle = async () => {
  try {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const signinWithFacebook = async () => {
  try {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const resetPasswordWithEmail = async (email: string) => {
  try {
    const res = await auth().sendPasswordResetEmail(email);
    return res;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
