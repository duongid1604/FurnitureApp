import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import ActiveCreditCard from '../../components/ActiveCreditCard';
import {
  COLORS,
  FONTS,
  FONT_SIZE,
  FONT_WEIGHT,
  ICON,
  LINE_HEIGHT,
} from '../../constants';
import DefaultCard from '../../components/DefaultCard';
import {PaymentScreenProps} from '../../types';

const PaymentScreen = ({navigation}: PaymentScreenProps) => {
  return (
    <View style={styles.container}>
      <ActiveCreditCard />
      <View style={styles.checkDefault}>
        <Image source={ICON.CHECKBOX} style={styles.checkbox} />
        <Text style={styles.titleCheck}>Use as default payment method</Text>
      </View>
      <DefaultCard />
      <View style={styles.checkDefault}>
        <Image source={ICON.UNCHECKBOX} style={styles.checkbox} />
        <Text style={styles.titleUncheck}>Use as default payment method</Text>
      </View>
      <View style={styles.add}>
        <TouchableOpacity
          style={styles.addbutton}
          onPress={() => navigation.navigate('AddPayment')}>
          <Image source={ICON.PLUS} style={styles.plus} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginHorizontal: 20,
  },
  checkDefault: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  checkbox: {
    marginRight: 10,
    width: 20,
    height: 20,
  },
  titleCheck: {
    color: COLORS.MAIN,
    fontSize: FONT_SIZE.BODY,
    fontWeight: FONT_WEIGHT.REGULAR,
    fontFamily: FONTS.POPPINS,
    lineHeight: LINE_HEIGHT.BODY,
  },
  titleUncheck: {
    color: COLORS.SUB,
    fontSize: FONT_SIZE.BODY,
    fontWeight: FONT_WEIGHT.REGULAR,
    fontFamily: FONTS.POPPINS,
    lineHeight: LINE_HEIGHT.BODY,
  },
  add: {
    bottom: -30,
    alignItems: 'flex-end',
    marginHorizontal: 50,
  },
  addbutton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: COLORS.WHITE,
  },
  plus: {
    width: 24,
    height: 24,
  },
});
