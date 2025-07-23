"use client";
import { useRef, useLayoutEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { TorusKnot, Sphere } from "@react-three/drei";
import gsap from "gsap";

export default function Scene() {
  const group = useRef(null);

  /* entrance animation */
  useLayoutEffect(() => {
    if (!group.current) return;
    gsap.fromTo(
      group.current.rotation,
      { y: Math.PI * 1.25 },
      { y: 0, ease: "power3.out", duration: 2 }
    );
    gsap.fromTo(
      group.current.position,
      { z: -5 },
      { z: 0, duration: 2, ease: "power3.out" }
    );
  }, []);

  /* subtle idle motion */
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y += 0.002;
      group.current.rotation.x = Math.sin(clock.elapsedTime * 0.1) * 0.2;
    }
  });

  return (
    <group ref={group}>
      {/* Main torus knot */}
      <TorusKnot args={[2, 0.5, 256, 32]}>
        <meshStandardMaterial color="#9F69C5" roughness={0.3} />
      </TorusKnot>

      {/* Floating spheres */}
      <Sphere args={[0.3, 32, 32]} position={[3, 1, 1]}>
        <meshStandardMaterial color="#ECD6CD" metalness={0.2} />
      </Sphere>
      <Sphere args={[0.2]} position={[-2.5, -1.2, -1]}>
        <meshStandardMaterial color="#D7C1BD" />
      </Sphere>

      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight intensity={1} position={[5, 5, 5]} />
    </group>
  );
}
