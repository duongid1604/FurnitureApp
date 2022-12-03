import {check, Permission, request, RESULTS} from 'react-native-permissions';

export default {
  checkAndRequestPermission: async (permission: Permission) => {
    try {
      let res = await check(permission);
      if (res !== RESULTS.GRANTED) {
        res = await request(permission);
      }
      return res;
    } catch (error) {
      if (error instanceof Error) {
        console.error('Request permission error: ', error.message);
      }
    }
  },
};
