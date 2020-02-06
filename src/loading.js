//Created By Rabia Alhaffar In 25/December/2019
//An File Explains Loading Game Images!!!
//That Happens Each Time Document Or Window Is Loaded
//If No Loading Screen Images Added It Will Starts Game By Default
//You Can Make A Scene For Game Loading Instead Of Images If You Love Coding!!!
var LoadingImageSource = "";
var LoadingImageTime,LoadingLevelTime = 0;
var LoadingLevelAvailable,LoadLevelInsteadOfImage,LoadingImagesAvailable = false;
var LoadingLevel,StartingLevel;
window.onload = () =>
{
cakecanvas = document.getElementsByTagName("canvas")[0];
if(LoadingImagesAvailable) 
{
cakecanvas.style.backgroundImage = `url(${src.toString()})`;
setTimeout(() =>
{
cakecanvas.style.backgroundImage = "none";	
ClearCanvas();
StartingLevel.Start();
},LoadingImageTime);	
}
if(!LoadingImagesAvailable) LoadLevelInsteadOfImage = true;
if(LoadLevelInsteadOfImage && LoadingLevelAvailable)
{
LoadingLevel.Start();
setTimeout(() =>
{
LoadingLevel.Pause();
LoadingLevel.Switch(StartingLevel);	
},LoadingLevelTime);
}
};
var SetLoadingImage = (src,level,time) =>
{
StartingLevel = level;
LoadingImagesAvailable = true;
LoadingImageSource = src.toString();
LoadingImageTime = time;
};
var SetLoadingLevel = (loading_level,level,time) =>
{
LoadingLevelAvailable = true;
LoadingLevel = loading_level;
LoadingLevelTime = time;
StartingLevel = level;
};