import { Environment, Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Gradient, LayerMaterial } from "lamina";
import { useRef } from "react";

import * as THREE from "three";

export default function Background() {
    const start = 0.2;
    const end = -0.5;

    const gradientRef = useRef();
    const gradientEnvRef = useRef();

    const backgroundColors = useRef({
        colorA: "#3535cc",
        colorB: "#abaadd",
    });

    
    useFrame(() => {
        gradientRef.current.colorA = new THREE.Color(
          backgroundColors.current.colorA
        );
        gradientRef.current.colorB = new THREE.Color(
          backgroundColors.current.colorB
        );
        gradientEnvRef.current.colorA = new THREE.Color(
          backgroundColors.current.colorA
        );
        gradientEnvRef.current.colorB = new THREE.Color(
          backgroundColors.current.colorB
        );
    });

    return (
    <>
        <Sphere scale={[500, 500, 500]} rotation-y={Math.PI / 2}>
            <LayerMaterial side = {THREE.BackSide}>
                <Gradient 
                    ref={gradientRef} 
                    axes={"y"}
                    start={start}
                    end={end} 
                />
            </LayerMaterial>
        </Sphere>
        <Environment resolution={256} frames={Infinity}>
            <Sphere 
                scale={[100, 100, 100]} 
                rotation-y={Math.PI / 2}
                rotation-x={Math.PI}
            >
                <LayerMaterial side = {THREE.BackSide}>
                    <Gradient 
                        ref={gradientEnvRef}
                        axes={"y"}
                        start={start}
                        end={end} 
                    />
                </LayerMaterial>
            </Sphere>
        </Environment>
    </>
    );
};