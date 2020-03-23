//Created By Rabia Alhaffar In 19/March/2020
//LightGL This Time!!!
//Special Thanks To Evan Wallace
var rotationAngle = 0;
InitializeLightGL();
cakepen.onupdate = (seconds) => rotationAngle += 45 * seconds;
cakepen.ondraw = () => 
{
    WebGLClearCanvas(0.0,0.0,0.0,0.1);
    DrawCube(['\
    varying vec3 normal;\
    void main() {\
      normal = gl_NormalMatrix * gl_Normal;\
      gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;\
    }\
  ', '\
    varying vec3 normal;\
    void main() {\
      gl_FragColor = vec4(normalize(normal) * 0.5 + 0.5, 1.0);\
    }\
  '],
[ //Position(x,y,z)
    -0.5,0.0,-1
],
[ //Rotation(angle,x,y,z)
    -rotationAngle,0.0,0.1,-0.1
],
0.1);

DrawBall(['\
varying vec3 normal;\
void main() {\
  normal = gl_NormalMatrix * gl_Normal;\
  gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;\
}\
', '\
varying vec3 normal;\
void main() {\
  gl_FragColor = vec4(normalize(normal) * 0.4 + 0.5, 0.1);\
}\
'],
[ //Position(x,y,z)
-0.1,0.1,-1
],
[ //Rotation(angle,x,y,z)
0,0.0,0.0,0.0
],
0.1
,{ normals: true }); //But WTF Is Happening?!!


};
  
Update();
WebGLFullscreen();