import React from 'react';
import {StyleSheet, Text, View, TextInput, TextInputProps} from 'react-native';
import {COLORS, FONTS, FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT} from '../constants';

type Props = {
  label: string;
  placeholder?: string;
  inputProps?: TextInputProps;
};

const CustomInput = ({label, placeholder, inputProps}: Props) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        {...inputProps}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    backgroundColor: COLORS.WHITE,
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
    lineHeight: LINE_HEIGHT.LABEL,
  },
  textInput: {
    fontFamily: FONTS.POPPINS,
    fontSize: FONT_SIZE.BODY,
    lineHeight: LINE_HEIGHT.BODY,
  },
});
