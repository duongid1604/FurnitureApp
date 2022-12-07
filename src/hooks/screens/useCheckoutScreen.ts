import dayjs from 'dayjs';
import {v4 as uuidv4} from 'uuid';

import {updateProducts} from '../../redux/thunks/product.thunk';
import {updateUserThunk} from '../../redux/thunks/auth.thunks';
import {OrderTabEnum, OrderType, ProductType, UserType} from '../../types';
import deepCopy from '../../utils/deepCopy';
import {useAppDispatch, useAppSelector} from '../redux/useRedux';

const useCheckoutScreen = () => {
  const dispatch = useAppDispatch();
  const {user} = useAppSelector(state => state.auth);

  const onCheckout = (data: ProductType[] | undefined) => {
    if (!user) {
      return;
    }

    if (!data) {
      return;
    }

    const newUser: UserType = deepCopy(user);

    data?.map(item => {
      console.log(item.id, item.popular);
      dispatch(updateProducts({id: item.id, popular: item.popular + 1}));
    });

    const randomNumber = Math.floor(Math.random() * 10000);

    const newOrder: OrderType = {
      id: uuidv4(),
      products: data,
      orderCode: randomNumber,
      status: OrderTabEnum.processing,
      date: dayjs().format('DD/MM/YYYY'),
      totalPrice: user.cart.totalPrice,
      totalQty: user.cart.totalQty,
    };

    const newOrderInNoti: OrderType = deepCopy(newOrder);
    newOrderInNoti.id = uuidv4();

    newUser.orders.push(newOrder);
    newUser.notification.orders.push(newOrderInNoti);
    newUser.cart = {
      products: [],
      totalPrice: 0,
      totalQty: 0,
    };

    dispatch(updateUserThunk(newUser));
  };

  return {
    onCheckout,
  };
};

export default useCheckoutScreen;
