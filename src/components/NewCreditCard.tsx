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

type Props = {};

const NewCreditCard = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoView}>
        <View style={styles.viewImage}>
          <Image source={ICON.MASTERCARD} style={styles.mastercard} />
          <Image source={ICON.VISA} style={styles.visacard} />
        </View>
        <Text style={styles.cardnum}>* * * * * * * * * * * * XXXX</Text>
        <View style={styles.detail}>
          <View style={styles.username}>
            <Text style={styles.smalltitle}>Card Holder Name</Text>
            <Text style={styles.labeltitle}>XXXXXX</Text>
          </View>
          <View style={styles.username}>
            <Text style={styles.smalltitle}>Expiry Date</Text>
            <Text style={styles.labeltitle}>XX/XX</Text>
          </View>
        </View>
      </View>
      <Image />
    </View>
  );
};

export default NewCreditCard;

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
  viewImage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '32%',
  },
  visacard: {
    alignItems: 'center',
    width: 50,
    height: 16,
    marginBottom: 20,
  },
});
