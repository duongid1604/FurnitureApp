import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scaleUI} from '../../utils';
import ReviewBox from '../../components/ReviewBox';

type Props = {};

const Review = (props: Props) => {
  return (
    <View style={styles.container}>
      <ReviewBox />
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
});
