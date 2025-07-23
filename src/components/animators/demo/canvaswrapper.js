"use client";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, OrbitControls } from "@react-three/drei";
import Scene from "./Scene";

export default function CanvasWrapper() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      gl={{ antialias: true }}
      style={{ height: "100vh", width: "100%" }}
    >
      {/* optional scroll-based controls */}
      <ScrollControls pages={1} damping={0.15}>
        <Scene />
      </ScrollControls>

      {/* remove if you don’t need free orbiting */}
      {/* <OrbitControls enableZoom={false} /> */}
    </Canvas>
  );
}
