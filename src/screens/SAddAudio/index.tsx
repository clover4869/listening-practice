/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isCancel,
  isInProgress,
  types,
} from 'react-native-document-picker';
import Sound from 'react-native-sound';

import Icons, {EIconTypes} from '../../assets/Icon';
import COLORS from '../../assets/color';
import {createTableAudio} from '../../store/sqlite/sqliteConfig';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../navigator/types';

function SAddAudio(): React.JSX.Element {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Text>Add Audio</Text>
          <Icons
            name="add"
            type={EIconTypes.Ionicons}
            size={12}
            color={COLORS.GREY_SCORPION}></Icons>

          <Button
            title="open picker for single file selection"
            onPress={async () => {
              try {
                const pickerResult = await DocumentPicker.pickSingle({
                  presentationStyle: 'fullScreen',
                  copyTo: 'cachesDirectory',
                });
                const sound = new Sound(
                  pickerResult.fileCopyUri?.split('file://')[1],
                  Sound.MAIN_BUNDLE,
                  error => {
                    console.log({error});
                    sound.play();
                  },
                );
                sound.play();
                console.log({
                  pickerResult,
                  sound,
                  path: pickerResult.fileCopyUri?.split('file://')[1],
                });
              } catch (e) {
                console.log(e);
              }
            }}
          />

          <Button
            title="list audio"
            onPress={() => {
              navigation.navigate(Routes.LIST_AUDIO);
            }}></Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SAddAudio;
