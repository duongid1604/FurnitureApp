import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scaleUI} from '../../../utils';
import {COLORS} from '../../../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {};

const AuthHeader = (props: Props) => {
  return (
    <View style={styles.header}>
      <View style={styles.line} />
      <View style={styles.icon}>
        <MaterialCommunityIcons
          name="sofa-single-outline"
          color={COLORS.MAIN}
          size={30}
        />
      </View>
      <View style={styles.line} />
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  line: {
    width: scaleUI(120),
    backgroundColor: COLORS.SUB,
    height: 2,
  },
  icon: {
    borderWidth: 1,
    width: 60,
    height: 60,
    borderRadius: 60,
    borderColor: COLORS.MAIN,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
