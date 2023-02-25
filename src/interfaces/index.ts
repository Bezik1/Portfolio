import { Vector3 } from "@react-three/fiber";
import React from "react";
import { ShaderMaterial, Mesh, PlaneGeometry } from "three";
import * as THREE from 'three'

export interface BoxProps {
    position: Vector3,
    texture: THREE.Texture,
}

interface WaveMaterial extends ShaderMaterial {
    uniforms: {
        u_time: {
            type: string,
            value: number
        }
        texture1: {
            type: string,
            value: THREE.Texture
        }
        u_active: {
            value: boolean
        }
        u_intensity: {
            type: string
            value: number
        }
        u_mouse: {
            type: string
            value: number
        }
    }
}

export interface Uniform extends Mesh<PlaneGeometry, WaveMaterial> {}

export interface Ref<T> extends React.MutableRefObject<T> {}

export interface DemoProps {
    pos: [
        clientX: number,
        clientY: number
    ],
    click: React.Dispatch<React.SetStateAction<boolean>>,
    clicked: boolean
}

export type PlaneGeometryArgs = [
    width: number,
    height: number,
    widthSegments: number,
    heightSegments: number
]