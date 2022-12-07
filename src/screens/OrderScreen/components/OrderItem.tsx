import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Card} from '../../../components';
import {COLORS, FONTS, FONT_SIZE, LINE_HEIGHT} from '../../../constants';
import {OrderTabEnum, OrderTabType, OrderType} from '../../../types';
import leadingZeroLessTwoDigits from '../../../utils/leadingZeroLessTwoDigits';

type OrderItemProps = {
  orderItem: OrderType;
  currentTab: OrderTabType;
  onBtnPress: (currentOrder: OrderType) => void;
};

const OrderItem = ({orderItem, currentTab, onBtnPress}: OrderItemProps) => {
  if (currentTab !== orderItem.status) {
    return <></>;
  }
  let orderStatus = 'Processing';
  let orderStyle = styles.processing;
  let btnText = 'Cancel';
  if (orderItem.status === OrderTabEnum.delivered) {
    btnText = 'Buy again';
    orderStatus = 'Delivered';
    orderStyle = styles.delivered;
  }
  if (orderItem.status === OrderTabEnum.canceled) {
    btnText = 'Buy again';
    orderStatus = 'Canceled';
    orderStyle = styles.canceled;
  }

  return (
    <Card extraStyle={styles.card}>
      {/* Title */}
      <View style={styles.title}>
        <Text style={styles.orderText}>Order No.{orderItem.orderCode}</Text>
        <Text style={styles.date}>{orderItem.date}</Text>
      </View>
      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.label}>
          Quantity:{' '}
          <Text style={styles.bold}>
            {leadingZeroLessTwoDigits(orderItem.totalQty)}
          </Text>
        </Text>
        <Text style={styles.label}>
          Total Amount: <Text style={styles.bold}>${orderItem.totalPrice}</Text>
        </Text>
      </View>
      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onBtnPress(orderItem)}>
          <Text style={styles.textBtn}>{btnText}</Text>
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
    textAlign: 'right',
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
