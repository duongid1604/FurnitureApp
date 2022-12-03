import {removeUid} from '../../redux/reducers/authSlice';
import {ProfileNavigationProp} from '../../types';
import {useAppDispatch, useAppSelector} from '../redux/useRedux';

const useProfileScreen = (navigation: ProfileNavigationProp) => {
  const dispatch = useAppDispatch();
  const {user, avatarLoading, isLoading} = useAppSelector(state => state.auth);

  const orderQty = user?.orders.length;
  const addressQty = user?.shippingAddress.length;
  const paymentQty = user?.paymentMethods.length;
  const reviewQty = user?.reviews.length;

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
    avatarLoading,
    isLoading,
    orderQty,
    addressQty,
    reviewQty,
    paymentQty,
    onSignout,
    onGotoShippingAddress,
    onGotoMyReviews,
    onGotoSetting,
    onGoToPaymentMethod,
    onGoToOrders,
  };
};

export default useProfileScreen;
