import React from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS} from '../constants';

type Props = {
  children: JSX.Element | JSX.Element[];
};

const CustomScreenContainer = ({children}: Props) => {
  return <View style={styles.screen}>{children}</View>;
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
