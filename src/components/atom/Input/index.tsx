import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

export enum ECInputType {
  number = 'numeric',
  text = 'default',
}

interface ICInput {
  onChange: (value: string | number) => void;
  value: string | number;
  placeholder? :string;
  type?: ECInputType;
  style? : any
}

const CInput: FC<ICInput> = ({onChange, value, type, style, placeholder}) => {
  return (
    <TextInput
      style={[styles.input, style]}
      onChangeText={text =>
        onChange(type === ECInputType.number ? Number(text) : text)
      }
      value={value.toString()}
      placeholder={placeholder}
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
