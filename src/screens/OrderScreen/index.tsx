import React from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import {CustomScreenContainer} from '../../components';
import {useOrderScreen} from '../../hooks';
import {OrderTabEnum, OrderType} from '../../types';
import LoadingScreen from '../LoadingScreen';
import {OrderItem, TabButton} from './components';

type Props = {};

const OrderScreen = ({}: Props) => {
  const {user, tabIsSelected, onSetSelectedTab} = useOrderScreen();

  if (!user) {
    return <LoadingScreen />;
  }

  const renderOrder = ({item}: {item: OrderType}) => {
    console.log('order: ', item);
    return (
      <OrderItem
        id={item.id}
        orderCode={item.orderCode}
        date={item.date}
        status={item.status}
        totalQty={item.totalQty}
        totalPrice={item.totalPrice}
      />
    );
  };

  return (
    <CustomScreenContainer smallPadding>
      {/* list bar */}
      <View style={styles.tabList}>
        <TabButton
          name="Delivered"
          isActive={tabIsSelected === OrderTabEnum.delivered}
          onPress={() => onSetSelectedTab(OrderTabEnum.delivered)}
        />
        <TabButton
          name="Processing"
          isActive={tabIsSelected === OrderTabEnum.processing}
          onPress={() => onSetSelectedTab(OrderTabEnum.processing)}
        />
        <TabButton
          name="Canceled"
          isActive={tabIsSelected === OrderTabEnum.canceled}
          onPress={() => onSetSelectedTab(OrderTabEnum.canceled)}
        />
      </View>
      {/* order list */}
      <View style={styles.ordersContainer}>
        <FlatList
          data={user.orders}
          renderItem={renderOrder}
          keyExtractor={item => item.id}
          style={styles.flatList}
          contentContainerStyle={styles.flatListContainer}
        />
      </View>
    </CustomScreenContainer>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  tabList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ordersContainer: {
    marginVertical: 24,
    paddingBottom: 24,
  },
  flatList: {
    margin: -20,
  },
  flatListContainer: {
    padding: 20,
  },
});
