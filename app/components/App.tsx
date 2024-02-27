'use client'

// import modules
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sky, Environment} from "@react-three/drei";
import { useEffect, useState } from 'react'
import { useControls } from "leva";
import { MotionConfig } from "framer-motion";

// import config
import { framerMotionConfig } from "../config";

// import components
import Stack from "./Stack";

export default function App() {
    
    //declare the UI parameters
    const { expanded } = useControls("Controls", {
        expanded: false,
    });

    return (
        <>
            <MotionConfig transition={{...framerMotionConfig}}>
                <Canvas shadows camera={{ position: [3, 20, 20], fov: 40 }}>
                    <color attach="background" args={["#ececec"]} />
                    <Stack expanded={expanded} />
                    
                    <ambientLight intensity={0.3} />
                    <OrbitControls />
                    <Sky />
                    <Environment preset="city" />
                </Canvas>
            </MotionConfig>
        </>
    )
}