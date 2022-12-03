import {yupResolver} from '@hookform/resolvers/yup';
import React from 'react';
import {useForm} from 'react-hook-form';
import {StyleSheet, TextInput, View} from 'react-native';
import * as yup from 'yup';

import {
  BigCustomButton,
  CustomInput,
  CustomScreenContainer,
  ShadowScrollView,
} from '../../components';
import {COLORS} from '../../constants';
import {useEditProfileScreen} from '../../hooks';
import {ChangePasswordFormFields, EditProfileScreenProps} from '../../types';

const schema = yup
  .object({
    currentPassword: yup
      .string()
      .min(8, 'Your password must be at least 8 characters.')
      .required('Password is required!'),
    newPassword: yup
      .string()
      .notOneOf(
        [yup.ref('currentPassword')],
        'Your new password cannot be the same as your current password!',
      )
      .min(8, 'Your password must be at least 8 characters.')
      .required('Password is required!'),
    confirmNewPassword: yup
      .string()
      .oneOf([yup.ref('newPassword')], 'Passwords must match')
      .required('Confirm password is required!'),
  })
  .required();

const EditProfileScreen = (props: EditProfileScreenProps) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<ChangePasswordFormFields>({resolver: yupResolver(schema)});

  const {user, field, isUpdating, onSaveName, onSavePassword, onChangeName} =
    useEditProfileScreen(props);

  return (
    <CustomScreenContainer smallPadding style={styles.container}>
      <>
        {field === 'Name' && (
          <TextInput
            style={styles.nameInput}
            defaultValue={user?.name}
            onChangeText={onChangeName}
          />
        )}
      </>
      <>
        {field === 'Password' && (
          <ShadowScrollView>
            <View style={styles.form}>
              <CustomInput<ChangePasswordFormFields>
                field="currentPassword"
                control={control}
                label="Current Password"
                error={errors}
              />
              <CustomInput<ChangePasswordFormFields>
                control={control}
                field="newPassword"
                label="New Password"
                error={errors}
              />
              <CustomInput<ChangePasswordFormFields>
                control={control}
                field="confirmNewPassword"
                label="Confirm New Password"
                error={errors}
              />
            </View>
          </ShadowScrollView>
        )}
      </>
      <BigCustomButton
        extraStyle={isUpdating ? styles.disableSaveBtn : styles.saveBtn}
        onPress={field === 'Name' ? onSaveName : handleSubmit(onSavePassword)}
        disable={isUpdating}>
        Save
      </BigCustomButton>
    </CustomScreenContainer>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  nameInput: {
    flex: 1,
    padding: 0,
    textAlignVertical: 'top',
  },
  saveBtn: {
    marginVertical: 24,
  },
  disableSaveBtn: {
    marginVertical: 24,
    paddingVertical: 32.5,
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
});
