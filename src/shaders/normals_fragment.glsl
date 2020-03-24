//Don't Treat It As Error,lightgl.js Run It Anyway
//When You Add It,Make Sure Your Mesh Has Normals Enabled
//Can Be Using { normals: true }
varying vec3 normal;
void main() {
    gl_FragColor = vec4(normalize(normal) * 0.5 + 0.5, 1.0);
}