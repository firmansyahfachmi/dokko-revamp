"use client";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Environment } from "@react-three/drei";
import { Leva } from "leva";

export default function Index() {
  return (
    <Canvas className="!w-[600px] lg:!w-[800px] pr-[150px]">
      <Model />
      <directionalLight intensity={0} position={[0, 21, 21]} />
      <Environment preset="city" />
      <Leva hidden />
    </Canvas>
  );
}
