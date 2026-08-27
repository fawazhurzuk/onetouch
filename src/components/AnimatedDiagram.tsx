"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, PresentationControls, Text, Line, RoundedBox, Float, Html } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion-3d";
import { Store, Warehouse, Calculator } from "lucide-react";

// The animating data particle component
function DataParticle({ start, end, color, delay = 0, speed = 0.5 }: { start: THREE.Vector3, end: THREE.Vector3, color: string, delay?: number, speed?: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    // Calculate normalized progress (0 to 1) with loop and delay
    const progress = (time * speed + delay) % 1.5; // Modulo slightly above 1 for a gap between loops
    
    if (progress >= 0 && progress <= 1) {
      ref.current.visible = true;
      ref.current.position.lerpVectors(start, end, progress);
    } else {
      ref.current.visible = false;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.15, 16, 16]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} toneMapped={false} />
    </mesh>
  );
}

function DiagramScene() {
  const dcPos = new THREE.Vector3(-4, 0, 0);
  const retailPos = new THREE.Vector3(0, 0, 0);
  const acctPos = new THREE.Vector3(4, 0, 0);

  return (
    <group position={[0, -0.5, 0]}>
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      
      {/* Connections (Lines) */}
      <Line points={[dcPos, retailPos]} color="#DCE6F0" lineWidth={2} dashed dashSize={0.2} gapSize={0.2} />
      <Line points={[retailPos, acctPos]} color="#DCE6F0" lineWidth={2} dashed dashSize={0.2} gapSize={0.2} />

      {/* Animated Data Particles */}
      <DataParticle start={dcPos} end={retailPos} color="#1464BE" delay={0} speed={0.4} />
      <DataParticle start={dcPos} end={retailPos} color="#1464BE" delay={0.75} speed={0.4} />
      
      <DataParticle start={retailPos} end={acctPos} color="#16A34A" delay={0.4} speed={0.4} />
      <DataParticle start={retailPos} end={acctPos} color="#16A34A" delay={1.15} speed={0.4} />

      {/* Nodes */}
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5} floatingRange={[-0.1, 0.1]}>
        <group position={dcPos}>
          <RoundedBox args={[2, 2.5, 0.5]} radius={0.2} smoothness={4}>
            <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.1} />
          </RoundedBox>
          <Html position={[0, 0, 0.26]} center transform zIndexRange={[100, 0]}>
            <div style={{ width: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} className="pointer-events-none">
              <div className="w-12 h-12 mx-auto bg-brand-light rounded-full flex items-center justify-center text-brand-navy mb-2 shadow-sm border border-brand-blue/10">
                <Warehouse className="w-6 h-6" />
              </div>
              <span className="font-bold text-sm text-brand-navy whitespace-nowrap">OneTouch DC</span>
            </div>
          </Html>
        </group>
      </Float>

      <Float speed={2.5} rotationIntensity={0.1} floatIntensity={0.5} floatingRange={[-0.1, 0.1]}>
        <group position={retailPos}>
          <RoundedBox args={[2, 2.5, 0.5]} radius={0.2} smoothness={4}>
            <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.1} />
          </RoundedBox>
          <Html position={[0, 0, 0.26]} center transform zIndexRange={[100, 0]}>
            <div style={{ width: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} className="pointer-events-none">
              <div className="w-12 h-12 mx-auto bg-brand-blue rounded-full flex items-center justify-center text-white mb-2 shadow-sm">
                <Store className="w-6 h-6" />
              </div>
              <span className="font-bold text-sm text-brand-navy whitespace-nowrap">OneTouch Retail</span>
            </div>
          </Html>
        </group>
      </Float>

      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5} floatingRange={[-0.1, 0.1]}>
        <group position={acctPos}>
          <RoundedBox args={[2, 2.5, 0.5]} radius={0.2} smoothness={4}>
            <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.1} />
          </RoundedBox>
          <Html position={[0, 0, 0.26]} center transform zIndexRange={[100, 0]}>
            <div style={{ width: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} className="pointer-events-none">
              <div className="w-12 h-12 mx-auto bg-brand-light rounded-full flex items-center justify-center text-brand-navy mb-2 shadow-sm border border-brand-blue/10">
                <Calculator className="w-6 h-6" />
              </div>
              <span className="font-bold text-sm text-brand-navy whitespace-nowrap">OneTouch Accounting</span>
            </div>
          </Html>
        </group>
      </Float>
      
      {/* Environment for nice reflections */}
      <Environment preset="city" />
    </group>
  );
}

export default function AnimatedDiagram() {
  return (
    <div className="w-full max-w-5xl mx-auto h-[400px] md:h-[500px] relative cursor-grab active:cursor-grabbing">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-bg/50 pointer-events-none z-10" />
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
        <PresentationControls 
          global 
          config={{ mass: 2, tension: 500 }} 
          snap={{ mass: 4, tension: 1500 }} 
          rotation={[0, 0, 0]} 
          polar={[-0.1, 0.1]} 
          azimuth={[-0.3, 0.3]}
        >
          <DiagramScene />
        </PresentationControls>
      </Canvas>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-text-muted/50 z-20 pointer-events-none">
        Drag to rotate scene
      </div>
    </div>
  );
}
