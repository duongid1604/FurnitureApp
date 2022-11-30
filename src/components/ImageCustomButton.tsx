import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

type Props = {
  source: ImageSourcePropType;
  extraStyle?: StyleProp<ViewStyle>;
  extraImageStyle?: StyleProp<ImageStyle>;
  onPress?: () => void;
};

const ImageCustomButton = ({
  source,
  extraStyle,
  extraImageStyle,
  onPress,
}: Props) => {
  return !onPress ? (
    <Image source={source} style={[styles.image, extraImageStyle]} />
  ) : (
    <TouchableOpacity onPress={onPress} style={extraStyle}>
      <Image source={source} style={[styles.image, extraImageStyle]} />
    </TouchableOpacity>
  );
};

export default ImageCustomButton;

const styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24,
  },
});
