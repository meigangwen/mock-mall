import TWEEN from '@tweenjs/tween.js'
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from 'react';
import { OrbitControls } from "@react-three/drei";

//import state manager
import useCamStore from '../state/camStore';

export default function CamControls() {
    
    const { camera } = useThree(); 
    const { camPosition, lookAtPosition } = useCamStore();

    const orbitRef = useRef();

    useEffect(() => { 
        // set camera target position
        new TWEEN.Tween(orbitRef.current.target)
        .to(
            {
                x: lookAtPosition.x,
                y: lookAtPosition.y,
                z: lookAtPosition.z,
            },
            1000
        )
        .easing(TWEEN.Easing.Cubic.Out)
        .start()

        // set camera position anim
        new TWEEN.Tween(camera.position)
        .to(
            {
                x: camPosition.x,
                y: camPosition.y,
                z: camPosition.z,
            },
            1000
        )
        .easing(TWEEN.Easing.Cubic.Out)
        .start()
    },[camPosition, lookAtPosition]);

    // animate the camera
    useFrame((state) => {
        TWEEN.update()
    });

    return (
        <>
            <OrbitControls
                ref = { orbitRef }
                minDistance = {8.0}
                maxDistance = {100.0}
                minPolarAngle = {0}
                maxPolarAngle = {Math.PI * 0.5}
            />
        </>
    )
}