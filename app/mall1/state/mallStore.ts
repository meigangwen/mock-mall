import { create } from 'zustand';

type mallStore = {
    
    // 0 collaped, 1 expanded, 2 focused on a single level
    mode: number;       
    levels: number;
    levelHeight: number;
    levelGap: number;
    expandDistance: number;
    computedHeights: number[];
    focusedLevel: number;
    //focusedShop: number;
    levelNames: String[];
    
    setMode: (mode: number) => void;
    setFocusedLevel: (level: number) => void;
    //setFocusedShop: (shop: number) => void;
    updateComputedHeights: () => void; 
};

const useMallStore = create<mallStore>((set) => ({
    mode: 0,
    levels: 5,
    levelHeight: 1.0,
    levelGap: 0.01,
    expandDistance: 2.0,
    computedHeights: [],
    focusedLevel: -1,
    //focusedShop: -1,
    levelNames: ['B1', 'L1', 'L2', 'L3', 'L4'],

    setMode: (mode) => set((state) => ({ mode: mode })),
    setFocusedLevel: (level) => set((state) => ({ focusedLevel: level })),
    //setFocusedShop: (shop) => set((state) => ({ focusedShop: shop })),
    updateComputedHeights: () => set((state) => ({ 
        computedHeights: Array.from({ length: state.levels }, (_, i) => state.levelHeight * 0.5 + (state.levelHeight + state.levelGap) * i)
    })),
}));

export default useMallStore;