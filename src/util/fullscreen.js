//Cake Window Library
//Includes Functions Of The Fullscreen API
var Fullscreen = window.fullscreen;
	var ToggleFullscreen = () =>
	{
	var screen = document.documentElement;
	if (screen.requestFullscreen) screen.requestFullscreen(); 
    if (screen.mozRequestFullScreen) screen.mozRequestFullScreen(); 
    if (screen.webkitRequestFullscreen) screen.webkitRequestFullscreen(); 
    if(screen.msRequestFullscreen) screen.msRequestFullscreen();
	};

	var ExitFullscreen = () =>
	{
	if(document.exitFullscreen) document.exitFullscreen();
	if(document.mozCancelFullScreen) document.mozCancelFullScreen();
	if(document.webkitExitFullscreen) document.webkitExitFullscreen();
	if(document.msExitFullscreen) document.msExitFullscreen();
	};