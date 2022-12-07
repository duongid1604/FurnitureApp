import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {LoadingSpinner} from '../../../components';
import {COLORS, FONTS, FONT_SIZE} from '../../../constants';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {fetchProducts} from '../../../redux/thunks/product.thunk';
import {HomeScreenNavigationProps, ProductType} from '../../../types';
import {scaleUI} from '../../../utils';

const windowHeight = Dimensions.get('window').height;

const ProductList = () => {
  const navigation = useNavigation<HomeScreenNavigationProps>();
  const dispatch = useAppDispatch();

  const {products, field, type, condition, loading} = useAppSelector(
    state => state.products,
  );

  useEffect(() => {
    dispatch(fetchProducts({field, condition, type}));
  }, [dispatch, field, condition, type]);

  const moveToProductScreenHandler = (item: ProductType) => {
    navigation.navigate('Product', {data: item});
  };

  if (loading) {
    return (
      <View style={styles.loading}>
        <LoadingSpinner />
      </View>
    );
  }

  const renderProducts = ({item}: {item: ProductType}) => (
    <Pressable
      style={styles.imageContainer}
      onPress={() => moveToProductScreenHandler(item)}>
      <Image source={{uri: item.image}} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>$ {item.price}.00</Text>
    </Pressable>
  );

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={renderProducts}
      horizontal={false}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={styles.container}
    />
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: -10,
  },
  imageContainer: {
    marginVertical: 10,
    flex: 1,
    marginHorizontal: 10,
  },
  image: {
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
  loading: {
    height: windowHeight - scaleUI(300, true),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
