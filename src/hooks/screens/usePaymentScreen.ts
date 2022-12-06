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
  const [selectedPaymentMethod, setpaymentMethod] = useState<
    PaymentCardType | undefined
  >(user.selectedPaymentMethod);
  useEffect(() => {
    return navigation.addListener('focus', () => {
      setpaymentMethod(user.selectedPaymentMethod);
    });
  }, [navigation, user.selectedPaymentMethod]);

  const onSelectCard = (paymentCard: PaymentCardType) => {
    if (!user) {
      return;
    }
    setpaymentMethod(paymentCard);
    const newUser: UserType = {
      ...user,
      selectedPaymentMethod: paymentCard,
    };
    dispatch(updateUserThunk(newUser));
  };
  const onGotoAddPaymentScreen = () => {
    navigation.navigate('AddPayment');
  };
  return {
    user,
    selectedPaymentMethod,
    onSelectCard,
    onGotoAddPaymentScreen,
  };
};

export default usePaymentScreen;
