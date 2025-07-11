import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Star field component
function Stars() {
  const ref = useRef<THREE.Points>(null);
  
  // Generate random star positions
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    const colors = new Float32Array(5000 * 3);
    
    for (let i = 0; i < 5000; i++) {
      // Create a spherical distribution of stars
      const radius = Math.random() * 25 + 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // Color variation - purple to blue to white
      const colorVariation = Math.random();
      if (colorVariation < 0.3) {
        // Purple stars
        colors[i * 3] = 0.5 + Math.random() * 0.5;     // R
        colors[i * 3 + 1] = 0.2 + Math.random() * 0.3; // G
        colors[i * 3 + 2] = 0.8 + Math.random() * 0.2; // B
      } else if (colorVariation < 0.6) {
        // Blue stars
        colors[i * 3] = 0.2 + Math.random() * 0.3;     // R
        colors[i * 3 + 1] = 0.4 + Math.random() * 0.4; // G
        colors[i * 3 + 2] = 0.8 + Math.random() * 0.2; // B
      } else {
        // White/cyan stars
        colors[i * 3] = 0.8 + Math.random() * 0.2;     // R
        colors[i * 3 + 1] = 0.8 + Math.random() * 0.2; // G
        colors[i * 3 + 2] = 0.9 + Math.random() * 0.1; // B
      }
    }
    
    return [positions, colors];
  }, []);

  // Animate the starfield with slow rotation
  useFrame((state) => {
    if (ref.current) {
      // Slow rotation around Y and X axes
      ref.current.rotation.y += 0.0002;
      ref.current.rotation.x += 0.0001;
      
      // Subtle breathing effect
      const time = state.clock.getElapsedTime();
      ref.current.scale.setScalar(1 + Math.sin(time * 0.1) * 0.05);
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors}>
      <PointMaterial
        size={0.05}
        sizeAttenuation={true}
        vertexColors={true}
        transparent={true}
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// Nebula clouds component
function NebulaClouds() {
  const ref = useRef<THREE.Points>(null);
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(800 * 3);
    const colors = new Float32Array(800 * 3);
    
    for (let i = 0; i < 800; i++) {
      // Create clustered nebula clouds
      const cluster = Math.floor(Math.random() * 4);
      const clusterX = (cluster % 2) * 20 - 10;
      const clusterZ = Math.floor(cluster / 2) * 20 - 10;
      
      positions[i * 3] = clusterX + (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = clusterZ + (Math.random() - 0.5) * 15;
      
      // Nebula colors - purple and cyan
      const nebulaType = Math.random();
      if (nebulaType < 0.6) {
        // Purple nebula
        colors[i * 3] = 0.4 + Math.random() * 0.3;     // R
        colors[i * 3 + 1] = 0.1 + Math.random() * 0.2; // G
        colors[i * 3 + 2] = 0.6 + Math.random() * 0.3; // B
      } else {
        // Cyan nebula
        colors[i * 3] = 0.1 + Math.random() * 0.2;     // R
        colors[i * 3 + 1] = 0.4 + Math.random() * 0.3; // G
        colors[i * 3 + 2] = 0.6 + Math.random() * 0.3; // B
      }
    }
    
    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (ref.current) {
      // Very slow drift
      const time = state.clock.getElapsedTime();
      ref.current.rotation.y += 0.00005;
      ref.current.position.x = Math.sin(time * 0.01) * 0.5;
      ref.current.position.z = Math.cos(time * 0.01) * 0.5;
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors}>
      <PointMaterial
        size={0.3}
        sizeAttenuation={true}
        vertexColors={true}
        transparent={true}
        opacity={0.3}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// Distant galaxies component
function DistantGalaxies() {
  const ref = useRef<THREE.Points>(null);
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(200 * 3);
    const colors = new Float32Array(200 * 3);
    
    for (let i = 0; i < 200; i++) {
      // Very distant, sparse galaxies
      const radius = Math.random() * 50 + 30;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // Dim, distant colors
      colors[i * 3] = 0.3 + Math.random() * 0.2;     // R
      colors[i * 3 + 1] = 0.2 + Math.random() * 0.3; // G
      colors[i * 3 + 2] = 0.4 + Math.random() * 0.3; // B
    }
    
    return [positions, colors];
  }, []);

  useFrame(() => {
    if (ref.current) {
      // Almost imperceptible movement
      ref.current.rotation.y += 0.00001;
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors}>
      <PointMaterial
        size={0.02}
        sizeAttenuation={true}
        vertexColors={true}
        transparent={true}
        opacity={0.4}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// Main CosmicStarfield component
export default function CosmicStarfield({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`fixed inset-0 w-full h-full ${className}`} style={style}>
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 60,
          near: 0.1,
          far: 100
        }}
        style={{
          background: 'transparent'
        }}
      >
        {/* Ambient lighting */}
        <ambientLight intensity={0.1} />

        {/* Star layers */}
        <Stars />
        <NebulaClouds />
        <DistantGalaxies />

        {/* Camera controls for subtle auto-movement */}
        <CameraController />
      </Canvas>
    </div>
  );
}

// Camera controller for subtle movement
function CameraController() {
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Very subtle camera movement
    state.camera.position.x = Math.sin(time * 0.05) * 0.5;
    state.camera.position.y = Math.cos(time * 0.03) * 0.3;
    state.camera.lookAt(0, 0, 0);
  });
  
  return null;
}
