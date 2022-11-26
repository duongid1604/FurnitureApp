import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Icon from '../../constants/Icon';
import ActiveCreditCard from '../../components/ActiveCreditCard';
type Props = {};

const PaymentScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <ActiveCreditCard />
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginHorizontal: 20,
  },
});
