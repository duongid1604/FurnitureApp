import {
  AddReviewField,
  ProductRouteProp,
  ProductType,
  ReviewNavigatorProps,
  ReviewScreenNavigationProp,
  ReviewScreenRouteProp,
  ReviewType,
  UserType,
} from '../../types';
import {useNavigation} from '@react-navigation/native';

import {useAppDispatch, useAppSelector} from '../redux/useRedux';
import {updateUserThunk} from '../../redux/thunks/auth.thunks';
import {useRoute} from '@react-navigation/native';
import {updateProducts} from '../../redux/reducers/productSlice';

const useAddReviewScreen = () => {
  const dispatch = useAppDispatch();
  const {user} = useAppSelector(state => state.auth);
  const {products} = useAppSelector(state => state.products);
  const {reviews} = useAppSelector(state => state.auth.user);

  const navigation = useNavigation<ReviewScreenNavigationProp>();
  const route = useRoute<ReviewScreenRouteProp>();
  const {item} = route.params;
  console.log('data Product' + item.image);
  const onUpdate = (data: AddReviewField, data2: ReviewType) => {
    if (!user) {
      return;
    }
    const newReview: ReviewType = {
      ...data,
      image: item.image,
    };
    const newUser: UserType = {
      ...user,
      reviews: [...user.reviews, newReview],
    };
    const newProduct: ProductType = {
      ...item,
      review: [...item.review, newReview],
    };
    console.log('review' + newUser.reviews);
    dispatch(updateUserThunk(newUser));
    // dispatch(updateReview(newProduct));
  };
  return {
    onUpdate,
    products,
  };
};

export default useAddReviewScreen;
