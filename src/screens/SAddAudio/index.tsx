/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Icons, {EIconTypes} from '../../assets/Icon';
import COLORS from '../../assets/color';
import { createTableAudio } from '../../store/sqlite/sqliteConfig';

function SAddAudio(): React.JSX.Element {
  // createTableAudio()
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
