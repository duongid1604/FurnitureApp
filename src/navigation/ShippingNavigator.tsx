import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {FONTS, FONT_SIZE} from '../constants';
import {
  AddShippingAddressScreen,
  EditShippingAddress,
  ShippingAddressScreen,
} from '../screens';
import {ShippingAddressStackParamList} from '../types';

type Props = {};

const ShippingStack = createStackNavigator<ShippingAddressStackParamList>();

const ShippingNavigator = ({}: Props) => {
  return (
    <ShippingStack.Navigator
      initialRouteName="ShippingAddress"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: styles.headerTitle,
      }}>
      <ShippingStack.Screen
        name="ShippingAddress"
        component={ShippingAddressScreen}
        options={{
          headerTitle: 'Shipping address',
        }}
      />
      <ShippingStack.Screen
        name="AddShippingAddress"
        component={AddShippingAddressScreen}
        options={{
          headerTitle: 'Add shipping address',
        }}
      />
      <ShippingStack.Screen
        name="EditShippingAddress"
        component={EditShippingAddress}
        options={{
          headerTitle: 'Edit shipping address',
        }}
      />
    </ShippingStack.Navigator>
  );
};

export default ShippingNavigator;

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: FONTS.POPPINS_BOLD,
    fontSize: FONT_SIZE.BODY_18,
  },
});
