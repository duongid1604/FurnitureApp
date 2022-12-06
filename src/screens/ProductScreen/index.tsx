import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {BigCustomButton} from '../../components';
import {COLORS, FONTS, FONT_SIZE, FONT_WEIGHT, ICON} from '../../constants';
import {
  useAddCartScreen,
  useAddFavouriteScreen,
  useAppSelector,
} from '../../hooks';
import {ProductNavigationProp, ProductRouteProp} from '../../types';

const ProductScreen = () => {
  const navigation = useNavigation<ProductNavigationProp>();

  const {user} = useAppSelector(state => state.auth);

  const {onAddFavourite} = useAddFavouriteScreen();

  const {onAddCart} = useAddCartScreen();

  const [localQty, setQty] = useState(1);

  const route = useRoute<ProductRouteProp>();

  const {data} = route.params;

  const increaseHandler = () => {
    setQty(localQty + 1);
  };

  const decreaseHandler = () => {
    if (localQty === 1) {
      return;
    }
    setQty(localQty - 1);
  };

  const moveToHomeScreen = () => {
    navigation.goBack();
  };

  const addToCartHandler = () => {
    onAddCart(data, localQty);
    navigation.navigate('Cart');
  };

  const addToFavouriteHandler = () => {
    onAddFavourite(data);
  };

  const moveToReviewScreen = () => {
    navigation.navigate('ReviewNavigator', {screen: 'Review'});
  };

  const isMarked = user?.favourite.some(item => item.id === data.id);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.flexContainer}>
        <Image source={{uri: data.image}} style={styles.image} />
        <TouchableOpacity
          style={styles.backIconContainer}
          onPress={moveToHomeScreen}>
          <Image source={ICON.BACK_CONTAINER} style={styles.backIcon} />
        </TouchableOpacity>

        <View style={styles.infoContainer}>
          <Text style={styles.title}>{data.name}</Text>

          <View style={styles.bellowTitle}>
            <Text style={styles.price}>$ {data.price}.00</Text>

            <View style={styles.calculate}>
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={increaseHandler}>
                <Icon name="plus" style={styles.icon} />
              </TouchableOpacity>
              <Text style={styles.number}>{localQty}</Text>
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={decreaseHandler}>
                <Icon name="minus" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            style={styles.reviewContainer}
            onPress={moveToReviewScreen}>
            <Icon name="star" color="#f0db25" style={styles.star} />
            <Text style={styles.mark}>{data.rate}</Text>
            <Text style={styles.review}>({data.review} reviews)</Text>
          </TouchableOpacity>

          <Text style={styles.description} numberOfLines={5}>
            {data.description}
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.markerContainer}
          onPress={addToFavouriteHandler}>
          <Image
            source={isMarked ? ICON.MARKER : ICON.MARKER_DISABLE}
            style={styles.marker}
          />
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <BigCustomButton onPress={addToCartHandler}>
            Add to cart
          </BigCustomButton>
        </View>
      </View>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexContainer: {
    flex: 1,
  },
  image: {
    width: '90%',
    height: 450,
    marginLeft: '10%',
    borderBottomLeftRadius: 60,
  },
  backIconContainer: {
    position: 'absolute',
    top: 20,
    left: -20,
  },
  backIcon: {
    width: 120,
    height: 120,
  },
  infoContainer: {
    marginHorizontal: 16,
  },
  title: {
    marginTop: 16,
    fontSize: FONT_SIZE.H4,
    color: COLORS.MAIN,
  },
  bellowTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: FONT_SIZE.H3,
    color: COLORS.MAIN,
    fontWeight: FONT_WEIGHT.BOLD,
    marginVertical: 8,
  },
  calculate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 32,
    height: 32,
    backgroundColor: COLORS.SECONDARY,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 18,
    color: COLORS.MAIN,
  },
  number: {
    color: COLORS.MAIN,
    fontSize: FONT_SIZE.H5,
    marginHorizontal: 12,
  },
  reviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  star: {
    fontSize: 16,
    marginRight: 6,
  },
  mark: {
    fontSize: FONT_SIZE.BODY,
    color: COLORS.MAIN,
    fontWeight: FONT_WEIGHT.BOLD,
    marginRight: 16,
  },
  review: {
    fontSize: FONT_SIZE.LABEL,
    color: COLORS.SUB,
    marginRight: 6,
  },
  description: {
    fontFamily: FONTS.POPPINS,
    fontSize: FONT_SIZE.LABEL,
    color: COLORS.SUB,
  },
  footer: {
    flexDirection: 'row',
    marginVertical: 24,
    marginHorizontal: 16,
  },
  markerContainer: {
    backgroundColor: COLORS.SECONDARY,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginRight: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  marker: {
    width: 24,
    height: 24,
  },
  buttonContainer: {
    flex: 1,
  },
  pressed: {
    opacity: 0.25,
  },
});
