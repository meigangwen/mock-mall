import TWEEN from '@tweenjs/tween.js'
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useState, useRef } from 'react';
import { useControls } from "leva";
import { OrbitControls } from "@react-three/drei";

//import state manager
import useCamStore from '../state/camStore';

export default function CamControls() {
    
    const { camera } = useThree(); 
    const { camPosition } = useCamStore();

    useEffect(() => { 
        console.log(camPosition);
    },[camPosition]);


     // ref to the orbit control
     const orbitRef = useRef();
    // animate the camera
    useFrame((state) => {
       
    });

    return (
        <>
            <OrbitControls
                ref = { orbitRef }
                //target = {lookAtTargetPosition}
                //enabled = {!isAnimating}
                minDistance = {8.0}
                maxDistance = {100.0}
                minPolarAngle = {0}
                maxPolarAngle = {Math.PI * 0.5}
            />
        </>
    )
}