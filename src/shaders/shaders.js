//Created By Rabia Alhaffar In 24/March/2020
//All Shaders
var default_position_shader = `
//Don't Treat It As Error,lightgl.js Run It Anyway
//When You Add It,Make Sure Your Mesh Has Normals Enabled
//Can Be Using { normals: true }
void main() {
    gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;
}`;

var normals_default_position = `
//Don't Treat It As Error,lightgl.js Run It Anyway
//When You Add It,Make Sure Your Mesh Has Normals Enabled
//Can Be Using { normals: true }
varying vec3 normal;
void main() {
    normal = gl_NormalMatrix * gl_Normal; 
    gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;
}`;

var normals_fragment = `
//Don't Treat It As Error,lightgl.js Run It Anyway
//When You Add It,Make Sure Your Mesh Has Normals Enabled
//Can Be Using { normals: true }
varying vec3 normal;
void main() {
    gl_FragColor = vec4(normalize(normal) * 0.5 + 0.5, 1.0);
}`;