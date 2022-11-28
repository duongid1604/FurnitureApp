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

  return (
    <View>
      <Text>ProfileScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('PaymentNavigator')}>
        <Text> Go to Payment Method</Text>
      </TouchableOpacity>
      <TestButton name="Sign out" onPress={onSignout} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
