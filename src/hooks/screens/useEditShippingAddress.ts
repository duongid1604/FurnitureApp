import {useNavigation} from '@react-navigation/native';

import {updateUserThunk} from '../../redux/thunks/auth.thunks';
import {
  EditShippingAddressNavigationProp,
  ShippingAddressFormFields,
  ShippingAddressType,
  UserType,
} from '../../types';
import {useAppDispatch, useAppSelector} from '../redux/useRedux';

const useEditShippingAddress = (currAddress: ShippingAddressType) => {
  const {user} = useAppSelector(state => state.auth);
  const dipsatch = useAppDispatch();
  const navigation = useNavigation<EditShippingAddressNavigationProp>();

  const onEditAddress = (data: ShippingAddressFormFields) => {
    if (!user) {
      return;
    }

    let newUser: UserType;

    const newAddress = {
      ...data,
      id: currAddress.id,
    };

    const newAddresses = [...user.shippingAddresses];
    const newAddressIndex = newAddresses.findIndex(
      address => address.id === newAddress.id,
    );
    newAddresses[newAddressIndex] = newAddress;

    if (currAddress.id === user.selectedAddress?.id) {
      newUser = {
        ...user,
        shippingAddresses: newAddresses,
        selectedAddress: newAddress,
      };
    } else {
      newUser = {
        ...user,
        shippingAddresses: newAddresses,
      };
    }

    dipsatch(updateUserThunk(newUser));

    navigation.navigate('ShippingAddress', {user: newUser});
  };

  return {onEditAddress};
};

export default useEditShippingAddress;
