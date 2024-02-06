import * as React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {
  NestableDraggableFlatList,
  NestableScrollContainer,
  ScaleDecorator,
} from 'react-native-draggable-flatlist';
import {TabView, SceneMap} from 'react-native-tab-view';
import Input from '../../components/atom/Input';
import CButton from '../../components/atom/Button';
import BreakTimeItem from './components/BreakTimeItem';
import BreakTimeControl from './components/BreakTimeControl';

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
    <View style={styles.container}>
      <BreakTimeControl />
      <NestableScrollContainer>
        <NestableDraggableFlatList
          data={data}
          renderItem={props => <BreakTimeItem {...props} onRemove={() => {}} />}
          keyExtractor={item => item.key}
          onDragEnd={({data}) => setData(data)}
        />
      </NestableScrollContainer>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
});
