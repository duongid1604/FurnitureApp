import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PaymentCardType, PaymentNavigationProp} from '../../../types';
import CheckBox from '@react-native-community/checkbox';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

import {
  COLORS,
  FONTS,
  FONT_SIZE,
  FONT_WEIGHT,
  ICON,
  LINE_HEIGHT,
} from '../../../constants';
import {Card} from '../../../components';
import {scaleUI} from '../../../utils';

type Props = {
  Payment: PaymentCardType;
  isActive: boolean;
  onToggleCheckBox: (Payment: PaymentCardType) => void;
  onDeleteCard: (Payment: PaymentCardType) => void;
};

const PaymentItem = ({
  Payment,
  isActive,
  onToggleCheckBox,
  onDeleteCard,
}: Props) => {
  const navigation = useNavigation<PaymentNavigationProp>();

  return (
    <View style={styles.container}>
      <Pressable style={styles.deleteBtn} onPress={() => onDeleteCard(Payment)}>
        <Feather name="x-circle" color={COLORS.WHITE} size={24} />
      </Pressable>
      <Card extraStyle={isActive ? styles.card : styles.defaultcard}>
        <View style={styles.infoView}>
          <Image source={ICON.MASTERCARD} style={styles.mastercard} />
          <Text style={styles.cardnum}>{Payment.cardNumber}</Text>
          <View style={styles.detail}>
            <View style={styles.username}>
              <Text style={styles.smalltitle}>Card Holder Name</Text>
              <Text style={styles.labeltitle}>{Payment.cardHolderName}</Text>
            </View>
            <View style={styles.username}>
              <Text style={styles.smalltitle}>Expiry Date</Text>
              <Text style={styles.labeltitle}>{Payment.expirationDate}</Text>
            </View>
          </View>
        </View>
      </Card>
      <View style={styles.check}>
        <CheckBox
          disabled={false}
          value={isActive}
          onValueChange={() => onToggleCheckBox(Payment)}
          tintColors={{true: COLORS.MAIN}}
        />
        <Text
          style={isActive ? styles.option : [styles.option, styles.disable]}>
          Use as default payment method
        </Text>
      </View>
    </View>
  );
};

export default PaymentItem;

const styles = StyleSheet.create({
  container: {},
  check: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  option: {
    fontSize: FONT_SIZE.BODY,
    lineHeight: LINE_HEIGHT.BODY,
    color: COLORS.MAIN,
    fontFamily: FONTS.POPPINS,
  },
  disable: {
    color: COLORS.SUB,
  },
  card: {
    padding: 0,
    marginVertical: 20,
    width: scaleUI(333, false),
    height: scaleUI(180, false),
    backgroundColor: COLORS.MAIN,
    borderRadius: 10,
  },
  defaultcard: {
    padding: 0,
    marginVertical: 20,
    width: scaleUI(333, false),
    height: scaleUI(180, false),
    backgroundColor: COLORS.DEFAULT,
    borderRadius: 10,
  },
  deleteBtn: {
    position: 'absolute',
    top: scaleUI(16, true),
    right: 0,
    zIndex: 10,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  infoView: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  mastercard: {
    width: 30,
    height: 24,
    marginBottom: 20,
  },
  cardnum: {
    color: COLORS.WHITE,
    fontSize: FONT_SIZE.H5,
    fontWeight: FONT_WEIGHT.REGULAR,
    fontFamily: FONTS.POPPINS,
    lineHeight: LINE_HEIGHT.H5,
  },
  detail: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  username: {
    marginRight: 29,
  },
  smalltitle: {
    color: COLORS.WHITE,
    fontSize: FONT_SIZE.SMALL,
    lineHeight: LINE_HEIGHT.SMALL,
    fontFamily: FONTS.POPPINS,
    fontWeight: FONT_WEIGHT.REGULAR,
  },
  labeltitle: {
    marginVertical: 5,
    color: COLORS.WHITE,
    fontSize: FONT_SIZE.LABEL,
    lineHeight: LINE_HEIGHT.LABEL,
    fontFamily: FONTS.POPPINS,
    fontWeight: FONT_WEIGHT.REGULAR,
  },
  buttonCard: {
    padding: 18,
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
