import { create } from 'zustand';

type cameraStore = {
    // 0 collaped, 1 expanded, 2 focused on a single level
    mode: number;       
    levels: number;
    levelHeight: number;
    levelGap: number;
    expandDistance: number;
    computedHeights: number[];
    focusedLevel: number;
    
    setMode: (mode: number) => void;
    setFocusedLevel: (level: number) => void;
    updateComputedHeights: () => void; 
};

const useCameraStore = create<cameraStore>((set) => ({
    mode: 0,
    levels: 5,
    levelHeight: 1.0,
    levelGap: 0.01,
    expandDistance: 2.0,
    computedHeights: [],
    focusedLevel: -1,

    setMode: (mode) => set((state) => ({ mode: mode })),
    setFocusedLevel: (level) => set((state) => ({ focusedLevel: level })),
    updateComputedHeights: () => set((state) => ({ 
        computedHeights: Array.from({ length: state.levels }, (_, i) => state.levelHeight * 0.5 + (state.levelHeight + state.levelGap) * i)
    })),
}));

export default useCameraStore;