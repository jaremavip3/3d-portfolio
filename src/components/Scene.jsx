"use client";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";

export default function Scene() {
  return (
    // everything that it inside Canvas is inside WebGL, so it will be rendered by the GPU
    <Canvas>
      <Model />
    </Canvas>
  );
}
