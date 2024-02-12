import Slider from '@react-native-community/slider';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BackgroundTimer from 'react-native-background-timer';
import Sound from 'react-native-sound';
import Icons, { EIconTypes } from '../../../assets/Icon';
import COLORS from '../../../assets/color';
import { convertTimeString } from '../../../shared/convert';
import { usePlayerStore } from '../../../store/zustand/usePlayerStore';

export default function PlayerControl() {
  const {
    sound,
    isChangingInput,
    isPlay,
    start,
    end,
    position,
    duration,
    path,
    setSound,
    setPeriod,
    setPosition,
    setPlay,
    setDuration,
  } = usePlayerStore();

  function initSound() {
    const callback = (error: any, sound: any) => {
      setPlay(false)
      if (error) {
        return;
      }
      const duration = sound.getDuration();
      setSound(sound);
      setDuration(duration);
      setPeriod(0, duration);
    };

    if (sound) {
      (sound as any)?.release();
    }

    const soundInit = new Sound(path, undefined, (error) =>
      callback(error, soundInit),
    ) as any;
  }

  React.useEffect(() => {
    initSound();
  }, [path]);

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
          onSlidingComplete={async (value) => {
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
            color={COLORS.YELLOW_BUTTERMILK}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (isPlay) {
              (sound as any)?.pause();
              setPlay(false);
            } else {
              (sound as any)?.play();
              setPlay(true);
            }
          }}
        >
          <Icons
            type={EIconTypes.Feather}
            name={!isPlay ? 'play' : 'pause'}
            size={25}
            color={COLORS.YELLOW_BUTTERMILK}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Icons
            type={EIconTypes.Feather}
            name={'rotate-cw'}
            size={25}
            color={COLORS.YELLOW_BUTTERMILK}
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
    paddingVertical: 18,
  },
  buttonControlContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  progressBar: {
    flex: 1,
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
