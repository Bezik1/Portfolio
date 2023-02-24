import * as THREE from 'three';
import { Canvas, useLoader } from '@react-three/fiber';
import { useEffect, useRef } from 'react'
import gsap from 'gsap';
import ScrollTrigger  from 'gsap/ScrollTrigger';

import { TEXTURE_URLS } from '../../constans'

import Box from './Box'

import './BoxContainer.css'

gsap.registerPlugin(ScrollTrigger);

const BoxContainer = () =>{
    const { pictureUrl } = TEXTURE_URLS

    const picture = useLoader(THREE.TextureLoader, pictureUrl)
    const canvasRef = useRef(null!)

    useEffect(() =>{
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: canvasRef.current,
            start: '50% 70%'
            //markers: true
          }
        })
    
        tl.fromTo(canvasRef.current, {
          opacity: 0,
        }, {
          opacity: 1,
        })
      }, [] )

      return (
        <div className='canvas' ref={canvasRef}>
            <Canvas>
              <group>
                  <Box 
                      position={[0, 0, -35]} 
                      texture={picture}
                  />
              </group>

            <pointLight position={[10, 10, 10]} />
            </Canvas>
        </div>
      )
}

export default BoxContainer