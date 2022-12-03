import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {COLORS, ICON} from '../constants';
import {scaleUI} from '../utils';

type Props = {
  onPress?: () => void;
};

const GotoAddScreen = ({onPress}: Props) => {
  return (
    <View style={styles.add}>
      <TouchableOpacity style={styles.addbutton} onPress={onPress}>
        <Image source={ICON.PLUS} style={styles.plus} />
      </TouchableOpacity>
    </View>
  );
};

export default GotoAddScreen;

const styles = StyleSheet.create({
  add: {
    width: scaleUI(330, false),
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    bottom: 50,
  },
  addbutton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: scaleUI(50, true),
    height: scaleUI(50, true),
    borderRadius: 100,
    backgroundColor: COLORS.WHITE,
  },
  plus: {
    width: 24,
    height: 24,
  },
});
