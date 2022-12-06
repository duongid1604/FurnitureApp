import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, ICON} from '../constants';
import {scaleUI} from '../utils';

type Props = {
  onPress: () => void;
};

const AddButton = ({onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image source={ICON.PLUS} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: scaleUI(40, true),
    right: scaleUI(40),
    backgroundColor: COLORS.WHITE,
    shadowColor: COLORS.SUB,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    width: scaleUI(52, true),
    height: scaleUI(52, true),
    borderRadius: scaleUI(90, true),
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
});
