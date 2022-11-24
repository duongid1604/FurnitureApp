import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BoardingScreenProps} from '../../types';

const BoardingScreen = ({navigation}: BoardingScreenProps) => {
  const moveToHomeHandler = () => {
    navigation.navigate('HomeNavigator');
  };

  return (
    <View>
      <Text>BoardingScreen</Text>
      <Text>BoardingScreen</Text>
      <TouchableOpacity onPress={moveToHomeHandler}>
        <Text>Move to Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BoardingScreen;

const styles = StyleSheet.create({});
