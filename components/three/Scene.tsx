"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { ThreeExperience } from "./Experience";

interface SceneProps {
  className?: string;
}

/**
 * Scene Component - React Three Fiber Canvas wrapper
 *
 * This component sets up the 3D canvas and provides the foundation
 * for adding WebGL/3D elements to the portfolio.
 *
 * Usage:
 * 1. Import and add <Scene /> wherever you want 3D elements
 * 2. Customize the Experience component to add your 3D objects
 * 3. Consider performance - use lazy loading for complex scenes
 *
 * Example placements:
 * - Hero section background
 * - Interactive floating elements
 * - Skill visualization
 * - Project showcase
 */
export function Scene({ className }: SceneProps) {
  return (
    <div
      className={className}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ThreeExperience />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
