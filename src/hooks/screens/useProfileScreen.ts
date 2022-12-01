import {removeUid} from '../../redux/reducers/authSlice';
import {ProfileNavigationProp} from '../../types';
import {useAppDispatch, useAppSelector} from '../redux/useRedux';

const useProfileScreen = (navigation: ProfileNavigationProp) => {
  const dispatch = useAppDispatch();
  const {user, userUid} = useAppSelector(state => state.auth);

  const orderQty = user?.orders.length;

  console.log('user 11:', user);

  const onSignout = () => {
    dispatch(removeUid());
  };

  const onGotoShippingAddress = () => {
    navigation.navigate('ShippingNavigator');
  };

  const onGotoMyReviews = () => {
    navigation.navigate('ReviewNavigator');
  };

  const onGotoSetting = () => {
    navigation.navigate('Setting');
  };

  const onGoToPaymentMethod = () => {
    navigation.navigate('PaymentNavigator');
  };

  const onGoToOrders = () => {
    navigation.navigate('MyOrders');
  };

  return {
    user,
    onSignout,
    onGotoShippingAddress,
    onGotoMyReviews,
    onGotoSetting,
    onGoToPaymentMethod,
    onGoToOrders,
  };
};

export default useProfileScreen;
