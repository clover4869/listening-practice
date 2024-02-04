/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Routes} from '../../navigator/types';

function SHome(): React.JSX.Element {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Text> home </Text>

          <Pressable
            onPress={() => {
              navigation.navigate(Routes.LIST_AUDIO);
            }}>
            {({pressed}) => <Text> LIST_AUDIO </Text>}
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 32,
  },
});

export default SHome;
