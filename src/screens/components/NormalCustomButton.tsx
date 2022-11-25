import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {COLORS, FONTS, FONT_SIZE, FONT_WEIGHT} from '../../constants';
import {scaleUI} from '../../utils';

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
    width: scaleUI(127, false),
    height: scaleUI(36, false),
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
