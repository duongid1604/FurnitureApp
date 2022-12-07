import {Image, StyleSheet, View, Text, FlatList} from 'react-native';
import React from 'react';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../LoadingScreen';
import {COLORS, FONTS, FONT_SIZE} from '../../constants';
import {ReviewScreenRouteProp, ReviewType} from '../../types';
import {useRoute} from '@react-navigation/native';

type Props = {};

const MyReviewsScreen = (props: Props) => {
  const {reviews} = useAppSelector(state => state.auth.user);
  const route = useRoute<ReviewScreenRouteProp>();
  const {user} = useAppSelector(state => state.auth);
  console.log(reviews);
  if (!user) {
    return <LoadingScreen />;
  }
  const renderFavourite = ({item}: {item: ReviewType}) => {
    return (
      <View style={styles.incontainer}>
        <View style={styles.product}>
          <Image source={{uri: item.image}} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.title}></Text>
            <Text style={styles.price}>$ .00</Text>
          </View>
        </View>
        <Text>{item.comment}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.flatListContainer}>
        <FlatList
          data={reviews}
          keyExtractor={item => item.id}
          renderItem={renderFavourite}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default MyReviewsScreen;

const styles = StyleSheet.create({
  flatListContainer: {
    // height: '75%',
  },
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: COLORS.SECONDARY,
    marginBottom: 20,
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 16,
    marginRight: 24,
    marginBottom: 20,
  },
  innerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: FONT_SIZE.BODY,
    color: COLORS.MAIN,
    fontFamily: FONTS.POPPINS,
  },
  price: {
    fontSize: FONT_SIZE.H5,
    color: COLORS.MAIN,
    fontFamily: FONTS.POPPINS_BOLD,
  },
  incontainer: {
    flex: 1,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: COLORS.SECONDARY,
    marginBottom: 20,
  },
  product: {
    flexDirection: 'row',
  },
});
