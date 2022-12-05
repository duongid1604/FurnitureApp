import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IMAGES} from '../../constants';
import useNotificationScreen from '../../hooks/screens/useNotificationScreen';
import EmptyStateScreen from '../EmptyStateScreen';
import LoadingScreen from '../LoadingScreen';

type Props = {};

const NotificationScreen = ({}: Props) => {
  const {user} = useNotificationScreen();

  if (!user) {
    return <LoadingScreen />;
  }

  if (!user.notifications || user.notifications?.length === 0) {
    return (
      <EmptyStateScreen
        hasButton={false}
        title="No notifications"
        content="You don't have any notifications."
        source={IMAGES.NO_NOTI}
      />
    );
  }

  return (
    <View>
      <Text>NotificationScreen</Text>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({});
