import {updateUserThunk} from '../../redux/thunks/auth.thunks';
import {OrderType, UserType} from '../../types';
import deepCopy from '../../utils/deepCopy';
import {useAppDispatch, useAppSelector} from '../redux/useRedux';

const useNotificationScreen = () => {
  const dispatch = useAppDispatch();
  const {user} = useAppSelector(state => state.auth);

  const onDelete = (currOrder: OrderType) => {
    if (!user) {
      return;
    }
    const newUser: UserType = deepCopy(user);
    newUser.notification = {
      ...newUser.notification,
      orders: newUser.notification.orders.filter(
        order => order.id !== currOrder.id,
      ),
    };
    dispatch(updateUserThunk(newUser));
  };

  return {user, onDelete};
};

export default useNotificationScreen;
