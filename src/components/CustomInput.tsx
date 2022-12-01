import React from 'react';
import {Controller} from 'react-hook-form';
import {StyleSheet, Text, TextInput, View} from 'react-native';

import {COLORS, FONTS, FONT_SIZE, LINE_HEIGHT} from '../constants';
import {CustomInputProps} from '../types';
import CustomIconButton from './CustomIconButton';

const CustomInput = <TFormValues extends Record<string, unknown>>({
  label,
  textInputProps,
  hasIcon,
  icon,
  activeIcon,
  onPress,
  error,
  field,
  control,
  rules,
}: CustomInputProps<TFormValues>) => {
  const errorMessage =
    error?.[field as keyof typeof error]?.message?.toString();

  return (
    <View style={styles.outerContainer}>
      <View
        style={
          errorMessage
            ? [styles.container, styles.hasErrorContainer]
            : styles.container
        }>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.inputContainer}>
          <Controller
            name={field}
            control={control}
            rules={rules}
            render={({field: {onChange, value}}) => (
              <TextInput
                style={styles.textInput}
                {...textInputProps}
                onChangeText={onChange}
                value={value?.toString()}
              />
            )}
          />
          {hasIcon && (
            <CustomIconButton
              activeIcon={activeIcon}
              icon={icon}
              onPress={onPress}
            />
          )}
        </View>
      </View>
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  outerContainer: {
    width: '100%',
  },
  container: {
    width: '100%',
    backgroundColor: COLORS.WHITE,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: COLORS.SECONDARY,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 20,
  },
  hasErrorContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: FONT_SIZE.SMALL,
    color: COLORS.SUB,
    fontFamily: FONTS.POPPINS,
    lineHeight: LINE_HEIGHT.SMALL,
    textTransform: 'capitalize',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    fontFamily: FONTS.POPPINS,
    fontSize: FONT_SIZE.LABEL,
    lineHeight: LINE_HEIGHT.LABEL,
    flex: 1,
    padding: 0,
  },
  error: {
    color: COLORS.DANGER,
    marginBottom: 20,
  },
});
