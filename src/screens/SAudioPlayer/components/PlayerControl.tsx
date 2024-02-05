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
import BackgroundTimer from 'react-native-background-timer';

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

interface IPlayer {
  sound: any;
  isChangingInput: boolean;
  isPlay: boolean;
  start: number;
  end: number;
  position: number;
}

export default function PlayerControl() {
  const [player, setPlayer] = React.useState<IPlayer>({
    sound: null,
    isChangingInput: false,
    isPlay: false,
    start: 10,
    end: 20,
    position: 0,
  });

  function initSound() {
    const callback = (error: any, sound: any) => {
      if (error) {
        return;
      }
      setPlayer({...player, sound});
    };

    if (player.sound) {
      (player.sound as any)?.release();
    }
    const sound = new Sound(
      'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-01.mp3',
      undefined,
      error => callback(error, sound),
    ) as any;
  }

  React.useEffect(() => {
    initSound();
  }, []);

  React.useEffect(() => {
    let interval: any = null;
    (async function name() {
      try {
        if (!player.sound) return;
        interval = BackgroundTimer.setInterval(() => {
          if (
            player.sound &&
            player.sound?.isLoaded &&
            !player.isChangingInput &&
            player.isPlay
          ) {
            player.sound.getCurrentTime(
              (seconds: number, isPlaying: boolean) => {
                let secondApply = seconds;
                if (seconds < player.start || seconds > player.end) {
                  secondApply = player.start;
                  player.sound.setCurrentTime(secondApply);
                }

                setPlayer({...player, position: secondApply});
              },
            );
          }
        }, 100);
        console.log('Successful start!');
      } catch (e) {
        console.log('Error', e);
      }
    })();

    return () => {
      interval && BackgroundTimer.clearInterval(interval);
    };
  }, [
    player.isPlay,
    player.isChangingInput,
    player.sound,
    player.start,
    player.end,
  ]);

  return (
    <View style={styles.container}>
      <Text>PlayerControl -------- {player.position} ---------------- </Text>
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
            setPlayer({...player, isPlay: true});
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
