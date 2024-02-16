/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import NavigationApp from './src/navigator';
import { createTableAudio } from './src/store/sqlite/sqliteConfig';
import { insetDataSeed } from './src/store/sqlite/dataSeed';
import RNBootSplash from 'react-native-bootsplash';
import { delay } from './src/shared/delay';
import Toast from 'react-native-toast-message';

function App(): React.JSX.Element {
  useEffect(() => {
    const init = async () => {
      await createTableAudio();
      await delay(1000);
      await insetDataSeed();
    };
    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
    });
  }, []);
  return (
    <>
      <NavigationApp />
      <Toast />
    </>
  );
}

export default App;
