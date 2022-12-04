import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Card} from '../../../components';
import {COLORS, FONTS, FONT_SIZE, LINE_HEIGHT} from '../../../constants';
import {OrderTabEnum, OrderType} from '../../../types';
import leadingZeroLessTwoDigits from '../../../utils/leadingZeroLessTwoDigits';

const OrderItem = ({
  orderCode,
  totalQty,
  totalPrice,
  status,
  date,
}: OrderType) => {
  let orderStatus = 'Processing';
  let orderStyle = styles.processing;
  if (status === OrderTabEnum.delivered) {
    orderStatus = 'Delivered';
    orderStyle = styles.delivered;
  }
  if (status === OrderTabEnum.canceled) {
    orderStatus = 'Canceled';
    orderStyle = styles.canceled;
  }

  return (
    <Card extraStyle={styles.card}>
      {/* Title */}
      <View style={styles.title}>
        <Text style={styles.orderText}>Order No{orderCode}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.label}>
          Quantity:{' '}
          <Text style={styles.bold}>{leadingZeroLessTwoDigits(totalQty)}</Text>
        </Text>
        <Text style={styles.label}>
          Total Amount: <Text style={styles.bold}>${totalPrice}</Text>
        </Text>
      </View>
      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textBtn}>Detail</Text>
        </TouchableOpacity>
        <Text style={[styles.status, orderStyle]}>{orderStatus}</Text>
      </View>
    </Card>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 0,
    paddingVertical: 16,
  },
  title: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.SECONDARY,
    paddingHorizontal: 16,
    paddingBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderText: {
    fontSize: FONT_SIZE.BODY,
    lineHeight: LINE_HEIGHT.BODY,
    fontFamily: FONTS.POPPINS,
    color: COLORS.MAIN,
  },
  date: {
    fontSize: FONT_SIZE.LABEL,
    lineHeight: LINE_HEIGHT.LABEL,
    color: COLORS.SUB,
    fontFamily: FONTS.POPPINS,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 32,
    paddingTop: 12,
  },
  label: {
    fontSize: FONT_SIZE.BODY,
    lineHeight: LINE_HEIGHT.BODY,
    color: COLORS.SUB,
    fontFamily: FONTS.POPPINS,
    textTransform: 'capitalize',
  },
  bold: {
    fontFamily: FONTS.POPPINS_BOLD,
    color: COLORS.MAIN,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: COLORS.MAIN,
    borderRadius: 8,
  },
  textBtn: {
    color: COLORS.WHITE,
    fontSize: FONT_SIZE.BODY,
    lineHeight: LINE_HEIGHT.BODY,
    fontFamily: FONTS.POPPINS,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  status: {
    fontSize: FONT_SIZE.BODY,
    lineHeight: LINE_HEIGHT.BODY,
    fontFamily: FONTS.POPPINS,
  },
  canceled: {
    color: COLORS.DANGER,
  },
  delivered: {
    color: COLORS.SUCCESS,
  },
  processing: {
    color: COLORS.YELLOW,
  },
});
