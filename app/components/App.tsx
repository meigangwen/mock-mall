'use client'

// import modules
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sky } from "@react-three/drei";
import { Stats, MapControls, Environment } from '@react-three/drei'
import { Suspense, useEffect, useState } from 'react'

// import components
import Stack from "./Stack";


export default function App() {
     
    return (
        <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
            <color attach="background" args={["#ececec"]} />
            <Stack />
            <OrbitControls />
            <Sky />
        </Canvas>
    )
}