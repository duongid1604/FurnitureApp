import {updateUserThunk} from '../../redux/thunks/auth.thunks';
import {ProductType, UserType} from '../../types';
import {useAppDispatch, useAppSelector} from '../redux/useRedux';

const useAddFavouriteScreen = () => {
  const dispatch = useAppDispatch();
  const {user} = useAppSelector(state => state.auth);

  const onAddFavourite = (data: ProductType) => {
    if (!user) {
      return;
    }

    if (user.favourite.length === 0) {
      const newUser: UserType = {
        ...user,
        favourite: [...user.favourite, data],
      };

      dispatch(updateUserThunk(newUser));
    } else {
      const productIndex = user.favourite.findIndex(
        item => item.id === data.id,
      );
      if (productIndex === -1) {
        const newUser: UserType = {
          ...user,
          favourite: [...user.favourite, data],
        };

        dispatch(updateUserThunk(newUser));
      } else {
        const newUser: UserType = {
          ...user,
          favourite: user.favourite.filter(item => item.id !== data.id),
        };

        dispatch(updateUserThunk(newUser));
      }
    }
  };

  return {
    onAddFavourite,
  };
};

export default useAddFavouriteScreen;
