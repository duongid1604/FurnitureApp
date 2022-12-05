import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card} from '../../../components';
import {COLORS, FONTS, FONT_SIZE, LINE_HEIGHT} from '../../../constants';
import {ShippingAddressType} from '../../../types';

type Props = {
  shippingAddress: ShippingAddressType;
  onToggleCheckBox: (shippingAddress: ShippingAddressType) => void;
  isActive: boolean;
};

const ShippingAddressItem = ({
  shippingAddress,
  isActive,
  onToggleCheckBox,
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <CheckBox
          disabled={false}
          value={isActive}
          onValueChange={() => onToggleCheckBox(shippingAddress)}
          tintColors={{true: COLORS.MAIN}}
        />
        <Text style={isActive ? styles.text : [styles.text, styles.disable]}>
          Use as the shipping address
        </Text>
      </View>
      <Card>
        <Text style={styles.fullName}>{shippingAddress.fullName}</Text>
        <Text
          numberOfLines={3}
          ellipsizeMode="tail"
          style={
            styles.address
          }>{`${shippingAddress.address} ${shippingAddress.zipcode} ${shippingAddress.district} ${shippingAddress.city} ${shippingAddress.country}`}</Text>
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
