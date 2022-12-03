import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {FONTS, FONT_SIZE} from '../constants';

import {EditProfileScreen, SettingScreen} from '../screens';
import {SettingStackParamList} from '../types';

type Props = {};

const SettingStack = createStackNavigator<SettingStackParamList>();

const SettingNavigator = ({}: Props) => {
  return (
    <SettingStack.Navigator
      initialRouteName="Setting"
      screenOptions={{
        headerTitleStyle: styles.headerTitle,
        headerTitleAlign: 'center',
      }}>
      <SettingStack.Screen name="Setting" component={SettingScreen} />
      <SettingStack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{headerTitle: 'Edit'}}
      />
    </SettingStack.Navigator>
  );
};

export default SettingNavigator;

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: FONTS.POPPINS_BOLD,
    fontSize: FONT_SIZE.BODY_18,
  },
});
