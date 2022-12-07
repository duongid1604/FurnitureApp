import {AddReviewField, ReviewType, UserType} from '../../types';
import {useAppDispatch, useAppSelector} from '../redux/useRedux';
import {updateUserThunk} from '../../redux/thunks/auth.thunks';

const useAddReviewScreen = () => {
  const dispatch = useAppDispatch();
  const {user} = useAppSelector(state => state.auth);
  const {products} = useAppSelector(state => state.products);

  const onUpdate = (data: AddReviewField) => {
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
      const productIndex = user.reviews.findIndex(item => item.id === data.id);
    }
    const newUser: UserType = {
      ...user,
      reviews: [...user.reviews, data],
    };
    console.log('review' + newUser.reviews);
    dispatch(updateUserThunk(newUser));
  };
  return {
    onUpdate,
  };
};

export default useAddReviewScreen;
