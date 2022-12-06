import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';
import Lottie from 'lottie-react-native';
import React, {useRef} from 'react';
import {StyleSheet} from 'react-native';
import {HomeTabParamList} from '../types/';

import {FONTS} from '../constants';
import {
  FavoriteScreen,
  HomeScreen,
  NotificationScreen,
  ProfileScreen,
} from '../screens';
import {scaleUI} from '../utils';

const HomeTab = createBottomTabNavigator<HomeTabParamList>();

const CustomTab = ({
  focused,
  route,
}: {
  focused: boolean;
  route: RouteProp<HomeTabParamList, keyof HomeTabParamList>;
}) => {
  const ref = useRef<Lottie>(null);
  let path;
  let iconStyle = styles.icon;

  if (route.name === 'Home') {
    path = require('../assets/LottieAnimation/home.json');
    iconStyle = styles.home;
    if (focused) {
      ref.current?.play();
    }
  } else if (route.name === 'Favorite') {
    path = require('../assets/LottieAnimation/bookmark.json');
    if (focused) {
      ref.current?.play();
    }
  } else if (route.name === 'Notification') {
    path = require('../assets/LottieAnimation/bell.json');
    iconStyle = styles.bell;
    if (focused) {
      ref.current?.play();
    }
  } else if (route.name === 'Profile') {
    path = require('../assets/LottieAnimation/user.json');
    iconStyle = styles.user;
    if (focused) {
      ref.current?.play();
    }
  }

  return (
    <Lottie
      ref={ref}
      autoPlay={false}
      loop={false}
      source={path}
      style={iconStyle}
      imageAssetsFolder="../assets/LottieAnimation"
    />
  );
};

const HomeNavigator = () => {
  return (
    <HomeTab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          return <CustomTab focused={focused} route={route} />;
        },
        tabBarShowLabel: false,
        headerTitleAlign: 'center',
        headerTitleStyle: styles.headerTitle,
      })}>
      <HomeTab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <HomeTab.Screen name="Favorite" component={FavoriteScreen} />
      <HomeTab.Screen name="Notification" component={NotificationScreen} />
      <HomeTab.Screen name="Profile" component={ProfileScreen} />
    </HomeTab.Navigator>
  );
};

export default HomeNavigator;

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: FONTS.POPPINS_BOLD,
  },
  icon: {
    width: scaleUI(24, true),
    height: scaleUI(24, true),
  },
  home: {
    width: scaleUI(60, true),
    height: scaleUI(60, true),
  },
  user: {
    width: scaleUI(20, true),
    height: scaleUI(20, true),
  },
  bell: {
    width: scaleUI(100, true),
    height: scaleUI(100, true),
  },
});
