"use client";

import { useEffect, useState, useRef, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Environment,
  Html,
  useProgress,
  Clone,
} from "@react-three/drei";

import * as THREE from "three";
import type { LocationData } from "./LocationSidebar";
import { DotPattern } from "@/components/ui/DotPattern";

// ── Full location data ──────────────────────────────────────────────────────
export const LOCATIONS: LocationData[] = [
  {
    id: 1,
    name: "Myrtle Beach",
    tagline: "Our original oceanfront location — where it all began.",
    address: "1120 N Ocean Blvd, Myrtle Beach, SC 29577",
    city: "Myrtle Beach",
    state: "SC",
    phone: "(843) 555-0101",
    hours: "Mon–Sun 11 am – 10 pm",
    lat: 33.7765,
    lng: -78.8218,
  },
  {
    id: 2,
    name: "North Myrtle Beach",
    tagline: "A laid-back escape on the quieter stretch of the Grand Strand.",
    address: "2240 Sea Mountain Hwy, North Myrtle Beach, SC 29582",
    city: "North Myrtle Beach",
    state: "SC",
    phone: "(843) 555-0202",
    hours: "Mon–Sun 11 am – 10 pm",
    lat: 33.8163,
    lng: -78.6895,
  },
  {
    id: 3,
    name: "Wilmington, NC",
    tagline: "Southern hospitality meets the Cape Fear riverfront.",
    address: "10 Market St, Wilmington, NC 28401",
    city: "Wilmington",
    state: "NC",
    phone: "(910) 555-0303",
    hours: "Mon–Sun 11 am – 10 pm",
    lat: 34.2257,
    lng: -77.8718,
  },
  {
    id: 4,
    name: "London Office",
    tagline:
      "Our premier European destination in the historic heart of London.",
    address: "Tower Bridge Rd, London SE1 2UP, United Kingdom",
    city: "London",
    state: "UK",
    phone: "+44 20 7555 0199",
    hours: "Mon–Sun 12 pm – 11 pm",
    lat: 51.5074,
    lng: -0.1278,
  },
];

// Preload the GLTF white globe model for seamless mount
useGLTF.preload("/models/golden-enhance-globe-draco.glb", true);

// ── Simple CSS Loader (replaces drei Html-based ModelLoader) ─────────────────
// Rendered as a plain overlay div — no R3F Html wrapper needed.
// We expose it separately so Globe can show it before/during Canvas init.
export function GlobeLoader() {
  return (
    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none select-none">
      {/* Spinning ring */}
      <div
        className="w-14 h-14 rounded-full"
        style={{
          border: "2px solid rgba(212,175,55,0.15)",
          borderTopColor: "#D4AF37",
          animation: "globe-spin 0.9s linear infinite",
        }}
      />
      <p className="mt-5 text-[10px] font-black uppercase tracking-[0.25em] text-[#D4AF37] animate-pulse">
        Loading
      </p>

      {/* Keyframe injected inline — avoids needing a global CSS file */}
      <style>{`
        @keyframes globe-spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

// ── Suspense fallback: a tiny invisible Html element so R3F is happy ─────────
// The actual visible loader lives outside the Canvas (see Globe component).
function CanvasSuspenseFallback() {
  return (
    <Html center>
      <span />
    </Html>
  );
}

// ── 3D Scene Controller & Globe Rotation Component ──────────────────────────
type SceneControllerProps = {
  selectedLocation: LocationData | null;
  onSelectLocation: (loc: LocationData | null) => void;
  onLoaded: () => void;
};

function GlobeSceneController({
  selectedLocation,
  onSelectLocation,
  onLoaded,
}: SceneControllerProps) {
  const { camera } = useThree();
  const modelRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/golden-enhance-globe-draco.glb", true);

  // Signal parent that model is ready
  useEffect(() => {
    onLoaded();
  }, [onLoaded]);

  // Keep a stable rotation offset reference initialized directly to selection or defaults
  const targetRotation = useRef({
    y: selectedLocation ? -(selectedLocation.lng * Math.PI) / 180 : 1.375,
    x: selectedLocation ? (selectedLocation.lat * Math.PI) / 180 : 0.589,
  });

  // Keep track of initial render state to keep zoom "normal" (zoomed out) on startup
  const isInitialRender = useRef(true);
  const initialLocationId = useRef<number | null>(null);

  // Apply initial pre-rotation to the model on mount to prevent any startup transition sliding
  useEffect(() => {
    if (modelRef.current && selectedLocation) {
      modelRef.current.rotation.y = -(selectedLocation.lng * Math.PI) / 180;
      modelRef.current.rotation.x = (selectedLocation.lat * Math.PI) / 180;
    }
  }, []);

  // Track changes to selection
  useEffect(() => {
    if (initialLocationId.current === null && selectedLocation) {
      initialLocationId.current = selectedLocation.id;
      return;
    }
    if (
      selectedLocation === null ||
      selectedLocation.id !== initialLocationId.current
    ) {
      isInitialRender.current = false;
    }
  }, [selectedLocation]);

  useFrame(() => {
    if (selectedLocation) {
      targetRotation.current.y = -(selectedLocation.lng * Math.PI) / 180;
      targetRotation.current.x = (selectedLocation.lat * Math.PI) / 180;
    } else {
      targetRotation.current.y = 1.375;
      targetRotation.current.x = 0.589;
    }

    if (modelRef.current) {
      modelRef.current.rotation.y +=
        (targetRotation.current.y - modelRef.current.rotation.y) * 0.05;
      modelRef.current.rotation.x +=
        (targetRotation.current.x - modelRef.current.rotation.x) * 0.05;
    }

    const targetZ = selectedLocation && !isInitialRender.current ? 3.6 : 6.0;
    camera.position.z += (targetZ - camera.position.z) * 0.05;
  });

  return (
    <group ref={modelRef}>
      <Clone object={scene} scale={2} position={[0, 0, 0]} />
    </group>
  );
}

// ── Parent Globe Page Component ─────────────────────────────────────────────
type Props = {
  onSelectLocation: (loc: LocationData | null) => void;
  selectedLocation: LocationData | null;
};

export default function Globe({ onSelectLocation, selectedLocation }: Props) {
  const [mounted, setMounted] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-[#fafafa]">
      {/* Background patterns */}
      <DotPattern
        className="text-slate-900/[0.05] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
        width={32}
        height={32}
        cx={1}
        cy={1}
        cr={1}
      />

      {/* Subtle warm radial bg */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(245,240,232,0.5),rgba(255,255,255,0.3))]" />

      {/* Globe container */}
      <div
        ref={containerRef}
        className="relative translate-y-[20%] flex-shrink-0"
        style={{ width: "min(140vw, 140vh)", height: "min(140vw, 140vh)" }}
      >
        {/* soft warm gold glow ring */}
        <div className="absolute inset-0 rounded-full bg-amber-100/30 blur-3xl pointer-events-none" />

        {/* CSS loader — visible until model signals it's ready */}
        {mounted && !modelLoaded && <GlobeLoader />}

        {/* ── 3D Canvas ───────────────────────────────────────────────── */}
        <div
          className="relative w-full h-full z-10"
          style={{
            opacity: modelLoaded ? 1 : 0,
            transition: "opacity 0.6s ease",
          }}
        >
          {mounted && (
            <Canvas
              camera={{ position: [0, 0, 6], fov: 45 }}
              style={{ width: "100%", height: "100%", touchAction: "none" }}
            >
              {/* Lights */}
              <ambientLight intensity={1.0} />
              <directionalLight
                position={[5, 8, 5]}
                intensity={2.2}
                color="#fffef0"
              />
              <directionalLight
                position={[-5, -4, -5]}
                intensity={0.8}
                color="#e5c158"
              />
              <pointLight
                position={[0, 4, 2]}
                intensity={1.5}
                color="#ffffff"
              />

              {/* Environment map reflections */}
              <Environment preset="warehouse" resolution={256} />

              {/* Model with minimal invisible suspense fallback */}
              <Suspense fallback={<CanvasSuspenseFallback />}>
                <GlobeSceneController
                  selectedLocation={selectedLocation}
                  onSelectLocation={onSelectLocation}
                  onLoaded={() => setModelLoaded(true)}
                />
              </Suspense>

              <OrbitControls
                enableZoom={false}
                enablePan={false}
                minDistance={2.5}
                maxDistance={8}
                makeDefault
              />
            </Canvas>
          )}
        </div>
      </div>

      {/* Page title — top left */}
      <div className="absolute left-10 top-12 z-30 max-w-sm pointer-events-none select-none">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="h-px w-5 bg-[#D4AF37]" />
          <span className="text-[#D4AF37] text-[10px] md:text-xs font-black uppercase tracking-[0.25em]">
            Blueberry&apos;s Grill
          </span>
        </div>
        <h1 className="text-slate-900 font-black uppercase tracking-tighter leading-[0.9] text-4xl md:text-5xl">
          OUR <span className="text-[#D4AF37]">LOCATIONS</span>
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-slate-500 font-medium max-w-xs">
          Use top navigation arrows or click pins to explore.
        </p>
      </div>
    </section>
  );
}
