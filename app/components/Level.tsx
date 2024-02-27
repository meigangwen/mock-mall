import { motion } from "framer-motion-3d";
import { framerMotionConfig } from "../config";
//import { animate, useMotionValue } from "framer-motion";

export default function Level(props) {
    const {position, index, distance, section, levels} = props;
    
    return (
        <motion.group 
            position = {position}
            animate={"" + section}
            variants={{
                0: {
                    y: position[1],
                    transition: {
                        duration: 0.6,
                        delay: index * 0.1,
                        //...framerMotionConfig,
                    },
                },
                1: {
                    y: position[1] + distance * index,
                    transition: {
                        duration: 0.6,
                        delay: (levels - index) * 0.1,
                        ...framerMotionConfig,
                    },
                },
            }}
        >
            <mesh castShadow>
                <boxGeometry args={[6.0,1.0,6.0]} />
                <meshStandardMaterial envMapIntensity={0.25}/>
            </mesh>
        </motion.group>
    )
}