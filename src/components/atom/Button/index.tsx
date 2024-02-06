import React, {FC} from 'react';
import {StyleSheet, TouchableHighlight, View} from 'react-native';

interface ICButton {
  onPress: () => void;
  children: React.ReactNode;
  style?: any;
}

const CButton: FC<ICButton> = ({onPress, children, style}) => {
  return (
    // <View style={{width: '100%', backgroundColor: 'green' , height: 25}} ></View>
    <TouchableHighlight onPress={onPress} style={{width: '100%', padding: 0, backgroundColor: 'green'}}>
    <View style={[styles.button, style]}>{children}</View>
  </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    // height: 40,
    // margin: 12,
    // borderWidth: 1,
    // padding: 10,
    backgroundColor: 'red',
    padding: 0,
  },
});

export default CButton;
