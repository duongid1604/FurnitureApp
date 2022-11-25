import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {COLORS, FONTS, FONT_SIZE, FONT_WEIGHT} from '../constants';

type Props = {
  label: string;
  placeholder?: string;
};

const CustomInput = ({label, placeholder}: Props) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput placeholder={placeholder} style={styles.textInput} />
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
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  label: {
    fontSize: FONT_SIZE.LABEL,
    color: COLORS.SUB,
    fontFamily: FONTS.POPPINS,
    lineHeight: 18,
  },
  textInput: {
    fontFamily: FONTS.POPPINS,
    fontSize: FONT_SIZE.BODY,
    lineHeight: 24,
  },
});
