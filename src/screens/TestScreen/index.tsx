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
import BigCustomButton from '../../components/BigCustomButton';
import NormalCustomButton from '../../components/NormalCustomButton';

type Props = {};

const TestScreen = ({}: Props) => {
  // const {count, onDecrease, onIncrease} = useTestScreen();

  return (
    <ScrollView style={styles.screen}>
      {/* <TouchableOpacity onPress={onIncrease}>
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
      </Text> */}

      <View style={styles.screen}>
        <BigCustomButton>Placeholder</BigCustomButton>
      </View>

      <NormalCustomButton>Placeholder </NormalCustomButton>
    </ScrollView>
  );
};

export default TestScreen;

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
    flex: 1,
    margin: 16,
  },
  icon: {
    height: 100,
    width: 100,
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
    icon: {
      width: 50,
      height: 50,
    },
  },
});
