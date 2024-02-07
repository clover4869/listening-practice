/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Fragment, useEffect, useState} from 'react';
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
import {find} from '../../store/sqlite/audio';
import AudioItem from './components/AudioItem';

function SListAudio(): React.JSX.Element {
  const [audios, setAudios] = useState([]);
  useEffect(() => {
    (async function name() {
      const data = await find({});

      setAudios(data?._array || []);
    })();
  }, []);

  const renderAudios = () => {
    if (!audios) return;

    return audios?.map((item: any, index) => {
      return (
        <Fragment key={index}>
          <AudioItem {...item} />
        </Fragment>
      );
    });
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Text>list Audio</Text>

          {renderAudios()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.GREY_BG,
  },
});

export default SListAudio;
