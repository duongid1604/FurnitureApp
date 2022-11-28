import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {ImageCustomButton} from '../components';
import {ICON} from '../constants';
import {
  FavoriteScreen,
  HomeScreen,
  NotificationScreen,
  ProfileScreen,
} from '../screens';
import {HomeTabParamList} from '../types';

const HomeTab = createBottomTabNavigator<HomeTabParamList>();

const HomeNavigator = () => {
  return (
    <HomeTab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let icon;
          if (route.name === 'Home') {
            icon = focused
              ? ICON.CLARITY_HOME_SOLID
              : ICON.CLARITY_HOME_SOLID_DISABLE;
          } else if (route.name === 'Favorite') {
            icon = focused ? ICON.MARKER : ICON.MARKER_DISABLE;
          } else if (route.name === 'Notification') {
            icon = focused ? ICON.BELL : ICON.BELL_DISABLE;
          } else if (route.name === 'Profile') {
            icon = focused ? ICON.BI_PERSON : ICON.BI_PERSON_DISABLE;
          }
          return <ImageCustomButton source={icon} />;
        },
        tabBarShowLabel: false,
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
