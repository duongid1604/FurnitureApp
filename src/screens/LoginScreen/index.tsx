import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomInput from '../components/CustomInput';

type Props = {};

const LoginScreen = (props: Props) => {
  return (
    <View style={styles.screen}>
      {/* <CustomInput label="Email" placeholder="Ex: bruno203@gmail.com" /> */}
      <Text>Hello!</Text>
      <Text>Welcome Back</Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screen: {},
});
