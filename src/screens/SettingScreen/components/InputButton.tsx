import React from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import {TouchableCard} from '../../../components';
import {COLORS, FONTS, FONT_SIZE, LINE_HEIGHT} from '../../../constants';

type Props = {
  label: string;
  info: string;
  onPress?: () => void;
  extraTextInputProps?: TextInputProps;
};

const InputButton = ({label, info, extraTextInputProps, onPress}: Props) => {
  return (
    <TouchableCard onPress={onPress} extraStyle={styles.card}>
      <View>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          editable={false}
          style={styles.info}
          {...extraTextInputProps}>
          {info}
        </TextInput>
      </View>
    </TouchableCard>
  );
};

export default InputButton;

const styles = StyleSheet.create({
  card: {
    paddingVertical: 12,
  },
  label: {
    fontSize: FONT_SIZE.SMALL,
    lineHeight: LINE_HEIGHT.SMALL,
    color: COLORS.TERRITORY,
    fontFamily: FONTS.POPPINS,
    textTransform: 'capitalize',
  },
  info: {
    fontSize: FONT_SIZE.LABEL,
    color: COLORS.MAIN,
    lineHeight: LINE_HEIGHT.LABEL,
    fontFamily: FONTS.POPPINS,
    padding: 0,
  },
});
