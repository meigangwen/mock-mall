'use client'

// import modules
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sky, Environment,  MapControls } from "@react-three/drei";
import { useEffect, useState } from 'react'

// import components
import Stack from "./Stack";


export default function App() {
     
    return (
        <Canvas shadows camera={{ position: [3, 3, 10], fov: 40 }}>
            <color attach="background" args={["#ececec"]} />
            <Stack />
            
            <ambientLight intensity={0.3} />
            <OrbitControls />
            <Sky />
            <Environment preset="city" />
        </Canvas>
    )
}