import React, { FC } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import COLORS from '../../../assets/color';
import CButton from '.';

interface ICButtonText {
  onPress: () => void;
  title: string;
  style?: any;
  className?: string;
  styleText?: any;
}

const CButtonText: FC<ICButtonText> = ({
  onPress,
  title,
  style,
  className,
  styleText,
}) => {
  return (
    <CButton onPress={onPress} style={style} className={className}>
      <Text style={[styleText]} className=" text-white font-medium text-lg">
        {title}
      </Text>
    </CButton>
  );
};

const styles = StyleSheet.create({});

export default CButtonText;
