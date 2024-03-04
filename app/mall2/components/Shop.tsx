import { Html } from "@react-three/drei";
import useMallStore from "../state/mallStore";
import useCamStore from "../state/camStore";
import * as THREE from "three";

export default function Shop(props) {
    const { geometry, index, position, visible, shopCategory } = props;
    const textX = index >= 9 ? 8 : 12;
    const { mode, category, focusedShop ,setFocusedShop } = useMallStore();
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
                        setFocusedShop(index);
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
        { (index === focusedShop || category === shopCategory) && visible && (
            <mesh 
                geometry={geometry}
                position = {position}
                >
                    <meshStandardMaterial
                        color='red' 
                        roughness={1.0} 
                        envMapIntensity={0.25} 
                        transparent
                        opacity={0.5}
                        flatShading
                    />
            </mesh>
        )
        }
    </group>
    )
}