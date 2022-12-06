import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

import {Card} from '../../../components';
import {COLORS, FONTS, FONT_SIZE, LINE_HEIGHT} from '../../../constants';
import {
  ShippingAddressType,
  ShippingAddressNavigationProp,
} from '../../../types';
import {scaleUI} from '../../../utils';

type Props = {
  shippingAddress: ShippingAddressType;
  isActive: boolean;
  onToggleCheckBox: (shippingAddress: ShippingAddressType) => void;
  onDelete: (shippingAddress: ShippingAddressType) => void;
};

const ShippingAddressItem = ({
  shippingAddress,
  isActive,
  onToggleCheckBox,
  onDelete,
}: Props) => {
  const navigation = useNavigation<ShippingAddressNavigationProp>();

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
      <Pressable
        style={styles.deleteBtn}
        onPress={() => onDelete(shippingAddress)}>
        <Feather name="x-circle" color={COLORS.MAIN} size={24} />
      </Pressable>
      <Card extraStyle={styles.card}>
        <Pressable
          android_ripple={{color: COLORS.BLACK_O2}}
          style={styles.buttonCard}
          onPress={() =>
            navigation.navigate('EditShippingAddress', {
              address: shippingAddress,
            })
          }>
          <Text style={styles.fullName}>{shippingAddress.fullName}</Text>
          <Text
            numberOfLines={3}
            ellipsizeMode="tail"
            style={
              styles.address
            }>{`${shippingAddress.address} ${shippingAddress.zipcode} ${shippingAddress.district} ${shippingAddress.city} ${shippingAddress.country}`}</Text>
        </Pressable>
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
  card: {
    padding: 0,
  },
  buttonCard: {
    padding: 18,
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
  deleteBtn: {
    position: 'absolute',
    top: scaleUI(16, true),
    right: 0,
    zIndex: 10,
  },
});
