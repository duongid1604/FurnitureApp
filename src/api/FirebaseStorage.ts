import storage from '@react-native-firebase/storage';

export default {
  /**
   *
   * @param pathToFile Link to file on device
   * @param desc Link to file on Firebase storage
   * @returns Response for uploading to firebase storage request
   */
  uploadToStorage: async (pathToFile: string, desc: string) => {
    try {
      return await storage().ref(desc).putFile(pathToFile);
    } catch (error) {
      throw new Error('Failed to upload to firebase storage!');
    }
  },
  /**
   *
   * @param desc Link to file on Firebase storage
   * @returns Url for file on Firebase storage
   */
  getDownloadUrl: async (desc: string) => {
    try {
      return await storage().ref(desc).getDownloadURL();
    } catch (error) {
      throw new Error('Failed to get downnload url from firebase storage!');
    }
  },
};
