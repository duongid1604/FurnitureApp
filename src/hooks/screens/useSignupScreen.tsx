import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {SignupFormFields, SignupNavigationProp} from '../../types';

const useSignupScreen = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(false);
  const [isConfirmPasswordHidden, setIsConfirmPasswordHidden] = useState(false);
  const navigation = useNavigation<SignupNavigationProp>();

  const onSignup = (data: SignupFormFields) => {
    console.log('SignupForm: ', data);
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
