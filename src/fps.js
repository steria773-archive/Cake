//Created By Rabia Alhaffar On 16/November/2019
//An Library For Timers,Frames Per Second
var Level = (code,fps) =>
{
this.code = code;
this.fps = fps;
this.interval = 0;
if(Unknown(this.fps)) this.fps = 120;
this.Start = function() { this.interval = setInterval(this.code,1000 / this.fps); }
this.Pause = function() { clearInterval(this.interval); }
this.Resume = function() { this.Start(); }
this.Switch = function(level) { this.Pause(); level.Start(); };	
}
var DrawFPS = (Level) =>
{
	cakecanvas = document.getElementsByTagName("canvas")[0];
	cakepen = cakecanvas.getContext("2d");
	cakepen.font = "20px arial";
	cakepen.fillStyle = "black";
	cakepen.fillText("FPS: " + Level.fps,30,30);
};
var SetFPS = (Level,fps_value) => Level.fps = fps_value;