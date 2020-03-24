//Created By Rabia Alhaffar On 16/November/2019
//An Library For Timers,Frames Per Second
function Level(code,fps)
{
this.code = code;
this.fps = fps;
this.paused = false;
this.played = false;
this.resumed = false;
this.started = false;
this.interval = 0;
if(Unknown(this.fps)) this.fps = 120;
this.Play = function() 
{ 
	this.interval = setInterval(this.code,1000 / this.fps); 
	this.started = true,this.played = true;
};
this.Pause = function() 
{
	clearInterval(this.interval);
	this.started = true,this.played = false,this.resumed = false,this.paused = true;
};
this.Resume = function() 
{
	this.Start();
	this.started = true,this.played = true,this.resumed = true;
};
this.Start = function() 
{
	this.Play();
	this.started = true,this.played = true;
};
this.Switch = function(level) { this.Pause(); level.Start(); };	
this.SetFPS = function(fps) { this.fps = fps; };
this.Unlimit = function() { this.fps = 1; };
}
var DrawFPS = (Level) =>
{
	cakepen.font = "20px arial";
	cakepen.fillStyle = "black";
	cakepen.fillText("FPS: " + Level.fps,30,30);
};
var SetFPS = (Level,fps_value) => Level.fps = fps_value;