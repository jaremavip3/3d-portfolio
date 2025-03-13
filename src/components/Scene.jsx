"use client";
import { Environment, MeshWobbleMaterial, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

import { useRef, useState } from "react";
import { DirectionalLight, DirectionalLightHelper } from "three";

const Dodecahedron = ({ position, size, color }) => {
  return (
    <mesh position={position}>
      <dodecahedronGeometry />
      <MeshWobbleMaterial factor={0.3} color={color} />
    </mesh>
  );
};

export default function Scene() {
  return (
    // everything that it inside Canvas is inside WebGL, so it will be rendered by the GPU
    <Canvas>
      <Environment preset="sunset" />
      <directionalLight position={[0, 3, 2]} intensity={3} />
      <ambientLight intensity={0.1} />
      <Dodecahedron position={[0, 0, 0]} color={"orange"} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
