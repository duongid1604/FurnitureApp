import React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import {COLORS, FONTS, FONT_SIZE, LINE_HEIGHT} from '../constants';

type Props = {
  name: string;
  onPress?: () => void;
  extraStyle?: ViewStyle;
  extraTextStyle?: TextStyle;
};

const CustomTextButton = ({
  name,
  onPress,
  extraStyle,
  extraTextStyle,
}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, extraStyle]}>
      <Text style={[styles.text, extraTextStyle]}>{name}</Text>
    </TouchableOpacity>
  );
};

export default CustomTextButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  text: {
    fontSize: FONT_SIZE.BODY,
    lineHeight: LINE_HEIGHT.BODY,
    color: COLORS.MAIN,
    fontFamily: FONTS.POPPINS,
  },
});
