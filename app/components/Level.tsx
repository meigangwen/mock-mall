import { motion } from "framer-motion-3d";
import { framerMotionConfig } from "../motionConfig";
import { useEffect, useState, useRef } from 'react'
import { useFrame, useThree } from "@react-three/fiber";
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

    const matRef = useRef();
    useEffect(() => {
        let value = 1.0;
        if (mode===2){
            if ((focusedLevel - 1) === index) {
                value = 1.0
            } else {value = 0.0
            }
        }
        animate(opacity, value , {
            duration:0.6,
        });
    }, [mode, focusedLevel, index, opacity])

    useFrame((state) => {
       matRef.current.opacity = opacity.get();
    });

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
                    scaleX: 2.5,
                    scaleZ: 2.5,
                    y: index === (focusedLevel - 1) ? 1.0 : position[1] + expandDistance * index + (index - (focusedLevel - 1)) * 10.0,
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
                    ref={matRef}
                    color={hovered? 'red': 'white' } 
                    roughness={1.0} 
                    envMapIntensity={0.25} 
                    transparent
                    opacity={1.0}
                />
            </mesh>
        </motion.group>
    )
}