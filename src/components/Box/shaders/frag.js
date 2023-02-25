const frag = 
`
uniform sampler2D texture1; 
uniform sampler2D texture2;
varying vec2 vUv;

void main() {
    vec3 texture = texture2D(texture1, vUv).rgb;
    gl_FragColor = vec4(texture, 1);
}
`

export default frag