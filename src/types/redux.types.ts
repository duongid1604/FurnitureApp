import store from '../redux/store';
import {PaymentCardType, ProductType, UserType} from './data.types';

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type ExampleStateProps = {
  value: number;
};

export type AuthStateProps = {
  userUid: string;
  isSignedIn: boolean;
  isLoading: boolean;
  user: UserType | undefined;
};

export type ProductStateProps = {
  loading: boolean;
  products: ProductType[];
  isFavourite: boolean;
  error?: string;
  nextPage: number;
};
export type PaymentStateProp = {
  userId: string;
  payment: PaymentCardType | undefined;
  isLoading: boolean;
  isAdd: boolean;
};
