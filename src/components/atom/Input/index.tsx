import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

enum ECInputType {
  number = 'numeric',
  text = 'default',
}

interface ICInput {
  onChange: (value: string | number) => void;
  value: string | number;
  type?: ECInputType;
}

const CInput: FC<ICInput> = ({onChange, value, type}) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={text =>
        onChange(type === ECInputType.number ? Number(text) : text)
      }
      value={value.toString()}
      placeholder="useless placeholder"
      keyboardType={type || 'default'}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default CInput;
