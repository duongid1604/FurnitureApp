import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {COLORS} from '../constants';

type Props = {
  children: JSX.Element | JSX.Element[];
  style?: ViewStyle;
  smallPadding?: boolean;
};

const CustomScreenContainer = ({children, style, smallPadding}: Props) => {
  return (
    <View
      style={
        smallPadding
          ? [styles.screen, styles.screenSmallPadding, style]
          : [styles.screen, style]
      }>
      {children}
    </View>
  );
};

export default CustomScreenContainer;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 54,
    backgroundColor: COLORS.WHITE,
  },
  screenSmallPadding: {
    paddingTop: 24,
  },
});
