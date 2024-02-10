/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Fragment, useEffect, useState } from 'react';
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

import Icons, { EIconTypes } from '../../assets/Icon';
import COLORS from '../../assets/color';
import { createTableAudio } from '../../store/sqlite/sqliteConfig';
import { find } from '../../store/sqlite/audio';
import AudioItem from './components/AudioItem';
import CInput, { ECInputType } from '../../components/atom/Input';
import CButton from '../../components/atom/Button';

function SListAudio(): React.JSX.Element {
  const [audios, setAudios] = useState([]);
  const [search, setSeach] = useState('');

  async function handleFilter() {
    const data = await find({ search });
    console.log(data.length);
    setAudios(data?._array || []);
  }

  useEffect(() => {
    const timeout = setTimeout(handleFilter, 100);
    return () => clearTimeout(timeout)
  }, [search]);

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

  const handleAddAudio = () => { }

  return (
    <View style={styles.container}>
      <View className='flex-row items-center' >
        <CInput
          style={styles.input}
          value={search}
          onChange={value => {
            setSeach(value.toString())
          }}
          type={ECInputType.text}
          placeholder="Search audio"
        />
        <CButton style={styles.button} onPress={handleAddAudio}>
          <Text style={styles.text}> Add </Text>
        </CButton>
      </View>

      <ScrollView className='flex-1 ' >
        {renderAudios()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.GREY_BG,
    height: '100%'
  },
  button: {
    minHeight: 50,
    borderRadius: 6,
    backgroundColor: COLORS.LAVENDER,
    color: COLORS.WHITE,
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width : 50
  },
  input: {
    minHeight: 50,
    width: '50%',
    padding: 12,
    color: COLORS.WHITE,
    fontSize: 15,
    borderColor: COLORS.LAVENDER,
    borderWidth: 1,
    backgroundColor: 'transparent',
    marginBottom: 12,
    flex : 1
  },
  text: {
    color: COLORS.WHITE,
  },
});

export default SListAudio;
