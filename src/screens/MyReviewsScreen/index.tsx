import {
  Image,
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../LoadingScreen';
import {
  COLORS,
  FONTS,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
} from '../../constants';
import {ReviewScreenRouteProp, ReviewType} from '../../types';
import {useRoute} from '@react-navigation/native';
import {CustomScreenContainer} from '../../components';
import {scaleUI} from '../../utils';

type Props = {};

const MyReviewsScreen = (props: Props) => {
  const {reviews} = useAppSelector(state => state.auth.user);
  const route = useRoute<ReviewScreenRouteProp>();
  const {user} = useAppSelector(state => state.auth);
  const starFill =
    'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png';
  const starconer =
    'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png';
  const [currentDate, setcurrentDate] = useState(0);
  const [maxRate, setmaxRate] = useState([1, 2, 3, 4, 5]);
  console.log(reviews);
  if (!user) {
    return <LoadingScreen />;
  }
  const renderItem = ({item}: {item: ReviewType}) => {
    const defaultRate = item.rate;
    var day = new Date().getDate();
    var month = new Date().getMonth();
    var year = new Date().getFullYear();
    setcurrentDate(day + '/' + month + '/' + year);
    return (
      <View style={styles.incontainer}>
        <View style={styles.product}>
          <Image source={{uri: item.image}} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.price}>$ {item.price}.00</Text>
          </View>
        </View>
        <View style={styles.rate}>
          <View style={styles.ratestar}>
            {maxRate.map((itemstar = item.rate) => {
              return (
                <Image
                  style={styles.star}
                  source={
                    itemstar <= defaultRate ? {uri: starFill} : {uri: starconer}
                  }
                />
              );
            })}
          </View>
          <Text>{currentDate}</Text>
        </View>

        <Text style={styles.cmt}>{item.comment}</Text>
      </View>
    );
  };

  return (
    <CustomScreenContainer smallPadding>
      <View style={styles.flatListContainer}>
        <FlatList
          data={reviews}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </CustomScreenContainer>
  );
};

export default MyReviewsScreen;

const styles = StyleSheet.create({
  flatListContainer: {
    marginVertical: 10,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 16,
    marginRight: 24,
    marginBottom: 20,
  },
  innerContainer: {
    width: scaleUI(337, false),
    height: scaleUI(252, false),
    backgroundColor: COLORS.DISABLE,
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
    backgroundColor: COLORS.BG,
    marginBottom: 20,
  },
  product: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  cmt: {
    marginHorizontal: 20,
    marginVertical: 10,
    fontSize: FONT_SIZE.LABEL,
    lineHeight: LINE_HEIGHT.LABEL,
    fontWeight: FONT_WEIGHT.REGULAR,
    fontFamily: FONTS.POPPINS,
  },
  rate: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  star: {
    marginRight: 10,
    width: scaleUI(16, false),
    height: scaleUI(16, false),
  },
  ratestar: {
    flexDirection: 'row',
  },
});
