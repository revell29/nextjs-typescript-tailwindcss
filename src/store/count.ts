import create from 'zustand';
import { devtools } from 'zustand/middleware';

interface ICountBears {
  bears: number;
  increasePopulation: () => void;
  decreasePopulation: () => void;
}

export const useCountBears = create<ICountBears>()(
  devtools((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    decreasePopulation: () => set((state) => ({ bears: state.bears - 1 })),
  }))
);
