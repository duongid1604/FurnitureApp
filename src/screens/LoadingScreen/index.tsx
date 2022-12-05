import React from 'react';
import {StyleSheet, View} from 'react-native';
import {LoadingSpinner} from '../../components';

type Props = {};

const LoadingScreen = ({}: Props) => {
  return (
    <View style={styles.screen}>
      <LoadingSpinner />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
