//Created By Rabia Alhaffar In 15/March/2020
//Welcome To WebGL!!!
CreateCanvas(600,600,"black");
InitializeWebGL(0);
setInterval(() => {
    WebGLClearCanvas(Math.random(),Math.random(),Math.random(),1);
},500);