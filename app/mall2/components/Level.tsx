import { motion } from "framer-motion-3d";
import { framerMotionConfig } from "@/app/motionConfig";
import { useEffect, useState, useRef } from 'react'
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Html } from "@react-three/drei";
import useMallStore from '../state/mallStore';
import * as THREE from 'three';

export default function Level(props) {

    // get props
    const {position, index, name} = props;

    // get store values
    const {levels, mode, expandDistance, focusedLevel} = useMallStore();
    const opacity = useMotionValue(1.0);
    const anim = mode;

    // declare private state
    const [hovered, setHovered] = useState(false)
    const matRef = useRef();

    // load the level model
    const gltf = useLoader(GLTFLoader, "/model/"+ name + ".glb");
    let geometry = new THREE.BufferGeometry();

    gltf.scene.traverse(function (child) {
        if (child.isMesh) {
          //if there is not vertex normals, compute it
          if (!child.geometry.attributes.normal) {
            child.geometry.computeVertexNormals();
          }
    
          geometry = child.geometry;
          //material = child.material;
        }
    });

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
                        duration: 1,
                        delay: index * 0.1,
                    },
                },
                1: {
                    y: position[1] + expandDistance * index,
                    transition: {
                        duration: 1,
                        delay: (levels - index) * 0.1,
                        ...framerMotionConfig,
                    },
                },
                2: {
                    scaleX: 2,
                    scaleZ: 2,
                    y: index === (focusedLevel - 1) ? 1.0 : position[1] + expandDistance * index + (index - (focusedLevel - 1)) * 10.0,
                    transition: {
                        duration: 2,
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
                geometry={geometry}
            >
                <meshStandardMaterial
                    ref={matRef}
                    color={hovered? 'red': 'white' } 
                    roughness={1.0} 
                    envMapIntensity={0.25} 
                    transparent
                    opacity={1.0}
                    flatShading
                />
            </mesh>

            {
            mode === 1 && (<Html 
                position={[5.1, 0, 5.1]} 
                distanceFactor={25.0}
            >
                <div className="annotation">
                    <h1>{name}</h1>
                </div>
            </Html>)
            }
        </motion.group>
    )
}
// <boxGeometry args={[10.0,1.0,10.0]} />