import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {};

const LoginScreen = (props: Props) => {
  return (
    <View style={styles.screen}>
      {/* Header */}
      <MaterialCommunityIcons name="sofa-single-outline" size={24} />
      <Text>Hello!</Text>
      <Text>Welcome Back</Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screen: {},
});
