import React from 'react';
import {StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import {useCustomIconButton} from '../hooks';

type Props = {
  onPress?: () => void;
  icon: JSX.Element | undefined;
  activeIcon?: JSX.Element | undefined;
  extraStyle?: ViewStyle;
};

const CustomIconButton = ({onPress, icon, activeIcon, extraStyle}: Props) => {
  const {isActive, iconButtonPressHandler} = useCustomIconButton(
    icon,
    activeIcon,
    onPress,
  );

  return (
    <TouchableOpacity
      style={[styles.container, extraStyle]}
      onPress={iconButtonPressHandler}>
      {isActive ? activeIcon : icon}
    </TouchableOpacity>
  );
};

export default CustomIconButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
