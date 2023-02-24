import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';

import frag from "./shaders/frag";
import vert from "./shaders/vert";

import { BoxProps, Uniform } from '../../interfaces';

const Box = ({ texture, position } : BoxProps) =>{
    const meshRef = useRef<Uniform>(null!)
    const { camera } = useThree()

    useFrame(({ clock }) => {
        meshRef.current.material.uniforms.u_time.value = clock.getElapsedTime() 
    })

    camera.position.set(0, 0, 0)

    const uniforms = {
        u_time: { type: 'f', value: 1.0 },
        texture1: { type: "sampler2D", value: texture },
    }

    return (
      <mesh
        position={position}
        ref={meshRef}
      >
        <planeGeometry args={[38, 48, 24, 6]} />
        <shaderMaterial 
          side={THREE.DoubleSide}
          uniforms={uniforms}
          vertexShader={vert}
          fragmentShader={frag}
          //wireframe={true}
        />
    </mesh>
    )
}

export default Box