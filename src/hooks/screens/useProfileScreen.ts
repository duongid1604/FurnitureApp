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
    navigation.navigate('ShippingNavigator', {screen: 'ShippingAddress'});
  };

  const onGotoMyReviews = () => {
    navigation.navigate('ReviewNavigator', {screen: 'MyReview'});
  };

  const onGotoSetting = () => {
    navigation.navigate('SettingNavigator', {screen: 'Setting'});
  };

  const onGoToPaymentMethod = () => {
    navigation.navigate('PaymentNavigator', {screen: 'PaymentMethod'});
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
