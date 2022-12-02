import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

type Props = {
  uri: string;
};

const Avatar = ({uri}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={{uri}} style={styles.avatar} />
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});
