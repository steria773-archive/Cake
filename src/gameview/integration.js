//Created By Rabia Alhaffar In 13/December/2019
//An Library To Use Cake Game Framework Context Functions With Other HTML5 Game Framework Canvas Contexts
var cake;
var IntegrateWith = (engine) =>
{
if(engine == "tululoo") tu_canvas = cakecanvas,tu_context = cakepen;	
if(engine == "blacksmith") CANVAS = cakecanvas,CONTEXT = cakepen;	
if(engine == "blocksjs") cakecanvas = canvasElement,cakepen = layer.ctx;
if(engine == "booty") b5.Display.canvas = cakecanvas,b5.Display.context = cakepen,cake = b5;	
if(engine == "cartridge") canvas = cakecanvas,ctx = cakepen;	
if(engine == "easel") canvas = cakecanvas,Graphics._ctx = cakepen;	
if(engine == "pixi") PIXI.Graphics = cakepen,cake = PIXI;	
if(engine == "iio") iio = cake;
if(engine == "quark") cake = Quark,Quark._helpContext.canvas = cakecanvas,Quark._helpContext.context = cakepen; 
if(engine == "quintus") cake = Q,Q.ctx.canvas = cakecanvas,Q.ctx = cakepen;
if(engine == "simplegameengine") cakecanvas = _tempCanvas2D.canvas,cakepen = _tempCanvas2D;
if(engine == "oversimplified") cake = Oversimplified,Oversimplified.canvas = cakecanvas,Oversimplified.context = cakepen;
if(engine == "joy") cake = Joy,Joy.currentEngine.context.canvas = cakecanvas,Joy.currentEngine.context.ctx = cakepen;
if(engine == "gamvas") cake = gamvas,gamvas._canvas = cakecanvas,gamvas._context2D = cakepen;
if(engine == "nini") Graphics.canvas = cakecanvas,cakepen = Graphics.canvas.getContext("2d");	
if(engine == "squarepig") pig.canvas = cakecanvas,pig.context = cakepen,cake = pig;	
if(engine == "threejs") THREE = cake;	
if(engine == "hilo") cake = Hilo;
if(engine == "hilo3d") cake = Hilo3d;
if(engine == "stage") cake = Stage,ctx = cakepen,stage = cakecanvas;	
if(engine == "arcadejs") cake = ArcadeJS,ArcadeJS._firstGame.canvas = cakecanvas,ArcadeJS._firstGame.context = cakepen;
};