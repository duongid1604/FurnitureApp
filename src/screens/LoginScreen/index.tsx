import {yupResolver} from '@hookform/resolvers/yup';
import React from 'react';
import {useForm} from 'react-hook-form';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import * as yup from 'yup';

import {
  AuthHeader,
  BigCustomButton,
  CustomInput,
  CustomScreenContainer,
  CustomTextButton,
  ImageCustomButton,
} from '../../components';
import {COLORS, FONT_SIZE, ICON, LINE_HEIGHT} from '../../constants';
import {useAppSelector, useLoginScreen} from '../../hooks';
import {LoginFormFields, LoginScreenProps} from '../../types';
import {scaleUI} from '../../utils';

const schema = yup
  .object({
    email: yup
      .string()
      .email('Email is invalid!')
      .required('Email is required!'),
    password: yup
      .string()
      .min(8, 'Your password must be at least 8 characters.')
      .required('Password is required!'),
  })
  .required();

const LoginScreen = ({}: LoginScreenProps) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginFormFields>({resolver: yupResolver(schema)});

  const {
    isPasswordHidden,
    onLogin,
    onLoginWithGoogle,
    onLoginWithFacebook,
    onGoToSingup,
    onGotoForgotPassword,
    onToggleShowPassword,
  } = useLoginScreen();

  const {isLoading} = useAppSelector(state => state.auth);

  return (
    <CustomScreenContainer>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContainer}>
        <AuthHeader title="Hello" titleBold="Welcome back!" />

        {/* Form */}
        <View style={styles.form}>
          <CustomInput<LoginFormFields>
            label="Email"
            field="email"
            control={control}
            error={errors}
            textInputProps={{
              maxLength: 30,
              placeholder: 'Enter your email!',
            }}
          />
          <CustomInput<LoginFormFields>
            label="Password"
            field="password"
            control={control}
            error={errors}
            textInputProps={{
              maxLength: 20,
              secureTextEntry: !isPasswordHidden,
              placeholder: 'Enter your password!',
            }}
            hasIcon
            activeIcon={<Entypo name="eye" size={20} color={COLORS.MAIN} />}
            icon={<Entypo name="eye-with-line" size={20} color={COLORS.MAIN} />}
            onPress={onToggleShowPassword}
          />
          <CustomTextButton
            name="Forgot Password"
            extraStyle={styles.forgotPassword}
            onPress={onGotoForgotPassword}
          />
          <BigCustomButton onPress={handleSubmit(onLogin)} disable={isLoading}>
            Log in
          </BigCustomButton>
          <CustomTextButton
            name="Sign up"
            extraStyle={styles.singup}
            onPress={onGoToSingup}
          />
          {/* Social login */}
          <View style={styles.socialLogin}>
            <View style={styles.socialTitle}>
              <View style={styles.line} />
              <Text style={styles.socialText}>Or continue with</Text>
              <View style={styles.line} />
            </View>
            <View style={styles.socialBtnContainer}>
              <ImageCustomButton
                source={ICON.GOOGLE}
                onPress={onLoginWithGoogle}
                extraImageStyle={styles.socialIcon}
              />
              <ImageCustomButton
                source={ICON.FACEBOOK}
                onPress={onLoginWithFacebook}
                extraImageStyle={styles.socialIcon}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </CustomScreenContainer>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  scrollView: {
    margin: -20,
  },
  scrollViewContainer: {
    padding: 20,
  },

  form: {
    shadowColor: COLORS.MAIN,
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,
    elevation: 4,
    backgroundColor: COLORS.WHITE,
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  forgotPassword: {
    marginBottom: 20,
  },
  singup: {
    marginTop: 20,
  },
  socialLogin: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  line: {
    width: scaleUI(60),
    backgroundColor: COLORS.MAIN,
    height: 1,
  },
  socialText: {
    fontSize: FONT_SIZE.BODY,
    lineHeight: LINE_HEIGHT.BODY,
    color: COLORS.MAIN,
    marginHorizontal: 20,
  },
  socialBtnContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  socialIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
});
