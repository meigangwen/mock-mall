import { useEffect, useState } from 'react'
import Level from './Level'
import { motion } from "framer-motion-3d";

import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";

// import config
import { framerMotionConfig } from "../motionConfig";

// import states
import useMallStore from '../state/mallStore';
import useCameraStore from '../state/cameraStore';

export default function Mall(props) {

    const { mode, computedHeights } = useMallStore();
    const { cameraPosition, cameraLookAt } = useCameraStore();

    //animate the camera based on the mall mode
    //let position = cameraPosition[mode];
    //let lookAt = cameraLookAt[mode];

    const cameraPositionY = useMotionValue(0);
    const cameraLookAtY = useMotionValue(0);
    const cameraPositionZ = useMotionValue(0);
    const cameraLookAtZ = useMotionValue(0);

    useEffect(() => {
        animate(cameraPositionY, cameraPosition[mode].y, {
            duration:1.0,
        });
        animate(cameraLookAtY, cameraLookAt[mode].y, {
            duration:1.0,
        });
        animate(cameraPositionZ, cameraPosition[mode].z, {
            duration:1.0,
        });
        animate(cameraLookAtZ, cameraLookAt[mode].z, {
            duration:1.0,
        });
    }, [mode,cameraPositionY,cameraLookAtY, cameraPositionZ, cameraLookAtZ, cameraPosition, cameraLookAt]);

    useFrame((state) => {
        state.camera.position.y = cameraPositionY.get();
        state.camera.position.z = cameraPositionZ.get();
        state.camera.lookAt(0, cameraLookAtY.get(), cameraLookAtZ.get());
    });
    
    return (
        <motion.group {...props}>
            {
                computedHeights.map((height, index) => ( 
                    <Level 
                        key={index} 
                        index={index} 
                        position={[0, height, 0]} 
                    />
                ))
            }
        </motion.group>
    )
}