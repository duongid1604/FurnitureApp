import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS, FONT_SIZE, ICON} from '../../../constants';
import {useAppSelector} from '../../../hooks';
import {HomeScreenNavigationProps} from '../../../types';

const Header = () => {
  const navigation = useNavigation<HomeScreenNavigationProps>();

  const {user} = useAppSelector(state => state.auth);

  const moveToSearchScreen = () => {
    navigation.navigate('Search');
  };

  const moveToCartScreen = () => {
    navigation.navigate('Cart');
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={moveToSearchScreen}>
        <Image source={ICON.SEARCH_DISABLE} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.headingCenter}>
        <Text style={styles.smallHeading}>make home</Text>
        <Text style={styles.bigHeading}>beautiful</Text>
      </View>
      <TouchableOpacity onPress={moveToCartScreen}>
        <Image source={ICON.BI_CART_DISABLE} style={styles.image} />
        <View style={styles.totalQtyContainer}>
          <Text style={styles.totalQty}>{user?.cart.totalQty}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 24,
    height: 24,
  },
  headingCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallHeading: {
    textTransform: 'uppercase',
    color: COLORS.SUB,
    fontSize: FONT_SIZE.BODY,
    fontFamily: FONTS.POPPINS,
  },
  bigHeading: {
    textTransform: 'uppercase',
    color: COLORS.SUB,
    fontSize: FONT_SIZE.H4,
    fontFamily: FONTS.POPPINS_BOLD,
  },
  totalQtyContainer: {
    backgroundColor: COLORS.MAIN,
    width: 16,
    height: 16,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: -6,
    top: -6,
  },
  totalQty: {
    color: COLORS.WHITE,
    fontSize: FONT_SIZE.TINY,
  },
});
