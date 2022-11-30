import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useAppSelector} from '../../hooks';

type Props = {};

const FavoriteScreen = (props: Props) => {
  const {userUid} = useAppSelector(state => state.auth);

  console.log(userUid);
  return (
    <View>
      <Text>FavoriteScreen</Text>
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({});
