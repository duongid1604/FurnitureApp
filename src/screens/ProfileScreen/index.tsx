import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ProfileScreenProps} from '../../types';

const ProfileScreen = ({navigation}: ProfileScreenProps) => {
  return (
    <View>
      <Text>ProfileScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('PaymentMethod')}>
        <Text> Go to Payment Method</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
