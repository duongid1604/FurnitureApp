import {LoginFormFields} from '../../types';

const useLoginScreen = () => {
  const onLogin = (data: LoginFormFields) => {
    console.log('Form: ', data);
  };

  return {onLogin};
};

export default useLoginScreen;
