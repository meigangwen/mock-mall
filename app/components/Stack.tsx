import { useControls } from 'leva'
import { useEffect, useState } from 'react'
import Level from './Level'

export default function Stack() {

    const levels = 5;
    const height = 1.0;
    const ground_height = 0.0;
    const gap = 0.1;
    
    let heightList = [];

    for (let i=0; i < levels; i++ ){
        const posY = height * 0.5 + i * (height + gap) + ground_height;
        heightList.push(posY);
    }
    
    return (
        <group>
            {
                heightList.map((height, index) => ( 
                    <Level key={index} position={[0,height,0]} />
                ))
            }
        </group>
    )
}