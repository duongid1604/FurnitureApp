import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {COLORS} from '../constants';

type Props = {
  children: JSX.Element | JSX.Element[];
  extraStyle?: StyleProp<ViewStyle>;
};

const Card = ({children, extraStyle}: Props) => {
  return <View style={[styles.container, extraStyle]}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.WHITE,
    borderRadius: 8,
    shadowColor: COLORS.SUB,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    marginBottom: 20,
    overflow: 'hidden',
    padding: 18,
  },
});
