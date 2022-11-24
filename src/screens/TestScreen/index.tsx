import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS, FONTS, FONT_SIZE, FONT_WEIGHT, ICON} from '../../constants';
import {useTestScreen} from '../../hooks';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type Props = {};

const TestScreen = ({}: Props) => {
  const {count, onDecrease, onIncrease} = useTestScreen();

  return (
    <ScrollView style={styles.screen}>
      <TouchableOpacity onPress={onIncrease}>
        <Text style={styles.text}>Increase</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onDecrease}>
        <Text>Decrease</Text>
      </TouchableOpacity>
      <Text>Count: {count}</Text>
      <View style={styles.icon}>
        <MaterialIcons name="file-download" size={50} color="#900" />
      </View>

      <Text style={styles.para}>
        Nice Furniture with good delivery. The delivery time is very fast. Then
        products look like exactly the picture in the app. Besides, color is
        also the same and quality is very good despite very cheap price
      </Text>

      <View>
        <Image style={styles.icon} source={ICON.ADD_TO_CART_BUTTON} />
        <Image style={styles.icon} source={ICON.BACK_CONTAINER} />
        <Image style={styles.icon} source={ICON.BACK_CONTAINER_DISABLE} />
        <Image style={styles.icon} source={ICON.BASELINE_KEYBOARD_ARROW_DOWN} />
        <Image
          style={styles.icon}
          source={ICON.BASELINE_KEYBOARD_ARROW_DOWN_DISABLE}
        />
        <Image style={styles.icon} source={ICON.BELL_DISABLE} />
        <Image style={styles.icon} source={ICON.BI_CART} />
        <Image style={styles.icon} source={ICON.BI_CART_DISABLE} />
        <Image style={styles.icon} source={ICON.BI_PERSON} />
        <Image style={styles.icon} source={ICON.BI_PERSON_DISABLE} />
        <Image style={styles.icon} source={ICON.CLARITY_HOME_SOLID} />
        <Image style={styles.icon} source={ICON.CLARITY_HOME_SOLID_DISABLE} />
        <Image style={styles.icon} source={ICON.DELETE} />
        <Image style={styles.icon} source={ICON.DELETE_DISABLE} />
        <Image style={styles.icon} source={ICON.EDIT} />
        <Image style={styles.icon} source={ICON.EDIT_DISABLE} />
        <Image style={styles.icon} source={ICON.EYE} />
        <Image style={styles.icon} source={ICON.EYE_DISABLE} />
        <Image style={styles.icon} source={ICON.CLOCK} />
        <Image style={styles.icon} source={ICON.CLOCK_DISABLE} />
        <Image style={styles.icon} source={ICON.LEFT} />
        <Image style={styles.icon} source={ICON.RIGHT} />
        <Image style={styles.icon} source={ICON.LEFT_DISABLE} />
        <Image style={styles.icon} source={ICON.RIGHT_DISABLE} />
        <Image style={styles.icon} source={ICON.LOGOUT} />
        <Image style={styles.icon} source={ICON.LOGOUT_DISABLE} />
        <Image style={styles.icon} source={ICON.MARKER_DISABLE} />
        <Image style={styles.icon} source={ICON.MARKER} />
        <Image style={styles.icon} source={ICON.PLACEHOLDER} />
        <Image style={styles.icon} source={ICON.PLUS} />
        <Image style={styles.icon} source={ICON.PLUS_DISABLE} />
        <Image style={styles.icon} source={ICON.SEARCH} />
        <Image style={styles.icon} source={ICON.SEARCH_DISABLE} />
        <Image style={styles.icon} source={ICON.SHAPE} />
        <Image style={styles.icon} source={ICON.SHAPE_DISABLE} />
        <Image style={styles.icon} source={ICON.SHOPPING_BAG} />
        <Image style={styles.icon} source={ICON.SHOPPING_BAG_DISABLE} />
        <Image style={styles.icon} source={ICON.BELL} />
      </View>
    </ScrollView>
  );
};

export default TestScreen;

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  icon: {
    height: 100,
    width: 100,
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
