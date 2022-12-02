import React from 'react';
import {CustomScreenContainer, EditTitle} from '../../components';
import {useSettingScreen} from '../../hooks';
import LoadingScreen from '../LoadingScreen';
import {Avatar, InputButton, NotiButton} from './components';

type Props = {};

const SettingScreen = ({}: Props) => {
  const {user} = useSettingScreen();

  if (!user) {
    return <LoadingScreen />;
  }

  return (
    <CustomScreenContainer smallPadding hasScrollView={true}>
      {/* Avatar */}
      <Avatar uri={user.avatar} />

      {/* Personal Information */}
      <EditTitle title="Personal information" hasIcon />
      <InputButton label="Name" info={user.name} />

      {/* Account Information */}
      <EditTitle title="Account information" hasIcon />
      <InputButton label="Email" info={user.email} />
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
