//Created By Rabia Alhaffar In 25/December/2019
//An File Explains Loading Game Images!!!
//That Happens Each Time Document Or Window Is Loaded
//If No Loading Screen Images Added It Will Starts Game By Default
//You Can Make A Scene For Game Loading Instead Of Images If You Love Coding!!!
var LoadingImageSource = "";
var LoadingImageTime = 0,LoadingLevelTime = 0;
var LoadingLevelAvailable = false,LoadLevelInsteadOfImage = false,LoadingImagesAvailable = false;
var LoadingLevel,StartingLevel;
var SetLoadingImage = (src,level,time) =>
{
StartingLevel = level;
LoadingImagesAvailable = true;
LoadingImageSource = src.toString();
LoadingImageTime = time;
__loadingscreen();
};
var SetLoadingLevel = (loading_level,level,time) =>
{
LoadingLevel = loading_level;
LoadingLevelAvailable = true;
LoadingLevelTime = time;
StartingLevel = level;
__loadingscreen();
};

var __loadingscreen = () =>
{
    window.onload = () =>
    {
        if(LoadingImagesAvailable)
        {
            cakecanvas.style.backgroundImage = `url(${LoadingImageSource})`;
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
};
