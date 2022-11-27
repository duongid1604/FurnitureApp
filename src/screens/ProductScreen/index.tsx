import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {BigCustomButton} from '../../components';
import {COLORS, FONTS, FONT_SIZE, FONT_WEIGHT, ICON} from '../../constants';
import {ProductNavigationProp} from '../../types';
const ProductScreen = () => {
  const navigation = useNavigation<ProductNavigationProp>();

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

  const moveToHomeScreen = () => {
    navigation.goBack();
  };

  const moveToCartScreen = () => {
    navigation.navigate('Cart');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/product1.jpg')}
        style={styles.image}
      />
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.backIconContainer, styles.pressed]
            : styles.backIconContainer
        }
        onPress={moveToHomeScreen}>
        <Image source={ICON.BACK_CONTAINER} style={styles.backIcon} />
      </Pressable>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>Minimal Stand</Text>

        <View style={styles.bellowTitle}>
          <Text style={styles.price}>$ 50</Text>

          <View style={styles.calculate}>
            <Pressable
              style={({pressed}) =>
                pressed
                  ? [styles.iconContainer, styles.pressed]
                  : styles.iconContainer
              }
              onPress={increaseHandler}>
              <Icon name="plus" style={styles.icon} />
            </Pressable>
            <Text style={styles.number}>{number}</Text>
            <Pressable
              style={({pressed}) =>
                pressed
                  ? [styles.iconContainer, styles.pressed]
                  : styles.iconContainer
              }
              onPress={decreaseHandler}>
              <Icon name="minus" style={styles.icon} />
            </Pressable>
          </View>
        </View>

        <View style={styles.reviewContainer}>
          <Icon name="star" color="#f0db25" style={styles.star} />
          <Text style={styles.mark}>4.5</Text>
          <Text style={styles.review}>(50 reviews)</Text>
        </View>

        <Text style={styles.description} numberOfLines={5}>
          Minimal Stand is made of by natural wood. The design that is very
          simple and minimal.This is truly one of the best furniture in any
          family for now. With 3 different colors, you can see easily select the
          best match for your home.
        </Text>
      </View>
      <View style={styles.footer}>
        <Pressable
          style={({pressed}) =>
            pressed
              ? [styles.markerContainer, styles.pressed]
              : styles.markerContainer
          }>
          <Image source={ICON.MARKER} style={styles.marker} />
        </Pressable>
        <Pressable style={styles.buttonContainer}>
          <BigCustomButton onPress={moveToCartScreen}>
            Add to cart
          </BigCustomButton>
        </Pressable>
      </View>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '90%',
    height: 450,
    marginLeft: '10%',
    borderBottomLeftRadius: 60,
  },
  backIconContainer: {
    position: 'absolute',
    top: 20,
    left: -20,
  },
  backIcon: {
    width: 120,
    height: 120,
  },
  infoContainer: {
    marginHorizontal: 16,
  },
  title: {
    marginTop: 16,
    fontFamily: FONTS.POPPINS_BOLD,
    fontSize: FONT_SIZE.H5,
    color: COLORS.MAIN,
  },
  bellowTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontFamily: FONTS.POPPINS_BOLD,
    fontSize: FONT_SIZE.H3,
    color: COLORS.MAIN,
  },
  calculate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 24,
    height: 24,
    backgroundColor: COLORS.SECONDARY,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  icon: {
    fontSize: 16,
    color: COLORS.MAIN,
  },
  number: {
    color: COLORS.MAIN,
  },
  reviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  star: {
    fontSize: 16,
    marginRight: 6,
  },
  mark: {
    fontSize: FONT_SIZE.BODY,
    color: COLORS.MAIN,
    fontWeight: FONT_WEIGHT.BOLD,
    marginRight: 16,
  },
  review: {
    fontSize: FONT_SIZE.LABEL,
    color: COLORS.SUB,
    marginRight: 6,
  },
  description: {
    fontFamily: FONTS.POPPINS,
    fontSize: FONT_SIZE.LABEL,
    color: COLORS.SUB,
  },
  footer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    marginHorizontal: 16,
  },
  markerContainer: {
    backgroundColor: COLORS.SECONDARY,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginRight: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  marker: {
    width: 24,
    height: 24,
  },
  buttonContainer: {
    flex: 1,
  },
  pressed: {
    opacity: 0.25,
  },
});
