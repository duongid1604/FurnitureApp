import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BigCustomButton, CustomScreenContainer} from '../../components';
import {COLORS, FONTS, FONT_SIZE, ICON} from '../../constants';
import {useAppSelector, useCheckoutScreen} from '../../hooks';
import {CheckoutScreenProps} from '../../types';

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

        <View style={styles.footer}>
          <Text style={styles.text}>Total</Text>
          <Text style={styles.totalPrice}>$ {user?.cart.totalPrice}.00</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
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
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 6,

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
});
