import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {useAppSelector} from '../redux/useRedux';

const useShippingAddressScreen = () => {
  const [selectedAddress, setSelectedAddress] = useState('');
  const {user} = useAppSelector(state => state.auth);
  const navigation = useNav;
  const onToggleCheckBox = (addressId: string) => {
    setSelectedAddress(addressId);
  };

  const onGotoAddShippingAddressScreen = () => {};
  return {selectedAddress, user, onToggleCheckBox};
};

export default useShippingAddressScreen;
