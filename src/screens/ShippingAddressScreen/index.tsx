import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {AddButton, CustomScreenContainer} from '../../components';
import {IMAGES} from '../../constants';
import {useShippingAddressScreen} from '../../hooks';
import {ShippingAddressScreenProps, ShippingAddressType} from '../../types';
import EmptyStateScreen from '../EmptyStateScreen';
import LoadingScreen from '../LoadingScreen';
import {ShippingAddressItem} from './components';

const ShippingAddressScreen = ({}: ShippingAddressScreenProps) => {
  const {
    user,
    selectedAddress,
    addressesState,
    onSelectAddress,
    onGotoAddShippingAddressScreen,
    onDeleteAddress,
  } = useShippingAddressScreen();

  if (!user) {
    return <LoadingScreen />;
  }

  if (addressesState.length === 0) {
    return (
      <EmptyStateScreen
        title="no addresses yet"
        content="You haven't had any addresses yet."
        source={IMAGES.NO_ORDERS}
        buttonText="Add address"
        onButtonPress={onGotoAddShippingAddressScreen}
      />
    );
  }
  const renderShippingAddressItem = ({item}: {item: ShippingAddressType}) => {
    return (
      <ShippingAddressItem
        onToggleCheckBox={onSelectAddress}
        shippingAddress={item}
        isActive={item.id === selectedAddress?.id}
        onDelete={onDeleteAddress}
      />
    );
  };

  return (
    <CustomScreenContainer smallPadding>
      <FlatList
        style={styles.flatList}
        contentContainerStyle={styles.flatListContainer}
        data={[...addressesState]?.reverse()}
        renderItem={renderShippingAddressItem}
        keyExtractor={item => item.id}
      />
      <AddButton onPress={onGotoAddShippingAddressScreen} />
    </CustomScreenContainer>
  );
};

export default ShippingAddressScreen;

const styles = StyleSheet.create({
  flatList: {
    margin: -20,
  },
  flatListContainer: {
    padding: 20,
  },
});
