import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {HomeScreenProps} from '../../types';
import {TestButton} from '../components';

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const moveToProductScreenHandler = () => {
    navigation.navigate('Product');
  };

  return (
    <View>
      <Text>HomeScreen</Text>
      <TestButton name="Move To Product" onPress={moveToProductScreenHandler} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
