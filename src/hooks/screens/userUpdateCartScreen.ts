import {updateUserThunk} from '../../redux/thunks/auth.thunks';
import {UserType} from '../../types';
import {useAppDispatch, useAppSelector} from '../redux/useRedux';

const useUpdateCartScreen = () => {
  const dispatch = useAppDispatch();
  const {user} = useAppSelector(state => state.auth);

  const onUpdateCart = (id: string) => {
    if (!user) {
      return;
    }

    const newProduct = user.cart.products.filter(product => product.id !== id);

    const newPrice: number[] = [];
    newProduct.forEach(item => newPrice.push(item.price * item.qty));
    const newTotalPrice = newPrice.reduce((total, crr) => total + crr, 0);

    const newQty: number[] = [];
    newProduct.forEach(item => newQty.push(item.qty));
    const newTotalQty = newQty.reduce((total, crr) => total + crr, 0);

    const newUser: UserType = {
      ...user,
      cart: {
        ...user.cart,
        products: newProduct,
        totalPrice: newTotalPrice,
        totalQty: newTotalQty,
      },
    };

    dispatch(updateUserThunk(newUser));
  };

  return {
    onUpdateCart,
  };
};

export default useUpdateCartScreen;
