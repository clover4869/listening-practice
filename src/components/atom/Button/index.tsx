import React, { FC } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import COLORS from '../../../assets/color';

interface ICButton {
  onPress: () => void;
  children: React.ReactNode;
  style?: any;
  className?: string;
  disabled?: boolean;
}

const CButton: FC<ICButton> = ({
  onPress,
  children,
  style,
  className,
  disabled,
}) => {
  return (
    <Pressable
      onPress={onPress}
      className={className}
      disabled={disabled}
      style={[disabled && styles.buttonDisable]}
    >
      <View style={[styles.button, style]}>{children}</View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    minHeight: 50,
    borderRadius: 6,
    backgroundColor: COLORS.LAVENDER,
    color: COLORS.WHITE,
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonDisable: {
    opacity: 0.5,
  },
});

export default CButton;
