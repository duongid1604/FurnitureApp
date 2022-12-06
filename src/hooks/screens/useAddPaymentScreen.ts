import {useNavigation} from '@react-navigation/native';
import {v4 as uuidv4} from 'uuid';
import {updateUserThunk} from '../../redux/thunks/auth.thunks';
import {
  AddPaymentField,
  PaymentCardType,
  PaymentNavigationProp,
  UserType,
} from '../../types';
import {useAppDispatch, useAppSelector} from '../redux/useRedux';

const useAddPaymentScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<PaymentNavigationProp>();
  const {user} = useAppSelector(state => state.auth);

  const onUpdate = (data: AddPaymentField) => {
    if (!user) {
      return;
    }
    const newPayment: PaymentCardType = {
      ...data,
      id: uuidv4(),
    };
    const newUser: UserType = {
      ...user,
      paymentMethods: [...user.paymentMethods, data],
      selectedPaymentMethod: newPayment,
    };
    dispatch(updateUserThunk(newUser));
    navigation.navigate('PaymentMethod', {user: newUser});
  };

  return {
    onUpdate,
  };
};

export default useAddPaymentScreen;
