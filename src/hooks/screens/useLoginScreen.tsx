import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Alert} from 'react-native';

import {loginWithEmail} from '../../api';
import {addUid, toggleLoading} from '../../redux/reducers/authSlice';
import {loginThunk} from '../../redux/thunks/auth.thunks';
import {LoginFormFields, LoginNavigationProp} from '../../types';
import {useAppDispatch, useAppSelector} from '../redux/useRedux';

const useLoginScreen = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(false);
  const navigation = useNavigation<LoginNavigationProp>();
  const dispatch = useAppDispatch();
  const {isSignedIn} = useAppSelector(state => state.auth);

  console.log(isSignedIn);
  const onLogin = async (data: LoginFormFields) => {
    dispatch(loginThunk(data));
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
