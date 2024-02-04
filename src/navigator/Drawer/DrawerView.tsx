import {useNavigation, useRoute} from '@react-navigation/native';
import * as React from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import {styles} from './DrawerStyle';
import { Routes } from '../types';

const Item = ({title, ...rest}: any) => {
  const navigation = useNavigation<any>();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate(Routes.LIST_AUDIO, {...rest, title});
      }}
      style={({pressed}) => [{}, styles.item]}>
      {({pressed}) => <Text>{title}</Text>}
    </Pressable>
  );
};

function DrawerView(props: any) {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* {informationComic.chapters.map(item => (
          <Item {...item} key={item.href} />
        ))} */}
      </View>
    </ScrollView>
  );
}

export default DrawerView;
