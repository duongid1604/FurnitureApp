import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS, FONT_SIZE, ICON, LINE_HEIGHT} from '../constants';

type Props = {
  title: string;
  hasIcon?: boolean;
};

const EditTitle = ({title, hasIcon}: Props) => {
  return (
    <View style={styles.title}>
      <Text style={styles.titleText}>{title}</Text>
      {hasIcon && <Image source={ICON.EDIT} style={styles.image} />}
    </View>
  );
};

export default EditTitle;

const styles = StyleSheet.create({
  title: {
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    fontSize: FONT_SIZE.BODY_18,
    lineHeight: LINE_HEIGHT.BODY,
    color: COLORS.SUB,
    fontFamily: FONTS.POPPINS,
  },
  image: {
    width: 24,
    height: 24,
  },
});
