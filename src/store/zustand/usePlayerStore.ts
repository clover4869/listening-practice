import {create} from 'zustand';

interface IPlayer {
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
}

const usePlayerStore = create<IPlayer>()(set => ({
  sound: null,
  isChangingInput: false,
  isPlay: false,
  start: 10,
  end: 20,
  position: 0,
  duration: 0,
  setSound: sound => set(state => ({...state, sound})),
  setPosition: position => set(state => ({...state, position})),
  setPeriod: (start, end) => set(state => ({...state, start, end})),
  setPlay: isPlay => set(state => ({...state, isPlay})),
  // increase: (by) => set((state) => ({ bears: state.bears + by })),
}));

export {usePlayerStore};
