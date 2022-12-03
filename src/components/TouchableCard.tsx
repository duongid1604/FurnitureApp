import React from 'react';
import {Pressable, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {COLORS} from '../constants';

type Props = {
  children: JSX.Element | JSX.Element[];
  extraStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
  hasRippleEffect?: boolean;
};

const TouchableCard = ({
  children,
  extraStyle,
  onPress,
  hasRippleEffect = true,
}: Props) => {
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{color: hasRippleEffect ? COLORS.BLACK_O2 : null}}
        style={[styles.button, extraStyle]}
        onPress={onPress}>
        {children}
      </Pressable>
    </View>
  );
};

export default TouchableCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.WHITE,
    borderRadius: 8,
    shadowColor: COLORS.SUB,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    marginBottom: 20,
    overflow: 'hidden',
  },
  button: {
    padding: 18,
  },
});
