import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scaleUI} from '../../utils';
import {COLORS} from '../../constants';

type Props = {};

const ActiveCreditCard = (props: Props) => {
  return (
    <View style={styles.container}>
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
});
