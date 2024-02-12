import * as React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { usePlayerStore } from '../../store/zustand/usePlayerStore';
import Header from '../../components/container/Header/Header';

export default function STranscript() {
  const { name, transcript } = usePlayerStore();

  return (
    <View className="bg-gray-900 flex-1 text-white">
      <Header title={name} />

      <ScrollView>
        <Text className="text-gray-200 text-lg px-3 pb-12"> {transcript} </Text>
      </ScrollView>
    </View>
  );
}
