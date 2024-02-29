import { create } from 'zustand';
import * as THREE from 'three';

type cameraStore = {
    //animate: boolean; // true is the camera is moving by animation
    isAnimating: boolean;
    duration: number;
    cameraPositionArray: THREE.Vector3[];  // 0 collaped, 1 expanded, 2 focused on a single level       
    cameraLookAtArray: THREE.Vector3[];

    setIsAnimating: (isAnimating: boolean) => void;
};

const useCameraStore = create<cameraStore>((set) => ({
    //animate: false,
    isAnimating: false,
    duration: 1.0,
    cameraPositionArray: [new THREE.Vector3(0,10,18), new THREE.Vector3(0,15,28), new THREE.Vector3(0,7.5,25)],
    cameraLookAtArray: [new THREE.Vector3(0,2,0), new THREE.Vector3(0,6,0), new THREE.Vector3(0,1.0,0)],

    setIsAnimating: (isAnimating) => set((state) => ({ isAnimating: isAnimating })),
}));

export default useCameraStore;