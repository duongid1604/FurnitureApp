import {createAsyncThunk} from '@reduxjs/toolkit';

import {
  createUserWithUid,
  FirebaseStorage,
  getUserByUid,
  loginWithEmail,
  resetPasswordWithEmail,
  signinWithFacebook,
  signinWithGoogle,
  signupWithEmail,
  updateUserById,
} from '../../api';
import {IMAGES, LINKS} from '../../constants';
import {
  AuthStateProps,
  LoginFormFields,
  SignupFormFields,
  UserType,
} from '../../types';

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (
    {
      oldUserUid,
      data,
    }: {oldUserUid?: string | undefined; data?: LoginFormFields | undefined},
    {rejectWithValue},
  ) => {
    try {
      let curUserUid: string | undefined;
      curUserUid = oldUserUid;
      if (!oldUserUid && data) {
        const res = await loginWithEmail(data);
        const userUid = res?.user.uid;
        curUserUid = userUid;
      }
      if (!curUserUid) {
        return undefined;
      }
      const userRes = await getUserByUid(curUserUid);

      return {curUserUid, user: userRes.data() as UserType};
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

export const signupThunk = createAsyncThunk(
  'auth/signup',
  async (data: SignupFormFields, {rejectWithValue}) => {
    try {
      const res = await signupWithEmail(data);
      const userUid = res?.user.uid;

      if (!userUid) {
        return undefined;
      }

      const newUser: UserType = {
        id: userUid,
        type: 'normal',
        name: data.name,
        email: data.email,
        cart: {
          products: [],
          totalQty: 0,
          totalPrice: 0,
        },
        orders: [],
        paymentMethods: [],
        reviews: [],
        shippingAddress: [],
        avatar: IMAGES.DEFAULT_AVATAR,
        favourite: [],
        selectedAddress: null,
        selectedPaymentMethod: null,
      };

      await createUserWithUid(userUid, newUser);

      return {userUid, newUser};
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

export const loginWithGoogleThunk = createAsyncThunk(
  'auth/loginWithGoogle',
  async (_, {rejectWithValue}) => {
    try {
      const res = await signinWithGoogle();
      if (!res) {
        return undefined;
      }
      const googleUser = res.user;
      const userUid = googleUser.uid;
      if (!userUid) {
        return undefined;
      }
      const userRes = await getUserByUid(userUid);
      const userData = userRes.data() as UserType;
      let user: UserType;
      if (userData) {
        user = userData;
      } else {
        user = {
          id: userUid,
          type: 'social',
          name: googleUser.displayName || 'Noname',
          email: googleUser.email || 'no email',
          cart: {
            products: [],
            totalQty: 0,
            totalPrice: 0,
          },
          orders: [],
          paymentMethods: [],
          reviews: [],
          shippingAddress: [],
          avatar: IMAGES.DEFAULT_AVATAR,
          favourite: [],
          selectedAddress: null,
          selectedPaymentMethod: null,
        };
        await createUserWithUid(userUid, user);
      }
      return {userUid, user};
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

export const loginWithFacebookThunk = createAsyncThunk(
  'auth/loginWithFacebook',
  async (_, {rejectWithValue}) => {
    try {
      const res = await signinWithFacebook();
      if (!res) {
        return undefined;
      }
      const facebookUser = res.user;
      const userUid = facebookUser.uid;
      if (!userUid) {
        return undefined;
      }
      const userRes = await getUserByUid(userUid);
      const userData = userRes.data() as UserType;
      console.log('userData: ', userData);
      let user: UserType;
      if (userData) {
        user = userData;
      } else {
        user = {
          id: userUid,
          type: 'social',
          name: facebookUser.displayName || 'Noname',
          email: facebookUser.email || 'no email',
          cart: {
            products: [],
            totalQty: 0,
            totalPrice: 0,
          },
          orders: [],
          paymentMethods: [],
          reviews: [],
          shippingAddress: [],
          avatar: IMAGES.DEFAULT_AVATAR,
          favourite: [],
          selectedAddress: null,
          selectedPaymentMethod: null,
        };
        await createUserWithUid(userUid, user);
      }
      return {userUid, user};
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

export const resetPasswordWithEmailThunk = createAsyncThunk(
  'auth/resetPasswordWithEmail',
  async (email: string, {rejectWithValue}) => {
    try {
      const res = await resetPasswordWithEmail(email);
      return res;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

export const updateUserThunk = createAsyncThunk(
  'auth/updateUser',
  async (updatedUser: UserType, {rejectWithValue}) => {
    try {
      await updateUserById(updatedUser.id, updatedUser);
      return updatedUser;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

export const updateAvatarThunk = createAsyncThunk(
  'auth/updateAvatar',
  async (imageUri: string, {dispatch, rejectWithValue, getState}) => {
    try {
      const {auth} = getState() as {auth: AuthStateProps};
      const userBefore = auth.user;
      if (!userBefore) {
        return;
      }
      const desc = `${LINKS.AVATARS}/${userBefore.id}`;
      const uploadToStorageRes = await FirebaseStorage.uploadToStorage(
        imageUri,
        desc,
      );
      console.log('upload success: ', uploadToStorageRes);
      const avatarUri: string = await FirebaseStorage.getDownloadUrl(desc);
      const newUser: UserType = {
        ...userBefore,
        avatar: avatarUri,
      };
      dispatch(updateUserThunk(newUser));
      return;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);
