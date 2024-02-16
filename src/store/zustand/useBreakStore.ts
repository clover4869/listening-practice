import { create } from 'zustand';

interface IBreak {
  start: number;
  end: number;
  position: number;
  id: number | string;
  name?: string;
  content?: string;
}

interface IBreakStore {
  breaks: IBreak[];
  addBreak: (breakItem: IBreak) => void;
  initBreak: (breaks: IBreak[]) => void;
}

const useBreaksStore = create<IBreakStore>()((set) => ({
  breaks: [],
  addBreak: (breakItem) => {
    set((state) => {
      return {
        ...state,
        breaks: [...state.breaks, { ...breakItem }],
      };
    });
  },
  initBreak: (breaks) => set((state) => ({ ...state, breaks })),
}));

export { useBreaksStore };  export type { IBreak };

