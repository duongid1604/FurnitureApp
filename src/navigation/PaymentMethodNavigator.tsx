import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {AddPaymentScreen, PaymentScreen} from '../screens';
import {PaymentMethodStackParamList} from '../types';

const PaymentStack = createStackNavigator<PaymentMethodStackParamList>();

const PaymentMethodNavigator = () => {
  return (
    <PaymentStack.Navigator initialRouteName="PaymentMethod">
      <PaymentStack.Screen name="PaymentMethod" component={PaymentScreen} />
      <PaymentStack.Screen name="AddPayment" component={AddPaymentScreen} />
    </PaymentStack.Navigator>
  );
};

export default PaymentMethodNavigator;
