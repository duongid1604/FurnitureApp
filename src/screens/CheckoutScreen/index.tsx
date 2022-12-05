import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BigCustomButton, CustomScreenContainer} from '../../components';
import {scaleUI} from '../../utils';
import {COLORS, FONTS, FONT_SIZE} from '../../constants';
import {useAppSelector} from '../../hooks';

const Checkout = () => {
  const {user} = useAppSelector(state => state.auth);

  const submitOrderHandler = () => {};
  return (
    <CustomScreenContainer smallPadding>
      <View style={styles.footer}>
        <Text style={styles.text}>Total</Text>
        <Text style={styles.totalPrice}>$ {user?.cart.totalPrice}.00</Text>
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
    position: 'absolute',
    bottom: scaleUI(40, true),
    left: 0,
    right: 0,
    marginHorizontal: 24,
  },
});
