import {yupResolver} from '@hookform/resolvers/yup';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as yup from 'yup';

import {
  BigCustomButton,
  CustomInput,
  CustomScreenContainer,
} from '../../components';
import {COLORS, FONTS, FONT_SIZE, LINE_HEIGHT} from '../../constants';
import {useEditShippingAddress} from '../../hooks';
import {
  EditShippingAddressScreenProps,
  Location,
  ShippingAddressFormFields,
} from '../../types';

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
        /^[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ0-9\s\-\/.,]+$/,
        'Please enter valid address',
      )
      .max(40)
      .required('Address is required!'),
  })
  .required();

const EditShippingAddressScreen = ({route}: EditShippingAddressScreenProps) => {
  const currAddress = route.params.address;

  const {
    searchText,
    locationData,
    isSearchListShown,
    setIsSearchListShown,
    onSearch,
    onSelectSuggesstion,
    onEditAddress,
  } = useEditShippingAddress(currAddress);

  const {
    control,
    handleSubmit,
    formState: {errors},
    setValue,
  } = useForm<ShippingAddressFormFields>({
    resolver: yupResolver(schema),
    defaultValues: currAddress,
  });

  const renderSuggestionItem = ({item}: {item: Location}) => {
    let mainText = item.address.name;
    if (item.type === 'city' && item.address.state) {
      mainText += ', ' + item.address.state;
    }
    mainText += ', ' + item.address.country;

    return (
      <Pressable
        style={styles.suggestionItem}
        android_ripple={{color: COLORS.BLACK_O2}}
        onPress={() => {
          onSelectSuggesstion(mainText);
          setValue('address', mainText);
        }}>
        <MaterialIcons
          name={item.type === 'city' ? 'location-city' : 'location-on'}
          color={'black'}
          size={30}
        />
        <View style={styles.suggestionContent}>
          <Text style={styles.address} numberOfLines={1}>
            {mainText}
          </Text>
          <Text style={styles.country} numberOfLines={1}>
            {item.address.country}
          </Text>
        </View>
      </Pressable>
    );
  };

  return (
    <CustomScreenContainer smallPadding>
      <View style={styles.outerContainer}>
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
        <View style={styles.searchInputContainer}>
          <Text style={styles.searchLabel}>Address</Text>
          <Controller
            name="address"
            control={control}
            render={({field: {onChange}}) => (
              <TextInput
                onFocus={() => setIsSearchListShown(true)}
                style={styles.searchTextInput}
                onChangeText={text => onSearch(text, onChange)}
                value={searchText}
                placeholder="Find a Location"
              />
            )}
          />
        </View>

        {errors?.address && (
          <Text style={styles.error}>{'Address is invalid'}</Text>
        )}

        {isSearchListShown && searchText && locationData.length > 0 ? (
          <FlatList
            style={styles.suggestionList}
            data={locationData}
            showsVerticalScrollIndicator={false}
            renderItem={renderSuggestionItem}
            keyExtractor={(item, index) => item.place_id + index}
          />
        ) : null}
      </View>

      <BigCustomButton
        extraStyle={styles.button}
        onPress={handleSubmit(onEditAddress)}>
        Save address
      </BigCustomButton>
    </CustomScreenContainer>
  );
};

export default EditShippingAddressScreen;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    marginTop: 20,
  },
  button: {
    marginVertical: 24,
  },
  outerContainer: {
    flex: 1,
  },
  searchInputContainer: {
    width: '100%',
    backgroundColor: COLORS.WHITE,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: COLORS.SECONDARY,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchTextInput: {
    fontFamily: FONTS.POPPINS,
    fontSize: FONT_SIZE.LABEL,
    lineHeight: LINE_HEIGHT.LABEL,
    padding: 0,
    color: COLORS.MAIN,
  },
  searchLabel: {
    fontSize: FONT_SIZE.SMALL,
    color: COLORS.SUB,
    fontFamily: FONTS.POPPINS,
    lineHeight: LINE_HEIGHT.SMALL,
    textTransform: 'capitalize',
  },
  suggestionList: {
    elevation: 4,
    width: '100%',
    backgroundColor: COLORS.WHITE,
  },
  suggestionItem: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.SECONDARY,
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  suggestionContent: {
    marginLeft: 6,
    flex: 1,
  },
  address: {
    fontSize: FONT_SIZE.LABEL,
    color: COLORS.MAIN,
    lineHeight: LINE_HEIGHT.LABEL,
    fontFamily: FONTS.POPPINS,
  },
  country: {
    fontSize: FONT_SIZE.SMALL,
    color: COLORS.SUB,
    lineHeight: LINE_HEIGHT.SMALL,
    fontFamily: FONTS.POPPINS,
  },
  error: {
    color: COLORS.DANGER,
    marginBottom: 20,
  },
});
