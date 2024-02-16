/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Routes } from '../../navigator/types';
import { delay } from '../../shared/delay';

function SHome(): React.JSX.Element {
  const navigation = useNavigation<any>();

  useEffect(() => {
    (async function () {
      await delay(900);
      navigation.navigate(Routes.LIST_AUDIO);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text></Text>
      <Text className="text-white text-3xl"> Break time audio </Text>
      <Text className=" text-white text-lg"> © Design by Clover</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 32,
    backgroundColor: '#0bb2c6',
    flex: 1,
    padding: 12,
  },
  text: {},
});

export default SHome;
