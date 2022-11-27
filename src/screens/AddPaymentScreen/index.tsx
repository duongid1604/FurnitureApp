import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AddPaymentProps} from '../../types';
import {TestButton} from '../../components';

const AddPaymentScreen = ({navigation}: AddPaymentProps) => {
  return (
    <View>
      <Text>AddPaymentScreen</Text>
      <TestButton
        name="back to payment method"
        onPress={() => navigation.navigate('PaymentMethod')}
      />
    </View>
  );
};

export default AddPaymentScreen;

const styles = StyleSheet.create({});
