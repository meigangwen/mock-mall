import { create } from 'zustand';
import * as THREE from 'three';

type cameraStore = {
    // 0 collaped, 1 expanded, 2 focused on a single level
    cameraPosition: THREE.Vector3[];       
    cameraLookAt: THREE.Vector3[];
};

const useCameraStore = create<cameraStore>((set) => ({
    cameraPosition: [new THREE.Vector3(0,10,20), new THREE.Vector3(0,15,30), new THREE.Vector3(0,10,20)],
    cameraLookAt: [new THREE.Vector3(0,5,0), new THREE.Vector3(0,5,0), new THREE.Vector3(0,0,0)]

}));

export default useCameraStore;