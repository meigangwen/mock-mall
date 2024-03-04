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
    const { camStartPosition, positionArray, targetArray, setCamera, setNeedsUpdate } = useCamStore();

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
                const focusedLevel = options.indexOf(level);
                setFocusedLevel(focusedLevel);
                setCamera(positionArray[2], targetArray[2]);
                setNeedsUpdate(true);
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
                <Canvas shadows camera={{ position: camStartPosition, fov: 45 }}>
                    <color attach="background" args={["#000000"]} />
                    <Mall rotation-y={Math.PI / 4} />

                    <ambientLight intensity={0.15} />
                    <directionalLight
                        visible
                        position={[15, 75, 15]}
                        intensity={3.0}
                        castShadow={true}
                        shadow-mapSize-width={1024}
                        shadow-mapSize-height={1024}
                        shadow-camera-near={1}
                        shadow-camera-far={100}
                        shadow-camera-left={-200}
                        shadow-camera-right={200}
                        shadow-camera-top={200}
                        shadow-camera-bottom={-200}
                    />
                    
                   
                    <CamControls />
                </Canvas>
                
            </MotionConfig>
        </>
    )
}

// <Environment preset="city" />