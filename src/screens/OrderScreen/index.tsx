import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
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

  const renderOrder = ({item}: {item: OrderType}) => (
    <OrderItem
      orderCode={item.orderCode}
      date={item.date}
      status={item.status}
      totalQty={item.totalQty}
      totalPrice={item.totalPrice}
    />
  );

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
        {/* <OrderItem
          orderCode="238562312"
          date="20/03/2020"
          status={OrderTabEnum.processing}
          totalQty={3}
          totalPrice={150}
        /> */}
        <FlatList
          data={user.orders}
          renderItem={renderOrder}
          keyExtractor={item => item.orderCode}
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
  },
});
