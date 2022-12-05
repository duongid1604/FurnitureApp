import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card} from '../../../components';
import {COLORS, FONTS, FONT_SIZE, LINE_HEIGHT} from '../../../constants';

type Props = {
  id: string;
  isActive: boolean;
  fullName: string;
  address: string;
  zipcode: string;
  country: string;
  city: string;
  district: string;
  onToggleCheckBox: (id: string) => void;
};

const ShippingAddressItem = ({
  id,
  isActive,
  fullName,
  address,
  zipcode,
  country,
  city,
  district,
  onToggleCheckBox,
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <CheckBox
          disabled={false}
          value={isActive}
          onValueChange={() => onToggleCheckBox(id)}
          tintColors={{true: COLORS.MAIN}}
        />
        <Text style={styles.text}>Use as the shipping address</Text>
      </View>
      <Card>
        <Text style={styles.fullName}>{fullName}</Text>
        <Text
          numberOfLines={3}
          ellipsizeMode="tail"
          style={
            styles.address
          }>{`${address} ${zipcode} ${district} ${city} ${country}`}</Text>
      </Card>
    </View>
  );
};

export default ShippingAddressItem;

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: FONT_SIZE.BODY_18,
    lineHeight: LINE_HEIGHT.BODY,
    color: COLORS.MAIN,
    fontFamily: FONTS.POPPINS,
  },
  disable: {
    color: COLORS.SUB,
  },
  fullName: {
    fontSize: FONT_SIZE.BODY_18,
    lineHeight: LINE_HEIGHT.BODY,
    fontFamily: FONTS.POPPINS_BOLD,
    color: COLORS.MAIN,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.SECONDARY,
  },
  address: {
    marginTop: 12,
    fontFamily: FONTS.POPPINS,
    fontSize: FONT_SIZE.LABEL,
    lineHeight: LINE_HEIGHT.LABEL,
    color: COLORS.SUB,
  },
});
