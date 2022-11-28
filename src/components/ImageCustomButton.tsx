import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

type Props = {
  source: ImageSourcePropType;
  extraStyle?: StyleProp<ImageStyle>;
};

const ImageCustomButton = ({source, extraStyle}: Props) => {
  return <Image source={source} style={[styles.image, extraStyle]} />;
};

export default ImageCustomButton;

const styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24,
  },
});
