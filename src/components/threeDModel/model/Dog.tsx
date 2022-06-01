import * as THREE from "three";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    main: THREE.Mesh;
    Plane: THREE.Mesh;
  };
  materials: {
    palette: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
  };
};

export default function Model({
  isMobile,
  ...props
}: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();

  const { nodes, materials } = useGLTF("./model/dog.glb") as GLTFResult;

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.main.geometry}
        material={materials.palette}
        position={[3.69, isMobile ? 2.4 : 0.6, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Plane.geometry}
        material={materials["Material.001"]}
        position={[-3.4, 0.6, -2.95]}
        scale={[7.05, 1, 7.05]}
      />
    </group>
  );
}

useGLTF.preload("/dog.glb");
