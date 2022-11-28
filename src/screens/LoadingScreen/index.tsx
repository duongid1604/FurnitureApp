import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LoadingSpinner} from '../../components';

type Props = {};

const LoadingScreen = (props: Props) => {
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
