import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Sphere,
  Stars,
  useTexture,
  Line,
} from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";

const EARTH_RADIUS = 2.25;
const MARKER_RADIUS = EARTH_RADIUS + 0.02;

// Converts latitude/longitude into a 3D point sitting exactly on the
// sphere's surface, in the sphere's own local space — since this point
// becomes a child of the rotating earth group, it stays locked to that
// real-world location no matter how the globe spins.
function latLonToVector3(lat, lon, radius) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return new THREE.Vector3(x, y, z);
}

// India (Mumbai) — the single fixed origin point everything shoots from
const INDIA = { lat: 19.076, lon: 72.8777 };

// Global markets the lines shoot out to — swap these for wherever
// tcongs actually serves clients
const DESTINATIONS = [
  { name: "USA", lat: 40.7128, lon: -74.006 },
  { name: "UK", lat: 51.5072, lon: -0.1276 },
  { name: "UAE", lat: 25.2048, lon: 55.2708 },
  { name: "Singapore", lat: 1.3521, lon: 103.8198 },
  { name: "Australia", lat: -33.8688, lon: 151.2093 },
];

// Builds a curve between two surface points that bulges outward,
// so it reads as an arc "over" the globe rather than cutting through it
function buildArc(start, end) {
  const mid = start.clone().lerp(end, 0.5);
  const distance = start.distanceTo(end);
  mid.normalize().multiplyScalar(EARTH_RADIUS + distance * 0.55);

  return new THREE.QuadraticBezierCurve3(start, mid, end);
}

function ArcLine({ start, end, delay = 0 }) {
  const curve = useMemo(() => buildArc(start, end), [start, end]);
  const points = useMemo(() => curve.getPoints(64), [curve]);

  const pulseRef = useRef();
  const tRef = useRef(delay);

  useFrame((_, delta) => {
    tRef.current += delta * 0.25;
    const t = tRef.current % 1;
    const point = curve.getPoint(t);
    if (pulseRef.current) {
      pulseRef.current.position.copy(point);
    }
  });

  return (
    <group>
      <Line points={points} color="#22d3ee" transparent opacity={0.35} lineWidth={1} />
      <mesh ref={pulseRef}>
        <sphereGeometry args={[0.035, 12, 12]} />
        <meshBasicMaterial color="#67e8f9" />
      </mesh>
    </group>
  );
}

function IndiaMarker({ position }) {
  const ringRef = useRef();

  useFrame(() => {
    if (ringRef.current) {
      const scale = 1 + Math.sin(Date.now() * 0.002) * 0.15;
      ringRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.045, 16, 16]} />
        <meshBasicMaterial color="#22d3ee" />
      </mesh>
      <mesh ref={ringRef}>
        <ringGeometry args={[0.07, 0.09, 32]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.5} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function Earth() {
  const earthRef = useRef();

  const texture = useTexture("/earth.jpg");

  const indiaPos = useMemo(
    () => latLonToVector3(INDIA.lat, INDIA.lon, MARKER_RADIUS),
    []
  );

  const destinationPositions = useMemo(
    () =>
      DESTINATIONS.map((d) => ({
        ...d,
        position: latLonToVector3(d.lat, d.lon, MARKER_RADIUS),
      })),
    []
  );

  useFrame((_, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    // Everything below lives inside this rotating group — the India
    // marker and arcs rotate together with the sphere, so India stays
    // exactly where India is, always.
    <group ref={earthRef}>
      <Sphere args={[EARTH_RADIUS, 128, 128]}>
        <meshStandardMaterial map={texture} metalness={0.05} roughness={0.85} />
      </Sphere>

      <Sphere args={[2.38, 128, 128]}>
        <meshPhysicalMaterial
          transparent
          opacity={0.18}
          color="#53d8ff"
          side={THREE.BackSide}
          clearcoat={1}
          transmission={1}
        />
      </Sphere>

      <IndiaMarker position={indiaPos} />

      {destinationPositions.map((dest, i) => (
        <ArcLine key={dest.name} start={indiaPos} end={dest.position} delay={i * 0.18} />
      ))}
    </group>
  );
}

export default function Globe() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="relative h-[720px] w-[720px]"
    >
      <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-[140px]" />

      <Canvas camera={{ position: [0, 0, 6.5], fov: 40 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 3, 5]} intensity={3} />
        <pointLight position={[-4, -3, 4]} intensity={2} color="#4fdfff" />

        <Stars radius={100} depth={60} count={5000} factor={4} fade />

        <Earth />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.35}
        />
      </Canvas>

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/15" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10" />

      <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-cyan-400/5 to-white/10 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/5" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-[180px]" />
    </motion.div>
  );
}
