import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export enum Routes {
  MAIN_NAVIGATOR = 'MainNavigator',
  HOME_SCREEN = 'HomeScreen',
  ADD_AUDIO = 'ADD_AUDIO',
  LIST_AUDIO = 'LIST_AUDIO',
}

export type StackParamList = {
  [Routes.HOME_SCREEN]: undefined;
  [Routes.ADD_AUDIO]: undefined;
  [Routes.LIST_AUDIO]: undefined;

};

export type HomeScreenRouteProps = RouteProp<
  StackParamList,
  Routes.HOME_SCREEN
>;
export type AddAudioScreenRouteProps = RouteProp<
  StackParamList,
  Routes.ADD_AUDIO
>;

export type ListAudioScreenRouteProps = RouteProp<
  StackParamList,
  Routes.LIST_AUDIO
>;


export type NavigationProps = StackNavigationProp<StackParamList>;
