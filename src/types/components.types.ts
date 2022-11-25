import type {TextInputProps} from 'react-native';

import {
  Control,
  FieldErrorsImpl,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';

export type CustomInputProps<T extends FieldValues> = {
  label: string;
  field: Path<T>;
  control: Control<T>;
  errors?: Partial<FieldErrorsImpl<T>>;
  rules?: RegisterOptions;
  textInputProps?: TextInputProps;
};
