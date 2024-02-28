import { useEffect, useState } from 'react'
import Level from './Level'
import { motion } from "framer-motion-3d";

import useMallStore from '../state/mallStore';

export default function Mall() {

    const { levels, expanded, computedHeights } = useMallStore();
    // define some stack states
    const [section, setSection] = useState(0);
    
    useEffect(() => {
        const test = expanded ? 1 : 0;
        setSection(test); 
    },[expanded])
  
    return (
        <motion.group>
            {
                computedHeights.map((height, index) => ( 
                    <Level 
                        key={index} 
                        index={index} 
                        position={[0, height, 0]} 
                        section={section} 
                    />
                ))
            }
        </motion.group>
    )
}