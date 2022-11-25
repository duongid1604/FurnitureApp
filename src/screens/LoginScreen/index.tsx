import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CustomInput, CustomScreenContainer} from '../../components';
import {COLORS, FONTS, FONT_SIZE, FONT_WEIGHT} from '../../constants';
import {scaleUI} from '../../utils';
import AuthHeader from './components/AuthHeader';

type Props = {};

const LoginScreen = (props: Props) => {
  return (
    <CustomScreenContainer>
      <AuthHeader />
      <View style={styles.title}>
        <Text style={styles.titleText}>Hello!</Text>
        <Text style={styles.titleTextBold}>Welcome Back</Text>
      </View>
      {/* Form */}
      <View style={styles.form}>
        <CustomInput
          label="Email"
          placeholder="Ex: hello@gmail.com"
          inputProps={{
            maxLength: 20,
          }}
        />
        <CustomInput
          label="Email"
          placeholder="Ex: hello@gmail.com"
          inputProps={{
            maxLength: 20,
          }}
        />
      </View>
    </CustomScreenContainer>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  title: {
    alignItems: 'center',
    marginTop: scaleUI(32, true),
  },
  titleText: {
    fontSize: FONT_SIZE.H3,
    fontFamily: FONTS.POPPINS,
    color: COLORS.MAIN,
    lineHeight: 38.4,
  },
  titleTextBold: {
    fontSize: FONT_SIZE.H3,
    fontFamily: FONTS.POPPINS_BOLD,
    color: COLORS.MAIN,
    textTransform: 'uppercase',
    fontWeight: FONT_WEIGHT.BOLD,
    lineHeight: 38.4,
  },
  form: {
    shadowColor: COLORS.MAIN,
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,
    elevation: 23,
    backgroundColor: COLORS.WHITE,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
});
