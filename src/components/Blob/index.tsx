import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import { MathUtils } from "three";
import './index.css'

import vertexShader from './shaders/vert';
import fragmentShader from './shaders/frag';
import { Uniform } from "../../interfaces";
import gsap from "gsap";

const BlobMesh = () => {
  // This reference will give us direct access to the mesh
  const mesh = useRef<Uniform>(null!);
  const [hover, setHover] = useState(false)

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
  /*
  useEffect(() =>{
    document.addEventListener('mousemove', e =>
        mesh.current.material.uniforms.u_intensity.value = 0.0005*(e.clientX / 2) + 0.3
    )

    return () => document.removeEventListener('mousemove', e => 
      mesh.current.material.uniforms.u_intensity.value = 0.0005*(e.clientX / 2) + 0.3)
  })
  */

  useFrame((state) => {
    const { clock } = state;
    mesh.current.material.uniforms.u_time.value = 0.4 * clock.getElapsedTime();

    mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
      mesh.current.material.uniforms.u_intensity.value,
      hover ? 0.55 : 0.2 ,
      0.02
    );
  });

  return (
    <mesh
      ref={mesh}
      position={[3, 0, 0]}
      scale={2}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
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
  const canvasRef = useRef<HTMLDivElement>(null!)

  useEffect(() =>{
    const tl = gsap.timeline({ delay: 1.5 })

    tl.fromTo(canvasRef.current, {
      opacity: 0,
      x: -100,
    }, {
      x: 0,
      opacity: 1,
    })
  }, [] )

  return (
    <div className="blob" ref={canvasRef}>
        <Canvas camera={{ position: [0.0, 0.0, 8] }} className="blob-canvas">
            <BlobMesh />
        </Canvas>
    </div>
  );
};

export default Blob