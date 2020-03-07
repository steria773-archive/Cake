//Created By Rabia Alhaffar In 26/December/2019
//For Splash Screen Creation
var SetSplashscreen = (src,level,time) =>
{
cakecanvas.style.backgroundImage = `url(${src.toString()})`;
setTimeout(() => { cakecanvas.style.backgroundImage = "none"; level.Start(); },time); 
};