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
import COLORS from '../../../assets/color';
import Slider from '@react-native-community/slider';
import {convertTimeString} from '../../../shared/convert';

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
    duration,
    setSound,
    setPeriod,
    setPosition,
    setPlay,
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
  }, [isPlay, isChangingInput, sound, start, end]);

  return (
    <View style={styles.container}>
      {/* Progress Durations */}
      <View style={styles.progressWrapper}>
        <Text style={styles.progressLabelText}>
          {convertTimeString(position).toString()}
        </Text>
        <Slider
          style={styles.progressBar}
          value={position}
          minimumValue={0}
          maximumValue={duration}
          thumbTintColor="#FFD369"
          minimumTrackTintColor="#FFD369"
          maximumTrackTintColor="#fff"
          onSlidingComplete={async value => {
            // let tmp = value;
            // if (value > ABRepeat.end) {
            //   tmp = ABRepeat.end;
            // }
            // if (value >= info.duration - 1) {
            //   tmp = info.duration - 1;
            // }
            // await seekTo(tmp);
            // setIsChangingInput(false);
          }}
          onSlidingStart={() => {
            // setIsChangingInput(true);
          }}
        />
        <Text style={styles.progressLabelText}>
          {convertTimeString(duration).toString()}
        </Text>
      </View>

      {/* button control zone */}
      <View style={styles.buttonControlContainer}>
        <TouchableOpacity onPress={() => {}}>
          <Icons
            type={EIconTypes.Feather}
            name={'rotate-ccw'}
            size={25}
            color={COLORS.LAVENDER}
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
            size={25}
            color={COLORS.LAVENDER}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Icons
            type={EIconTypes.Feather}
            name={'rotate-cw'}
            size={25}
            color={COLORS.LAVENDER}
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
    backgroundColor: COLORS.GREY_CHARCOAL,
    paddingHorizontal: 12,
    paddingVertical: 18
  },
  buttonControlContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  progressBar: {
    flex: 1,
    // width: '100%',
  },
  progressWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 5,
    color: COLORS.WHITE,
    paddingVertical: 12,
    width: '100%',
  },
  progressLabelText: {
    color: COLORS.WHITE,
  },
});
