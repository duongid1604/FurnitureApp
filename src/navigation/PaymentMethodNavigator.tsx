import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {FONTS, FONT_SIZE} from '../constants';
import {AddPaymentScreen, PaymentScreen} from '../screens';
import {PaymentMethodStackParamList} from '../types';

const PaymentStack = createStackNavigator<PaymentMethodStackParamList>();

const PaymentMethodNavigator = () => {
  return (
    <PaymentStack.Navigator
      initialRouteName="PaymentMethod"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: styles.headerTitle,
      }}>
      <PaymentStack.Screen
        name="PaymentMethod"
        component={PaymentScreen}
        options={{headerTitle: 'Payment method'}}
      />
      <PaymentStack.Screen
        name="AddPayment"
        component={AddPaymentScreen}
        options={{headerTitle: 'Add payment method'}}
      />
    </PaymentStack.Navigator>
  );
};

export default PaymentMethodNavigator;

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: FONTS.POPPINS_BOLD,
    fontSize: FONT_SIZE.BODY_18,
  },
});
