import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {updateUserThunk} from '../../redux/thunks/auth.thunks';

import {
  ShippingAddressNavigationProp,
  ShippingAddressRouteProp,
  ShippingAddressType,
  UserType,
} from '../../types';
import {useAppDispatch} from '../redux/useRedux';

const useShippingAddressScreen = () => {
  const navigation = useNavigation<ShippingAddressNavigationProp>();
  const user = useRoute<ShippingAddressRouteProp>().params.user;
  const [selectedAddress, setSelectedAddress] = useState<
    ShippingAddressType | undefined
  >(user.selectedAddress);

  const dispatch = useAppDispatch();

  useEffect(() => {
    return navigation.addListener('focus', () => {
      setSelectedAddress(user.selectedAddress);
    });
  }, [navigation, user.selectedAddress]);

  const onSelectAddress = (shippingAddress: ShippingAddressType) => {
    if (!user) {
      return;
    }
    setSelectedAddress(shippingAddress);
    const newUser: UserType = {
      ...user,
      selectedAddress: shippingAddress,
    };
    dispatch(updateUserThunk(newUser));
  };

  const onGotoAddShippingAddressScreen = () => {
    navigation.navigate('AddShippingAddress');
  };

  return {
    user,
    selectedAddress,
    onSelectAddress,
    onGotoAddShippingAddressScreen,
  };
};

export default useShippingAddressScreen;
