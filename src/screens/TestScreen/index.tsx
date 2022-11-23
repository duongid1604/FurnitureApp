import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {increase, decrease} from '../../redux/reducers/exampleSlice';

type Props = {};

const TestScreen = (props: Props) => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(state => state.example.value);

  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

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
