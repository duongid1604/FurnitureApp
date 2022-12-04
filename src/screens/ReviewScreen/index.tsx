import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {scaleUI} from '../../utils';
import ReviewBox from '../../components/ReviewBox';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../constants';
import {ScrollView} from 'react-native-gesture-handler';
import {BigCustomButton} from '../../components';

type Props = {};

const Review = ({}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.productbox}>
        <Image
          style={styles.img}
          source={require('../../assets/images/product1.jpg')}
        />
        <View style={styles.info}>
          <Text style={styles.name}>Minimal Stand</Text>
          <View style={styles.rate}>
            <Image
              style={styles.star}
              source={require('../../assets//icons/star.png')}
            />
            <Text style={styles.mark}>4.5</Text>
          </View>
          <Text style={styles.num}> 10 reviews</Text>
        </View>
      </View>
      <ScrollView>
        <ReviewBox />
        <ReviewBox />
        <ReviewBox />
        <ReviewBox />
        <ReviewBox />
      </ScrollView>
      <View style={styles.btn}>
        <BigCustomButton>Write a review</BigCustomButton>
      </View>
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  productbox: {
    width: scaleUI(334, false),
    height: scaleUI(100, false),
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  img: {
    width: scaleUI(100, false),
    height: scaleUI(100, false),
  },
  info: {
    marginHorizontal: 20,
  },
  name: {
    color: COLORS.MAIN,
  },
  rate: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    width: '40%',
  },
  star: {
    width: scaleUI(25, false),
    height: scaleUI(25, false),
  },
  mark: {
    fontSize: FONT_SIZE.H4,
    color: COLORS.MAIN,
    fontWeight: FONT_WEIGHT.BOLD,
  },
  num: {
    fontSize: FONT_SIZE.LABEL,
    color: COLORS.SUB,
    fontWeight: FONT_WEIGHT.REGULAR,
  },
  btn: {
    bottom: 40,
    marginHorizontal: 20,
  },
});
