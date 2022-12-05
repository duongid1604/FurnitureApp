import React from 'react';
import {StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
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
    onSelectAddress,
    onGotoAddShippingAddressScreen,
  } = useShippingAddressScreen();

  if (!user) {
    return <LoadingScreen />;
  }

  if (user.shippingAddress.length === 0) {
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
  const renderShippingAddressItem = ({item}: {item: ShippingAddressType}) => (
    <ShippingAddressItem
      onToggleCheckBox={onSelectAddress}
      shippingAddress={item}
      isActive={item.id === selectedAddress?.id}
    />
  );

  return (
    <CustomScreenContainer smallPadding>
      <FlatList
        style={styles.flatList}
        contentContainerStyle={styles.flatListContainer}
        data={user.shippingAddress}
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
