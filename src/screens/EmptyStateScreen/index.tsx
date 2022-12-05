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
import {BigCustomButton, CustomScreenContainer} from '../../components';
import {scaleUI} from '../../utils';
import {COLORS, FONTS, FONT_SIZE, LINE_HEIGHT} from '../../constants';

type Props = {
  source?: ImageSourcePropType;
  extraImageStyle?: StyleProp<ImageStyle>;
  title?: string;
  content?: string;
  buttonText?: string;
  hasButton?: boolean;
  onButtonPress?: () => void;
};

const EmptyStateScreen = ({
  source,
  extraImageStyle,
  title,
  content,
  buttonText,
  onButtonPress,
  hasButton = true,
}: Props) => {
  return (
    <CustomScreenContainer smallPadding style={styles.screen}>
      <View style={styles.contentContainer}>
        <Image source={source} style={[styles.image, extraImageStyle]} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
      <>
        {hasButton && (
          <BigCustomButton extraStyle={styles.button} onPress={onButtonPress}>
            {buttonText}
          </BigCustomButton>
        )}
      </>
    </CustomScreenContainer>
  );
};

export default EmptyStateScreen;

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -120,
  },
  image: {
    width: scaleUI(250, true),
    height: scaleUI(250, true),
  },
  title: {
    marginTop: 10,
    textTransform: 'capitalize',
    fontSize: FONT_SIZE.H4,
    lineHeight: LINE_HEIGHT.H4,
    color: COLORS.MAIN,
    fontFamily: FONTS.POPPINS_BOLD,
  },
  content: {
    marginTop: 10,
    fontSize: FONT_SIZE.BODY,
    lineHeight: LINE_HEIGHT.BODY,
    color: COLORS.SUB,
    fontFamily: FONTS.POPPINS,
  },
  button: {
    marginVertical: 24,
  },
});
