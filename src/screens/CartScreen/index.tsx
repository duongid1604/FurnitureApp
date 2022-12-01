import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {CustomScreenContainer} from '../../components';
import {COLORS, FONTS, FONT_SIZE} from '../../constants';
import Icon from 'react-native-vector-icons/AntDesign';

const CartScreen = () => {
  const [number, setNumber] = useState(1);

  const increaseHandler = () => {
    setNumber(number + 1);
  };

  const decreaseHandler = () => {
    if (number === 1) {
      return;
    }
    setNumber(number - 1);
  };

  return (
    <CustomScreenContainer smallPadding>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/lamp1.jpg')}
          style={styles.image}
        />
        <View style={styles.innerContainer}>
          <View>
            <Text style={styles.title}>Minimal Stand</Text>
            <Text style={styles.price}>$ 25.00</Text>
          </View>
          <View style={styles.calculate}>
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={increaseHandler}>
              <Icon name="plus" style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.number}>{number}</Text>
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={decreaseHandler}>
              <Icon name="minus" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </CustomScreenContainer>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: COLORS.BG,
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
});
