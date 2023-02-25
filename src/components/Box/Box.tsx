import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';

import frag from "./shaders/frag";
import vert from "./shaders/vert";

import { BoxProps, PlaneGeometryArgs, Uniform } from '../../interfaces';

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

    const geometryParams = [38.55, 31.02, 42.04, 168.17]
    const ifWidth = window.innerWidth <= 750 ? 800 : window.innerWidth
    const geometryArgs = geometryParams.map(param => ifWidth / param) as PlaneGeometryArgs

    return (
      <mesh
        rotation={[0, Math.PI /10, 0]}
        position={position}
        ref={meshRef}
      >
        <planeGeometry 
          args={geometryArgs} 
        /> 
        <shaderMaterial 
          side={THREE.DoubleSide}
          uniforms={uniforms}
          vertexShader={vert}
          fragmentShader={frag}
        />
    </mesh>
    )
}

export default Box