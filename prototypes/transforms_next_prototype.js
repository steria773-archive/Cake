//Created By Rabia Alhaffar In 31/March/2020
//Transforms Prototype For Compatibility,Note That Nothing Will Happen

//Create 2 Canvases,First One With "2d" Context And Other With "webgl2" Context
CreateCanvas(400,400,"dodgerblue","3px black solid"); 
CreateCanvas(400,400,"black","3px black solid");

//Translate In First Canvas With "2d" Context
Initialize(0);
Translate(100,100,u);

//Translate In Second Canvas With "webgl2" Context
cakepen = GL.create();
Translate(0.0,0.0,-0.5);