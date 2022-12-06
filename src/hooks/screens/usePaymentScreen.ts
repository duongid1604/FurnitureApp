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
  console.log('user' + user);
  const [selectedPaymentMethod, setselectedPaymentMethod] =
    useState<PaymentCardType | null>(user.selectedPaymentMethod);
  const [paymentState, setpaymentState] = useState<PaymentCardType[]>(
    user?.paymentMethods,
  );
  useEffect(() => {
    return navigation.addListener('focus', () => {
      setselectedPaymentMethod(user.selectedPaymentMethod);
      setpaymentState(user.paymentMethods);
    });
  }, [navigation, user.selectedPaymentMethod, user.paymentMethods]);

  const onSelectCard = (paymentCard: PaymentCardType) => {
    if (!user) {
      return;
    }
    setselectedPaymentMethod(paymentCard);
    const newUser: UserType = {
      ...user,
      selectedPaymentMethod: paymentCard,
    };
    dispatch(updateUserThunk(newUser));
  };
  const onGotoAddPaymentScreen = () => {
    navigation.navigate('AddPayment');
  };

  const onDeleteCard = (PaymentCard: PaymentCardType) => {
    console.log('PaymentCard' + PaymentCard);
    if (!user) {
      return;
    }
    if (user?.paymentMethods.length === 0) {
      return;
    }
    const currentselectedPaymentMethod = selectedPaymentMethod;
    const newPaymentMethod = paymentState?.filter(
      payment => payment.id !== PaymentCard.id,
    );
    if (
      currentselectedPaymentMethod &&
      currentselectedPaymentMethod?.id === PaymentCard.id
    ) {
      const selectedPaymentMethodIndex = paymentState.findIndex(
        payment => payment.id === currentselectedPaymentMethod.id,
      );
      let newSelectPaymentMethod: PaymentCardType | null;
      if (paymentState?.length === 1) {
        newSelectPaymentMethod = null;
      } else if (selectedPaymentMethodIndex === paymentState.length - 1) {
        newSelectPaymentMethod = paymentState[selectedPaymentMethodIndex - 1];
      } else {
        newSelectPaymentMethod = paymentState[selectedPaymentMethodIndex + 1];
      }
      const newUser: UserType = {
        ...user,
        selectedPaymentMethod: newSelectPaymentMethod,
        paymentMethods: newPaymentMethod,
      };
      dispatch(updateUserThunk(newUser));
      setselectedPaymentMethod(newSelectPaymentMethod);
    } else {
      const newUser: UserType = {
        ...user,
        paymentMethods: newPaymentMethod,
      };
      dispatch(updateUserThunk(newUser));
    }
    setpaymentState(newPaymentMethod);
  };
  console.log('paymentState' + paymentState);

  return {
    user,
    selectedPaymentMethod,
    paymentState,
    onSelectCard,
    onGotoAddPaymentScreen,
    onDeleteCard,
  };
};

export default usePaymentScreen;
