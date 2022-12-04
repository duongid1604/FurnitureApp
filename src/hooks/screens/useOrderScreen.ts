import {useState} from 'react';
import {OrderTabEnum, OrderTabType} from '../../types';
import {useAppSelector} from '../redux/useRedux';

const useOrderScreen = () => {
  const [tabIsSelected, setTabIsSelected] = useState<OrderTabType>(
    OrderTabEnum.delivered,
  );

  const {user} = useAppSelector(state => state.auth);

  const onSetSelectedTab = (tabName: OrderTabType) => {
    setTabIsSelected(tabName);
  };

  return {user, tabIsSelected, onSetSelectedTab};
};

export default useOrderScreen;
