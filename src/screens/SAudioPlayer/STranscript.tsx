import * as React from 'react';
import { Text, View } from 'react-native';
import { usePlayerStore } from '../../store/zustand/usePlayerStore';


export default function STranscript() {
  const { name, transcript } = usePlayerStore()

  return (
    <View className="bg-gray-900 flex-1 text-white p-6" >
      <Text className='text-gray-200 text-lg' > {name} </Text>
      <Text className='text-gray-200 text-sm' > {transcript} </Text>
    </View>
  );
}
