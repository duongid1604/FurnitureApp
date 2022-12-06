import {useState, useEffect} from 'react';
import {useAppDispatch} from '../redux/useRedux';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  PaymentCardType,
  PaymentNavigationProp,
  PaymentRouteProp,
  UserType,
} from '../../types';
import {updateUserThunk} from '../../redux/thunks/auth.thunks';

const usePaymentScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<PaymentNavigationProp>();
  const user = useRoute<PaymentRouteProp>().params.user;
  const [paymentMethod, setpaymentMethod] = useState<
    PaymentCardType | undefined
  >(user.paymentMethod);
  useEffect(() => {
    return navigation.addListener('focus', () => {
      setpaymentMethod(user.paymentMethod);
    });
  }, [navigation, user.paymentMethod]);

  const onSelectCard = (paymentCard: PaymentCardType) => {
    if (!user) {
      return;
    }
    setpaymentMethod(paymentCard);
    const newUser: UserType = {
      ...user,
      paymentMethods: paymentCard,
    };
    dispatch(updateUserThunk(newUser));
  };
  const onGotoAddPaymentScreen = () => {
    navigation.navigate('AddPayment');
  };
  return {
    user,
    paymentMethod,
    onSelectCard,
    onGotoAddPaymentScreen,
  };
};

export default usePaymentScreen;
