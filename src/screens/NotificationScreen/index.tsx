import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {v4 as uuidv4} from 'uuid';

import {CustomScreenContainer} from '../../components';
import {IMAGES} from '../../constants';
import useNotificationScreen from '../../hooks/screens/useNotificationScreen';
import {OrderType} from '../../types';
import deepCopy from '../../utils/deepCopy';
import EmptyStateScreen from '../EmptyStateScreen';
import LoadingScreen from '../LoadingScreen';
import {NotiItem} from './components';

type Props = {};

const NotificationScreen = ({}: Props) => {
  const {user, onDelete} = useNotificationScreen();

  if (!user) {
    return <LoadingScreen />;
  }

  const notification = user.notification;
  const ordersInNoti = notification.orders;

  if (notification && ordersInNoti.length === 0) {
    return (
      <EmptyStateScreen
        hasButton={false}
        title="No notifications"
        content="You don't have any notifications."
        source={IMAGES.NO_NOTI}
      />
    );
  }

  const renderNotiItem = ({item}: {item: OrderType}) => (
    <NotiItem key={item.id} orderItem={item} onDelete={onDelete} />
  );

  return (
    <CustomScreenContainer smallPadding style={styles.screen}>
      <FlatList
        listKey={uuidv4()}
        data={deepCopy(ordersInNoti).reverse()}
        renderItem={renderNotiItem}
        keyExtractor={item => item.id}
      />
    </CustomScreenContainer>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: 0,
  },
});
