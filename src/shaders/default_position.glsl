//Don't Treat It As Error,lightgl.js Run It Anyway
//When You Add It,Make Sure Your Mesh Has Normals Enabled
//Can Be Using { normals: true }
void main() {
    gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;
}