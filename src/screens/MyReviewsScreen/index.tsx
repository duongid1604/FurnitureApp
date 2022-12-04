import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import MyReviewBox from '../../components/MyReviewBox';

type Props = {};

const MyReviewsScreen = (props: Props) => {
  return (
    <ScrollView style={styles.container}>
      <MyReviewBox />
      <MyReviewBox />
      <MyReviewBox />
      <MyReviewBox />
      <MyReviewBox />
    </ScrollView>
  );
};

export default MyReviewsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});
