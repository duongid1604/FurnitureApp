import {useState} from 'react';
import {Alert} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {FirebaseStorage} from '../../api';
import {LINKS} from '../../constants';

import {useAppSelector} from '../redux/useRedux';

const useSettingScreen = () => {
  const {user} = useAppSelector(state => state.auth);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const requestCameraPermission = async () => {
    try {
      const res = await request(PERMISSIONS.ANDROID.CAMERA);
      return res;
    } catch (error) {
      if (error instanceof Error) {
        console.error('Request camera permission error: ', error.message);
      }
    }
  };

  const checkCameraPermission = async () => {
    try {
      const res = await check(PERMISSIONS.ANDROID.CAMERA);
      switch (res) {
        case RESULTS.UNAVAILABLE:
          console.log(
            'This feature is not available (on this device / in this context)',
          );
          break;
        case RESULTS.DENIED:
          console.log(
            'The permission has not been requested / is denied but requestable',
          );
          break;
        case RESULTS.LIMITED:
          console.log('The permission is limited: some actions are possible');
          break;
        case RESULTS.GRANTED:
          console.log('The permission is granted');
          break;
        case RESULTS.BLOCKED:
          console.log('The permission is denied and not requestable anymore');
          break;
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error('Check camera permission error: ', error.message);
      }
    }
  };

  const onTakeAnImage = async () => {
    try {
      const result = await requestCameraPermission();
      switch (result) {
        case RESULTS.UNAVAILABLE:
          Alert.alert(
            'Unvailable Camera',
            'The camera is not available on your phone',
          );
          break;
        case RESULTS.DENIED:
          Alert.alert('Denied Camera', 'Please allow us to use your camera!');
          break;
        case RESULTS.LIMITED:
          Alert.alert('The permission is limited: some actions are possible');
          break;
        case RESULTS.GRANTED:
          console.log('The permission is granted');
          const launchCameraRes = await launchCamera({mediaType: 'photo'});
          if (!launchCameraRes.assets) {
            break;
          }
          const pathToFile = launchCameraRes.assets[0].uri as string;
          const uploadToStorageRes = await FirebaseStorage.uploadToStorage(
            pathToFile,
            `${LINKS.AVATARS}/${user?.id}`,
          );
          console.log(uploadToStorageRes);

          break;
        case RESULTS.BLOCKED:
          Alert.alert('The permission is denied and not requestable anymore');
          break;
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error('Take an image error: ', error.message);
      }
    }
  };

  return {user, modalIsVisible, setModalIsVisible, onTakeAnImage};
};

export default useSettingScreen;

// Need to save image on device then upload to storage
// const pathToFile = launchCameraRes.assets[0].uri as string;
// const uploadToStorageRes = await FirebaseStorage.uploadToStorage(
//   pathToFile,
//   `${LINKS.AVATARS}/${user?.id}`,
// );
// console.log(uploadToStorageRes);
