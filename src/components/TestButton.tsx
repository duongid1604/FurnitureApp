import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type Props = {
  onPress: () => void;
  name: string;
};

const TestButton = ({onPress, name}: Props) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Text>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TestButton;

const styles = StyleSheet.create({});
