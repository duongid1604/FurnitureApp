import {useAppSelector} from '../redux/useRedux';

const useSettingScreen = () => {
  const {user} = useAppSelector(state => state.auth);

  return {user};
};

export default useSettingScreen;
