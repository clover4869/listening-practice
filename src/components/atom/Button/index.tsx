import React, { FC } from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import COLORS from '../../../assets/color';

interface ICButton {
  onPress: () => void;
  children: React.ReactNode;
  style?: any;
  className?: string
}

const CButton: FC<ICButton> = ({ onPress, children, style, className }) => {
  return (
    <TouchableHighlight onPress={onPress} className={className} >
      <View style={[styles.button, style]}>{children}</View>
    </TouchableHighlight>
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
});

export default CButton;
