import { useRoute } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  NestableDraggableFlatList,
  NestableScrollContainer,
} from 'react-native-draggable-flatlist';
import { findAll, remove } from '../../store/sqlite/breakTime';
import { IBreak, useBreaksStore } from '../../store/zustand/useBreakStore';
import BreakTimeControl from './components/BreakTimeControl';
import BreakTimeItem from './components/BreakTimeItem';

export default function SBreakTime() {
  const { params } = useRoute<any>();
  const { breaks, initBreak } = useBreaksStore();

  const handleInitBreaks = async () => {
    const breaks: any = await findAll(params.id);
    initBreak(breaks);
  };

  React.useEffect(() => {
    handleInitBreaks();
  }, []);

  const handleRemove = async (id: number | string) => {
    await remove(Number(id));
    handleInitBreaks();
  };

  return (
    <View style={styles.container}>
      <BreakTimeControl />
      <NestableScrollContainer>
        <NestableDraggableFlatList
          data={breaks}
          renderItem={(props) => (
            <BreakTimeItem {...props} onRemove={handleRemove} />
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
