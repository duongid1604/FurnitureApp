import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PaymentCardType, PaymentNavigationProp} from '../../../types';
import {useNavigation} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import Feather from 'react-native-vector-icons/Feather';

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
        <Feather name="x-circle" color={COLORS.MAIN} size={24} />
      </Pressable>
      <Card extraStyle={styles.card}>
        <View style={styles.infoView}>
          <Image source={ICON.MASTERCARD} style={styles.mastercard} />
          <Text style={styles.cardnum}>* * * * * * * * * * * * 3947</Text>
          <View style={styles.detail}>
            <View style={styles.username}>
              <Text style={styles.smalltitle}>Card Holder Name</Text>
              <Text style={styles.labeltitle}>Jennyfer Doe</Text>
            </View>
            <View style={styles.username}>
              <Text style={styles.smalltitle}>Expiry Date</Text>
              <Text style={styles.labeltitle}>05/23</Text>
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
      <Text>PaymentItem</Text>
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
    fontSize: FONT_SIZE.BODY_18,
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
  deleteBtn: {
    position: 'absolute',
    top: scaleUI(16, true),
    right: 0,
    zIndex: 10,
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
});
