//Created By Rabia Alhaffar In 13/December/2019
//An Library To Use Cake Game Framework Context Functions With Other HTML5 Game Framework Canvas Contexts
var cake;
var IntegrateWith = (engine) =>
{
if(engine == "tululoo") cakecanvas = tu_canvas,cakepen = tu_context;	
if(engine == "blacksmith") cakecanvas = CANVAS,cakepen = CONTEXT;	
if(engine == "blocksjs") cakecanvas = canvasElement,cakepen = layer.ctx;
if(engine == "booty") cakecanvas = b5.Display.canvas,cakepen = b5.Display.context;	
if(engine == "cartridge") cakecanvas = canvas,cakepen = ctx;	
if(engine == "easel") cakecanvas = canvas,cakepen = Graphics._ctx;	
if(engine == "pixi") cakepen = PIXI.Graphics;	
if(engine == "iio") cake = iio;
if(engine == "quark") cakecanvas = Quark._helpContext.canvas,cakepen = Quark._helpContext.context;
if(engine == "quintus") cakecanvas = Q.ctx.canvas,cakepen = Q.ctx;
if(engine == "simplegameengine") cakecanvas = _tempCanvas2D.canvas,cakepen = _tempCanvas2D;
if(engine == "oversimplified") cakecanvas = Oversimplified.canvas,cakepen = Oversimplified.context;
if(engine == "joy") cake = Joy,cakecanvas = Joy.currentEngine.context.canvas,cakepen = Joy.currentEngine.context.ctx;
if(engine == "gamvas") cakecanvas = gamvas._canvas,cakepen = gamvas._context2D;
if(engine == "nini") cakecanvas = Graphics.canvas,cakepen = Graphics.canvas.getContext("2d");	
if(engine == "squarepig") cakecanvas = pig.canvas,cakepen = pig.context;	
if(engine == "threejs") cakecanvas = THREE.Scene(),cakepen = THREE.WebGLRenderer(),cake = THREE;
if(engine == "lightgl") cakepen = GL.Create(),cake = GL;	
if(engine == "goo") cakepen = goo.GooRunner(),cakecanvas = goo.world;
if(engine == "hilo") cake = Hilo;
if(engine == "hilo3d") cake = Hilo3d;
if(engine == "stage") cake = Stage,cakepen = ctx,cakecanvas = stage;	
if(engine == "arcadejs") cake = ArcadeJS,cakecanvas = ArcadeJS._firstGame.canvas,cakepen = ArcadeJS._firstGame.context;
};