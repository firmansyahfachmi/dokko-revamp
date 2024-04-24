import React, { useRef } from "react";
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
// import LogGlb from '@/public/media/log1.glb'

export default function Models() {
  const { nodes } = useGLTF("/media/log.glb");
  const { viewport } = useThree();
  const log = useRef(null);

  useFrame(() => {
    log.current.rotation.y += 0.005;
  });

  const materialProps = useControls({
    thickness: { value: 1.3, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0.1, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 3, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.5, min: 0, max: 1 },
    backside: { value: true },
  });

  return (
    <group ref={log} scale={viewport.width / 11.5}>
      <mesh {...nodes.Circle001}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
      <mesh {...nodes.Text003}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
      <mesh {...nodes.Text001}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
}