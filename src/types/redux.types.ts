import store from '../redux/store';
import {ProductType} from './data.types';

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type ExampleStateProps = {
  value: number;
};

export type AuthStateProps = {
  userUid: string;
  isSignedIn: boolean;
  isLoading: boolean;
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
