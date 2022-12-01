import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS, FONT_SIZE, ICON} from '../../../constants';
import {HomeScreenNavigationProps} from '../../../types';

const Header = () => {
  const navigation = useNavigation<HomeScreenNavigationProps>();

  const moveToSearchScreen = () => {
    navigation.navigate('Search');
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
      <Image source={ICON.BI_CART_DISABLE} style={styles.image} />
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
});
