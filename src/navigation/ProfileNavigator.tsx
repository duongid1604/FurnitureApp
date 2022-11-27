import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {OrderScreen, ProfileScreen} from '../screens';
import {ProfileStackParamList} from '../types';
import PaymentMethodNavigator from './PaymentMethodNavigator';

const ProfileStack = createStackNavigator<ProfileStackParamList>();

const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator initialRouteName="Profile">
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerLeft: () => <></>}}
      />
      <ProfileStack.Screen name="Order" component={OrderScreen} />
      <ProfileStack.Screen
        name="PaymentNavigator"
        component={PaymentMethodNavigator}
        options={{headerShown: false}}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileNavigator;
