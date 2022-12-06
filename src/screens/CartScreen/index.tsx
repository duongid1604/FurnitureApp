import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {BigCustomButton, CustomScreenContainer} from '../../components';
import {COLORS, FONTS, FONT_SIZE, ICON} from '../../constants';
import {useAppSelector, useCartScreen, useUpdateCartScreen} from '../../hooks';
import {CartScreenProps, ProductType} from '../../types';
import {scaleUI} from '../../utils';

const CartScreen = ({navigation}: CartScreenProps) => {
  const {user} = useAppSelector(state => state.auth);

  const {onUpdateCart} = useUpdateCartScreen();

  const {onIncreaseQty, onDecreaseQty} = useCartScreen();

  const increaseHandler = (item: ProductType) => {
    onIncreaseQty(item, 1);
  };

  const decreaseHandler = (item: ProductType) => {
    if (item.qty === 1) {
      return;
    }
    onDecreaseQty(item, 1);
  };

  const deleteFromCartHandler = (id: string) => {
    onUpdateCart(id);
  };

  const moveToHome = () => {
    navigation.navigate('HomeNavigator', {screen: 'Home'});
  };

  const moveToCheckoutScreen = () => {
    navigation.navigate('Checkout', {
      data: user?.cart.products,
    });
  };

  const renderCart = ({item}: {item: ProductType}) => (
    <View style={styles.container}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.innerContainer}>
        <View>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.price}>$ {item.price}.00</Text>
        </View>
        <View style={styles.calculate}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => increaseHandler(item)}>
            <Icon name="plus" style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.number}>{item.qty}</Text>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => decreaseHandler(item)}>
            <Icon name="minus" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.featherIconContainer}
        onPress={() => deleteFromCartHandler(item.id)}>
        <Feather name="x-circle" style={styles.featherIcon} />
      </TouchableOpacity>
    </View>
  );

  return (
    <CustomScreenContainer smallPadding>
      <View style={styles.flatListContainer}>
        <FlatList
          data={user?.cart.products}
          keyExtractor={item => item.id}
          renderItem={renderCart}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <View style={styles.footerContainer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total: </Text>
          <Text style={styles.totalPrice}>$ {user?.cart.totalPrice}.00</Text>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.homeIconContainer}
            onPress={moveToHome}>
            <Image source={ICON.CLARITY_HOME_SOLID} style={styles.homeIcon} />
          </TouchableOpacity>
          <View style={styles.buttonContainer}>
            <BigCustomButton onPress={moveToCheckoutScreen}>
              Check out
            </BigCustomButton>
          </View>
        </View>
      </View>
    </CustomScreenContainer>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  flatListContainer: {
    height: '75%',
    flex: 1,
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
    height: scaleUI(120, true),
    width: scaleUI(120, true),
    borderRadius: 16,
    marginRight: 24,
    marginBottom: 20,
  },
  calculate: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
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
  featherIconContainer: {
    position: 'absolute',
    right: 0,
  },
  featherIcon: {
    fontSize: 20,
    color: COLORS.MAIN,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  totalText: {
    fontFamily: FONTS.POPPINS_BOLD,
    fontSize: FONT_SIZE.H5,
    color: COLORS.SUB,
  },
  totalPrice: {
    fontFamily: FONTS.POPPINS_BOLD,
    fontSize: FONT_SIZE.H5,
    color: COLORS.MAIN,
  },
  footerContainer: {
    marginVertical: 24,
  },
  footer: {
    flexDirection: 'row',
  },
  homeIconContainer: {
    backgroundColor: COLORS.SECONDARY,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginRight: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
  },
  homeIcon: {
    width: 24,
    height: 24,
  },
});
