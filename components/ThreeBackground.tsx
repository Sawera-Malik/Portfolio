import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Generates random points in a sphere
const generateParticles = (count: number) => {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = THREE.MathUtils.randFloatSpread(360); 
    const phi = THREE.MathUtils.randFloatSpread(360); 
    const r = THREE.MathUtils.randFloat(10, 25);

    const x = r * Math.sin(theta) * Math.cos(phi);
    const y = r * Math.sin(theta) * Math.sin(phi);
    const z = r * Math.cos(theta);

    points[i * 3] = x;
    points[i * 3 + 1] = y;
    points[i * 3 + 2] = z;
  }
  return points;
};

const StarField = () => {
  const ref = useRef<THREE.Points>(null);
  const sphere = useMemo(() => generateParticles(5000), []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#a855f7"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
};

const HeroShape = () => {
    const meshRef = useRef<THREE.Mesh>(null);
    
    useFrame((state) => {
        if(meshRef.current) {
            // Gentle rotation
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
            
            // Mouse interaction parallax
            const x = state.pointer.x;
            const y = state.pointer.y;
            meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, x * 2, 0.1);
            meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, y * 2, 0.1);
        }
    });

    return (
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <Sphere args={[1, 64, 64]} ref={meshRef} scale={2.2}>
                <MeshDistortMaterial
                    color="#4338ca"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                />
            </Sphere>
        </Float>
    );
};

const ThreeBackground: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-slate-900">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <fog attach="fog" args={['#0f172a', 5, 25]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#c084fc" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#6366f1" />
        
        <StarField />
        <HeroShape />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
