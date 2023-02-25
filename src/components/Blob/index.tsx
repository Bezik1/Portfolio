import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import { MathUtils } from "three";
import './index.css'

import vertexShader from './shaders/vert';
import fragmentShader from './shaders/frag';
import { Uniform } from "../../interfaces";

const BlobMesh = () => {
  // This reference will give us direct access to the mesh
  const mesh = useRef<Uniform>(null!);
  const hover = useRef(false);

  const uniforms = useMemo(
    () => ({
      u_intensity: {
        value: 0.3,
      },
      u_time: {
        value: 0.0,
      },
      u_mouse: {
        value: 0.0
      }
    }),
    []
  );

  useEffect(() =>{
    window.addEventListener('mousemove', e =>{
        mesh.current.material.uniforms.u_mouse.value = 0.01*e.clientX
    })
  })

  useFrame((state) => {
    const { clock } = state;
    mesh.current.material.uniforms.u_time.value = 0.4 * clock.getElapsedTime();

    mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
      mesh.current.material.uniforms.u_intensity.value,
      hover.current ? 0.85 : 0.15,
      0.02
    );
  });

  return (
    <mesh
      ref={mesh}
      position={[3, 0, 0]}
      scale={2}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
    >
      <icosahedronGeometry args={[2, 40]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe={false}
      />
    </mesh>
  );
};

const Blob = () => {
  return (
    <div className="blob">
        <Canvas camera={{ position: [0.0, 0.0, 8] }} className="blob-canvas">
            <BlobMesh />
        </Canvas>
    </div>
  );
};

export default Blob