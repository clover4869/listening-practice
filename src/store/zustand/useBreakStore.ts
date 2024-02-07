import {create} from 'zustand';

interface IBreak {
  start: number;
  end: number;
  position: number;
}

interface IBreakStore {
  breaks: IBreak[];
  addBreak: (start: number, end: number, position : number) => void;
  initBreak: (breaks: IBreak[]) => void;
}

const useBreaksStore = create<IBreakStore>()(set => ({
  breaks: [],
  addBreak: (start, end, position) => {
    set(state => {
      return {
        ...state,
        breaks: [...state.breaks, {start, end, position}],
      };
    });
  },
  initBreak: breaks => set(state => ({...state, breaks})),
  // increase: (by) => set((state) => ({ bears: state.bears + by })),
}));

export {useBreaksStore};
