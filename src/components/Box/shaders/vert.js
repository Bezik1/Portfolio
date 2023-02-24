import glsl from "babel-plugin-glsl/macro";

const vert = 
glsl`
precision mediump float;
 
varying vec2 vUv;
varying float vWave;

uniform float u_time;

#pragma glslify: snoise3 = require(glsl-noise/simplex/3d.glsl);

void main() {
  vUv = uv;

  vec3 pos = position;
  float noiseFreq = 2.0;
  float noiseAmp = 0.4;
  vec3 noisePos = vec3(pos.x * pos.y * pos.z * noiseFreq + u_time, pos.x * pos.y + sin(u_time), pos.z);
  pos.z += snoise3(noisePos) * noiseAmp;
  vWave = pos.z;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);  
}
`

export default vert;