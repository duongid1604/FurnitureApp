import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import {TouchableCard} from '../../../components';
import {COLORS, FONTS, FONT_SIZE, LINE_HEIGHT} from '../../../constants';

type Props = {
  name: string;
};

const NotiButton = ({name}: Props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <TouchableCard
      extraStyle={styles.container}
      onPress={toggleSwitch}
      hasRippleEffect={false}>
      <Text style={styles.name}>{name}</Text>
      <ToggleSwitch
        isOn={isEnabled}
        onColor={COLORS.SUCCESS}
        offColor={COLORS.SECONDARY}
        onToggle={toggleSwitch}
      />
    </TouchableCard>
  );
};

export default NotiButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: FONT_SIZE.BODY,
    lineHeight: LINE_HEIGHT.BODY,
    fontFamily: FONTS.POPPINS,
    color: COLORS.MAIN,
  },
});
