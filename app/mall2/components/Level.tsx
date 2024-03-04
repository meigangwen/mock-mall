
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

import Shop from "./Shop";
import { shopData } from '../data/shopData';

export default function Level(props) {

    // get props
    const { position, index, name } = props;

    // get store values
    const {levels, mode, category, expandDistance, focusedLevel, setMode, setFocusedLevel} = useMallStore();
    const shopsData = shopData[Math.max(focusedLevel-1, 0)];
    const anim = mode;

    // declare private state
    const [hovered, setHovered] = useState(false)
    const [visible, setVisible] = useState(true)
    
    //const wall_matRef = useRef();
    //const rail_matRef = useRef();

    // load the level model
    const gltf = useLoader(GLTFLoader, "/model/"+ name + ".glb");

    // init geometry arrays here
    // we can merge geometries that requires no interaction, for example walls, rails, stairs later
    let wall_geometris = [];
    let rail_geometris = [];
    let shop_geometris = [];
    let shop_positions = [];
    //let geometry = new THREE.BufferGeometry();

    gltf.scene.traverse(function (child) {
        if (child.isMesh) {
            if (!child.geometry.attributes.normal) {
                child.geometry.computeVertexNormals();
            }

            if (child.name.includes('wall')){
                wall_geometris.push(child.geometry);
            }
            if (child.name.includes('rail')){
                rail_geometris.push(child.geometry);
            }
            if (child.name.includes('shop')){
                shop_geometris.push(child.geometry);
                shop_positions.push(child.position);
            }
        }
    });

    useEffect(() => {
    
        if (mode===2){
            setVisible((index + 1) === focusedLevel);
        } else {
            setVisible(true);
        }
    }, [mode, focusedLevel])

    return (
        <motion.group 
            visible = {visible}
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

            { // main level geometry is call wall, include floor and wall for now 
            wall_geometris.length > 0 && 
            (<mesh 
                castShadow
                receiveShadow
                geometry={wall_geometris[0]}

                /*
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

                
                onPointerUp={(e) => {
                    //setCamera(new THREE.Vector3(0.0,6.0,0.0), new THREE.Vector3(position.x *2 , 1.0 ,position.z * 2));
                    setMode(2);
                    setFocusedLevel(index+1);
                    setHovered(false);
                }}
                */
            >
                <meshStandardMaterial
                    //ref={wall_matRef}
                    color={hovered? 'red':'white'} 
                    roughness={1.0} 
                    envMapIntensity={0.2}
                    side={THREE.FrontSide} 
                    flatShading
                />
            </mesh>)
            }

            { // all rail geometries for the level 
            rail_geometris.length > 0 && 
            (<mesh 
                castShadow
                geometry={rail_geometris[0]}
            >
                <meshStandardMaterial
                    //ref={rail_matRef}
                    color='blue' 
                    roughness={0.1} 
                    envMapIntensity={1} 
                    transparent
                    opacity={0.5}
                    flatShading
                />
            </mesh>)
            }

            { // all the shop geometries
            shop_geometris.length > 0 && shopsData.length > 0 && (
                shop_geometris.map((geometry, index) => (
                    <Shop
                        key = {index}
                        index = {index}
                        geometry = {geometry}
                        position = {shop_positions[index]}
                        visible = {visible}
                        shopCategory = {shopsData[index]['category']}
                    />
                ))
            )
            }

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