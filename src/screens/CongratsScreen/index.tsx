import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {BigCustomButton, CustomScreenContainer} from '../../components';
import {COLORS, FONTS, FONT_SIZE} from '../../constants';
import {CongratsScreenProps} from '../../types';
import {scaleUI} from '../../utils';

const CongratsScreen = ({navigation}: CongratsScreenProps) => {
  const trackOrdersHandler = () => {
    navigation.navigate('MyOrders');
  };

  const moveToHome = () => {
    navigation.navigate('HomeNavigator', {screen: 'Home'});
  };

  return (
    <CustomScreenContainer>
      <View style={styles.container}>
        <Text style={styles.title}>Success !</Text>

        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/ordered.png')}
            style={styles.image}
          />
        </View>

        <Text style={styles.text}>Your oder will be delivered soon.</Text>
        <Text style={styles.text}>Thank you for choosing our app !</Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.buttonContainer}>
          <BigCustomButton onPress={trackOrdersHandler}>
            Track your order
          </BigCustomButton>
        </View>
        <View style={styles.buttonContainer}>
          <BigCustomButton onPress={moveToHome}>Back to home</BigCustomButton>
        </View>
      </View>
    </CustomScreenContainer>
  );
};

export default CongratsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontFamily: FONTS.POPPINS_BOLD,
    fontSize: FONT_SIZE.H3,
    color: COLORS.MAIN,
    textTransform: 'uppercase',
  },
  image: {
    height: scaleUI(300, true),
    width: scaleUI(300, true),
  },
  text: {
    textAlign: 'center',
    fontFamily: FONTS.POPPINS,
    fontSize: FONT_SIZE.BODY,
    color: COLORS.SUB,
  },
  footer: {
    marginVertical: 24,
  },
  buttonContainer: {
    marginTop: 16,
  },
});
