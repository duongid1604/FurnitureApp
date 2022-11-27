import {useState} from 'react';

const useCustomIconButton = (
  icon: JSX.Element | undefined,
  activeIcon: JSX.Element | undefined,
  onPress?: () => void,
) => {
  const [isActive, setIsActive] = useState(false);

  const iconButtonPressHandler = () => {
    if (icon && activeIcon) {
      setIsActive(!isActive);
    }
    if (onPress) {
      onPress();
    }
  };

  return {isActive, iconButtonPressHandler};
};

export default useCustomIconButton;
