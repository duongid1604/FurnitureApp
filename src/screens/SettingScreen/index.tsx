import React from 'react';
import {CustomScreenContainer, EditTitle} from '../../components';
import {InputButton, NotiButton} from './components';

type Props = {};

const SettingScreen = ({}: Props) => {
  return (
    <CustomScreenContainer smallPadding hasScrollView>
      {/* Personal Information */}
      <EditTitle title="Personal information" hasIcon />
      <InputButton label="Name" info="Bruno Pham" />

      {/* Account Information */}
      <EditTitle title="Account information" hasIcon />
      <InputButton label="Email" info="bruno203@gmail.com" />
      <InputButton
        label="Password"
        info="sdfsdfwerwr"
        extraTextInputProps={{secureTextEntry: true}}
      />

      {/* Notification */}
      <EditTitle title="Notification" />
      <NotiButton name="Sales" />
      <NotiButton name="New arrivals" />
      <NotiButton name="Delivery status changes" />
    </CustomScreenContainer>
  );
};

export default SettingScreen;
