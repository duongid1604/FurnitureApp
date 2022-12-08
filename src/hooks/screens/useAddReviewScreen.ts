import {
  AddReviewField,
  ProductType,
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
import {updateReview} from '../../redux/thunks/product.thunk';

const useAddReviewScreen = () => {
  const dispatch = useAppDispatch();
  const {user} = useAppSelector(state => state.auth);
  const {products} = useAppSelector(state => state.products);
  const {reviews} = useAppSelector(state => state.auth.user);

  const navigation = useNavigation<ReviewScreenNavigationProp>();
  const route = useRoute<ReviewScreenRouteProp>();
  const {item} = route.params;
  console.log('data Product' + item.image);
  const onUpdate = (data: AddReviewField) => {
    if (!user) {
      return;
    }
    const newReview: ReviewType = {
      ...data,
      id: item.id,
      image: item.image,
      name: item.name,
      price: item.price,
    };
    const newUser: UserType = {
      ...user,
      reviews: [...user.reviews, newReview],
    };
    const newProduct: ProductType = {
      ...item,
      review: [...item.review, newReview],
    };
    dispatch(updateUserThunk(newUser));
    dispatch(updateReview(item.id, newReview));
    navigation.navigate('MyReview');
  };
  return {
    user,
    onUpdate,
    products,
  };
};

export default useAddReviewScreen;
