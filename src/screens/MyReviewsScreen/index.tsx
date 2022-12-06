import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import MyReviewBox from '../../components/MyReviewBox';
import {useAppSelector} from '../../hooks';

type Props = {};

const MyReviewsScreen = (props: Props) => {
  const {reviews} = useAppSelector(state => state.auth.user);
  console.log(reviews);
  return (
    <View style={styles.container}>
      <MyReviewBox />
      <MyReviewBox />
      <MyReviewBox />
      <MyReviewBox />
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
