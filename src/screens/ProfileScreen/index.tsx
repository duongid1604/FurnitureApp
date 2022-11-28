import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ProfileScreenProps} from '../../types';
import {TestButton} from '../../components';
import {useAppDispatch} from '../../hooks';
import {removeUid} from '../../redux/reducers/authSlice';

const ProfileScreen = ({navigation}: ProfileScreenProps) => {
  const dispatch = useAppDispatch();

  const onSignout = () => {
    dispatch(removeUid());
  };

  const onMoveShippingAddress = () => {
    navigation.navigate('ShippingNavigator');
  };

  const onGotoMyReviews = () => {
    navigation.navigate('ReviewNavigator');
  };

  const onGotoSetting = () => {
    navigation.navigate('Setting');
  };

  return (
    <View>
      <Text>ProfileScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('PaymentNavigator')}>
        <Text> Go to Payment Method</Text>
      </TouchableOpacity>
      <TestButton
        name="Go to shipping address"
        onPress={onMoveShippingAddress}
      />
      <TestButton name="Go to my reviews" onPress={onGotoMyReviews} />
      <TestButton name="Go to Setting" onPress={onGotoSetting} />
      <TestButton name="Sign out" onPress={onSignout} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
