import React from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {COLORS, FONTS, FONT_SIZE, ICON, LINE_HEIGHT} from '../constants';
import TouchableCard from './TouchableCard';

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
    <TouchableCard
      onPress={onPress}
      extraStyle={[styles.container, extraContainerStyle]}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.info}>{info}</Text>
      </View>
      <Image source={ICON.RIGHT} style={styles.arrowIcon} />
    </TouchableCard>
  );
};

export default CustomInfoButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: FONT_SIZE.BODY_18,
    lineHeight: LINE_HEIGHT.BODY,
    color: COLORS.MAIN,
    fontFamily: FONTS.POPPINS_BOLD,
    marginBottom: 4,
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
