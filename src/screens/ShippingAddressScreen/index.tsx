import React from 'react';
import {StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {CustomScreenContainer} from '../../components';
import {useShippingAddressScreen} from '../../hooks';
import {ShippingAddressType} from '../../types';
import LoadingScreen from '../LoadingScreen';
import {ShippingAddressItem} from './components';

type Props = {};

const ShippingAddressScreen = ({}: Props) => {
  const {selectedAddress, user, onToggleCheckBox} = useShippingAddressScreen();

  if (!user) {
    return <LoadingScreen />;
  }

  // if(user.shippingAddress.length === 0) {
  //   return <EmptyStateScreen />
  // }
  const renderShippingAddressItem = ({item}: {item: ShippingAddressType}) => (
    <ShippingAddressItem
      onToggleCheckBox={onToggleCheckBox}
      {...item}
      isActive={item.id === selectedAddress}
    />
  );

  return (
    <CustomScreenContainer smallPadding>
      <FlatList
        data={user.shippingAddress}
        renderItem={renderShippingAddressItem}
        keyExtractor={item => item.id}
      />
    </CustomScreenContainer>
  );
};

export default ShippingAddressScreen;

const styles = StyleSheet.create({});
