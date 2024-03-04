import { Html } from "@react-three/drei";
import useMallStore from "../state/mallStore";
import useCamStore from "../state/camStore";
import * as THREE from "three";

export default function Shop(props) {
    const { geometry, index, position, visible } = props;
    const textX = index >= 9 ? 8 : 12;
    const { mode } = useMallStore();
    const { setCamera } = useCamStore();

    return (
    <group>
        { (mode === 2) && visible &&
        <Html 
            position={position}
        >
            <svg 
                height="34"
                width="34"
                transform="translate(-16 -16)"
                style={{ cursor: 'pointer' }}
            >
                <circle
                    cx="17"
                    cy="17"
                    r="16"
                    stroke="white"
                    strokeWidth="2"
                    fill="rgba(0,0,0,.66)"
                    onPointerUp={() => {
                        setCamera(new THREE.Vector3(0.0,6.0,0.0), new THREE.Vector3(position.x *2 , 1.0 ,position.z * 2));
                    }}
                />
                <text
                    x={''+textX}
                    y="22"
                    fill="white"
                    fontSize={17}
                    fontFamily="monospace"
                    style={{ pointerEvents: 'none' }}
                >
                    {index + 1}
                </text>
            </svg>
        </Html>
        }
    </group>
    )
}

/*
  <mesh 
    castShadow
    geometry={geometry}
    position = {position}
    >
        <meshStandardMaterial
            color='white' 
            roughness={1.0} 
            envMapIntensity={0.25} 
            transparent
            opacity={1.0}
            flatShading
        />
    </mesh>

*/