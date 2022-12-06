import dayjs from 'dayjs';
import {updateProducts} from '../../redux/reducers/productSlice';
import {updateUserThunk} from '../../redux/thunks/auth.thunks';
import {UserType, OrderTabEnum, OrderType, ProductType} from '../../types';
import {useAppDispatch, useAppSelector} from '../redux/useRedux';

const useCheckoutScreen = () => {
  const dispatch = useAppDispatch();
  const {user} = useAppSelector(state => state.auth);

  const onCheckout = (data: ProductType[] | undefined) => {
    if (!user) {
      return;
    }

    data?.map(item => {
      console.log(item.id, item.popular);
      dispatch(updateProducts({id: item.id, popular: item.popular + 1}));
    });

    const randomNumber = Math.floor(Math.random() * 10000);

    const newOrder: OrderType = {
      id: randomNumber,
      orderCode: randomNumber,
      status: OrderTabEnum.processing,
      date: dayjs().format('DD/MM/YYYY'),
      totalPrice: user.cart.totalPrice,
      totalQty: user.cart.totalQty,
    };

    const newUser: UserType = {
      ...user,
      orders: [...user.orders, newOrder],
      cart: {
        products: [],
        totalQty: 0,
        totalPrice: 0,
      },
    };

    dispatch(updateUserThunk(newUser));
  };

  return {
    onCheckout,
  };
};

export default useCheckoutScreen;
