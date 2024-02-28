import { motion } from "framer-motion-3d";
import { framerMotionConfig } from "../motionConfig";
import { useEffect, useState } from 'react'
import { animate, useMotionValue } from "framer-motion";

import useMallStore from '../state/mallStore';

export default function Level(props) {

    // get props
    const {position, index} = props;

    // get store values
    const {levels, mode, expandDistance, focusedLevel} = useMallStore();
    const opacity = useMotionValue(1.0);
    const anim = mode;

    // declare private state
    const [hovered, setHovered] = useState(false)

    useEffect(() => {
        let value = 1.0;
        if (mode===2){
            if (focusedLevel === index - 1) {
                value = 0.0
            } else {value = 1.0
            }
        }
        animate(opacity, value , {
            duration:1.0,
        });
    }, [mode, focusedLevel, index, opacity])

    
    return (
        <motion.group 
            position = {position}
            animate={"" + anim}
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
                2: {
                    y: position[1] + expandDistance * index,
                    transition: {
                        duration: 1.0,
                        ...framerMotionConfig,
                    },
                },
            }}
        >
            <mesh 
                castShadow
                //receiveShadow
                onPointerOver={(e) => {
                    if (mode === 1){ 
                        setHovered(true)
                    }
                    e.stopPropagation()
                }}
                onPointerOut={() => {
                    if (mode === 1){ 
                        setHovered(false)
                    }
                }}
            >
                <boxGeometry args={[6.0,1.0,6.0]} />
                <meshStandardMaterial
                    color={hovered? 'red': 'white' } 
                    roughness={1.0} 
                    envMapIntensity={0.25} 
                    transparent
                    opacity={opacity.get()}
                />
            </mesh>
        </motion.group>
    )
}