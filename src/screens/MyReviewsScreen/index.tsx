import {Image, StyleSheet, View, Text, FlatList} from 'react-native';
import React from 'react';
import MyReviewBox from '../../components/MyReviewBox';
import {useAppSelector} from '../../hooks';
import useAddReviewScreen from '../../hooks/screens/useAddReviewScreen';
import LoadingScreen from '../LoadingScreen';
import {COLORS, FONTS, FONT_SIZE} from '../../constants';
import Feather from 'react-native-vector-icons/Feather';
import {ProductType} from '../../types';

type Props = {};

const MyReviewsScreen = (props: Props) => {
  const {reviews} = useAppSelector(state => state.auth.user);
  const {user} = useAppSelector(state => state.auth);
  const {onUpdate} = useAddReviewScreen();
  console.log(reviews);
  if (!user) {
    return <LoadingScreen />;
  }
  const renderFavourite = ({item}: {item: ProductType}) => {
    return (
      <View style={styles.container}>
        <Image source={{uri: item.image}} style={styles.image} />
        <View style={styles.innerContainer}>
          <View>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.price}>$ {item.price}.00</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.flatListContainer}>
        <FlatList
          data={user?.favourite}
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
});
