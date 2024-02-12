import React, { ChangeEvent, FC } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import COLORS from '../../../assets/color';

export enum ECInputType {
  number = 'numeric',
  text = 'default',
}

interface ICInput {
  onChange: (value: string | number | ChangeEvent<any> | any) => void;
  value: string | number;
  placeholder?: string;
  type?: ECInputType;
  style?: any;
  error?: string;
  label?: string;
  onBlur?: (e: any) => void;
  styleContainer?: any;
}

const CInput: FC<ICInput> = ({
  onChange,
  value,
  type,
  style,
  placeholder,
  error,
  onBlur,
  label,
  styleContainer,
}) => {
  return (
    <View className="py-2" style={styleContainer}>
      {label && <Text style={styles.textLabel}> {label} </Text>}
      <TextInput
        style={[styles.input, style, error && styles.inputError]}
        onChangeText={(text) =>
          onChange(type === ECInputType.number ? Number(text) : text)
        }
        onBlur={onBlur}
        value={value?.toString()}
        placeholder={placeholder}
        keyboardType={type || 'default'}
        placeholderTextColor={COLORS.GREY_LIGHT2}
      />

      {error && <Text style={styles.textError}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    minHeight: 50,
    padding: 5,
    paddingHorizontal: 12,
    color: COLORS.WHITE,
    fontSize: 15,
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderColor: COLORS.LAVENDER,
    borderRadius: 6,
  },
  inputError: {
    borderColor: '#cc0033',
  },
  textError: {
    color: '#cc0033',
    fontSize: 12,
    marginTop: 5,
    paddingHorizontal: 10,
  },
  textLabel: {
    color: COLORS.WHITE,
    marginBottom: 5,
    fontSize: 16,
  },
});

export default CInput;
