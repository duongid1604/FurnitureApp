import {decrease, increase} from '../redux/reducers/exampleSlice';
import {useAppDispatch, useAppSelector} from './redux/useRedux';

const useTestScreen = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(state => state.example.value);

  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  return {count, onIncrease, onDecrease};
};

export default useTestScreen;
