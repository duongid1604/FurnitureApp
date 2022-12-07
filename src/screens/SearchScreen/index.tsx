import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {CustomScreenContainer} from '../../components';
import {COLORS, FONTS, FONT_SIZE, IMAGES} from '../../constants';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchSearchProducts} from '../../redux/thunks/search.thunk';
import {HomeScreenNavigationProps, ProductType} from '../../types';
import EmptyStateScreen from '../EmptyStateScreen';

const SearchScreen = () => {
  const [filteredDataSource, setFilteredDataSource] = useState<ProductType[]>(
    [],
  );
  const [masterDataSource, setMasterDataSource] = useState<ProductType[]>([]);

  const navigation = useNavigation<HomeScreenNavigationProps>();

  const dispatch = useAppDispatch();

  const {searchProducts} = useAppSelector(state => state.searchProducts);

  const isNull = filteredDataSource.length === 0;

  useEffect(() => {
    dispatch(fetchSearchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (searchProducts) {
      setFilteredDataSource(searchProducts);
      setMasterDataSource(searchProducts);
    }
  }, [searchProducts]);

  const searchHandler = (text: String) => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
    } else {
      setFilteredDataSource(masterDataSource);
    }
  };

  const moveToProductScreenHandler = (item: ProductType) => {
    navigation.navigate('Product', {data: item});
  };

  const renderProducts = ({item}: {item: ProductType}) => (
    <TouchableOpacity
      style={styles.imageContainer}
      onPress={() => moveToProductScreenHandler(item)}>
      <Image source={{uri: item.image}} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>$ {item.price}.00</Text>
    </TouchableOpacity>
  );

  return (
    <CustomScreenContainer smallPadding>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          onChangeText={searchHandler}
          placeholder="Search something..."
        />
      </View>
      {isNull ? (
        <EmptyStateScreen
          title="no items match"
          content="Please check your keywords!"
          source={IMAGES.NO_ORDERS}
          hasButton={false}
        />
      ) : (
        <FlatList
          data={filteredDataSource}
          keyExtractor={item => item.id}
          renderItem={renderProducts}
          horizontal={false}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      )}
    </CustomScreenContainer>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  input: {
    padding: 16,
    borderColor: COLORS.SECONDARY,
    fontSize: FONT_SIZE.BODY,
  },
  searchContainer: {
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 16,
    backgroundColor: COLORS.WHITE,

    shadowColor: COLORS.SHADOW,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 50,
    marginRight: 10,
  },
  title: {
    fontSize: FONT_SIZE.H2,
    color: COLORS.MAIN,
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
    fontSize: FONT_SIZE.BODY,
    color: COLORS.SUB,
    textAlign: 'center',
  },
  price: {
    fontFamily: FONTS.POPPINS_BOLD,
    fontSize: FONT_SIZE.LABEL,
    color: COLORS.MAIN,
    textAlign: 'center',
  },
});
