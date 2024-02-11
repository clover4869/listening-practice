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
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../navigator/types';
import CButtonText from '../../components/atom/Button/CButtonText';

function SListAudio(): React.JSX.Element {
  const navigation = useNavigation<any>();

  const [audios, setAudios] = useState([]);
  const [search, setSeach] = useState('');

  async function handleFilter() {
    const data = await find({ search });
    console.log(data.length);
    setAudios(data?._array || []);
  }

  useEffect(() => {
    const timeout = setTimeout(handleFilter, 100);
    return () => clearTimeout(timeout);
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

  const handleAddAudio = () => {
    navigation.navigate(Routes.ADD_AUDIO);
  };

  return (
    <View style={styles.container}>
      <View className="flex-row items-center">
        <CInput
          style={styles.input}
          value={search}
          onChange={(value) => {
            setSeach(value.toString());
          }}
          type={ECInputType.text}
          placeholder="Search audio"
        />
        <CButtonText
          style={styles.button}
          styleText={styles.buttonText}
          onPress={handleAddAudio}
          title="Add"
        ></CButtonText>
      </View>

      <ScrollView className="flex-1 ">{renderAudios()}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.GREY_BG,
    height: '100%',
  },
  button: {
    width: 50,
  },
  buttonText: {
    fontSize: 14,
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
    flex: 1,
  },
  text: {
    color: COLORS.WHITE,
  },
});

export default SListAudio;
