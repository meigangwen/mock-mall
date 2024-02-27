import { useControls } from 'leva'
import { useEffect, useState } from 'react'
import Level from './Level'
import { motion } from "framer-motion-3d";

export default function Stack(props) {

    // define some stack states
    const [distance, setDistance] = useState(0.0);
    const [section, setSection] = useState(0);

    const levels = 5;
    const height = 1.0;
    const ground_height = 0.0;
    const gap = 0.1;
    
    let heightList = [];

    // get props
    const { expanded } = props;
    useEffect(() => {
        if (expanded) {
            setDistance(2.0);
        } else {
            setDistance(0.0);
        }
        const test = expanded ? 1 : 0;
        setSection(test); 
    },[expanded])

    for (let i=0; i < levels; i++ ){
        const posY = height * 0.5 + i * (height + gap) + ground_height;
        heightList.push(posY);
    }
    
    return (
        <motion.group>
            {
                heightList.map((height, index) => ( 
                    <Level key={index} index={index} position={[0, height, 0]} distance={distance} section={section} levels={levels}/>
                ))
            }
        </motion.group>
    )
}