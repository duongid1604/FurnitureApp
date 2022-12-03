import React from 'react';
import {Dimensions, Platform, StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';

import {CustomTextButton} from '../../../components';
import {COLORS} from '../../../constants';

type Props = {
  visible?: boolean;
  onRequestClose: () => void;
  onTakeAnImage: () => void;
  onChooseAnImage: () => void;
};

const deviceWidth = Dimensions.get('window').width;
const deviceHeight =
  Platform.OS === 'ios'
    ? Dimensions.get('window').height
    : require('react-native-extra-dimensions-android').get(
        'REAL_WINDOW_HEIGHT',
      );

const SettingModal = ({
  visible,
  onRequestClose,
  onTakeAnImage,
  onChooseAnImage,
}: Props) => {
  return (
    <Modal
      isVisible={visible}
      deviceWidth={deviceWidth}
      deviceHeight={deviceHeight}
      onBackdropPress={onRequestClose}
      onSwipeComplete={onRequestClose}
      swipeDirection="left"
      backdropTransitionOutTiming={0}
      style={styles.modal}
      statusBarTranslucent={true}>
      <View style={styles.content}>
        <CustomTextButton
          name="Take an image"
          extraStyle={styles.extraStyle}
          onPress={onTakeAnImage}
        />
        <CustomTextButton
          name="Choose an image"
          extraStyle={styles.extraStyle}
          onPress={onChooseAnImage}
        />
        <CustomTextButton
          name="Cancel"
          extraStyle={styles.extraStyle}
          onPress={onRequestClose}
        />
      </View>
    </Modal>
  );
};

export default SettingModal;

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    flex: 1,
  },
  content: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: COLORS.WHITE,
  },
  extraStyle: {
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.NEUTRAL_20,
  },
});
