import {StyleSheet, View, Pressable} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../constants';

type Props = {
  onDelete: () => void;
};

const DeleteButton = ({onDelete}: Props) => {
  return (
    <View style={styles.deleteBtnContainer}>
      <Pressable style={styles.deleteBtn} onPress={onDelete}>
        <MaterialCommunityIcons name="delete" color={COLORS.MAIN} size={30} />
      </Pressable>
    </View>
  );
};

export default DeleteButton;

const styles = StyleSheet.create({
  deleteBtnContainer: {
    marginTop: -20,
    alignContent: 'center',
    justifyContent: 'center',
    width: 70,
  },
  deleteBtn: {
    marginLeft: 10,
  },
});
