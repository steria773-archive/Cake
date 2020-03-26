//Cake Audio Library
var PlayAudio = (url) => audio = new Audio(url).play();
function Music(url)
{
	this.url = url;
	this.audio = new Audio(this.url);
	this.Play = function() { this.audio.play(); }
	this.Pause = function() { this.audio.pause(); }
	this.Resume = function() { this.Play(); }
};
