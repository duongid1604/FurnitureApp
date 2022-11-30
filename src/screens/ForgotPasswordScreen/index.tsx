import React from 'react';
import {useForm} from 'react-hook-form';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import * as yup from 'yup';

import {yupResolver} from '@hookform/resolvers/yup';
import {
  AuthHeader,
  BigCustomButton,
  CustomInput,
  CustomScreenContainer,
} from '../../components';
import {COLORS, FONT_SIZE} from '../../constants';
import {useAppSelector, useForgotPasswordScreen} from '../../hooks';
import {ForgotPasswordFormFields} from '../../types';

type Props = {};
const schema = yup
  .object({
    email: yup
      .string()
      .email('Email is invalid!')
      .required('Email is required!'),
  })
  .required();

const ForgotPasswordScreen = ({}: Props) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<ForgotPasswordFormFields>({
    resolver: yupResolver(schema),
  });

  const {emailIsSent, onSendPasswordResetEmail, onGotoLogin} =
    useForgotPasswordScreen();

  const {isLoading} = useAppSelector(state => state.auth);

  let form = (
    <View style={styles.form}>
      <CustomInput<ForgotPasswordFormFields>
        label="Email"
        field="email"
        control={control}
        error={errors}
        textInputProps={{
          placeholder: 'Enter your email!',
        }}
      />
      <BigCustomButton
        onPress={handleSubmit(onSendPasswordResetEmail)}
        disable={isLoading}>
        Send
      </BigCustomButton>
    </View>
  );

  if (emailIsSent && !isLoading) {
    form = (
      <View style={styles.form}>
        <Text style={styles.notiText}>Forgot Password Success</Text>
        <BigCustomButton onPress={onGotoLogin} disable={isLoading}>
          Back to login
        </BigCustomButton>
      </View>
    );
  }

  return (
    <CustomScreenContainer>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContainer}>
        <AuthHeader titleBold="Forgot Password" />

        {/* Form */}
        {form}
      </ScrollView>
    </CustomScreenContainer>
  );
};

export default ForgotPasswordScreen;

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

  notiText: {
    fontSize: FONT_SIZE.H5,
    textTransform: 'capitalize',
    color: COLORS.MAIN,
    marginBottom: 20,
  },
});
