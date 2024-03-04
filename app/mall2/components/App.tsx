'use client'

// import modules
import { Canvas } from '@react-three/fiber'
import { Environment} from "@react-three/drei";
import { useEffect } from 'react'
import { useControls } from "leva";
import { MotionConfig } from "framer-motion";

// import config
import { framerMotionConfig } from "../motionConfig";

// import components
import Mall from "./Mall";
import Background from "./Background";
import CamControls from './CamControls';
import Directory from './Directory';

// import state
import useMallStore from '../state/mallStore';
import useCamStore from '../state/camStore';

export default function App() {
    
    //get the mall info
    const { mode, levelNames, focusedLevel, setMode, setFocusedLevel ,updateComputedHeights, setFocusedShop} = useMallStore();
    const { camStartPosition, positionArray, targetArray, setCamera, setNeedsUpdate } = useCamStore();

    //declare the UI parameters
    const options = ["None", ...levelNames];
    const { expanded, level } = useControls("Controls", {
        expanded: false,
        level: {
            value: "None",
            options: options, 
        },
        category: {
            value: "None",
            options: ['f&b', 'fasion', 'pet', 'home', 'kids', 'book'],
        }
    });

    useEffect(()=>{
        setFocusedShop(-1);
        if (expanded) {
            if (level === "None"){
                setMode(1);
                setCamera(positionArray[1], targetArray[1]);
            } else {
                setMode(2);
                const focusedLevel = options.indexOf(level);
                setFocusedLevel(focusedLevel);
                setCamera(positionArray[2], targetArray[2]);
                setNeedsUpdate(true);
            }
        } else {
            setMode(0);
            setCamera(positionArray[0], targetArray[0]);
        }
        updateComputedHeights();
    }, [expanded, level, focusedLevel])

    return (
        <>
            <MotionConfig transition={{...framerMotionConfig}}>
                <Canvas shadows camera={{ position: camStartPosition, fov: 45 }}>
                    <color attach="background" args={["#000000"]} />
                    <Mall 
                        //rotation-y={Math.PI / 4} 
                    />

                    <ambientLight intensity={0.15} />
                    <directionalLight
                        visible
                        position={[20, 40, 20]}
                        intensity={1.0}
                        castShadow={true}
                        shadow-mapSize-width={2048}
                        shadow-mapSize-height={2048}
                        shadow-camera-near={1}
                        shadow-camera-far={75}
                        shadow-camera-left={-50}
                        shadow-camera-right={50}
                        shadow-camera-top={50}
                        shadow-camera-bottom={-50}
                    />
                    
                    <Environment preset="city" />
                    <CamControls />
                </Canvas>
            </MotionConfig>
            { mode===2 && 
                <Directory />
            }
        </>
    )
}