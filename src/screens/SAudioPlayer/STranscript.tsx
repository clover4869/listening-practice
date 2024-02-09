import { useRoute } from '@react-navigation/native';
import * as React from 'react';
import { Text, View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

export default function STranscript() {
  const { params } = useRoute<any>();

  return (
    <View className="bg-white" >
      <Text> {params.transcript} </Text>
    </View>
  );
}
