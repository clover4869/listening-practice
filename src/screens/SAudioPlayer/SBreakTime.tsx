import * as React from 'react';
import {Text, TouchableOpacity, View, useWindowDimensions} from 'react-native';
import {
  NestableDraggableFlatList,
  NestableScrollContainer,
  ScaleDecorator,
} from 'react-native-draggable-flatlist';
import {TabView, SceneMap} from 'react-native-tab-view';

const DATA = [
  {
    key: 'jiji' + Math.random() * 100,
    text: 'hihi' + Math.random() * 1000,
  },
  {
    key: 'jiji' + Math.random() * 100,
    text: 'hihi' + Math.random() * 1000,
  },
  {
    key: 'jiji' + Math.random() * 100,
    text: 'hihi' + Math.random() * 1000,
  },
  {
    key: 'jiji' + Math.random() * 100,
    text: 'hihi' + Math.random() * 1000,
  },
  {
    key: 'jiji' + Math.random() * 100,
    text: 'hihi' + Math.random() * 1000,
  },
  {
    key: 'jiji' + Math.random() * 100,
    text: 'hihi' + Math.random() * 1000,
  },
  {
    key: 'jiji' + Math.random() * 100,
    text: 'hihi' + Math.random() * 1000,
  },
  {
    key: 'jiji' + Math.random() * 100,
    text: 'hihi' + Math.random() * 1000,
  },
];

export default function SBreakTime() {
  const [data, setData] = React.useState(DATA);
  return (
    <View style={{flex: 1, backgroundColor: '#673ab7'}}>
      <Text>SBreakTime</Text>
      <NestableScrollContainer>
        <NestableDraggableFlatList
          data={data}
          renderItem={({item, getIndex, drag, isActive}) => {
            return (
              <ScaleDecorator>
                <TouchableOpacity
                //   onLongPress={drag}
                  onPressIn={drag}
                  disabled={isActive}
                  style={[{backgroundColor: isActive ? 'red' : 'blue'}]}>
                  <View style={{height: 42}}>
                    <Text>
                      {getIndex()} hihi {item.text}
                    </Text>
                  </View>
                </TouchableOpacity>
              </ScaleDecorator>
            );
          }}
          keyExtractor={item => item.key}
          onDragEnd={({data}) => setData(data)}
        />
      </NestableScrollContainer>
    </View>
  );
}
