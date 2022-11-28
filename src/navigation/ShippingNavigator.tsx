import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {AddShippingAddressScreen, ShippingAddressScreen} from '../screens';
import {ShippingAddressStackParamList} from '../types';

type Props = {};

const ShippingStack = createStackNavigator<ShippingAddressStackParamList>();

const ShippingNavigator = ({}: Props) => {
  return (
    <ShippingStack.Navigator initialRouteName="ShippingAddress">
      <ShippingStack.Screen
        name="ShippingAddress"
        component={ShippingAddressScreen}
      />
      <ShippingStack.Screen
        name="AddShippingAddress"
        component={AddShippingAddressScreen}
      />
    </ShippingStack.Navigator>
  );
};

export default ShippingNavigator;
