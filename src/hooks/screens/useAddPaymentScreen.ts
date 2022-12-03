import {useNavigation} from '@react-navigation/native';
import {updateUserThunk} from '../../redux/thunks/auth.thunks';
import {AddPaymentField, PaymentNavigationProp, UserType} from '../../types';
import {useAppDispatch, useAppSelector} from '../redux/useRedux';

const useAddPaymentScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<PaymentNavigationProp>();
  const {user} = useAppSelector(state => state.auth);

  const onUpdate = (data: AddPaymentField) => {
    if (!user) {
      return;
    }
    const newUser: UserType = {
      ...user,
      paymentMethods: [...user.paymentMethods, data],
    };
    dispatch(updateUserThunk(newUser));
    navigation.navigate('PaymentMethod');
  };

  return {
    onUpdate,
  };
};

export default useAddPaymentScreen;
