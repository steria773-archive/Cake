//Created By Rabia Alhaffar In 5/January/2020
//A Library For 2D And 3D Camera Controlling(Canvas 2D,3D Space And WebGL)
var cx,cy,cz;
var SetCameraPosition = (x,y,z) => 
{
     if(Unknown(x)) x = 0;
     if(Unknown(y)) y = 0;
     if(Unknown(z)) z = 0;
     cx = x,cy = y,cz = z;
};
var InitializeCamera = (mode,scene) =>
{
if(Unknown(mode)) mode = "canvas";
if(mode == "canvas") setInterval(() => { cakepen.translate(cx,cy); },0);
if(mode == "space") setInterval(() => { scene.camera.x = cx,scene.camera.y = cy,scene.camera.z = cz; },0);
if(mode == "webgl") setInterval(() => { cakepen.translate(cx,cy,cz); },0);
};
var MoveCamera = (x,y,z) => { cx += x,cy += y,cz += z; };
var FreezeCamera = () => { cx = 0; cy = 0; cz = 0; };