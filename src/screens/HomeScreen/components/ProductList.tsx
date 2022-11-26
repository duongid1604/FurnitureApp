import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, FONT_SIZE} from '../../../constants';
import {useNavigation} from '@react-navigation/native';
import {ProductNavigationProp} from '../../../types';

const ProductList = () => {
  const navigation = useNavigation<ProductNavigationProp>();

  const moveToProductScreenHandler = () => {
    navigation.navigate('Product');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        <Pressable
          style={styles.imageContainer}
          onPress={moveToProductScreenHandler}>
          <Image
            source={require('../../../assets/images/product1.jpg')}
            style={styles.image}
          />
          <Text style={styles.name}>Black Simple</Text>
          <Text style={styles.price}>$ 12.00</Text>
        </Pressable>
        <Pressable style={styles.imageContainer}>
          <Image
            source={require('../../../assets/images/product3.jpg')}
            style={styles.image}
          />
          <Text style={styles.name}>Black Simple</Text>
          <Text style={styles.price}>$ 12.00</Text>
        </Pressable>
      </View>

      <View style={styles.row}>
        <Pressable style={styles.imageContainer}>
          <Image
            source={require('../../../assets/images/lamp1.jpg')}
            style={styles.image}
          />
          <Text style={styles.name}>Black Simple</Text>
          <Text style={styles.price}>$ 12.00</Text>
        </Pressable>
        <Pressable style={styles.imageContainer}>
          <Image
            source={require('../../../assets/images/lamp2.jpg')}
            style={styles.image}
          />
          <Text style={styles.name}>Black Simple</Text>
          <Text style={styles.price}>$ 12.00</Text>
        </Pressable>
      </View>

      <View style={styles.row}>
        <Pressable style={styles.imageContainer}>
          <Image
            source={require('../../../assets/images/product1.jpg')}
            style={styles.image}
          />
          <Text style={styles.name}>Black Simple</Text>
          <Text style={styles.price}>$ 12.00</Text>
        </Pressable>
        <Pressable style={styles.imageContainer}>
          <Image
            source={require('../../../assets/images/product3.jpg')}
            style={styles.image}
          />
          <Text style={styles.name}>Black Simple</Text>
          <Text style={styles.price}>$ 12.00</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    marginVertical: 10,
  },
  image: {
    width: 160,
    height: 200,
    borderRadius: 16,
  },
  name: {
    marginTop: 6,
    fontFamily: FONTS.POPPINS,
    fontSize: FONT_SIZE.LABEL,
    color: COLORS.SUB,
  },
  price: {
    fontFamily: FONTS.POPPINS_BOLD,
    fontSize: FONT_SIZE.SMALL,
    color: COLORS.MAIN,
  },
});
