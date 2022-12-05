import {useState} from 'react';
import {useAppSelector} from '../redux/useRedux';

const useShippingAddressScreen = () => {
  const [selectedAddress, setSelectedAddress] = useState('');
  const {user} = useAppSelector(state => state.auth);
  const onToggleCheckBox = (addressId: string) => {
    setSelectedAddress(addressId);
  };
  return {selectedAddress, user, onToggleCheckBox};
};

export default useShippingAddressScreen;
