import {updateUserThunk} from '../../redux/thunks/auth.thunks';
import {OrderType, UserType} from '../../types';
import {useAppDispatch, useAppSelector} from '../redux/useRedux';

const useCheckoutScreen = () => {
  const dispatch = useAppDispatch();
  const {user} = useAppSelector(state => state.auth);

  const onCheckout = () => {
    if (!user) {
      return;
    }

    const newOrder: OrderType = {};

    const newUser: UserType = {
      ...user,
      orders: [...user.orders],
    };

    dispatch(updateUserThunk(newUser));
  };

  return {
    onCheckout,
  };
};

export default useCheckoutScreen;
