import React from 'react';
import {StyleSheet, View} from 'react-native';
import Lottie from 'lottie-react-native';
import {scaleUI} from '../../utils';
type Props = {};

const LoadingScreen = ({}: Props) => {
  return (
    <View style={styles.screen}>
      <Lottie
        source={require('../../assets/LottieAnimation/plane.json')}
        autoPlay
        loop
        style={styles.plane}
      />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plane: {
    width: scaleUI(160, true),
    height: scaleUI(160, true),
  },
});
