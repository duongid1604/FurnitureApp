import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
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

  const hasAddress = user?.shippingAddresses.length === 0;
  const hasPaymentMethod = user?.paymentMethods.length === 0;

  const submitOrderHandler = () => {
    if (hasAddress || hasPaymentMethod) {
      return;
    }

    onCheckout(data);
    navigation.navigate('Congrats');
  };

  const moveToMyAddress = () => {
    if (!user) {
      return;
    }

    if (user.shippingAddresses.length === 0) {
      navigation.navigate('ShippingNavigator', {
        screen: 'AddShippingAddress',
        params: {from: 'checkout'},
      });
    } else {
      navigation.navigate('ShippingNavigator', {
        screen: 'ShippingAddress',
        params: {
          user,
        },
      });
    }
  };

  const moveToPayment = () => {
    if (!user) {
      return;
    }

    if (user.paymentMethods.length === 0) {
      navigation.navigate('PaymentNavigator', {
        screen: 'AddPayment',
      });
    } else {
      navigation.navigate('PaymentNavigator', {
        screen: 'PaymentMethod',
        params: {
          user,
        },
      });
    }
  };

  const placeholder = user?.selectedPaymentMethod?.cardNumber.toString();
  const result = placeholder?.slice(-4);

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
        <View style={styles.label}>
          <Text style={styles.heading}>Shipping address</Text>
          <TouchableOpacity onPress={moveToMyAddress}>
            <Image source={ICON.EDIT} style={styles.editIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.boxShadow}>
          {hasAddress ? (
            <TouchableOpacity onPress={moveToMyAddress}>
              <Text style={styles.address}>
                You need at lest 1 shipping address!
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={moveToMyAddress}>
              <Text style={styles.name}>{user?.selectedAddress?.fullName}</Text>
              <Text style={styles.address}>
                {user?.selectedAddress?.address}
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <View>
          <View style={styles.label}>
            <Text style={styles.heading}>Payment</Text>
            <TouchableOpacity onPress={moveToPayment}>
              <Image source={ICON.EDIT} style={styles.editIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.boxShadow}>
            {hasPaymentMethod ? (
              <TouchableOpacity onPress={moveToPayment}>
                <Text style={styles.address}>
                  You need at lest 1 payment method!
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.paymentContainer}
                onPress={moveToPayment}>
                <View style={styles.mastercardContainer}>
                  <Image
                    source={ICON.MASTERCARD_DISABLE}
                    style={styles.mastercard}
                  />
                </View>
                <View>
                  <Text style={styles.name}>**** **** **** </Text>
                  <Text style={styles.name}>{result}</Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={[styles.cart, styles.boxShadow]}>
          <FlatList
            data={user?.cart.products}
            keyExtractor={item => item.id}
            renderItem={renderCart}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <View style={[styles.footer, styles.boxShadow]}>
          <Text style={styles.text}>Total</Text>
          <Text style={styles.totalPrice}>$ {user?.cart.totalPrice}.00</Text>
        </View>
        <BigCustomButton
          onPress={submitOrderHandler}
          extraStyle={
            hasAddress || hasPaymentMethod ? styles.disable : undefined
          }>
          Submit order
        </BigCustomButton>
      </View>
    </CustomScreenContainer>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  boxShadow: {
    backgroundColor: COLORS.WHITE,
    padding: 10,
    borderRadius: 6,
    marginBottom: 16,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  flexContainer: {
    flex: 1,
  },
  label: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  heading: {
    fontFamily: FONTS.POPPINS,
    fontSize: FONT_SIZE.BODY_18,
    color: COLORS.SUB,
  },
  editIcon: {
    width: 24,
    height: 24,
  },
  name: {
    fontFamily: FONTS.POPPINS_BOLD,
    fontSize: FONT_SIZE.BODY,
    color: COLORS.MAIN,
  },
  address: {
    fontFamily: FONTS.POPPINS,
    fontSize: FONT_SIZE.BODY,
    color: COLORS.SUB,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    flex: 1,
  },
  container: {
    flexDirection: 'row',

    marginBottom: 10,
    marginTop: 10,
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
  },
  number: {
    color: COLORS.MAIN,
    fontSize: FONT_SIZE.BODY,
    position: 'absolute',
    right: 10,
    top: 10,
    fontFamily: FONTS.POPPINS,
  },
  disable: {
    backgroundColor: COLORS.DISABLE,
  },

  paymentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mastercardContainer: {
    backgroundColor: COLORS.WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 1,
    padding: 6,
    marginHorizontal: 16,
  },
  mastercard: {
    width: scaleUI(24),
    height: scaleUI(24),
    marginHorizontal: 10,
  },
});
