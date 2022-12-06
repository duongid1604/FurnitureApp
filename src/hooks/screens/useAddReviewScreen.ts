import {AddReviewField, ReviewType, UserType} from '../../types';
import {useAppDispatch, useAppSelector} from '../redux/useRedux';
import {updateUserThunk} from '../../redux/thunks/auth.thunks';

const useAddReviewScreen = () => {
  const dispatch = useAppDispatch();
  const {user} = useAppSelector(state => state.auth);
  const {product} = useAppSelector(state => state.products.products);

  const onUpdate = (data: AddReviewField) => {
    if (!user) {
      return;
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
