import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useAppDispatch, useAppSelector} from '../redux/useRedux';
import {useNavigation} from '@react-navigation/native';
import {PaymentNavigationProp} from '../../types';

type Props = {};
const dispatch = useAppDispatch();
const navigation = useNavigation<PaymentNavigationProp>();
const {user} = useAppSelector(state => state.auth);

const usePaymentScreen = (data: Props) => {
  return (
    <View>
      <Text>usePaymentScreen</Text>
    </View>
  );
};

export default usePaymentScreen;

const styles = StyleSheet.create({});
