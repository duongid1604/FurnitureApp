import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';

import {
  loginThunk,
  loginWithFacebookThunk,
  loginWithGoogleThunk,
} from '../../redux/thunks/auth.thunks';
import {LoginFormFields, LoginNavigationProp} from '../../types';
import {useAppDispatch} from '../redux/useRedux';

const useLoginScreen = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(false);
  const navigation = useNavigation<LoginNavigationProp>();
  const dispatch = useAppDispatch();

  const onLogin = async (data: LoginFormFields) => {
    dispatch(loginThunk(data));
  };

  const onLoginWithGoogle = () => {
    dispatch(loginWithGoogleThunk());
  };

  const onLoginWithFacebook = () => {
    dispatch(loginWithFacebookThunk());
  };

  const onToggleShowPassword = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };

  const onGoToSingup = () => {
    navigation.navigate('Signup');
  };

  const onGotoForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return {
    isPasswordHidden,
    onLogin,
    onLoginWithGoogle,
    onLoginWithFacebook,
    onToggleShowPassword,
    onGoToSingup,
    onGotoForgotPassword,
  };
};

export default useLoginScreen;
