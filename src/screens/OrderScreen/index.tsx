import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {CustomScreenContainer} from '../../components';
import {IMAGES} from '../../constants';
import {useOrderScreen} from '../../hooks';
import {
  OrderScreenProps,
  OrderTabEnum,
  OrderTabType,
  OrderType,
} from '../../types';
import EmptyStateScreen from '../EmptyStateScreen';
import LoadingScreen from '../LoadingScreen';
import {OrderItem, TabButton} from './components';

const OrderScreen = ({}: OrderScreenProps) => {
  const {
    user,
    tabIsSelected,
    onSetSelectedTab,
    onBackHome,
    onBtnPress,
    onDeleteOrder,
  } = useOrderScreen();

  if (!user) {
    return <LoadingScreen />;
  }

  if (user.orders.length === 0) {
    return (
      <EmptyStateScreen
        title="no orders yet"
        content="You haven't placed any orders yet."
        source={IMAGES.NO_ORDERS}
        buttonText="Go shopping"
        onButtonPress={onBackHome}
      />
    );
  }

  const renderOrder = (item: OrderType, tab: OrderTabType) => {
    return (
      <OrderItem
        orderItem={item}
        currentTab={tab}
        onBtnPress={onBtnPress}
        onDeleteOrder={onDeleteOrder}
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
          data={[...user.orders].reverse()}
          renderItem={({item}) => renderOrder(item, tabIsSelected)}
          keyExtractor={item => item.id.toString()}
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
