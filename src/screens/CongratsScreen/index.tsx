import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CongratsScreenProps} from '../../types';
import {TestButton} from '../components';

const CongratsScreen = ({navigation}: CongratsScreenProps) => {
  const trackOrdersHandler = () => {
    navigation.navigate('Order');
  };

  return (
    <View>
      <Text>CongratsScreen</Text>
      <TestButton name="Track Orders" onPress={trackOrdersHandler} />
    </View>
  );
};

export default CongratsScreen;

const styles = StyleSheet.create({});
