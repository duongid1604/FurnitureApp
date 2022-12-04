import {useState} from 'react';
import {Alert} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {PERMISSIONS, RESULTS} from 'react-native-permissions';
import {useNavigation} from '@react-navigation/native';

import {DeviceAPI} from '../../api';
import {updateAvatarThunk} from '../../redux/thunks/auth.thunks';
import {useAppDispatch, useAppSelector} from '../redux/useRedux';
import {EditFieldType, SettingScreenNavigationProps} from '../../types';

const useSettingScreen = () => {
  const {user} = useAppSelector(state => state.auth);
  const navigation = useNavigation<SettingScreenNavigationProps>();
  const dispatch = useAppDispatch();
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const onTakeAnImage = async () => {
    try {
      // Request camera permission
      let permissionRes = await DeviceAPI.checkAndRequestPermission(
        PERMISSIONS.ANDROID.CAMERA,
      );
      if (permissionRes !== RESULTS.GRANTED) {
        Alert.alert('Please allow us to use your camera to take an image!');
        return;
      }
      // Request write external storage permission
      permissionRes = await DeviceAPI.checkAndRequestPermission(
        PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
      );

      if (permissionRes !== RESULTS.GRANTED) {
        Alert.alert('Please allow us to save image to your library!');
        return;
      }

      // Request read external storage permission
      permissionRes = await DeviceAPI.checkAndRequestPermission(
        PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      );

      if (permissionRes !== RESULTS.GRANTED) {
        Alert.alert('Please allow us to read image from your library!');
        return;
      }

      // launch camera
      const launchCameraRes = await launchCamera({
        mediaType: 'photo',
        saveToPhotos: true,
      });
      if (!launchCameraRes.assets) {
        console.log('No images');
        return;
      }
      const pathToFile = launchCameraRes.assets[0].uri;
      if (!pathToFile) {
        return;
      }
      dispatch(updateAvatarThunk(pathToFile));
    } catch (error) {
      if (error instanceof Error) {
        console.error('Take an image error: ', error.message);
      }
    }
  };

  const onChooseAnImage = async () => {
    try {
      const permissionRes = await DeviceAPI.checkAndRequestPermission(
        PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      );

      if (permissionRes !== RESULTS.GRANTED) {
        Alert.alert('Please allow us to read image from your library!');
        return;
      }

      const launchImageLibraryRes = await launchImageLibrary({
        mediaType: 'photo',
      });

      if (!launchImageLibraryRes.assets) {
        console.log('No images');
        return;
      }
      const pathToFile = launchImageLibraryRes.assets[0].uri;
      if (!pathToFile) {
        return;
      }
      dispatch(updateAvatarThunk(pathToFile));
    } catch (error) {
      if (error instanceof Error) {
        console.error('Take an image error: ', error.message);
      }
    }
  };

  const onGotoEditScreen = async (field: EditFieldType) => {
    navigation.navigate('EditProfile', {field});
  };

  return {
    user,
    modalIsVisible,
    setModalIsVisible,
    onTakeAnImage,
    onChooseAnImage,
    onGotoEditScreen,
  };
};

export default useSettingScreen;
