import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Headphone(props) {
  const { nodes, materials } = useGLTF("/model.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mid-"].geometry}
        material={materials["Black-2"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ear_Cup.geometry}
        material={materials["Black-1"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cushion.geometry}
        material={materials.Cushion}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Seprator001.geometry}
        material={materials["Black-1"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Seprator.geometry}
        material={materials.Connector}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder025.geometry}
        material={materials["Black-1"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder025_1.geometry}
        material={materials.GlowBlue}
      />
    </group>
  );
}

useGLTF.preload("/model.gltf");
