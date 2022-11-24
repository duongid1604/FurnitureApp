import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {COLORS, FONTS, FONT_SIZE, FONT_WEIGHT} from '../../constants';

interface Props {
  children: String | undefined;
}

const NormalCustomButton: React.FC<Props> = ({children}) => {
  return (
    <Pressable
      style={({pressed}) =>
        pressed ? [styles.button, styles.pressed] : styles.button
      }>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default NormalCustomButton;

const styles = StyleSheet.create({
  button: {
    width: 127,
    height: 36,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.MAIN,
  },
  pressed: {
    opacity: 0.25,
  },
  text: {
    fontFamily: FONTS.POPPINS,
    fontWeight: FONT_WEIGHT.REGULAR,
    fontSize: FONT_SIZE.BODY,
    color: COLORS.WHITE,
    lineHeight: 24,
  },
});
