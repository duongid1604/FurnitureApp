import {useAppSelector} from '../redux/useRedux';

const useNotificationScreen = () => {
  const {user} = useAppSelector(state => state.auth);

  return {user};
};

export default useNotificationScreen;
