import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {COLORS} from '../constants';

type Props = {
  children: JSX.Element | JSX.Element[];
  style?: ViewStyle;
};

const CustomScreenContainer = ({children, style}: Props) => {
  return <View style={[styles.screen, style]}>{children}</View>;
};

export default CustomScreenContainer;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 54,
    backgroundColor: COLORS.WHITE,
  },
});
