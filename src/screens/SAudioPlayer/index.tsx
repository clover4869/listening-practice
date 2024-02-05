import * as React from 'react';
import {Text, View, useWindowDimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import STranscript from './STranscript';
import SBreakTime from './SBreakTime';
import PlayerControl from './components/PlayerControl';

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
