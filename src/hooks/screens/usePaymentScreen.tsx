import {updatethunk} from '../../redux/thunks/payment.thunk';
import {AddPaymentField, PaymentNavigationProp} from '../../types';
import {useAppDispatch} from '../redux/useRedux';
import {useNavigation} from '@react-navigation/native';

const usePaymentScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<PaymentNavigationProp>();

  const onUpdate = (data: AddPaymentField) => {
    dispatch(updatethunk(data));
    navigation.navigate('PaymentMethod');
  };

  return {
    onUpdate,
  };
};

export default usePaymentScreen;
