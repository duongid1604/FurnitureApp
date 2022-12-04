import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS, FONT_SIZE, LINE_HEIGHT} from '../../../constants';
import {scaleUI} from '../../../utils';

type Props = {
  name: string;
  isActive?: boolean;
  onPress: () => void;
};

const TabButton = ({name, isActive, onPress}: Props) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={isActive ? styles.name : [styles.name, styles.disable]}>
        {name}
      </Text>
      {isActive && <View style={styles.underline} />}
    </Pressable>
  );
};

export default TabButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  name: {
    fontSize: FONT_SIZE.BODY_18,
    lineHeight: LINE_HEIGHT.BODY,
    fontFamily: FONTS.POPPINS_BOLD,
    color: COLORS.MAIN,
    textTransform: 'capitalize',
  },
  underline: {
    marginTop: 12,
    width: scaleUI(40),
    height: scaleUI(4, true),
    backgroundColor: COLORS.MAIN,
    borderRadius: 4,
  },
  disable: {
    fontFamily: FONTS.POPPINS,
    color: COLORS.SUB,
  },
});
