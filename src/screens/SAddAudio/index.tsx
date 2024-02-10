/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import COLORS from '../../assets/color';
import Select from '../../components/atom/Select/Select';
DropDownPicker.setTheme("DARK");

function SAddAudio(): React.JSX.Element {
  const navigation = useNavigation<any>();
  const [value, setValue] = useState('');
  return (
    <SafeAreaView style={styles.container} >
      <Select value={value} onChange={value => setValue(value)} options={[
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
      ]} />
      {/* <StatusBar />
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
      </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.GREY_BG,
    height: '100%'
  },
});

export default SAddAudio;
