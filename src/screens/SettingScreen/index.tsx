import React from 'react';

import {CustomScreenContainer, EditTitle} from '../../components';
import {useSettingScreen} from '../../hooks';
import {SettingScreenProps} from '../../types';
import LoadingScreen from '../LoadingScreen';
import {Avatar, InputButton, NotiButton, SettingModal} from './components';

const SettingScreen = ({}: SettingScreenProps) => {
  const {user, modalIsVisible, setModalIsVisible, onTakeAnImage} =
    useSettingScreen();

  if (!user) {
    return <LoadingScreen />;
  }

  return (
    <>
      <CustomScreenContainer smallPadding>
        {/* Avatar */}
        <Avatar uri={user.avatar} onPress={() => setModalIsVisible(true)} />

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
        {/* Modal */}
      </CustomScreenContainer>

      <SettingModal
        visible={modalIsVisible}
        onRequestClose={() => setModalIsVisible(false)}
        onTakeAnImage={onTakeAnImage}
      />
    </>
  );
};

export default SettingScreen;
