import React from 'react';

import {CustomScreenContainer, EditTitle} from '../../components';
import {useSettingScreen} from '../../hooks';
import {SettingScreenProps} from '../../types';
import LoadingScreen from '../LoadingScreen';
import {Avatar, InputButton, NotiButton, SettingModal} from './components';

const SettingScreen = ({}: SettingScreenProps) => {
  const {
    user,
    modalIsVisible,
    setModalIsVisible,
    onTakeAnImage,
    onChooseAnImage,
  } = useSettingScreen();

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
        <EditTitle
          title="Account information"
          hasIcon={user.type === 'normal'}
        />
        <InputButton
          label="Email"
          info={user.email}
          hasRippleEffect={user.type === 'normal'}
        />
        <>
          {user.type === 'normal' && (
            <InputButton
              label="Password"
              info="sdfsdfwerwr"
              extraTextInputProps={{secureTextEntry: true}}
            />
          )}
        </>

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
        onChooseAnImage={onChooseAnImage}
      />
    </>
  );
};

export default SettingScreen;
