import React from 'react';
import {Pressable, StyleSheet, Text, TextStyle, ViewStyle} from 'react-native';
import {COLORS, FONTS, FONT_SIZE, FONT_WEIGHT} from '../constants';

type Props = {
  children: String | undefined;
  onPress?: () => void;
  extraStyle?: ViewStyle;
  extraTextStyle?: TextStyle;
};

const BigCustomButton = ({
  children,
  onPress,
  extraStyle,
  extraTextStyle,
}: Props) => {
  return (
    <Pressable
      style={({pressed}) =>
        pressed
          ? [styles.button, styles.pressed, extraStyle]
          : [styles.button, extraStyle]
      }
      onPress={onPress}>
      <Text style={[styles.text, extraTextStyle]}>{children}</Text>
    </Pressable>
  );
};

export default BigCustomButton;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.MAIN,
  },
  pressed: {
    opacity: 0.25,
  },
  text: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    fontFamily: FONTS.POPPINS,
    fontWeight: FONT_WEIGHT.REGULAR,
    fontSize: FONT_SIZE.H5,
    color: COLORS.WHITE,
  },
});
