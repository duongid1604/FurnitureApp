import {updateUserThunk} from '../../redux/thunks/auth.thunks';
import {ProductType, UserType} from '../../types';
import {useAppDispatch, useAppSelector} from '../redux/useRedux';

const useAddCartScreen = () => {
  const dispatch = useAppDispatch();
  const {user} = useAppSelector(state => state.auth);

  const onAddCart = (data: ProductType, localQty: number) => {
    if (!user) {
      return;
    }

    if (user.cart.products.length === 0) {
      console.log('case first');

      const newData = {...data, qty: localQty};

      const newUser: UserType = {
        ...user,
        cart: {
          ...user.cart,
          products: [...user.cart.products, newData],
          totalQty: user.cart.totalQty + localQty,
          totalPrice: data.price * localQty,
        },
      };

      dispatch(updateUserThunk(newUser));
    } else {
      const productIndex = user.cart.products.findIndex(
        product => product.id === data.id,
      );
      if (productIndex === -1) {
        console.log('case different');

        const newData = {...data, qty: localQty};

        const newUser: UserType = {
          ...user,
          cart: {
            ...user.cart,
            products: [...user.cart.products, newData],
            totalQty: user.cart.totalQty + localQty,
            totalPrice: user.cart.totalPrice + data.price * localQty,
          },
        };

        dispatch(updateUserThunk(newUser));
      } else {
        console.log('case equal ');

        const newData = {
          ...data,
          qty: user.cart.products[productIndex].qty + localQty,
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
    }
  };

  return {
    onAddCart,
  };
};

export default useAddCartScreen;
