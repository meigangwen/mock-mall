import Level from './Level'
import { motion } from "framer-motion-3d";

// import states
import useMallStore from '../state/mallStore';

export default function Mall(props) {

    const { computedHeights, levelNames } = useMallStore();

    return (
        <motion.group {...props}>
            {
                computedHeights.map((height, index) => ( 
                    <Level 
                        key={index}
                        name = {levelNames[index]} 
                        index={index} 
                        position={[0, height, 0]} 
                    />
                ))
            }
        </motion.group>
    )
}