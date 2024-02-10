import { create } from 'zustand';
import { AUDIO_FILE_TYPE } from '../../constant/audio';

interface IAudio {
  name: string;
  path: string;
  duration: number;
  listen_number: number;
  transcript: string;
  type: AUDIO_FILE_TYPE;
  topic: string;
  level: number;
}

interface IPlayer extends IAudio {
  sound: any;
  isChangingInput: boolean;
  isPlay: boolean;
  start: number;
  end: number;
  position: number;
  duration: number;
  setSound: (sound: any) => void;
  setPosition: (position: number) => void;
  setPeriod: (start: number, end: number) => void;
  setPlay: (isPlay: boolean) => void;
  setDuration: (duration: number) => void,
  setAudioInfo: (audio: IAudio) => void
}

const usePlayerStore = create<IPlayer>()(set => ({
  sound: null,
  isChangingInput: false,
  isPlay: false,
  start: 10,
  end: 20,
  position: 0,
  duration: 0,
  // audio infomation
  name: '',
  path: '',
  listen_number: 0,
  transcript: '',
  type: AUDIO_FILE_TYPE.URL,
  level: 0,
  topic: '',
  setSound: sound => set(state => ({ ...state, sound })),
  setPosition: position => set(state => ({ ...state, position })),
  setDuration: duration => set(state => ({ ...state, duration })),
  setPeriod: (start, end) => set(state => ({ ...state, start, end })),
  setPlay: isPlay => set(state => ({ ...state, isPlay })),
  setAudioInfo: (audio: IAudio) => set(state => ({ ...state, ...audio }))
  // increase: (by) => set((state) => ({ bears: state.bears + by })),
}));

export { usePlayerStore }; export type { IAudio };

