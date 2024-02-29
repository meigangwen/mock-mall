import * as THREE from 'three';
import { motion } from "framer-motion-3d";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { useEffect, useState, useRef } from 'react'
import { OrbitControls } from "@react-three/drei";

// import state manager
import useMallStore from '../state/mallStore';
import useCameraStore from '../state/cameraStore';

export default function CameraControls() {
    
    const { camera } = useThree(); 
    const { mode, focusedLevel } = useMallStore();    
    const { cameraPositionArray, cameraLookAtArray } = useCameraStore();
    const lookAtTargetPosition = cameraLookAtArray[mode];

    // create use motion values
    const cameraPositionX = useMotionValue(0);
    const cameraPositionY = useMotionValue(0);
    const cameraPositionZ = useMotionValue(0);
   
    const cameraLookAtX = useMotionValue(0);
    const cameraLookAtY = useMotionValue(0);
    const cameraLookAtZ = useMotionValue(0);

    useEffect(() => {
        // update the camera position
        cameraPositionX.set(camera.position.x);
        cameraPositionY.set(camera.position.y);
        cameraPositionZ.set(camera.position.z);
        
        // create camera animations
        animate(cameraPositionX, cameraPositionArray[mode].x, { duration:1.0, });
        animate(cameraPositionY, cameraPositionArray[mode].y, { duration:1.0, });
        animate(cameraPositionZ, cameraPositionArray[mode].z, { duration:1.0, });
         
    },[mode, focusedLevel]);

    // animate the camera
    useFrame((state) => {
        if (cameraPositionY.isAnimating() || cameraPositionY.isAnimating() || cameraPositionZ.isAnimating())
        {
            state.camera.position.set(cameraPositionX.get(),cameraPositionY.get(), cameraPositionZ.get())
        }
        //state.camera.lookAt(0, cameraLookAtY.get(), cameraLookAtZ.get());
    });

    return (
        <>
            <OrbitControls />
        </>
    )
}