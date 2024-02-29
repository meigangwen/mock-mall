import { useEffect, useState } from 'react'
import Level from './Level'
import { motion } from "framer-motion-3d";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";

// import config
import { framerMotionConfig } from "../motionConfig";

// import states
import useMallStore from '../state/mallStore';
//import useCameraStore from '../state/cameraStore';

export default function Mall(props) {

    const { computedHeights } = useMallStore();

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