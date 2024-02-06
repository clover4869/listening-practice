import React, {FC} from 'react';
import {StyleSheet, TouchableHighlight, View} from 'react-native';

interface ICButton {
  onPress: () => void;
  children: React.ReactNode;
}

const CButton: FC<ICButton> = ({onPress, children}) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.button}>{children}</View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    // height: 40,
    // margin: 12,
    // borderWidth: 1,
    // padding: 10,
    backgroundColor: 'red'
  },
});

export default CButton;
