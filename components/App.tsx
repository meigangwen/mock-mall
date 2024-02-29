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
import { framerMotionConfig } from "@/app/motionConfig";

// import components
import Mall from "./Mall";
import Background from "./Background";
import CameraControls from './CameraControls';

// import state
import useMallStore from '../state/mallStore';

export default function App() {
    

    //declare the UI parameters
    const options = ["None","Basement 1", "Level 1", "Level 2", "Level 3", "Level 4"];
    const { expanded, level } = useControls("Controls", {
        expanded: false,
        level: {
            value: "None",
            options: options, 
        },
    });

    const { mode, setMode, setFocusedLevel ,updateComputedHeights} = useMallStore();

    useEffect(()=>{
        if (expanded) {
            if (level === "None"){
                setMode(1);
            } else {
                setMode(2);
                // this is not reliable now
                const focusedLevel = options.indexOf(level);
                setFocusedLevel(focusedLevel);
            }
        } else {
            setMode(0);
        }
        updateComputedHeights();
    }, [expanded, level, setMode, updateComputedHeights, setFocusedLevel])

    return (
        <>
            <MotionConfig transition={{...framerMotionConfig}}>
                <Canvas shadows camera={{ position: [0, 10, 30], fov: 40 }}>
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
                    <CameraControls />
                </Canvas>
                
            </MotionConfig>
        </>
    )
}

//<Environment preset="city" />