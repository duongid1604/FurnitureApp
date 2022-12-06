import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import {BigCustomButton, CustomScreenContainer} from '../../components';
import {COLORS, FONTS, FONT_SIZE, ICON} from '../../constants';
import {useAppSelector, useCheckoutScreen} from '../../hooks';
import {CheckoutScreenProps, ProductType} from '../../types';
import {scaleUI} from '../../utils';

const Checkout = ({navigation, route}: CheckoutScreenProps) => {
  const {user} = useAppSelector(state => state.auth);
  const {onCheckout} = useCheckoutScreen();

  const {data} = route.params;

  const submitOrderHandler = () => {
    onCheckout(data);
    navigation.navigate('Congrats');
  };

  const moveToMyAddress = () => {
    if (!user) {
      return;
    }

    if (user.shippingAddresses.length === 0) {
      navigation.navigate('ShippingNavigator', {screen: 'AddShippingAddress'});
    } else {
      navigation.navigate('ShippingNavigator', {
        screen: 'ShippingAddress',
        params: {
          user,
        },
      });
    }
  };

  const renderCart = ({item}: {item: ProductType}) => (
    <View style={styles.container}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.innerCartContainer}>
        <View>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.price}>$ {item.price}.00</Text>
        </View>
      </View>
      <Text style={styles.number}>x{item.qty}</Text>
    </View>
  );

  return (
    <CustomScreenContainer smallPadding>
      <View style={styles.flexContainer}>
        <View style={styles.shippingAddress}>
          <View style={styles.label}>
            <Text style={styles.heading}>Shipping address</Text>
            <TouchableOpacity onPress={moveToMyAddress}>
              <Image source={ICON.EDIT} style={styles.editIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.name}>{user?.selectedAddress?.fullName}</Text>
            <Text style={styles.address}>
              {user?.selectedAddress?.address},{' '}
              {user?.selectedAddress?.district}, {user?.selectedAddress?.city},{' '}
              {user?.selectedAddress?.country}
            </Text>
          </View>
        </View>
        <View style={styles.cart}>
          <FlatList
            data={user?.cart.products}
            keyExtractor={item => item.id}
            renderItem={renderCart}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.footer}>
          <Text style={styles.text}>Total</Text>
          <Text style={styles.totalPrice}>$ {user?.cart.totalPrice}.00</Text>
        </View>
        <BigCustomButton onPress={submitOrderHandler}>
          Submit order
        </BigCustomButton>
      </View>
    </CustomScreenContainer>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  shippingAddress: {},
  label: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  heading: {
    fontFamily: FONTS.POPPINS,
    fontSize: FONT_SIZE.BODY,
    color: COLORS.SUB,
  },
  editIcon: {
    width: 24,
    height: 24,
  },
  innerContainer: {
    backgroundColor: COLORS.WHITE,
    padding: 10,
    borderRadius: 6,
    marginBottom: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  name: {
    fontFamily: FONTS.POPPINS_BOLD,
    fontSize: FONT_SIZE.BODY_18,
    color: COLORS.MAIN,
  },
  address: {
    fontFamily: FONTS.POPPINS,
    fontSize: FONT_SIZE.LABEL,
    color: COLORS.SUB,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 6,
    marginBottom: 16,

    backgroundColor: COLORS.WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  text: {
    fontFamily: FONTS.POPPINS,
    fontSize: FONT_SIZE.H5,
    color: COLORS.SUB,
  },
  totalPrice: {
    fontFamily: FONTS.POPPINS_BOLD,
    fontSize: FONT_SIZE.H5,
    color: COLORS.MAIN,
  },
  buttonContainer: {
    marginVertical: 24,
  },
  cart: {
    height: '70%',

    backgroundColor: COLORS.WHITE,
    borderRadius: 6,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: COLORS.SECONDARY,
    marginBottom: 16,
  },
  innerCartContainer: {
    flexDirection: 'column',
  },
  title: {
    fontSize: FONT_SIZE.BODY,
    color: COLORS.MAIN,
    fontFamily: FONTS.POPPINS,
  },
  price: {
    fontSize: FONT_SIZE.BODY_18,
    color: COLORS.MAIN,
    fontFamily: FONTS.POPPINS_BOLD,
  },
  image: {
    height: scaleUI(80, true),
    width: scaleUI(80, true),
    borderRadius: 16,
    marginRight: 24,
    marginBottom: 16,
  },

  number: {
    color: COLORS.MAIN,
    fontSize: FONT_SIZE.BODY,
    position: 'absolute',
    right: 0,
    fontFamily: FONTS.POPPINS,
  },
});
