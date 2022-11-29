import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {signupThunk} from '../../redux/thunks/auth.thunks';
import {SignupFormFields, SignupNavigationProp} from '../../types';
import {useAppDispatch} from '../redux/useRedux';

const useSignupScreen = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(false);
  const [isConfirmPasswordHidden, setIsConfirmPasswordHidden] = useState(false);
  const navigation = useNavigation<SignupNavigationProp>();
  const dispatch = useAppDispatch();

  const onSignup = (data: SignupFormFields) => {
    dispatch(signupThunk(data));
  };

  const onToggleShowPassword = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };

  const onToggleShowConfirmPassword = () => {
    setIsConfirmPasswordHidden(!isConfirmPasswordHidden);
  };

  const onGoToLogin = () => {
    navigation.navigate('Login');
  };

  return {
    isPasswordHidden,
    isConfirmPasswordHidden,
    onSignup,
    onToggleShowPassword,
    onGoToLogin,
    onToggleShowConfirmPassword,
  };
};

export default useSignupScreen;
