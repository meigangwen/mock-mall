import { motion } from "framer-motion-3d";
import { framerMotionConfig } from "../config";
//import { animate, useMotionValue } from "framer-motion";

import useMallStore from '../state/mallStore';

export default function Level(props) {

    // get props
    const {position, index, section } = props;

    // get store values
    const {levels, expandDistance} = useMallStore();
    
    return (
        <motion.group 
            position = {position}
            animate={"" + section}
            variants={{
                0: {
                    y: position[1],
                    transition: {
                        duration: 0.6,
                        delay: index * 0.1,
                    },
                },
                1: {
                    y: position[1] + expandDistance * index,
                    transition: {
                        duration: 0.6,
                        delay: (levels - index) * 0.1,
                        ...framerMotionConfig,
                    },
                },
            }}
        >
            <mesh castShadow>
                <boxGeometry args={[6.0,1.0,6.0]} />
                <meshStandardMaterial envMapIntensity={0.25}/>
            </mesh>
        </motion.group>
    )
}