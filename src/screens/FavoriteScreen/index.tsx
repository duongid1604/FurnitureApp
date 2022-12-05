import React from 'react';
import Toast from 'react-native-toast-message';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {CustomScreenContainer} from '../../components';
import {COLORS, FONTS, FONT_SIZE, ICON} from '../../constants';
import {
  useAddCartScreen,
  useAddFavouriteScreen,
  useAppSelector,
} from '../../hooks';
import {ProductType} from '../../types';
import {scaleUI} from '../../utils';

const FavoriteScreen = () => {
  const {user} = useAppSelector(state => state.auth);

  const {onAddFavourite} = useAddFavouriteScreen();

  const {onAddCart} = useAddCartScreen();

  const deleteFromFavouriteHandler = (item: ProductType) => {
    onAddFavourite(item);
  };

  const addToCartHandler = (item: ProductType) => {
    onAddCart(item, 1);
    Toast.show({
      type: 'success',
      text1: 'Done',
      text2: 'Add to cart successfully !',
    });
  };

  const renderFavourite = ({item}: {item: ProductType}) => {
    const isCart = user?.cart.products.some(
      cartItem => cartItem.id === item.id,
    );
    return (
      <View style={styles.container}>
        <Image source={{uri: item.image}} style={styles.image} />
        <View style={styles.innerContainer}>
          <View>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.price}>$ {item.price}.00</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.featherIconContainer}
          onPress={() => deleteFromFavouriteHandler(item)}>
          <Feather name="x-circle" style={styles.featherIcon} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.addToCartIconContainer}
          onPress={() => addToCartHandler(item)}>
          <Image
            source={isCart ? ICON.SHOPPING_BAG : ICON.SHOPPING_BAG_DISABLE}
            style={styles.addToCartIcon}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <CustomScreenContainer smallPadding>
      <View style={styles.flatListContainer}>
        <FlatList
          data={user?.favourite}
          keyExtractor={item => item.id}
          renderItem={renderFavourite}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </CustomScreenContainer>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  flatListContainer: {
    // height: '75%',
  },
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: COLORS.SECONDARY,
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
  image: {
    height: 120,
    width: 120,
    borderRadius: 16,
    marginRight: 24,
    marginBottom: 20,
  },
  featherIconContainer: {
    position: 'absolute',
    right: 0,
  },
  featherIcon: {
    fontSize: 20,
    color: COLORS.MAIN,
  },
  addToCartIconContainer: {
    position: 'absolute',
    bottom: 20,
    right: 0,
    padding: 5,
    backgroundColor: COLORS.SECONDARY,
    borderRadius: 6,
  },
  addToCartIcon: {
    width: 20,
    height: 20,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: scaleUI(40, true),
    left: 0,
    right: 0,
    marginHorizontal: 24,
  },
});
