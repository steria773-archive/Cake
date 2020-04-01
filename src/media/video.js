//Created By Rabia Alhaffar In 26/March/2020
//Video Playing Feature For Cake Now Available
var PlayVideo = (src) =>
{
    var video = document.createElement("video");
    video.src = src;
    video.style.visibility = "visible";
    video.loop = false;
    cakepen.drawImage(video,0,0,cakecanvas.width,cakecanvas.height);
    video.onended = () => video.parentNode.removeChild(video);
};

function Video(src)
{
    this.src = src;
    this.removeonfinish = false;
    this.video = document.createElement("video");
    this.video.style.visibility = "visible";
    this.video.src = this.src;
    this.video.loop = false;
    this.video.controls = false;
    this.Play = function() 
    {
        if(!this.video.autoplay) this.video.play();
        cakepen.drawImage(this.video,0,0,cakecanvas.width,cakecanvas.height); 
        if(this.removeonfinish) this.video.onended = () => this.video.parentNode.removeChild(this.video);
    };
	this.Pause = function() { this.video.pause(); };
	this.Resume = function() { this.Play(); };
	this.Reload = function() { this.video.load(); }
	this.SetVolume = function(v) { this.video.volume = v; };
	this.SetSource = function(src) { this.video.src = src; this.video.load(); };
	this.ShowControls = function() { this.video.controls = true; };
	this.HideControls = function() { this.video.controls = false; };
	this.Mute = function() { this.video.muted = true; };
	this.UnMute = function() { this.video.muted = false; };
	this.EnableLoop = function() { this.video.loop = true; };
	this.DisableLoop = function() { this.video.loop = false; };
	this.paused = function() { return this.video.paused; };
	this.finished = function() { return this.video.ended; }; 
	this.muted = function() { return this.video.muted; };
	this.EnablePreload = function() { this.video.preload = "auto"; };
    this.DisablePreload = function() { this.video.preload = "none"; };
    this.RemoveWhenFinish = function() 
    {
        this.removeonfinish = true;
    };
}