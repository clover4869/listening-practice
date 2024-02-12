import * as React from 'react';
import { StyleSheet, Text, useWindowDimensions } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import SBreakTime from './SBreakTime';
import STranscript from './STranscript';
import PlayerControl from './components/PlayerControl';
import { useRoute } from '@react-navigation/native';
import { findOne } from '../../store/sqlite/audio';
import { usePlayerStore } from '../../store/zustand/usePlayerStore';
import Header from '../../components/container/Header/Header';

const renderScene = SceneMap({
  first: SBreakTime,
  second: STranscript,
});

export default function SAudioPlayer() {
  const { params } = useRoute<any>();
  const { setAudioInfo, name } = usePlayerStore();

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  React.useEffect(() => {
    (async function () {
      const row = await findOne(params.id);
      setAudioInfo(row[0]);
    })();
  }, []);

  return (
    <>
      <Header style={styles.header} title={name} />

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={PlayerControl}
        tabBarPosition="bottom"
      />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    margin: 0,
    marginBottom: 0
  },
});
