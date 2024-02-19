/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { FC } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import COLORS from '../../../assets/color';
import { useNavigation } from '@react-navigation/native';
import CButton from '../../../components/atom/Button';
import { Routes } from '../../../navigator/types';
import Icons, { EIconTypes } from '../../../assets/Icon';
interface IAudioItem {
  name: string;
  path: string;
  topic: string;
  level: string;
}

const AudioItem: FC<IAudioItem> = ({ name, topic, level, ...rest }) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      //   underlayColor={colors.GREY_ATHENS}
      style={styles.container}
      onPress={() => {
        console.log('press');

        navigation.navigate(Routes.AUDIO_PLAYER, { ...rest });
      }}
    >
      <View className=" flex-row items-center justify-between gap-3 ">
        <View className='' >
          <Text style={styles.text}> {name} </Text>
          <View className=" flex-row justify-between pt-2 gap-5">
            <Text className=" text-gray-400">{topic}</Text>
            <Text className=" text-gray-400"> Level : {level} </Text>
          </View>
        </View>

        <View>
          <TouchableOpacity onPress={() => {}}>
            <Icons
              type={EIconTypes.MaterialCommunityIcons}
              name={'dots-vertical'}
              size={25}
              color={COLORS.WHITE}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderColor: COLORS.OPACITY,
  },

  text: {
    color: COLORS.WHITE_GREY,
    fontSize: 18,
  },
});

export default AudioItem;
