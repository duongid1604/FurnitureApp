import {yupResolver} from '@hookform/resolvers/yup';
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import * as yup from 'yup';
import {useForm} from 'react-hook-form';

import {
  BigCustomButton,
  CustomInput,
  CustomScreenContainer,
} from '../../components';
import {
  EditShippingAddressScreenProps,
  ShippingAddressFormFields,
} from '../../types';
import {useEditShippingAddress} from '../../hooks';

const schema = yup
  .object({
    fullName: yup
      .string()
      .matches(
        /^[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ0-9\s\-\/.]+$/,
        'Please enter valid name',
      )
      .max(40)
      .required('Full name is required!'),
    address: yup
      .string()
      .matches(
        /^[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ0-9\s\-\/.]+$/,
        'Please enter valid address',
      )
      .max(40)
      .required('Address is required!'),
    zipcode: yup
      .string()
      .required('Zipcode is required!')
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(6, 'Must be exactly 6 digits')
      .max(6, 'Must be exactly 6 digits'),
    country: yup
      .string()
      .matches(
        /^[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ0-9\s\-\/.]+$/,
        'Please enter valid country',
      )
      .max(40)
      .required('Country is required!'),
    city: yup
      .string()
      .matches(
        /^[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ0-9\s\-\/.]+$/,
        'Please enter valid city',
      )
      .max(40)
      .required('City is required!'),
    district: yup
      .string()
      .matches(
        /^[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ0-9\s\-\/.]+$/,
        'Please enter valid district',
      )
      .max(40)
      .required('District is required!'),
  })
  .required();

const EditShippingAddress = ({route}: EditShippingAddressScreenProps) => {
  const {address} = route.params;

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<ShippingAddressFormFields>({
    resolver: yupResolver(schema),
    defaultValues: address,
  });

  const {onEditAddress} = useEditShippingAddress(address);

  return (
    <CustomScreenContainer smallPadding>
      <ScrollView style={styles.form}>
        <CustomInput<ShippingAddressFormFields>
          label="Full name"
          control={control}
          field="fullName"
          error={errors}
          textInputProps={{
            maxLength: 40,
            placeholder: 'Enter your full name',
          }}
        />
        <CustomInput<ShippingAddressFormFields>
          label="Address"
          control={control}
          field="address"
          error={errors}
          textInputProps={{
            maxLength: 40,
            placeholder: 'Enter your address',
          }}
        />
        <CustomInput<ShippingAddressFormFields>
          label="Zipcode (Postal Code)"
          control={control}
          field="zipcode"
          error={errors}
          textInputProps={{
            maxLength: 6,
            placeholder: 'Enter your zipcode',
            keyboardType: 'number-pad',
          }}
        />
        <CustomInput<ShippingAddressFormFields>
          label="Country"
          control={control}
          field="country"
          error={errors}
          textInputProps={{
            maxLength: 40,
            placeholder: 'Enter your country',
          }}
        />
        <CustomInput<ShippingAddressFormFields>
          label="City"
          control={control}
          field="city"
          error={errors}
          textInputProps={{
            maxLength: 40,
            placeholder: 'Enter your city',
          }}
        />
        <CustomInput<ShippingAddressFormFields>
          label="District"
          control={control}
          field="district"
          error={errors}
          textInputProps={{
            maxLength: 40,
            placeholder: 'Enter your district',
          }}
        />
      </ScrollView>

      <BigCustomButton
        extraStyle={styles.button}
        onPress={handleSubmit(onEditAddress)}>
        Save address
      </BigCustomButton>
    </CustomScreenContainer>
  );
};

export default EditShippingAddress;

const styles = StyleSheet.create({
  form: {
    flex: 1,
  },
  button: {
    marginVertical: 24,
  },
});
