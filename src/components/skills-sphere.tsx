"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Line, OrbitControls } from "@react-three/drei";
import { useMemo, useRef } from "react";
import type { Group } from "three";
import { useHtmlThemeLight } from "@/hooks/use-html-theme-light";

type SkillNode = {
  name: string;
  logo: string;
  position: [number, number, number];
};

const SKILLS: Omit<SkillNode, "position">[] = [
  { name: "JavaScript", logo: "/skills/javascript.svg" },
  { name: "Node.js", logo: "/skills/nodejs.svg" },
  { name: "MongoDB", logo: "/skills/mongodb.svg" },
  { name: "PostgreSQL", logo: "/skills/postgresql.svg" },
  { name: "TypeScript", logo: "/skills/typescript.svg" },
  { name: "Tailwind CSS", logo: "/skills/tailwindcss.svg" },
  { name: "Python", logo: "/skills/python.svg" },
  { name: "Docker", logo: "/skills/docker.svg" },
  { name: "Redis", logo: "/skills/redis.svg" },
  { name: "Jest", logo: "/skills/jest.svg" },
  { name: "Nginx", logo: "/skills/nginx.svg" },
  { name: "React", logo: "/skills/react.svg" },
  { name: "Grafana", logo: "/skills/grafana.svg" },
  { name: "Prometheus", logo: "/skills/prometheus.svg" },
  { name: "Linux", logo: "/skills/linux.svg" },
  { name: "Git", logo: "/skills/git.svg" },
];

function createSpherePositions(count: number, radius: number): [number, number, number][] {
  const points: [number, number, number][] = [];
  const offset = 2 / count;
  const increment = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i++) {
    const y = i * offset - 1 + offset / 2;
    const r = Math.sqrt(1 - y * y);
    const phi = i * increment;
    const x = Math.cos(phi) * r;
    const z = Math.sin(phi) * r;
    points.push([x * radius, y * radius, z * radius]);
  }

  return points;
}

function createEdges(points: [number, number, number][]) {
  const edges: Array<[[number, number, number], [number, number, number]]> = [];
  const maxDistance = 1.45;

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const a = points[i];
      const b = points[j];
      const dx = a[0] - b[0];
      const dy = a[1] - b[1];
      const dz = a[2] - b[2];
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

      if (dist < maxDistance && edges.length < 55) {
        edges.push([a, b]);
      }
    }
  }

  return edges;
}

function SphereCore({ isLight }: { isLight: boolean }) {
  const groupRef = useRef<Group>(null);

  const nodes = useMemo<SkillNode[]>(() => {
    const positions = createSpherePositions(SKILLS.length, 2.6);
    return SKILLS.map((skill, index) => ({ ...skill, position: positions[index] }));
  }, []);

  const meshPoints = useMemo(() => createSpherePositions(40, 2.35), []);
  const edges = useMemo(() => createEdges(meshPoints), [meshPoints]);

  useFrame((_, delta) => {
    const group = groupRef.current;
    if (!group) return;
    group.rotation.y += delta * 0.12;
    group.rotation.x += delta * 0.03;
  });

  const wireColor = isLight ? "#3b82f6" : "#60a5fa";
  const edgeColor = isLight ? "#60a5fa" : "#7dd3fc";
  const pointColor = isLight ? "#93c5fd" : "#bae6fd";

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[2.45, 40, 40]} />
        <meshBasicMaterial color={wireColor} wireframe transparent opacity={0.08} />
      </mesh>

      {edges.map((edge, index) => (
        <Line
          key={`edge-${index}`}
          points={[edge[0], edge[1]]}
          color={edgeColor}
          transparent
          opacity={0.2}
          lineWidth={0.7}
        />
      ))}

      {meshPoints.map((point, index) => (
        <mesh key={`point-${index}`} position={point}>
          <sphereGeometry args={[0.025, 8, 8]} />
          <meshBasicMaterial color={pointColor} transparent opacity={0.75} />
        </mesh>
      ))}

      {nodes.map((node) => (
        <group key={node.name} position={node.position}>
          <Html distanceFactor={10} position={[0, 0.26, 0]} center>
            <div className="pointer-events-none flex flex-col items-center gap-1 whitespace-nowrap">
              <span className="flex h-8 w-8 items-center justify-center p-1">
                <img
                  src={node.logo}
                  alt={node.name}
                  className="h-full w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <span className="text-[9px] font-semibold text-slate-900 dark:text-slate-200">
                {node.name}
              </span>
            </div>
          </Html>
        </group>
      ))}
    </group>
  );
}

export function SkillsSphere() {
  const isLight = useHtmlThemeLight();

  return (
    <div className="relative mt-10">
      <div className="relative h-[540px] w-full">
        <Canvas camera={{ position: [0, 0, 8], fov: 42 }}>
          <ambientLight intensity={0.45} />
          <pointLight position={[5, 5, 5]} intensity={1.2} color="#93c5fd" />
          <pointLight
            position={[-4, -3, 5]}
            intensity={0.7}
            color={isLight ? "#60a5fa" : "#fb923c"}
          />
          <SphereCore isLight={isLight} />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.2}
            rotateSpeed={0.2}
            minPolarAngle={Math.PI / 2.2}
            maxPolarAngle={Math.PI / 1.8}
          />
        </Canvas>
      </div>
      <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-ink/10 bg-surface/80 px-4 py-1.5 text-xs text-ink-muted backdrop-blur dark:border-white/15 dark:bg-slate-900/80 dark:text-slate-200">
        Drag to explore skills universe
      </div>
    </div>
  );
}
