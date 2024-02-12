/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Fragment, useEffect, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import COLORS from '../../assets/color';
import CButtonText from '../../components/atom/Button/CButtonText';
import CInput, { ECInputType } from '../../components/atom/Input';
import { Routes } from '../../navigator/types';
import { find } from '../../store/sqlite/audio';
import AudioItem from './components/AudioItem';

function SListAudio(): React.JSX.Element {
  const navigation = useNavigation<any>();

  const [audios, setAudios] = useState([]);
  const [search, setSeach] = useState('');

  async function handleFilter() {
    const data = await find({ search });
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
      <View className="flex-row items-center justify-between px-3 gap-3 align-middle w-full">
        <CInput
          styleContainer={styles.input}
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
    width: Dimensions.get('window').width - 70,
  },
  text: {
    color: COLORS.WHITE,
  },
});

export default SListAudio;
