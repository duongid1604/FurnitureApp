import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {COLORS, FONTS, FONT_SIZE, LINE_HEIGHT} from '../../../constants';

type Props = {
  isActive?: boolean;
};

const Checkbox = ({isActive}: Props) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={styles.container}>
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={newValue => setToggleCheckBox(newValue)}
        tintColors={{true: COLORS.MAIN}}
      />
      <Text style={styles.text}>Use as the shipping address</Text>
    </View>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: FONT_SIZE.BODY_18,
    lineHeight: LINE_HEIGHT.BODY,
    color: COLORS.MAIN,
    fontFamily: FONTS.POPPINS,
  },
  disable: {
    color: COLORS.SUB,
  },
});
