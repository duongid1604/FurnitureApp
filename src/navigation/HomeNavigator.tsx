import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {FavoriteScreen, HomeScreen, NotificationScreen} from '../screens';
import {HomeTabParamList} from '../types';
import ProfileNavigator from './ProfileNavigator';

const HomeTab = createBottomTabNavigator<HomeTabParamList>();

const HomeNavigator = () => {
  return (
    <HomeTab.Navigator initialRouteName="Home">
      <HomeTab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <HomeTab.Screen name="Favorite" component={FavoriteScreen} />
      <HomeTab.Screen name="Notification" component={NotificationScreen} />
      <HomeTab.Screen
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={{headerShown: false}}
      />
    </HomeTab.Navigator>
  );
};

export default HomeNavigator;
