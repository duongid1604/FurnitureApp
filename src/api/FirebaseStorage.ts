import storage from '@react-native-firebase/storage';

export default {
  /**
   *
   * @param pathToFile Link to file on device
   * @param desc Link to file on Firebase storage
   * @returns
   */
  uploadToStorage: async (pathToFile: string, desc: string) => {
    try {
      const reference = storage().ref(desc);
      return await reference.putFile(pathToFile);
    } catch (error) {
      throw new Error('Failed to upload to firebase storage!');
    }
  },
};
