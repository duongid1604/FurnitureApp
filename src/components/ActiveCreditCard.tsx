import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {scaleUI} from '../utils';
import {
  COLORS,
  FONTS,
  FONT_SIZE,
  FONT_WEIGHT,
  ICON,
  LINE_HEIGHT,
} from '../constants';

type Props = {
  card: Props;
};

const ActiveCreditCard = ({card}: Props) => {
  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default ActiveCreditCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    width: scaleUI(333, false),
    height: scaleUI(180, false),
    backgroundColor: COLORS.MAIN,
    borderRadius: 10,
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
