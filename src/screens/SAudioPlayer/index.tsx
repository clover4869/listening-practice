import * as React from 'react';
import { useWindowDimensions } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import SBreakTime from './SBreakTime';
import STranscript from './STranscript';
import PlayerControl from './components/PlayerControl';
import { useRoute } from '@react-navigation/native';

const renderScene = SceneMap({
  first: SBreakTime,
  second: STranscript,
});

export default function SAudioPlayer() {

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  React.useEffect(() => {
  }, [])

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={PlayerControl}
      tabBarPosition="bottom"
    />
  );
}
