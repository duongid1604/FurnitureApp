import React from 'react';
import {StyleSheet, View} from 'react-native';
import Lottie from 'lottie-react-native';
import {scaleUI} from '../utils';

const Loading5Point = () => {
  return (
    <View style={styles.container}>
      <Lottie
        source={require('../assets/LottieAnimation/square.json')}
        autoPlay
        loop
        imageAssetsFolder="../assets/LottieAnimation/"
        style={styles.point}
      />
    </View>
  );
};

export default Loading5Point;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  point: {
    width: scaleUI(100, true),
    height: scaleUI(100, true),
  },
});
