import {yupResolver} from '@hookform/resolvers/yup';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import * as yup from 'yup';

import {useForm} from 'react-hook-form';
import {
  AuthHeader,
  BigCustomButton,
  CustomInput,
  CustomScreenContainer,
  CustomTextButton,
} from '../../components';
import {COLORS, FONTS, FONT_SIZE, LINE_HEIGHT} from '../../constants';
import useSignupScreen from '../../hooks/screens/useSignupScreen';
import {SignupFormFields, SignupScreenProps} from '../../types';
import {useAppSelector} from '../../hooks';

const schema = yup
  .object({
    name: yup
      .string()
      .matches(/^[A-Za-z ]*$/, 'Name is invalid!')
      .required('Name is required!'),
    email: yup
      .string()
      .email('Email is invalid!')
      .required('Email is required!'),
    password: yup
      .string()
      .min(8, 'Your password must be at least 8 characters.')
      .required('Password is required!'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required('Confirm password is required!'),
  })
  .required();

const SignupScreen = ({}: SignupScreenProps) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignupFormFields>({resolver: yupResolver(schema)});

  const {
    isConfirmPasswordHidden,
    isPasswordHidden,
    onSignup,
    onGoToLogin,
    onToggleShowPassword,
    onToggleShowConfirmPassword,
  } = useSignupScreen();

  const {isLoading} = useAppSelector(state => state.auth);

  return (
    <CustomScreenContainer>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContainer}>
        <AuthHeader
          titleBold="Welcome"
          extraTitleStyle={styles.extraTitleStyle}
        />
        <View style={styles.form}>
          <CustomInput<SignupFormFields>
            label="Name"
            field="name"
            control={control}
            error={errors}
            textInputProps={{
              placeholder: 'Enter your name!',
              maxLength: 30,
            }}
          />
          <CustomInput<SignupFormFields>
            label="Email"
            field="email"
            control={control}
            error={errors}
            textInputProps={{
              placeholder: 'Enter your email!',
              maxLength: 30,
            }}
          />
          <CustomInput<SignupFormFields>
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
          <CustomInput<SignupFormFields>
            label="Confirm Password"
            field="confirmPassword"
            control={control}
            error={errors}
            textInputProps={{
              maxLength: 20,
              secureTextEntry: !isConfirmPasswordHidden,
              placeholder: 'Confirm your password!',
            }}
            hasIcon
            activeIcon={<Entypo name="eye" size={20} color={COLORS.MAIN} />}
            icon={<Entypo name="eye-with-line" size={20} color={COLORS.MAIN} />}
            onPress={onToggleShowConfirmPassword}
          />
          <BigCustomButton disable={isLoading} onPress={handleSubmit(onSignup)}>
            Sign up
          </BigCustomButton>
          <View style={styles.signinContainer}>
            <Text style={styles.signinText}>Already have account?</Text>
            <CustomTextButton
              name="Sign in"
              extraStyle={styles.signinBtnText}
              extraTextStyle={styles.signinBtnText}
              onPress={onGoToLogin}
            />
          </View>
        </View>
        {/* Form */}
      </ScrollView>
    </CustomScreenContainer>
  );
};

export default SignupScreen;

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
  signinContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  signinText: {
    fontSize: FONT_SIZE.LABEL,
    lineHeight: LINE_HEIGHT.LABEL,
    color: COLORS.MAIN,
  },
  signinBtnText: {
    marginLeft: 4,
    fontFamily: FONTS.POPPINS_BOLD,
    fontSize: FONT_SIZE.LABEL,
    lineHeight: LINE_HEIGHT.LABEL,
  },
  extraTitleStyle: {
    marginTop: -10,
  },
});
