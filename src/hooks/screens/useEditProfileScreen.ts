import {useLayoutEffect, useState} from 'react';
import {Alert} from 'react-native';
import {
  reauthenticateWithCredential,
  updatePasswordOnFirebase,
} from '../../api';
import {updateUserThunk} from '../../redux/thunks/auth.thunks';

import {ChangePasswordFormFields, EditProfileScreenProps} from '../../types';
import {useAppDispatch, useAppSelector} from '../redux/useRedux';

const useEditProfileScreen = ({navigation, route}: EditProfileScreenProps) => {
  const {field} = route.params;
  const {user} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const [newName, setNewName] = useState(user?.name);
  const [isUpdating, setIsUpdating] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({headerTitle: field});
  }, [field, navigation]);

  const onChangeName = (text: string) => {
    setNewName(text);
  };

  const onSaveName = () => {
    if (!user) {
      return;
    }
    if (newName === user.name) {
      navigation.goBack();
      return;
    }
    if (!newName?.trim()) {
      Alert.alert('Name is invalid!', 'Please enter your name.');
      return;
    }
    const newUser = {...user, name: newName};
    dispatch(updateUserThunk(newUser));
    navigation.goBack();
  };

  const onSavePassword = async (data: ChangePasswordFormFields) => {
    try {
      if (data.currentPassword === data.newPassword) {
        Alert.alert(
          'Your new password cannot be the same as your current password!',
        );
        return;
      }
      setIsUpdating(true);
      await reauthenticateWithCredential(data.currentPassword);
      const isSuccess = await updatePasswordOnFirebase(data.newPassword);
      if (isSuccess) {
        Alert.alert('Success', 'Updated password successfully!');
      }
    } catch (error) {
      console.log('error password: ', error);
      Alert.alert('Wrong Password', 'Please enter a right password!');
    } finally {
      setIsUpdating(false);
    }
  };

  return {field, user, isUpdating, onSaveName, onSavePassword, onChangeName};
};

export default useEditProfileScreen;
