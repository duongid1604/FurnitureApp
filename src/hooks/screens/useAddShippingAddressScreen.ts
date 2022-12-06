import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {useNavigation, useRoute} from '@react-navigation/native';

import {
  AddShippingAddressNavigationProp,
  AddShippingAddressRouteProp,
  ShippingAddressFormFields,
  ShippingAddressType,
  UserType,
} from '../../types';
import {useAppDispatch, useAppSelector} from '../redux/useRedux';
import {updateUserThunk} from '../../redux/thunks/auth.thunks';

const useAddShippingAddressScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<AddShippingAddressNavigationProp>();
  const screenIsNavigated =
    useRoute<AddShippingAddressRouteProp>().params?.from;

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
      shippingAddresses: [...user.shippingAddresses, newAddress],
      selectedAddress: newAddress,
    };

    dispatch(updateUserThunk(newUser));

    if (screenIsNavigated === 'shippingAddress') {
      navigation.navigate('ShippingAddress', {user: newUser});
    } else if (screenIsNavigated === 'checkout') {
      navigation.goBack();
    }
  };

  return {onAddNewAddress};
};

export default useAddShippingAddressScreen;
