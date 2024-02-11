/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import COLORS from '../../../assets/color';
import Icons, { EIconTypes } from '../../../assets/Icon';

interface ISelect {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  error?: string;
}

const InputDocumentPicker: React.FC<ISelect> = ({
  value,
  onChange,
  label,
  error,
}) => {
  const [path, setPath] = useState(value);
  useEffect(() => {
    onChange(path);
  }, [path]);

  useEffect(() => {
    setPath(value);
  }, [value]);
  return (
    <View className="py-2">
      {label && <Text> {label} </Text>}
      <Pressable
        style={[styles.input]}
        onPress={async () => {
          try {
            const pickerResult = await DocumentPicker.pickSingle({
              presentationStyle: 'fullScreen',
              copyTo: 'cachesDirectory',
            });

            setPath(pickerResult.fileCopyUri?.split('file://')[1] || '');
            // const sound = new Sound(
            //   pickerResult.fileCopyUri?.split('file://')[1],
            //   Sound.MAIN_BUNDLE,
            //   (error) => {
            //     console.log({ error });
            //     sound.play();
            //   },
            // );
            // sound.play();
          } catch (e) {
            console.log(e);
          }
        }}
      >
        <Icons
          type={EIconTypes.Ionicons}
          name={'document-attach'}
          size={25}
          color={COLORS.GREY_LIGHT2}
        />
        <Text style={styles.inputText}>
          {path || 'Open picker for single file selection'}
        </Text>
      </Pressable>
      {error && <Text> {error} </Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    minHeight: 50,
    paddingHorizontal: 6,
    color: COLORS.WHITE,
    fontSize: 15,
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderColor: COLORS.LAVENDER,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  inputText: {
    color: COLORS.GREY_LIGHT2,
    fontSize: 15,
  },
});

export default InputDocumentPicker;
