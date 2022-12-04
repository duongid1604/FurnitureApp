import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {scaleUI} from '../utils';
import {COLORS, FONTS, FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT} from '../constants';

type Props = {};

const ReviewBox = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Image
          style={styles.img}
          source={require('../assets/images/avatar.png')}
        />
      </View>
      <View style={styles.TimeAndName}>
        <View>
          <Text style={styles.name}>Bruno Fernandes</Text>
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
        <Text style={styles.time}>20/03/2020</Text>
      </View>
      <View style={styles.comments}>
        <Text style={styles.description}>
          Nice Furniture with good delivery. The delivery time is very fast.
          Then products look like exactly the picture in the app. Besides, color
          is also the same and quality is very good despite very cheap price
        </Text>
      </View>
    </View>
  );
};

export default ReviewBox;

const styles = StyleSheet.create({
  container: {
    width: scaleUI(337, false),
    height: scaleUI(300, false),
    backgroundColor: COLORS.WHITE,
    marginHorizontal: 20,
    marginVertical: 10,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
  avatar: {
    alignItems: 'center',
  },
  img: {
    width: 40,
    height: 40,
  },
  TimeAndName: {
    marginHorizontal: 20,
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    color: COLORS.MAIN,
    fontWeight: FONT_WEIGHT.REGULAR,
    fontSize: FONT_SIZE.LABEL,
    lineHeight: LINE_HEIGHT.LABEL,
  },
  star: {
    width: scaleUI(16, false),
    height: scaleUI(16, false),
  },
  rating: {
    flexDirection: 'row',
    width: scaleUI(100, false),
  },
  time: {
    color: COLORS.SUB,
    fontSize: FONT_SIZE.SMALL,
    lineHeight: LINE_HEIGHT.SMALL,
    fontFamily: FONTS.POPPINS,
    fontWeight: FONT_WEIGHT.REGULAR,
  },
  comments: {
    width: scaleUI(311, false),
    height: scaleUI(200, false),
    marginHorizontal: 20,
    marginVertical: 20,
  },
  description: {
    color: COLORS.SUB,
    fontSize: FONT_SIZE.LABEL,
    lineHeight: LINE_HEIGHT.H5,
    fontFamily: FONTS.POPPINS,
    fontWeight: FONT_WEIGHT.REGULAR,
  },
});
