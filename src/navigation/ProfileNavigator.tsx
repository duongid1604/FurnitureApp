import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {OrderScreen, PaymentScreen, ProfileScreen} from '../screens';
import {ProfileStackParamList} from '../types';

type Props = {};

const ProfileStack = createStackNavigator<ProfileStackParamList>();

const ProfileNavigator = (props: Props) => {
  return (
    <ProfileStack.Navigator initialRouteName="Profile">
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen name="Order" component={OrderScreen} />
      <ProfileStack.Screen name="PaymentMethod" component={PaymentScreen} />
    </ProfileStack.Navigator>
  );
};

export default ProfileNavigator;
