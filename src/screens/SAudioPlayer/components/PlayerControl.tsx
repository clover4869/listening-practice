import * as React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import Icons, {EIconTypes} from '../../../assets/Icon';
import Sound from 'react-native-sound';

const DATA = {
  id: 0,
  name: 'text',
  path: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-01.mp3',
  duration: 0,
  listen_number: 0,
  transcript: 'text',
  type: 'text',
  topic: 'text',
  level: 0,
};

export default function PlayerControl() {
  const [player, setPlayer] = React.useState({sound: null});
  function initSound() {
    console.log('init');

    const callback = (error: any, sound: any) => {
      console.log({error, sound});
      if (error) {
        return;
      }
      setPlayer({...player, sound});
    };

    if (player.sound) {
      (player.sound as any)?.release();
    }
    const sound = new Sound(
      'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-01.mp3', undefined,
      error => callback(error, sound),
    ) as any;
  }

  React.useEffect(() => {
    initSound();
  }, []);

  return (
    <View style={styles.container}>
      <Text>PlayerControl</Text>
      <View>
        <Text> time slider </Text>
      </View>

      {/* button control zone */}
      <View style={styles.buttonControlContainer}>
        <TouchableOpacity onPress={() => {}}>
          <Icons
            type={EIconTypes.Feather}
            name={'rotate-ccw'}
            size={45}
            color="#FFD369"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            (player.sound as any)?.play();

            console.log({player});
          }}>
          <Icons
            type={EIconTypes.Feather}
            name={'play'}
            size={45}
            color="#FFD369"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Icons
            type={EIconTypes.Feather}
            name={'rotate-cw'}
            size={45}
            color="#FFD369"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonControlContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
});
