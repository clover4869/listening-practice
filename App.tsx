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
      await delay(100);
      await insetDataSeed();
      await delay(900);
    };
    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
    });
  }, []);
  return (
    <>
      <NavigationApp />
      <Toast visibilityTime={1500} topOffset={10} />
    </>
  );
}

export default App;
