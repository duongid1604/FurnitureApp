import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS, FONTS, FONT_SIZE} from '../../../constants';

const Category = () => {
  const categories = [
    {
      name: 'star-outline',
      title: 'Popular',
    },
    {
      name: 'chair-rolling',
      title: 'Chair',
    },
    {
      name: 'table-furniture',
      title: 'Table',
    },
    {
      name: 'sofa-single-outline',
      title: 'Armchair',
    },
    {
      name: 'bed-queen-outline',
      title: 'Bed',
    },
  ];

  const [isActive, setActive] = useState<Number>(0);

  const pressHandler = (index: Number) => {
    setActive(index);
  };

  return (
    <View style={styles.category}>
      {categories.map((category, index) => (
        <View style={styles.innerContainer} key={index}>
          <Pressable
            onPress={() => pressHandler(index)}
            style={
              index === isActive
                ? [styles.backgroundCategory, styles.active]
                : styles.backgroundCategory
            }>
            <MaterialCommunityIcons
              name={category.name}
              style={
                index === isActive
                  ? [styles.categoryItem, styles.active]
                  : styles.categoryItem
              }
            />
          </Pressable>

          <View style={styles.titleContainer}>
            <Text
              style={
                index === isActive
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
