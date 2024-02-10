import React, { FC } from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';

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
    backgroundColor: 'red',
    padding: 0,
  },
});

export default CButton;
