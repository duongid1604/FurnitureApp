import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {LoginFormFields, LoginNavigationProp} from '../../types';

const useLoginScreen = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(false);
  const navigation = useNavigation<LoginNavigationProp>();

  const onLogin = (data: LoginFormFields) => {
    console.log('Form: ', data);
  };

  const onToggleShowPassword = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };

  const onGoToSingup = () => {
    navigation.navigate('Signup');
  };

  return {onLogin, onToggleShowPassword, isPasswordHidden, onGoToSingup};
};

export default useLoginScreen;
