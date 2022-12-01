import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scaleUI} from '../utils';
import {COLORS, FONTS, FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT} from '../constants';

type Props = {};

const MyReviewBox = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <View style={styles.productDetail}>
          <Image
            style={styles.image}
            source={require('../assets/images/product1.jpg')}
          />
          <View style={styles.nameprice}>
            <Text style={styles.name}>Coffee Table</Text>
            <Text style={styles.price}>$ 50.00</Text>
          </View>
        </View>
        <View style={styles.rating}>
          <Image
            style={styles.star}
            source={require('../assets/icons/star.png')}
          />
          <Image
            style={styles.star}
            source={require('../assets/icons/star.png')}
          />
          <Image
            style={styles.star}
            source={require('../assets/icons/star.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default MyReviewBox;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 20,
    width: scaleUI(337, false),
    height: scaleUI(252, false),
    backgroundColor: COLORS.WHITE,
  },
  display: {
    marginHorizontal: 16,
    marginVertical: 16,
  },
  productDetail: {
    flexDirection: 'row',
  },
  image: {
    width: scaleUI(70, false),
    height: scaleUI(70, false),
  },
  nameprice: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  name: {
    color: COLORS.MAIN,
    fontSize: FONT_SIZE.BODY,
    fontWeight: FONT_WEIGHT.REGULAR,
    fontFamily: FONTS.POPPINS,
    lineHeight: LINE_HEIGHT.BODY,
  },
  price: {
    color: COLORS.MAIN,
    fontSize: FONT_SIZE.BODY,
    fontWeight: FONT_WEIGHT.BOLD,
    fontFamily: FONTS.POPPINS,
    lineHeight: LINE_HEIGHT.BODY,
  },
  rating: {
    flexDirection: 'row',
    marginVertical: 16,
    justifyContent: 'space-between',
  },
  star: {
    width: scaleUI(16, false),
    height: scaleUI(16, false),
  },
});
