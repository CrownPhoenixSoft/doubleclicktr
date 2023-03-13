"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import Model from "@components/Model";
import Rig from "@components/Rig";

export default function ThreeScene() {
    return (
        <Canvas camera={{ position: [0, -10, 65], fov: 50 }} dpr={[1, 2]}>
            <pointLight
                position={[100, 100, 100]}
                intensity={0.8}
                color="#c3af6c"
            />
            <hemisphereLight
                color="#ffffff"
                groundColor="#c3af6c"
                position={[-7, 25, 13]}
                intensity={0.85}
            />
            <Suspense fallback={null}>
                <group position={[0, 10, 0]}>
                    <Rig>
                        <Model url="/compressed.glb" />
                    </Rig>

                    <ContactShadows
                        rotation-x={Math.PI / 2}
                        position={[0, -35, 0]}
                        opacity={0.25}
                        width={100}
                        height={100}
                        blur={2}
                        far={50}
                    />
                </group>
            </Suspense>
        </Canvas>
    );
}
