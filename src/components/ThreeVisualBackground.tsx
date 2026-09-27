import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ThreeVisualBackgroundProps {
  className?: string;
}

export const ThreeVisualBackground: React.FC<ThreeVisualBackgroundProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeVisualMode, setActiveVisualMode] = useState<'biomechanical' | 'hypertrophy' | 'vortex'>('biomechanical');
  const [isInteractive, setIsInteractive] = useState(true);

  // Keep a ref to visual mode so the animate loop picks up changes smoothly
  const modeRef = useRef(activeVisualMode);
  modeRef.current = activeVisualMode;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x07050e, 0.035);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.set(0, 1.2, 5.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0x7c3aed, 1.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xa855f7, 3, 20);
    pointLight.position.set(3, 4, 3);
    scene.add(pointLight);

    const cyanPointLight = new THREE.PointLight(0x6366f1, 2, 15);
    cyanPointLight.position.set(-3, -2, 2);
    scene.add(cyanPointLight);

    // 3. Central Holographic 3D Dumbbell & Biomechanical Kinetic Core
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Barbell handle geometry (wireframe cylinder)
    const barGeo = new THREE.CylinderGeometry(0.08, 0.08, 3.2, 16);
    const barMat = new THREE.MeshBasicMaterial({
      color: 0xc084fc,
      wireframe: true,
      transparent: true,
      opacity: 0.75,
    });
    const barbellHandle = new THREE.Mesh(barGeo, barMat);
    barbellHandle.rotation.z = Math.PI / 2;
    coreGroup.add(barbellHandle);

    // Dumbbell outer weight plates (octagonal / cylindrical wireframe plates)
    const plateGeoLarge = new THREE.CylinderGeometry(0.7, 0.7, 0.15, 12);
    const plateGeoSmall = new THREE.CylinderGeometry(0.5, 0.5, 0.12, 12);
    const plateMat = new THREE.MeshBasicMaterial({
      color: 0x9333ea,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    });

    const leftPlate1 = new THREE.Mesh(plateGeoLarge, plateMat);
    leftPlate1.rotation.z = Math.PI / 2;
    leftPlate1.position.x = -1.2;
    coreGroup.add(leftPlate1);

    const leftPlate2 = new THREE.Mesh(plateGeoSmall, plateMat);
    leftPlate2.rotation.z = Math.PI / 2;
    leftPlate2.position.x = -1.4;
    coreGroup.add(leftPlate2);

    const rightPlate1 = new THREE.Mesh(plateGeoLarge, plateMat);
    rightPlate1.rotation.z = Math.PI / 2;
    rightPlate1.position.x = 1.2;
    coreGroup.add(rightPlate1);

    const rightPlate2 = new THREE.Mesh(plateGeoSmall, plateMat);
    rightPlate2.rotation.z = Math.PI / 2;
    rightPlate2.position.x = 1.4;
    coreGroup.add(rightPlate2);

    // Holographic Gyro Orbit Rings around the dumbbell
    const ringGeo1 = new THREE.TorusGeometry(1.6, 0.02, 8, 48);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.6,
    });
    const gyroRing1 = new THREE.Mesh(ringGeo1, ringMat1);
    coreGroup.add(gyroRing1);

    const ringGeo2 = new THREE.TorusGeometry(1.9, 0.015, 8, 48);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      transparent: true,
      opacity: 0.45,
    });
    const gyroRing2 = new THREE.Mesh(ringGeo2, ringMat2);
    gyroRing2.rotation.x = Math.PI / 3;
    coreGroup.add(gyroRing2);

    // Position the dumbbell nicely on the right-middle side on desktop for hero balance
    coreGroup.position.set(1.5, 0.2, 0);

    // 4. Biomechanical Wave Particle Field (1,200 particles)
    const particleCount = 1200;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const originalY = new Float32Array(particleCount);

    const color1 = new THREE.Color(0xa855f7); // Violet
    const color2 = new THREE.Color(0x6366f1); // Indigo
    const color3 = new THREE.Color(0xc084fc); // Glow violet

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const x = (Math.random() - 0.5) * 18;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 12 - 2;

      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;
      originalY[i] = y;

      const mixedColor = color1.clone().lerp(Math.random() > 0.5 ? color2 : color3, Math.random());
      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.055,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // 5. Cybernetic Infinite Floor Grid
    const gridHelper = new THREE.GridHelper(28, 28, 0x9333ea, 0x3b0764);
    gridHelper.position.y = -2.8;
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.35;
    scene.add(gridHelper);

    // 6. Interactive Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || window.innerWidth;
      const newHeight = container.clientHeight || window.innerHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);

      // Adjust dumbbell offset on smaller screens
      if (newWidth < 768) {
        coreGroup.position.set(0, 0.4, -0.8);
        coreGroup.scale.set(0.7, 0.7, 0.7);
      } else {
        coreGroup.position.set(1.5, 0.2, 0);
        coreGroup.scale.set(1, 1, 1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // 7. Render Loop
    let clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse damping
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      camera.position.x = mouseX * 0.6;
      camera.position.y = 1.2 - mouseY * 0.4;
      camera.lookAt(0, 0, 0);

      // Dumbbell rotation & floating oscillation
      const mode = modeRef.current;
      if (mode === 'biomechanical') {
        coreGroup.rotation.x = Math.sin(elapsedTime * 0.5) * 0.35 + mouseY * 0.2;
        coreGroup.rotation.y = elapsedTime * 0.4 + mouseX * 0.4;
        coreGroup.rotation.z = Math.cos(elapsedTime * 0.4) * 0.15;
        coreGroup.position.y = (window.innerWidth < 768 ? 0.4 : 0.2) + Math.sin(elapsedTime * 0.8) * 0.18;

        gyroRing1.rotation.x = elapsedTime * 0.9;
        gyroRing2.rotation.y = elapsedTime * 0.7;
      } else if (mode === 'hypertrophy') {
        coreGroup.rotation.x += 0.015;
        coreGroup.rotation.y += 0.012;
        coreGroup.rotation.z = Math.sin(elapsedTime * 1.2) * 0.3;
        coreGroup.position.y = (window.innerWidth < 768 ? 0.4 : 0.2) + Math.sin(elapsedTime * 1.5) * 0.3;

        gyroRing1.rotation.x = elapsedTime * 1.5;
        gyroRing2.rotation.y = -elapsedTime * 1.2;
      } else {
        // Vortex mode
        coreGroup.rotation.y = elapsedTime * 1.1;
        coreGroup.rotation.x = Math.PI / 4 + Math.sin(elapsedTime) * 0.2;
        gyroRing1.rotation.z = elapsedTime * 2;
        gyroRing2.rotation.x = elapsedTime * 1.8;
      }

      // Wave animation on particles
      const posArray = particleGeometry.attributes.position.array as Float32Array;
      const speed = mode === 'hypertrophy' ? 1.6 : mode === 'vortex' ? 2.2 : 0.9;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const x = posArray[i3];
        const z = posArray[i3 + 2];

        if (mode === 'vortex') {
          // Circular vortex motion
          const angle = Math.atan2(z, x) + 0.008;
          const radius = Math.sqrt(x * x + z * z);
          posArray[i3] = Math.cos(angle) * radius;
          posArray[i3 + 2] = Math.sin(angle) * radius;
          posArray[i3 + 1] = originalY[i] + Math.sin(elapsedTime * speed + radius * 0.5) * 0.4;
        } else {
          // Biomechanical sine wave
          posArray[i3 + 1] = originalY[i] + Math.sin(elapsedTime * speed + x * 0.4 + z * 0.3) * 0.45;
        }
      }
      particleGeometry.attributes.position.needsUpdate = true;

      // Animate floor grid forward motion
      gridHelper.position.z = (elapsedTime * 0.4) % 1;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      // Dispose Three resources
      barGeo.dispose();
      barMat.dispose();
      plateGeoLarge.dispose();
      plateGeoSmall.dispose();
      plateMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      gridHelper.geometry.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className={`relative w-full h-full pointer-events-none ${className}`}>
      {/* Three.js Canvas Container */}
      <div ref={mountRef} className="absolute inset-0 w-full h-full z-0 overflow-hidden" />

      {/* Atmospheric radial gradient scrims for deep contrast readability */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 75% 35%, rgba(139, 92, 246, 0.15) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 60%)',
        }}
      />

      {/* Subtle vignette */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-[#07050e]/60 via-transparent to-[#07050e]" />

      {/* 3D Visual Environment Interactive Controls (clean floating badge, functional and discreet) */}
      <div className="absolute bottom-6 right-6 z-20 pointer-events-auto hidden md:flex items-center gap-1.5 p-1 bg-[#0f0b1c]/80 backdrop-blur-md rounded-xl border border-violet-500/20 shadow-2xl">
        <span className="text-[11px] font-mono uppercase tracking-wider text-violet-400/80 px-2 select-none">
          3D Engine:
        </span>
        <button
          type="button"
          onClick={() => setActiveVisualMode('biomechanical')}
          className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-all ${
            activeVisualMode === 'biomechanical'
              ? 'bg-violet-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-slate-200 hover:bg-violet-950/40'
          }`}
          title="Biomechanical joint kinematic mode"
        >
          Biomechanics
        </button>
        <button
          type="button"
          onClick={() => setActiveVisualMode('hypertrophy')}
          className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-all ${
            activeVisualMode === 'hypertrophy'
              ? 'bg-violet-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-slate-200 hover:bg-violet-950/40'
          }`}
          title="Hypertrophy kinetic oscillation"
        >
          Hypertrophy
        </button>
        <button
          type="button"
          onClick={() => setActiveVisualMode('vortex')}
          className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-all ${
            activeVisualMode === 'vortex'
              ? 'bg-violet-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-slate-200 hover:bg-violet-950/40'
          }`}
          title="Caloric particle vortex"
        >
          Vortex
        </button>
      </div>
    </div>
  );
};
