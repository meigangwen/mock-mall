import { useEffect, useState } from 'react'
import Level from './Level'
import { motion } from "framer-motion-3d";

import useMallStore from '../state/mallStore';
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";

// import config
import { framerMotionConfig } from "../motionConfig";

export default function Mall() {

    const { mode, computedHeights } = useMallStore();

    //animate the camera based on the mode
    const cameraPositionX = useMotionValue(0);
    const cameraLookAtX = useMotionValue(0);

    useEffect(() => {
        animate(cameraPositionX, mode ? -5 : 0, {
          duration:2.0,
          //...framerMotionConfig,
        });
        animate(cameraLookAtX, mode ? 5 : 0, {
          duration:2.0,
          //...framerMotionConfig,
        });
    }, [mode,cameraPositionX,cameraLookAtX]);

    useFrame((state) => {
        state.camera.position.x = cameraPositionX.get();
        state.camera.lookAt(cameraLookAtX.get(), 0, 0);
    });
    
    return (
        <motion.group>
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