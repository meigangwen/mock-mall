/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 houdini/model/node_levels.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/node_levels.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.level1.geometry} material={nodes.level1.material} />
      <mesh geometry={nodes.level2.geometry} material={nodes.level2.material} position={[0, 1.2, 0]} />
      <mesh geometry={nodes.level3.geometry} material={nodes.level3.material} position={[0, 5, 0]} />
    </group>
  )
}

useGLTF.preload('/node_levels.glb')
