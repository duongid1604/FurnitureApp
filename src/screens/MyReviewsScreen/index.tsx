import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';
import MyReviewBox from '../../components/MyReviewBox';

type Props = {};

const MyReviewsScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <MyReviewBox />
    </View>
  );
};

export default MyReviewsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});
