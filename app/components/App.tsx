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
import Mall from "./Mall";

// import state
import useMallStore from '../state/mallStore';

export default function App() {
    
    //declare the UI parameters
    const { expanded } = useControls("Controls", {
        expanded: false,
    });
    const { expand, collapse, updateComputedHeights} = useMallStore();

    useEffect(()=>{
        if (expanded) {
            expand();
        } else {
            collapse();
        }
        updateComputedHeights();
    }, [expanded, expand, collapse, updateComputedHeights])

    return (
        <>
            <MotionConfig transition={{...framerMotionConfig}}>
                <Canvas shadows camera={{ position: [3, 20, 20], fov: 40 }}>
                    <color attach="background" args={["#000000"]} />
                    <Mall />
                    
                    <ambientLight intensity={0.1} />
                    <directionalLight
                        visible
                        position={[10, 50, 10]}
                        intensity={1.0}
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
                    <OrbitControls />
                    
                    <Environment preset="city" />
                </Canvas>
            </MotionConfig>
        </>
    )
}