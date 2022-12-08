import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';

import {updateUserThunk} from '../../redux/thunks/auth.thunks';
import {
  EditShippingAddressNavigationProp,
  Location,
  ShippingAddressFormFields,
  ShippingAddressType,
  UserType,
} from '../../types';
import {useAppDispatch, useAppSelector} from '../redux/useRedux';

const APIkey = 'pk.ae49be18ed7a9c055c6ede0d5205ee3a';
const baseUrl = `https://api.locationiq.com/v1/autocomplete?key=${APIkey}&q=`;

const useEditShippingAddress = (currAddress: ShippingAddressType) => {
  const {user} = useAppSelector(state => state.auth);
  const [locationData, setLocationData] = useState<Location[]>([]);
  const [searchText, setSearchText] = useState(currAddress.address);
  const [isSearchListShown, setIsSearchListShown] = useState(false);

  const dipsatch = useAppDispatch();
  const navigation = useNavigation<EditShippingAddressNavigationProp>();

  const onEditAddress = (data: ShippingAddressFormFields) => {
    if (!user) {
      return;
    }

    let newUser: UserType;

    const newAddress: ShippingAddressType = {
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

  const onSearch = async (
    text: string,
    onChangeForm: (text: string) => void,
  ) => {
    onChangeForm(text);
    setSearchText(text);
    if (text.length >= 2) {
      const endpoint = `${baseUrl}${text}&limit=5`;
      const res = await fetch(endpoint);
      if (res) {
        const resData = await res.json();
        if (resData.length > 0) {
          setLocationData(resData);
        }
      }
    }
  };

  const onSelectSuggesstion = (text: string) => {
    setIsSearchListShown(false);
    setSearchText(text);
  };

  return {
    searchText,
    locationData,
    isSearchListShown,
    onEditAddress,
    onSearch,
    onSelectSuggesstion,
    setIsSearchListShown,
  };
};

export default useEditShippingAddress;
