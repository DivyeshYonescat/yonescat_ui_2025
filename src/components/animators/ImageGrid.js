'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useRef } from 'react';

function OpenCylinder() {
  const texture = useTexture('/images/hero-group.png'); // Make sure to place this image in /public/textures/
  const cylinderRef = useRef();

  // Rotate the cylinder continuously

  const clock = new THREE.Clock();

  useFrame(() => {
    if (cylinderRef.current) {
      const elapsedTime = clock.getElapsedTime();
      cylinderRef.current.rotation.y = (elapsedTime - 1.5) * 0.1; // Adjust the speed of rotation here (slower)
    }
  });

  return ( <group rotation={[0,1.4,0.5]}>
    <mesh ref={cylinderRef}>
      <cylinderGeometry args={[1, 1, 1, 30, 30, true]} />
      <meshStandardMaterial
        map={texture}
        side={THREE.DoubleSide}
        transparent={true}
      />
    </mesh>
  </group>
  );
}

export default function CylinderScene() {
  return (
    <div className="h-[700px]">
      <Canvas camera={{ position: [0, 0, 10], fov: 13 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} />
        <OpenCylinder />
        <OrbitControls 
          dampingFactor={0.05} 
          enablePan={false} 
          enableZoom={false} 
          enableRotate 
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 2} 
        />
      </Canvas>
    </div>
  );
}