/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
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

function SListAudio(): React.JSX.Element {
  // createTableAudio()
  // useEffect(() => {
  //   const sound = new Sound('file:///data/user/0/com.listeningpractice/cache/cb2312f5-9626-415f-8d04-f69ae13de19d/Audio.mp3', error => {
  //     console.log({error});
  //   });
  //   sound.play()
  // },[])
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Text>list Audio</Text>
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
                const sound = new Sound(pickerResult.fileCopyUri?.split("file://")[1], Sound.MAIN_BUNDLE, error => {
                  console.log({error});
                  sound.play()
                });
                sound.play()
                console.log({pickerResult, sound, path : pickerResult.fileCopyUri?.split("file://")[1]});
              } catch (e) {
                console.log(e);
              }
            }}
          />
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

export default SListAudio;
