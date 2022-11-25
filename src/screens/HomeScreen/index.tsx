import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {HomeScreenProps} from '../../types';
import {CustomScreenContainer, TestButton} from '../../components';
import {COLORS, FONTS, FONT_SIZE, FONT_WEIGHT, ICON} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const moveToProductScreenHandler = () => {
    navigation.navigate('Product');
  };

  return (
    <CustomScreenContainer>
      <View style={styles.header}>
        <Image source={ICON.SEARCH_DISABLE} style={styles.image} />
        <View style={styles.headingCenter}>
          <Text style={styles.smallHeading}>make home</Text>
          <Text style={styles.bigHeading}>beautiful</Text>
        </View>
        <Image source={ICON.BI_CART_DISABLE} style={styles.image} />
      </View>

      <View style={styles.categoryContainer}>
        <View style={styles.backgroundCategory}>
          <Icon name="star-o" style={styles.category} />
        </View>
        <View style={styles.backgroundCategory}>
          <Icon name="star-o" style={styles.category} />
        </View>
        <View style={styles.backgroundCategory}>
          <Icon name="star-o" style={styles.category} />
        </View>
        <View style={styles.backgroundCategory}>
          <Icon name="star-o" style={styles.category} />
        </View>
        <View style={styles.backgroundCategory}>
          <Icon name="star-o" style={styles.category} />
        </View>
      </View>
    </CustomScreenContainer>
  );
};

export default HomeScreen;

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
    fontWeight: FONT_WEIGHT.REGULAR,
  },
  bigHeading: {
    textTransform: 'uppercase',
    color: COLORS.SUB,
    fontSize: FONT_SIZE.H4,
    fontFamily: FONTS.POPPINS_BOLD,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  backgroundCategory: {
    backgroundColor: COLORS.DISABLE,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  category: {
    fontSize: 32,
  },
});
