export default function Ground() {
    return (
      <mesh receiveShadow rotation-x={-Math.PI / 2} >
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="white" envMapIntensity={0.1} />
      </mesh>
    );
  }