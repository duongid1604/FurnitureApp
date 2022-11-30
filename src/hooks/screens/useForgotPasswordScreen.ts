import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';

import {resetPasswordWithEmailThunk} from '../../redux/thunks/auth.thunks';
import {
  ForgotPasswordFormFields,
  ForgotPasswordNavigationProp,
} from '../../types';
import {useAppDispatch} from '../redux/useRedux';

const useForgotPasswordScreen = () => {
  const dispatch = useAppDispatch();
  const [emailIsSent, setEmailIsSent] = useState(false);
  const navigation = useNavigation<ForgotPasswordNavigationProp>();

  const onSendPasswordResetEmail = (data: ForgotPasswordFormFields) => {
    dispatch(resetPasswordWithEmailThunk(data.email));
    setEmailIsSent(true);
  };

  const onGotoLogin = () => {
    navigation.goBack();
  };

  return {emailIsSent, onSendPasswordResetEmail, onGotoLogin};
};

export default useForgotPasswordScreen;
