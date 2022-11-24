import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useTestScreen} from '../../hooks';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type Props = {};

const TestScreen = ({}: Props) => {
  const {count, onDecrease, onIncrease} = useTestScreen();

  return (
    <View style={styles.screen}>
      <TouchableOpacity onPress={onIncrease}>
        <Text>Increase</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onDecrease}>
        <Text>Decrease</Text>
      </TouchableOpacity>
      <Text>Count: {count}</Text>
      <View style={styles.icon}>
        <MaterialIcons name="file-download" size={50} color="#900" />
      </View>
    </View>
  );
};

export default TestScreen;

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  icon: {
    height: 100,
    width: 100,
  },
});
