//Cake Audio Library
//Added Volume Feature To Audio
var PlayAudio = (url) => audio = new Audio(url).play();
function Music(url)
{
	this.url = url;
	this.audio = new Audio(this.url);
	this.Play = function() { this.audio.play(); };
	this.Pause = function() { this.audio.pause(); };
	this.Resume = function() { this.audio.play(); };
	this.Reload = function() { this.audio.load(); }
	this.SetVolume = function(v) { this.audio.volume = v; };
	this.SetSource = function(src) { this.audio.src = src; this.audio.load(); };
	this.ShowControls = function() { this.audio.controls = true; };
	this.HideControls = function() { this.audio.controls = false; };
	this.Mute = function() { this.audio.muted = true; };
	this.UnMute = function() { this.audio.muted = false; };
	this.EnableLoop = function() { this.audio.loop = true; };
	this.DisableLoop = function() { this.audio.loop = false; };
	this.paused = function() { return this.audio.paused; };
	this.finished = function() { return this.audio.ended; }; 
	this.muted = function() { return this.audio.muted; };
	this.EnablePreload = function() { this.audio.preload = "auto"; };
	this.DisablePreload = function() { this.audio.preload = "none"; };
};