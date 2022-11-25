import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Controller, UseControllerProps} from 'react-hook-form';
import {CustomInputProps} from '../../types';
import {TextInput} from 'react-native-gesture-handler';
import {COLORS} from '../../constants';

type Props = {
  label: string;
  placeholder?: string;
};

const CustomInput = ({label, placeholder}: Props) => {
  return (
    <View style={styles.inputContainer}>
      <Text>{label}</Text>
      <TextInput placeholder={placeholder} />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    backgroundColor: COLORS.WHITE,
    shadowColor: COLORS.BLACK_O2,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.24,
    shadowRadius: 17.43,
    elevation: 21,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: COLORS.SECONDARY,
  },
});
