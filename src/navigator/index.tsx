// In App.js in a new project

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {Routes} from './types';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerView from './Drawer/DrawerView';
import SHome from '../screens/SHome';
import SListAudio from '../screens/SListAudio';
import SAddAudio from '../screens/SAddAudio';
import SAudioPlayer from '../screens/SAudioPlayer';

// screens components

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function NavigationMain() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.AUDIO_PLAYER}
        component={SAudioPlayer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.ADD_AUDIO}
        component={SAddAudio}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.LIST_AUDIO}
        component={SListAudio}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.HOME_SCREEN}
        component={SHome}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

const NavigationApp = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerPosition: 'right',
          headerShown: false,
          drawerType: 'front',
          swipeEnabled: false,
          drawerStyle: {
            width: '70%',
            // height: Platform.OS === 'ios' ? '100%' : '90%',
            height: '100%',
          },
        }}
        drawerContent={(props: any): React.ReactElement => (
          <DrawerView {...props} />
        )}>
        <Drawer.Screen
          name={Routes.MAIN_NAVIGATOR}
          component={NavigationMain}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default NavigationApp;
