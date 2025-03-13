"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Scene() {
  const dodecahedronRef = useRef();

  const Dodecahedron = ({ ...props }) => {
    useFrame((state, delta) => {
      dodecahedronRef.current.rotation.x += delta;
      console.log("dodecahedronRef.current.rotation.x: ", dodecahedronRef.current.rotation.x);
    });
    return (
      <mesh {...props}>
        <dodecahedronGeometry />
        <meshStandardMaterial color="hotpink" />
        <ambientLight />
      </mesh>
    );
  };

  return (
    // everything that it inside Canvas is inside WebGL, so it will be rendered by the GPU
    <Canvas>
      <Dodecahedron ref={dodecahedronRef} position={[0, 0, 0]} size={[1, 1, 1]} />
    </Canvas>
  );
}
