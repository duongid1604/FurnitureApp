import store from '../redux/store';

export type ExampleStateProps = {
  value: number;
};

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
