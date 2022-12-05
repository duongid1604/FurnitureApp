import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {OrderNavigationProp, OrderTabEnum, OrderTabType} from '../../types';
import {useAppSelector} from '../redux/useRedux';

const useOrderScreen = () => {
  const navigation = useNavigation<OrderNavigationProp>();
  const [tabIsSelected, setTabIsSelected] = useState<OrderTabType>(
    OrderTabEnum.delivered,
  );

  const {user} = useAppSelector(state => state.auth);

  const onSetSelectedTab = (tabName: OrderTabType) => {
    setTabIsSelected(tabName);
  };

  const onBackHome = () => {
    navigation.navigate('HomeNavigator', {screen: 'Home'});
  };

  return {user, tabIsSelected, onSetSelectedTab, onBackHome};
};

export default useOrderScreen;
