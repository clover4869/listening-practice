import { useRoute } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  NestableDraggableFlatList,
  NestableScrollContainer,
} from 'react-native-draggable-flatlist';
import { findAll } from '../../store/sqlite/breakTime';
import { useBreaksStore } from '../../store/zustand/useBreakStore';
import BreakTimeControl from './components/BreakTimeControl';
import BreakTimeItem from './components/BreakTimeItem';

export default function SBreakTime() {
  const { params } = useRoute<any>();
  const { breaks, initBreak } = useBreaksStore();

  React.useEffect(() => {
    (async function () {
      const breaks: any = await findAll(params.id);
      initBreak(breaks);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <BreakTimeControl />
      <NestableScrollContainer>
        <NestableDraggableFlatList
          data={breaks}
          renderItem={(props) => (
            <BreakTimeItem {...props} onRemove={() => {}} />
          )}
          keyExtractor={(item: any) => item.id}
          onDragEnd={({ data }: any) => initBreak(data)}
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
