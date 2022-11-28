import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {COLORS, FONTS, FONT_SIZE, FONT_WEIGHT} from '../constants';
import LoadingSpinner from './LoadingSpinner';

type Props = {
  children: String | undefined;
  onPress?: () => void;
  extraStyle?: ViewStyle;
  extraTextStyle?: TextStyle;
  disable?: boolean;
};

const BigCustomButton = ({
  children,
  onPress,
  extraStyle,
  extraTextStyle,
  disable,
}: Props) => {
  return (
    <>
      {!disable ? (
        <Pressable
          style={({pressed}) =>
            pressed
              ? [styles.button, styles.pressed, extraStyle]
              : [styles.button, extraStyle]
          }
          onPress={onPress}>
          <Text style={[styles.text, extraTextStyle]}>{children}</Text>
        </Pressable>
      ) : (
        <View style={[styles.disableButton, extraStyle]}>
          <LoadingSpinner color={COLORS.WHITE} />
        </View>
      )}
    </>
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
  disableButton: {
    width: '100%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.MAIN,
    paddingVertical: 16,
  },
  pressed: {
    opacity: 0.25,
  },
  text: {
    paddingVertical: 16,
    fontFamily: FONTS.POPPINS,
    fontWeight: FONT_WEIGHT.REGULAR,
    fontSize: FONT_SIZE.H5,
    color: COLORS.WHITE,
  },
  disableText: {
    backgroundColor: COLORS.NEUTRAL_20,
  },
});
