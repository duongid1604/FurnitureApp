import {useNavigation, useRoute} from '@react-navigation/native';
import {useState} from 'react';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

import {updateUserThunk} from '../../redux/thunks/auth.thunks';
import {
  AddShippingAddressNavigationProp,
  AddShippingAddressRouteProp,
  Location,
  ShippingAddressFormFields,
  ShippingAddressType,
  UserType,
} from '../../types';
import {useAppDispatch, useAppSelector} from '../redux/useRedux';

const APIkey = 'pk.ae49be18ed7a9c055c6ede0d5205ee3a';
const baseUrl = `https://api.locationiq.com/v1/autocomplete?key=${APIkey}&q=`;

const useAddShippingAddressScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<AddShippingAddressNavigationProp>();
  const screenIsNavigated =
    useRoute<AddShippingAddressRouteProp>().params?.from;

  const {user} = useAppSelector(state => state.auth);
  const [locationData, setLocationData] = useState<Location[]>([]);
  const [searchText, setSearchText] = useState('');
  const [isSearchListShown, setIsSearchListShown] = useState(false);

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
    onAddNewAddress,
    onSearch,
    onSelectSuggesstion,
    setIsSearchListShown,
  };
};

export default useAddShippingAddressScreen;
