import { useGLTF } from "@react-three/drei";

export default function Model() {
  const { nodes } = useGLTF("/media/dodecahedron.glb");

  return (
    <group>
      <mesh></mesh>
    </group>
  );
}
