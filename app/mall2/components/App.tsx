'use client'

// import modules
import { Canvas } from '@react-three/fiber'
import { Sky, Environment} from "@react-three/drei";
import { useEffect, useState } from 'react'
//import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { MotionConfig } from "framer-motion";
//import { animate, useMotionValue } from "framer-motion";

// import config
import { framerMotionConfig } from "../motionConfig";

// import components
import Mall from "./Mall";
import Background from "./Background";
import CamControls from './CamControls';


// import state
import useMallStore from '../state/mallStore';
import useCamStore from '../state/camStore';

import * as THREE from 'three';

export default function App() {
    
    //get the mall info
    const { mode, levelNames, setMode, setFocusedLevel ,updateComputedHeights} = useMallStore();
    const { camStartPosition, positionArray, targetArray, setCamera } = useCamStore();

    //declare the UI parameters
    const options = ["None", ...levelNames];
    const { expanded, level } = useControls("Controls", {
        expanded: false,
        level: {
            value: "None",
            options: options, 
        },
    });

    useEffect(()=>{
        if (expanded) {
            if (level === "None"){
                setMode(1);
                setCamera(positionArray[1], targetArray[1]);
            } else {
                setMode(2);
                setCamera(positionArray[2], targetArray[2]);
                const focusedLevel = options.indexOf(level);
                setFocusedLevel(focusedLevel);
            }
        } else {
            setMode(0);
            setCamera(positionArray[0], targetArray[0]);
        }
        updateComputedHeights();
    }, [expanded, level, setMode, updateComputedHeights, setFocusedLevel])

    return (
        <>
            <MotionConfig transition={{...framerMotionConfig}}>
                <Canvas shadows camera={{ position: camStartPosition, fov: 40 }}>
                    <color attach="background" args={["#000000"]} />
                    <Mall rotation-y={Math.PI / 4} />

                    <ambientLight intensity={0.1} />
                    <directionalLight
                        visible
                        position={[10, 50, 10]}
                        intensity={0.5}
                        castShadow={true}
                        shadow-mapSize-width={1024}
                        shadow-mapSize-height={1024}
                        shadow-camera-near={1}
                        shadow-camera-far={100}
                        shadow-camera-left={-100}
                        shadow-camera-right={100}
                        shadow-camera-top={100}
                        shadow-camera-bottom={-100}
                    />
                    
                    <Environment preset="city" />
                    <CamControls />
                </Canvas>
                
            </MotionConfig>
        </>
    )
}