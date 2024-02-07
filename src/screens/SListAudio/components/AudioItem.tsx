/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {FC} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import COLORS from '../../../assets/color';
import {useNavigation} from '@react-navigation/native';
import CButton from '../../../components/atom/Button';
import {Routes} from '../../../navigator/types';
interface IAudioItem {
  name: string;
  path: string;
}

const AudioItem: FC<IAudioItem> = ({name, ...rest}) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      //   underlayColor={colors.GREY_ATHENS}
      style={styles.container}
      onPress={() => {
        console.log('press');

        navigation.navigate(Routes.AUDIO_PLAYER, {...rest});
      }}>
      <View>
        <Text style={styles.text}> {name} </Text>
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
