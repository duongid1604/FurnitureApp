import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {useNavigation} from '@react-navigation/native';

import {
  AddShippingAddressNavigationProp,
  ShippingAddressFormFields,
  ShippingAddressType,
  UserType,
} from '../../types';
import {useAppDispatch, useAppSelector} from '../redux/useRedux';
import {updateUserThunk} from '../../redux/thunks/auth.thunks';

const useAddShippingAddressScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<AddShippingAddressNavigationProp>();
  const {user} = useAppSelector(state => state.auth);

  const onAddNewAddress = (data: ShippingAddressFormFields) => {
    if (!user) {
      return;
    }

    const newAddress: ShippingAddressType = {
      ...data,
      id: uuidv4(),
    };

    const newUser: UserType = {
      ...user,
      shippingAddress: [...user.shippingAddress, newAddress],
    };

    dispatch(updateUserThunk(newUser));

    navigation.navigate('ShippingAddress');
  };

  return {onAddNewAddress};
};

export default useAddShippingAddressScreen;
