import { useEffect, useState } from 'react'
import Level from './Level'
import { motion } from "framer-motion-3d";

import useMallStore from '../state/mallStore';

export default function Mall() {

    const { computedHeights } = useMallStore();
    
    return (
        <motion.group>
            {
                computedHeights.map((height, index) => ( 
                    <Level 
                        key={index} 
                        index={index} 
                        position={[0, height, 0]} 
                    />
                ))
            }
        </motion.group>
    )
}