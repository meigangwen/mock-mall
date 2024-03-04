import { create } from 'zustand';
import * as THREE from 'three';

type camStore = {
    needsUpdate: boolean;
    camStartPosition: THREE.Vector3;
    camPosition: THREE.Vector3;
    lookAtPosition: THREE.Vector3;
    
    positionArray: THREE.Vector3[];  // 0 collaped, 1 expanded, 2 focused on a single level       
    targetArray: THREE.Vector3[];

    setCamera: (position: THREE.Vector3, target: THREE.Vector3) => void;
    setNeedsUpdate: (needsUpdate: boolean) => void;
};

const useCamStore = create<camStore>((set) => ({
    needsUpdate: false,
    camStartPosition: new THREE.Vector3(0,10,30),
    camPosition: new THREE.Vector3(0,10,30),
    lookAtPosition: new THREE.Vector3(0,0,0),

    positionArray: [new THREE.Vector3(-12,10,12), new THREE.Vector3(-18,15,18), new THREE.Vector3(-20,7.5,20)],
    targetArray: [new THREE.Vector3(0,2,0), new THREE.Vector3(0,6,0), new THREE.Vector3(0,1.0,0)],

    setCamera: (position, target) => set((state) => ({ camPosition: position, lookAtPosition: target })),
    setNeedsUpdate: (needsUpdate) => set((state) => ({ needsUpdate: needsUpdate })),
}));

export default useCamStore;