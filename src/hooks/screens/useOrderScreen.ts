import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {updateUserThunk} from '../../redux/thunks/auth.thunks';
import {
  CartType,
  OrderNavigationProp,
  OrderTabEnum,
  OrderTabType,
  OrderType,
  UserType,
} from '../../types';
import deepCopy from '../../utils/deepCopy';
import {useAppDispatch, useAppSelector} from '../redux/useRedux';

const useOrderScreen = () => {
  const navigation = useNavigation<OrderNavigationProp>();
  const [tabIsSelected, setTabIsSelected] = useState<OrderTabType>(
    OrderTabEnum.processing,
  );

  const {user} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  const onSetSelectedTab = (tabName: OrderTabType) => {
    setTabIsSelected(tabName);
  };

  const onBackHome = () => {
    navigation.navigate('HomeNavigator', {screen: 'Home'});
  };

  const onBtnPress = (currentOrder: OrderType) => {
    if (!user) {
      return;
    }

    const newUser: UserType = deepCopy(user);

    if (currentOrder.status === OrderTabEnum.processing) {
      const newOrders: OrderType[] = deepCopy(user.orders);
      const updatedOrder: OrderType = {
        ...currentOrder,
        status: OrderTabEnum.canceled,
      };
      const orderIndex = newOrders.findIndex(
        order => order.id === updatedOrder.id,
      );
      newOrders[orderIndex] = updatedOrder;
      newUser.orders = newOrders;
      dispatch(updateUserThunk(newUser));
    }
    if (
      currentOrder.status === OrderTabEnum.delivered ||
      currentOrder.status === OrderTabEnum.canceled
    ) {
      const newCart: CartType = {
        products: deepCopy(currentOrder.products),
        totalPrice: currentOrder.totalPrice,
        totalQty: currentOrder.totalQty,
      };
      newUser.cart = newCart;
      dispatch(updateUserThunk(newUser));
      navigation.navigate('Cart');
    }
  };

  return {user, tabIsSelected, onSetSelectedTab, onBackHome, onBtnPress};
};

export default useOrderScreen;
