import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {scaleUI} from '../utils';
import {COLORS} from '../constants';
import Icon from '../constants/Icon';

type Props = {};

const ActiveCreditCard = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image source={require(Icon.BACK_CONTAINER)} />
      </View>
      <Text>ActiveCreditCard</Text>
    </View>
  );
};

export default ActiveCreditCard;

const styles = StyleSheet.create({
  container: {
    width: scaleUI(333, false),
    height: scaleUI(180, false),
    backgroundColor: COLORS.MAIN,
  },
  imageView: {
    marginHorizontal: 20,
  },
});
