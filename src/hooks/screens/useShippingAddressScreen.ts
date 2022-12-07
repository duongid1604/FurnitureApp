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

  const [selectedAddress, setSelectedAddress] =
    useState<ShippingAddressType | null>(user.selectedAddress);
  const [addressesState, setAddressesState] = useState<ShippingAddressType[]>(
    user.shippingAddresses,
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    return navigation.addListener('focus', () => {
      setSelectedAddress(user.selectedAddress);
      setAddressesState(user.shippingAddresses);
    });
  }, [navigation, user.selectedAddress, user.shippingAddresses]);

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
    navigation.navigate('AddShippingAddress', {from: 'shippingAddress'});
  };

  const onDeleteAddress = (shippingAddress: ShippingAddressType) => {
    if (!user) {
      return;
    }
    if (user.shippingAddresses.length === 0) {
      return;
    }
    const currSelectedAddress = selectedAddress;
    const newShippingAddresses = addressesState.filter(
      address => address.id !== shippingAddress.id,
    );
    if (currSelectedAddress && currSelectedAddress?.id === shippingAddress.id) {
      const selectedAddressIndex = addressesState.findIndex(
        address => address.id === currSelectedAddress.id,
      );
      let newSelectedAddress: ShippingAddressType | null;
      if (addressesState.length === 1) {
        newSelectedAddress = null;
      } else if (selectedAddressIndex === addressesState.length - 1) {
        newSelectedAddress = addressesState[selectedAddressIndex - 1];
      } else {
        newSelectedAddress = addressesState[selectedAddressIndex + 1];
      }

      const newUser: UserType = {
        ...user,
        selectedAddress: newSelectedAddress,
        shippingAddresses: newShippingAddresses,
      };
      dispatch(updateUserThunk(newUser));
      setSelectedAddress(newSelectedAddress);
    } else {
      const newUser: UserType = {
        ...user,
        shippingAddresses: newShippingAddresses,
      };
      dispatch(updateUserThunk(newUser));
    }

    setAddressesState(newShippingAddresses);
  };

  return {
    user,
    selectedAddress,
    addressesState,
    onSelectAddress,
    onGotoAddShippingAddressScreen,
    onDeleteAddress,
  };
};

export default useShippingAddressScreen;
