import React from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS, FONTS, FONT_SIZE} from '../constants';
import {scaleUI} from '../utils';

type Props = {
  title?: string;
  titleBold?: string;
  extraTitleStyle?: StyleProp<ViewStyle>;
};

const AuthHeader = ({title, titleBold, extraTitleStyle}: Props) => {
  return (
    <>
      <View style={styles.header}>
        <View style={styles.line} />
        <View style={styles.icon}>
          <MaterialCommunityIcons
            name="sofa-single-outline"
            color={COLORS.MAIN}
            size={30}
          />
        </View>
        <View style={styles.line} />
      </View>
      <View style={[styles.title, extraTitleStyle]}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.titleTextBold}>{titleBold}</Text>
      </View>
    </>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  line: {
    width: scaleUI(120),
    backgroundColor: COLORS.SUB,
    height: 2,
  },
  icon: {
    borderWidth: 1,
    width: 60,
    height: 60,
    borderRadius: 60,
    borderColor: COLORS.MAIN,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    alignItems: 'center',
    marginVertical: scaleUI(24, true),
  },
  titleText: {
    fontSize: FONT_SIZE.H3,
    fontFamily: FONTS.POPPINS,
    color: COLORS.MAIN,
    lineHeight: 38.4,
    textTransform: 'capitalize',
  },
  titleTextBold: {
    fontSize: FONT_SIZE.H3,
    fontFamily: FONTS.POPPINS_BOLD,
    color: COLORS.MAIN,
    textTransform: 'uppercase',
    lineHeight: 38.4,
  },
});
