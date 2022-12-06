import {updateUserThunk} from '../../redux/thunks/auth.thunks';
import {ProductType, UserType} from '../../types';
import {useAppDispatch, useAppSelector} from '../redux/useRedux';

const useCartScreen = () => {
  const dispatch = useAppDispatch();
  const {user} = useAppSelector(state => state.auth);

  const onIncreaseQty = (data: ProductType, localQty: number) => {
    if (!user) {
      return;
    }

    const productIndex = user.cart.products.findIndex(
      product => product.id === data.id,
    );
    if (productIndex !== -1) {
      const newData = {
        ...data,
        qty: user.cart.products[productIndex].qty + 1,
      };

      const newProducts = user.cart.products.filter(
        item => item.id !== newData.id,
      );

      const newUser: UserType = {
        ...user,
        cart: {
          ...user.cart,
          products: [...newProducts, newData],
          totalQty: user.cart.totalQty + localQty,
          totalPrice: user.cart.totalPrice + data.price * localQty,
        },
      };

      dispatch(updateUserThunk(newUser));
    }
  };

  const onDecreaseQty = (data: ProductType, localQty: number) => {
    if (!user) {
      return;
    }

    const productIndex = user.cart.products.findIndex(
      product => product.id === data.id,
    );
    if (productIndex !== -1) {
      const newData = {
        ...data,
        qty: user.cart.products[productIndex].qty - 1,
      };

      const newProducts = user.cart.products.filter(
        item => item.id !== newData.id,
      );

      const newUser: UserType = {
        ...user,
        cart: {
          ...user.cart,
          products: [...newProducts, newData],
          totalQty: user.cart.totalQty - localQty,
          totalPrice: user.cart.totalPrice - data.price * localQty,
        },
      };

      dispatch(updateUserThunk(newUser));
    }
  };

  return {
    onIncreaseQty,
    onDecreaseQty,
  };
};

export default useCartScreen;
