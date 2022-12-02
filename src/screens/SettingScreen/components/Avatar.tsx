import React from 'react';
import {Image, StyleSheet, View, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {COLORS} from '../../../constants';
import {scaleUI} from '../../../utils';

type Props = {
  uri: string;
  onPress?: () => void;
};

const Avatar = ({uri, onPress}: Props) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={{uri}} style={styles.avatar} />
      <View style={styles.cameraContainer}>
        <Ionicons
          name="camera-outline"
          size={20}
          color={COLORS.WHITE}
          style={styles.cameraIcon}
        />
      </View>
    </Pressable>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: scaleUI(100, true),
    height: scaleUI(100, true),
    alignSelf: 'center',

    backgroundColor: COLORS.WHITE,
    shadowColor: COLORS.SUB,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    borderRadius: scaleUI(50, true),
    padding: 2,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: scaleUI(50, true),
  },
  cameraContainer: {
    position: 'absolute',
    right: 0,
    backgroundColor: COLORS.SUCCESS,
    padding: 4,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: COLORS.WHITE,
  },
  cameraIcon: {},
});
