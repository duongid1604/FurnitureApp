import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, FONT_SIZE, ICON, LINE_HEIGHT} from '../constants';

type Props = {
  onPress?: () => void;
  title: string;
  info: string;
  extraContainerStyle?: StyleProp<ViewStyle>;
};

const CustomInfoButton = ({
  title,
  info,
  onPress,
  extraContainerStyle,
}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.container, extraContainerStyle]}
      onPress={onPress}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.info}>{info}</Text>
      </View>
      <Image source={ICON.RIGHT} style={styles.arrowIcon} />
    </TouchableOpacity>
  );
};

export default CustomInfoButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
    padding: 18,
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: COLORS.SHADOW,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: FONT_SIZE.BODY_18,
    lineHeight: LINE_HEIGHT.BODY,
    color: COLORS.MAIN,
    fontFamily: FONTS.POPPINS_BOLD,
  },
  info: {
    fontSize: FONT_SIZE.SMALL,
    lineHeight: LINE_HEIGHT.SMALL,
    color: COLORS.SUB,
  },
  arrowIcon: {
    width: 24,
    height: 24,
  },
});
