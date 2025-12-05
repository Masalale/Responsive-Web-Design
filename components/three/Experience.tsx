"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";

/**
 * Experience Component - 3D Scene Content
 *
 * This is where you define your 3D objects and interactions.
 * Currently set up with a minimal placeholder that can be extended.
 *
 * Ideas for future enhancements:
 * 1. Floating geometric shapes in hero section
 * 2. Interactive skill orbs/nodes
 * 3. 3D project cards with depth
 * 4. Particle effects on scroll
 * 5. Animated logo/brand element
 *
 * Tips:
 * - Use `useFrame` for animations tied to render loop
 * - Use `useScroll` from drei for scroll-based animations
 * - Keep polygon counts low for performance
 * - Use instances for repeated objects
 */

function FloatingShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={0.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#5D1C34" // burgundy from theme
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
    </Float>
  );
}

export function ThreeExperience() {
  return (
    <>
      {/* Lighting setup */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      {/* Environment for reflections (optional, can be removed for performance) */}
      <Environment preset="city" />

      {/* 
        Placeholder 3D element - uncomment to enable
        You can replace this with your custom 3D content
      */}
      {/* <FloatingShape /> */}

      {/*
        Example: Multiple floating shapes
        <group>
          <FloatingShape position={[-2, 1, 0]} />
          <FloatingShape position={[2, -1, 0]} />
          <FloatingShape position={[0, 0, -2]} />
        </group>
      */}
    </>
  );
}

// Export the FloatingShape for use elsewhere if needed
export { FloatingShape };
