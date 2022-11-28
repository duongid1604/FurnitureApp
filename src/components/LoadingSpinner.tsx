import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React from 'react';
import {COLORS} from '../constants';

type Props = {
  color?: string;
  size?: 'large' | 'small';
};

const LoadingSpinner = ({size = 'large', color = COLORS.SUCCESS}: Props) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default LoadingSpinner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
