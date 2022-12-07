import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {COLORS, FONTS, FONT_SIZE, LINE_HEIGHT} from '../../../constants';
import {
  ShippingAddressNavigationProp,
  ShippingAddressType,
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

  const renderRightActions = () => {
    return (
      <View style={styles.deleteBtnContainer}>
        <Pressable
          style={styles.deleteBtn}
          onPress={() => onDelete(shippingAddress)}>
          <MaterialCommunityIcons name="delete" color={COLORS.MAIN} size={30} />
        </Pressable>
      </View>
    );
  };

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
      <Swipeable
        renderRightActions={() => renderRightActions()}
        containerStyle={styles.swipeableContainer}
        childrenContainerStyle={styles.swipeableChildren}>
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
      </Swipeable>
    </View>
  );
};

export default ShippingAddressItem;

const styles = StyleSheet.create({
  swipeableContainer: {
    paddingHorizontal: 20,
    marginHorizontal: -20,
    marginBottom: -20,
    paddingBottom: 20,
    paddingTop: 10,
    marginTop: -10,
  },
  swipeableChildren: {
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: COLORS.WHITE,
    shadowColor: COLORS.MAIN,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    overflow: 'hidden',
  },
  container: {
    marginBottom: 24,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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
  deleteBtnContainer: {
    marginTop: -20,
    alignContent: 'center',
    justifyContent: 'center',
    width: 70,
  },
  deleteBtn: {
    marginLeft: 10,
  },
});
