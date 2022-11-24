import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useTestScreen} from '../../hooks';

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
    </View>
  );
};

export default TestScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
