import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {scaleUI} from '../../utils';
import ReviewBox from '../../components/ReviewBox';
import {COLORS} from '../../constants';

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
          <View>
            <Image />
            <Text></Text>
          </View>
          <Text></Text>
        </View>
      </View>
      <ReviewBox />
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
    color: COLORS.SUB,
  },
});
