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
import Icon from 'react-native-vector-icons/MaterialIcons';
import {CustomScreenContainer} from '../../components';
import {COLORS, FONTS, FONT_SIZE} from '../../constants';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {
  ClearSearch,
  fetchSearchProducts,
} from '../../redux/reducers/searchSlice';
import {HomeScreenNavigationProps, ProductType} from '../../types';

const SearchScreen = () => {
  const [filteredDataSource, setFilteredDataSource] = useState<ProductType[]>(
    [],
  );
  const [masterDataSource, setMasterDataSource] = useState<ProductType[]>([]);

  const navigation = useNavigation<HomeScreenNavigationProps>();

  const dispatch = useAppDispatch();

  const {searchProducts} = useAppSelector(state => state.searchProducts);

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

  const backToHome = () => {
    dispatch(ClearSearch());
    navigation.goBack();
  };

  const moveToProductScreenHandler = () => {
    navigation.navigate('Product');
  };

  const renderProducts = ({item}: {item: ProductType}) => (
    <TouchableOpacity
      style={styles.imageContainer}
      onPress={moveToProductScreenHandler}>
      <Image source={{uri: item.image}} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>$ {item.price}.00</Text>
    </TouchableOpacity>
  );

  return (
    <CustomScreenContainer>
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={backToHome}>
          <Icon name="cancel" style={styles.icon} color={COLORS.MAIN} />
        </TouchableOpacity>
        <Text style={styles.title}>Search</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={searchHandler}
        placeholder="Search something..."
      />

      <FlatList
        data={filteredDataSource}
        keyExtractor={item => item.id}
        renderItem={renderProducts}
        horizontal={false}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </CustomScreenContainer>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  input: {
    marginTop: 30,
    marginBottom: 30,
    height: 50,
    borderRadius: 16,
    padding: 12,
    borderColor: COLORS.SECONDARY,
    fontSize: FONT_SIZE.BODY,
    backgroundColor: COLORS.NEUTRAL_20,
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
