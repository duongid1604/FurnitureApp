import type {TextInputProps} from 'react-native';

import {
  Control,
  FieldErrorsImpl,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';

export type CustomInputProps<TFormValues extends FieldValues> = {
  label: string;
  textInputProps?: TextInputProps;
  hasIcon?: boolean;
  icon?: JSX.Element;
  activeIcon?: JSX.Element;
  onPress?: () => void;
  field: Path<TFormValues>;
  control: Control<TFormValues>;
  error?: Partial<FieldErrorsImpl<TFormValues>>;
  rules?: RegisterOptions;
  isSelectInput?: boolean;
};

export type LoginFormFields = {
  email: string;
  password: string;
};

export type SignupFormFields = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};
export type AddPaymentField = {
  cardHolderName: string;
  cardNumber: number;
  cvv: number;
  expirationDate: string;
};
export type AddReviewField = {
  id: string;
  image: string;
  comment: string;
  name: string;
  rate: number;
  price: number;
};
export type ForgotPasswordFormFields = {
  email: string;
};

export type ChangePasswordFormFields = {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

export type ShippingAddressFormFields = {
  fullName: string;
  address: string;
};
