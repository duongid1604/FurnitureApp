import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS, FONTS, FONT_SIZE} from '../../../constants';
import {useAppDispatch} from '../../../hooks';
import {chooseCategory} from '../../../redux/reducers/productSlice';

const Category = () => {
  const dispatch = useAppDispatch();

  const categories = [
    {
      id: 0,
      name: 'star-outline',
      title: 'Popular',
    },
    {
      id: 1,
      name: 'chair-rolling',
      title: 'Chair',
    },
    {
      id: 2,
      name: 'table-furniture',
      title: 'Table',
    },
    {
      id: 3,
      name: 'sofa-single-outline',
      title: 'Armchair',
    },
    {
      id: 4,
      name: 'bed-queen-outline',
      title: 'Bed',
    },
  ];

  const [isActive, setActive] = useState<Number>(0);

  const pressHandler = (id: Number) => {
    setActive(id);
    dispatch(chooseCategory(id));
  };

  return (
    <View style={styles.category}>
      {categories.map(category => (
        <View style={styles.innerContainer} key={category.id}>
          <Pressable
            onPress={() => pressHandler(category.id)}
            style={
              category.id === isActive
                ? [styles.backgroundCategory, styles.active]
                : styles.backgroundCategory
            }>
            <MaterialCommunityIcons
              name={category.name}
              style={
                category.id === isActive
                  ? [styles.categoryItem, styles.active]
                  : styles.categoryItem
              }
            />
          </Pressable>

          <View style={styles.titleContainer}>
            <Text
              style={
                category.id === isActive
                  ? [styles.title, styles.titleActive]
                  : styles.title
              }>
              {category.title}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  backgroundCategory: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: COLORS.BG,
  },
  categoryItem: {
    fontSize: 32,
  },
  active: {
    backgroundColor: COLORS.MAIN,
    color: COLORS.WHITE,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: FONT_SIZE.LABEL,
    color: COLORS.SUB,
    fontFamily: FONTS.POPPINS,
  },
  titleActive: {
    color: COLORS.MAIN,
  },
});
