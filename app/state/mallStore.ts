import { create } from 'zustand';

type mallStore = {
    levels: number;
    levelHeight: number;
    levelGap: number;
    expanded: boolean;
    expandDistance: number;
    computedHeights: number[];

    expand: () => void;
    collapse: () => void;
    updateComputedHeights: () => void; 
};

const useMallStore = create<mallStore>((set) => ({
    levels: 5,
    levelHeight: 1.0,
    levelGap: 0.01,
    expanded: false,
    expandDistance: 2.0,
    computedHeights: [],

    expand: () => set((state) => ({ expanded: true })),
    collapse: () => set((state) => ({ expanded: false })),
    updateComputedHeights: () => set((state) => ({ 
        computedHeights: Array.from({ length: state.levels }, (_, i) => state.levelHeight * 0.5 + (state.levelHeight + state.levelGap) * i)
    })),
}));

export default useMallStore;