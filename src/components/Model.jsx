import { useGLTF } from "@react-three/drei";

export default function Model() {
  const { nodes, materials } = useGLTF("/media/dodecahedron.glb");

  console.log("dodecahedron MESH: ");
  console.log(nodes);
  return (
    <group dispose={null}>
      <mesh {...nodes.Object_2} />
    </group>
  );
}
useGLTF.preload("/media/dodecahedron.glb");
