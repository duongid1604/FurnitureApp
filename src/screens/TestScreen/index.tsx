import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS, FONT_SIZE, FONT_WEIGHT} from '../../constants';
import {useTestScreen} from '../../hooks';

type Props = {};

const TestScreen = ({}: Props) => {
  const {count, onDecrease, onIncrease} = useTestScreen();

  return (
    <View style={styles.screen}>
      <TouchableOpacity onPress={onIncrease}>
        <Text style={styles.text}>Increase</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onDecrease}>
        <Text>Decrease</Text>
      </TouchableOpacity>
      <Text>Count: {count}</Text>
      <Text style={styles.para}>
        Nice Furniture with good delivery. The delivery time is very fast. Then
        products look like exactly the picture in the app. Besides, color is
        also the same and quality is very good despite very cheap price
      </Text>
    </View>
  );
};

export default TestScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  text: {
    fontSize: FONT_SIZE.LABEL,
    color: COLORS.DANGER,
    fontFamily: FONTS.POPPINS,
    fontWeight: FONT_WEIGHT.REGULAR,
  },
  para: {
    fontSize: FONT_SIZE.LABEL,
    fontWeight: FONT_WEIGHT.REGULAR,
    color: COLORS.SUB,
  },
});
