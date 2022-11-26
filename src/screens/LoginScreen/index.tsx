import React from 'react';
import {useForm} from 'react-hook-form';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  BigCustomButton,
  CustomInput,
  CustomScreenContainer,
  CustomTextButton,
} from '../../components';
import {COLORS, FONTS, FONT_SIZE, FONT_WEIGHT} from '../../constants';
import {useLoginScreen} from '../../hooks';
import {LoginFormFields} from '../../types';
import {scaleUI} from '../../utils';
import AuthHeader from './components/AuthHeader';

type Props = {};

const LoginScreen = (props: Props) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginFormFields>();

  const {onLogin} = useLoginScreen();

  return (
    <CustomScreenContainer>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContainer}>
        <AuthHeader />
        <View style={styles.title}>
          <Text style={styles.titleText}>Hello!</Text>
          <Text style={styles.titleTextBold}>Welcome Back</Text>
        </View>
        {/* Form */}
        <View style={styles.form}>
          <CustomInput<LoginFormFields>
            label="Email"
            field="email"
            control={control}
            error={errors}
            textInputProps={{
              maxLength: 30,
            }}
          />
          <CustomInput<LoginFormFields>
            label="Password"
            field="password"
            control={control}
            error={errors}
            textInputProps={{
              maxLength: 20,
              secureTextEntry: true,
            }}
            hasIcon
            activeIcon={<Entypo name="eye" size={20} color={COLORS.MAIN} />}
            icon={<Entypo name="eye-with-line" size={20} color={COLORS.MAIN} />}
          />
          <CustomTextButton
            name="Forgot Password"
            extraStyle={styles.forgotPassword}
          />
          <BigCustomButton onPress={handleSubmit(onLogin)}>
            Log in
          </BigCustomButton>
          <CustomTextButton name="Sign up" extraStyle={styles.singup} />
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
  title: {
    alignItems: 'center',
    marginVertical: scaleUI(32, true),
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
});
