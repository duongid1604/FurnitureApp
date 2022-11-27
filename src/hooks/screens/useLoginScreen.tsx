import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {Alert, ToastAndroid} from 'react-native';

import {LoginFormFields, LoginNavigationProp} from '../../types';
import {loginWithEmail} from '../../api';

const useLoginScreen = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(false);
  const navigation = useNavigation<LoginNavigationProp>();

  const onLogin = async (data: LoginFormFields) => {
    try {
      const res = await loginWithEmail(data);
      console.log(res?.user.uid);
    } catch (error) {
      Alert.alert('Sign in failed', (error as Error).message);
    }
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
