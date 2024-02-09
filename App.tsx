/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';

import React, {useEffect} from 'react';
import NavigationApp from './src/navigator';
import {createTableAudio} from './src/store/sqlite/sqliteConfig';
import {insetDataSeed} from './src/store/sqlite/dataSeed';

function App(): React.JSX.Element {
  useEffect(() => {
    createTableAudio();
    setTimeout(insetDataSeed,100)
  }, []);
  return <NavigationApp />;
}

export default App;
