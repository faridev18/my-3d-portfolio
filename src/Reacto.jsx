import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'


export function Reacto(props) {

  const cube = useRef()
    useFrame((state, delta) =>
    {
      cube.current.rotation.y += delta * 2
    })
  const { nodes, materials } = useGLTF("/react.gltf");
  return (
    <group {...props} dispose={null}  ref={ cube }>
      
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["default"]}
        position={[0, 1.31, 0]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.27}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus003.geometry}
          material={materials["default"]}
          position={[-0.04, -0.11, 0]}
          rotation={[0.89, 0, -Math.PI / 2]}
          scale={[3.75, 1.47, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus001.geometry}
          material={materials["default"]}
          position={[0.34, -0.08, 0.02]}
          rotation={[-0.16, 0, -Math.PI / 2]}
          scale={[3.75, 1.47, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus002.geometry}
          material={materials["default"]}
          position={[-0.52, -0.1, 0.16]}
          rotation={[-1.18, 0, -Math.PI / 2]}
          scale={[3.75, 1.47, 3]}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/react.gltf");
