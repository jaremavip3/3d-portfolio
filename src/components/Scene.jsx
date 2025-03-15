"use client";
import {
  Environment,
  MeshTransmissionMaterial,
  OrbitControls,
  ContactShadows,
  PresentationControls,
  Text,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { useRef, useState, Suspense } from "react";
import {
  DirectionalLight,
  DirectionalLightHelper,
  MeshBasicMaterial,
  MeshDepthMaterial,
  MeshLambertMaterial,
  MeshNormalMaterial,
} from "three";

const Dodecahedron = ({ position, size, color }) => {
  const { viewport } = useThree();
  const mesh = useRef();

  const materialProps = useControls({
    thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.02, min: 0, max: 1 },
    backside: { value: true },
  });

  // Responsive scaling based on device
  const scale = Math.min(1, viewport.width / 5);
  return (
    <group dispose={null} scale={scale}>
      <Suspense fallback={null}>
        <Text position={[0, 0, -2]} fontSize={0.8} color="white">
          Jaremavip
        </Text>
      </Suspense>
      <mesh ref={mesh} position={position}>
        <dodecahedronGeometry args={[0.8, 0]} />
        <MeshTransmissionMaterial {...materialProps} color={color} />
      </mesh>
    </group>
  );
};

// Simple fallback for when environment is loading
const EnvironmentFallback = () => (
  <>
    <directionalLight position={[0, 3, 2]} intensity={3} />
    <ambientLight intensity={0.1} />
  </>
);

export default function Scene() {
  return (
    // everything that it inside Canvas is inside WebGL, so it will be rendered by the GPU
    <Canvas
      style={{ backgroundColor: "black", touchAction: "none" }}
      gl={{ powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 5], fov: 25 }}
      shadows
      dpr={[1, 2]} // Controls pixel ratio for better mobile performance
    >
      <Suspense fallback={null}>
        <Environment preset="sunset" />
      </Suspense>
      <directionalLight position={[0, 3, 2]} intensity={3} />
      <ambientLight intensity={0.1} />
      <Suspense fallback={null}>
        <PresentationControls
          global
          config={{ mass: 1, tension: 170, friction: 26 }}
          rotation={[0, 0, 0]}
          polar={[-0.4, 0.4]}
          azimuth={[-0.4, 0.4]}
          cursor={true} // Shows cursor on desktop
          touch={[1, 1]} // Better touch response [rotate, pan]
        >
          <Dodecahedron position={[0, 0, 0]} />
        </PresentationControls>
      </Suspense>
    </Canvas>
  );
}
