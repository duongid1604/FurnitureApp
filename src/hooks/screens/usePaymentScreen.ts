import {updatePaymentThunk} from '../../redux/thunks/payment.thunk';
import {AddPaymentField, PaymentNavigationProp} from '../../types';
import {useAppDispatch, useAppSelector} from '../redux/useRedux';
import {useNavigation} from '@react-navigation/native';

const usePaymentScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<PaymentNavigationProp>();
  const userUid = useAppSelector(state => state.auth.userUid);

  const onUpdate = (data: AddPaymentField) => {
    console.log('useruid: ' + userUid);
    console.log('data' + data);
    if (!userUid) {
      return;
    }
    dispatch(updatePaymentThunk(data));
    navigation.navigate('PaymentMethod');
  };

  return {
    onUpdate,
  };
};

export default usePaymentScreen;
