import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {OrderScreen, ProfileScreen} from '../screens';
import {ProfileStackParamList} from '../types';

type Props = {};

const ProfileStack = createStackNavigator<ProfileStackParamList>();

const ProfileNavigator = (props: Props) => {
  return (
    <ProfileStack.Navigator initialRouteName="Profile">
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen name="Order" component={OrderScreen} />
    </ProfileStack.Navigator>
  );
};

export default ProfileNavigator;
