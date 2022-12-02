import {updateUserThunk} from '../../redux/thunks/auth.thunks';
import {ProductType, UserType} from '../../types';
import {useAppDispatch, useAppSelector} from '../redux/useRedux';

const useAddCartScreen = () => {
  const dispatch = useAppDispatch();
  const {user} = useAppSelector(state => state.auth);

  const onUpdateCart = (data: ProductType) => {
    if (!user) {
      return;
    }
    const newUser: UserType = {
      ...user,
      cart: [...user.cart, data],
    };

    dispatch(updateUserThunk(newUser));
  };

  return {
    onUpdateCart,
  };
};

export default useAddCartScreen;
