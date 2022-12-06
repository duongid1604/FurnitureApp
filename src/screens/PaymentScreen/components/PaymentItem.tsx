import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PaymentCardType, PaymentNavigationProp} from '../../../types';
import {useNavigation} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import {COLORS, FONTS, FONT_SIZE, LINE_HEIGHT} from '../../../constants';
import {Card} from '../../../components';

type Props = {
  Payment: PaymentCardType;
  isActive: boolean;
  onToggleCheckBox: (Payment: PaymentCardType) => void;
};

const PaymentItem = ({Payment, isActive, onToggleCheckBox}: Props) => {
  const navigation = useNavigation<PaymentNavigationProp>();

  return (
    <View style={styles.container}>
      <Card extraStyle={styles.card}></Card>
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
  },
});
