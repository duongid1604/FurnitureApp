import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';
import {DeleteButton} from '../../../components';
import {COLORS, FONTS, FONT_SIZE, LINE_HEIGHT} from '../../../constants';
import {OrderTabEnum, OrderType} from '../../../types';
import {scaleUI} from '../../../utils';

type Props = {
  orderItem: OrderType;
  onDelete: (order: OrderType) => void;
};

const NotiItem = ({orderItem, onDelete}: Props) => {
  let notiStatusText = 'confirmed';

  const renderRightActions = () => (
    <DeleteButton onDelete={() => onDelete(orderItem)} />
  );

  if (orderItem.status === OrderTabEnum.delivered) {
    notiStatusText = 'shipped successfully ';
  }

  if (orderItem.status === OrderTabEnum.canceled) {
    notiStatusText = 'canceled';
  }

  return (
    <Swipeable
      renderRightActions={() => renderRightActions()}
      childrenContainerStyle={styles.container}>
      <Image
        source={{uri: orderItem.products?.[0].image}}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Your order #{orderItem.orderCode} has been {notiStatusText}
        </Text>
        <Text style={styles.itemListDetail} numberOfLines={2}>
          {orderItem.products.map((product, index, products) => {
            if (index === products.length - 1) {
              return (
                <Text key={product.id}>
                  {product.name} x {product.qty}.
                </Text>
              );
            }
            return (
              <Text key={product.id}>
                {product.name} x {product.qty},{' '}
              </Text>
            );
          })}
        </Text>
      </View>
    </Swipeable>
  );
};

export default NotiItem;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.SECONDARY,
    paddingVertical: 24,
    flexDirection: 'row',
    backgroundColor: COLORS.WHITE,
  },
  image: {
    borderRadius: 6,
    width: scaleUI(70, true),
    height: scaleUI(70, true),
  },
  content: {
    flex: 1,
    marginLeft: 16,
  },
  title: {
    color: COLORS.MAIN,
    fontSize: FONT_SIZE.LABEL,
    lineHeight: LINE_HEIGHT.LABEL,
    fontFamily: FONTS.POPPINS_BOLD,
    marginBottom: 4,
  },
  itemListDetail: {
    fontSize: FONT_SIZE.LABEL,
    lineHeight: LINE_HEIGHT.LABEL,
    color: COLORS.SUB,
    fontFamily: FONTS.POPPINS,
  },
});
