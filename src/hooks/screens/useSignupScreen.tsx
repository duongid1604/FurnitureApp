import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {SignupFormFields, SignupNavigationProp, UserType} from '../../types';

const useSignupScreen = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(false);
  const [isConfirmPasswordHidden, setIsConfirmPasswordHidden] = useState(false);
  const navigation = useNavigation<SignupNavigationProp>();

  const onSignup = (data: SignupFormFields) => {
    console.log('SignupForm: ', data);
    auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(() => {
        console.log('User account created & signed in!');
        const currentUser = auth().currentUser;

        if (!currentUser) {
          return;
        }

        const newUser: UserType = {
          id: currentUser.uid,
          name: data.name,
          email: data.email,
          password: data.password,
          cart: [],
          orders: [],
          paymentMethods: [],
          reviews: [],
          shippingAddress: [],
        };

        return firestore()
          .collection('users')
          .doc(currentUser.uid)
          .set(newUser);
      })
      .then(() => console.log('User added!'))
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
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
