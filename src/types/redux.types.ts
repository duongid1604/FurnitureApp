import store from '../redux/store';

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
