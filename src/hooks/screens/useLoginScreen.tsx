import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';

import {loginThunk, loginWithGoogleThunk} from '../../redux/thunks/auth.thunks';
import {LoginFormFields, LoginNavigationProp} from '../../types';
import {useAppDispatch} from '../redux/useRedux';

const useLoginScreen = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(false);
  const navigation = useNavigation<LoginNavigationProp>();
  const dispatch = useAppDispatch();

  const onLogin = async (data: LoginFormFields) => {
    dispatch(loginThunk(data));
  };

  const onToggleShowPassword = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };

  const onGoToSingup = () => {
    navigation.navigate('Signup');
  };

  const onLoginWithGoogle = () => {
    dispatch(loginWithGoogleThunk());
  };

  return {
    onLogin,
    onToggleShowPassword,
    isPasswordHidden,
    onGoToSingup,
    onLoginWithGoogle,
  };
};

export default useLoginScreen;
