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
  user: UserType | null;
  isResetEmailSent: boolean;
};

export type ProductStateProps = {
  loading: boolean;
  products: ProductType[];
  isFavourite: boolean;
  error?: string;
  nextPage: number;
  field: string;
  type: string | number;
  condition: WhereFilterOp;
};

export type SearchProductStateProps = {
  loading: boolean;
  searchProducts: ProductType[];
  error?: string;
};

export type PaymentStateProp = {
  userId: string;
  payment: PaymentCardType | undefined;
  isLoading: boolean;
  isAdd: boolean;
};

export type WhereFilterOp =
  | '<'
  | '<='
  | '=='
  | '>'
  | '>='
  | '!='
  | 'array-contains'
  | 'array-contains-any'
  | 'in'
  | 'not-in';
