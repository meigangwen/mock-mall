export default function Level(props) {
    return (
        <group {...props}>
            <mesh>
                <boxGeometry args={[6.0,1.0,6.0]} />
                <meshStandardMaterial envMapIntensity={0.5}/>
            </mesh>
        </group>
    )
}