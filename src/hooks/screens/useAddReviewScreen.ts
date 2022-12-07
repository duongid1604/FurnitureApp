import {AddReviewField, ProductType, ReviewType, UserType} from '../../types';
import {useAppDispatch, useAppSelector} from '../redux/useRedux';
import {updateUserThunk} from '../../redux/thunks/auth.thunks';

const useAddReviewScreen = () => {
  const dispatch = useAppDispatch();
  const {user} = useAppSelector(state => state.auth);

  const onUpdate = (data: AddReviewField, data2: ProductType) => {
    if (!user) {
      return;
    }
    if (user.reviews.length === 0) {
      const newUser: UserType = {
        ...user,
        reviews: [...user.reviews, data],
      };
      dispatch(updateUserThunk(newUser));
    } else {
      const productIndex = user.reviews.findIndex(item => item.id === data2.id);
      if (productIndex === -1) {
        const newUser: UserType = {
          ...user,
          reviews: [...user.reviews, data],
        };
        dispatch(updateUserThunk(newUser));
      } else {
        const newUser: UserType = {
          ...user,
          reviews: [...user.reviews, data],
        };
        dispatch(updateUserThunk(newUser));
      }
    }
  };
  return {
    onUpdate,
  };
};

export default useAddReviewScreen;
