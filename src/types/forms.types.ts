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
};
export type CustomSearchInputProps<TFormValues extends FieldValues> = {
  onPress?: () => void;
  field: Path<TFormValues>;
  control: Control<TFormValues>;
  name: String;
  placeholder: String;
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
  cardNumber: string;
  cvv: string;
  expirationDate: string;
};

export type ForgotPasswordFormFields = {
  email: string;
};
