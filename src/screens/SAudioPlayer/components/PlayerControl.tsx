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
import {usePlayerStore} from '../../../store/zustand/usePlayerStore';

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
  const {
    sound,
    isChangingInput,
    isPlay,
    start,
    end,
    position,
    setSound,
    setPeriod,
    setPosition,
    setPlay
  } = usePlayerStore();
  //   const [player, setPlayer] = React.useState<IPlayer>({
  //     sound: null,
  //     isChangingInput: false,
  //     isPlay: false,
  //     start: 10,
  //     end: 20,
  //     position: 0,
  //   });

  function initSound() {
    const callback = (error: any, sound: any) => {
      if (error) {
        return;
      }
      setSound(sound);
    };

    if (sound) {
      (sound as any)?.release();
    }
    const soundInit = new Sound(
      'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-01.mp3',
      undefined,
      error => callback(error, soundInit),
    ) as any;
  }

  React.useEffect(() => {
    initSound();
  }, []);

  React.useEffect(() => {
    let interval: any = null;
    (async function name() {
      try {
        if (!sound) return;
        interval = BackgroundTimer.setInterval(() => {
          if (sound && sound?.isLoaded && !isChangingInput && isPlay) {
            sound.getCurrentTime((seconds: number, isPlaying: boolean) => {
              let secondApply = seconds;
              if (seconds < start || seconds > end) {
                secondApply = start;
                sound.setCurrentTime(secondApply);
              }

              setPosition(secondApply);
            });
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
    isPlay,
    isChangingInput,
    sound,
    start,
    end,
  ]);

  return (
    <View style={styles.container}>
      <Text>ontrol -------- {position} ---------------- </Text>
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
            (sound as any)?.play();
            setPlay(true);
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
