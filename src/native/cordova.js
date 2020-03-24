//Created By Rabia Alhaffar In 29/November/2019
//Rewritten By Rabia Alhaffar In 19/March/2020
//An Library To Help Developing Cordova Apps
var CORDOVA_GetDeviceInfo = () => console.info(`Device Informations:\nDevice Model: ${ device.model }\nDevice Manufacturer: ${ device.manufacturer }\nDevice Version: ${ device.version }\nDevice UUID: ${ device.uuid }\nDevice Serial Number: ${ device.serial }\nOperating System: ${ device.platform }\nCordova Version: ${ device.cordova }\nEmulated: ${ device.isVirtual }`);
var CORDOVA_ShowSplashscreen = () => navigator.splashscreen.show();
var CORDOVA_HideSplashscreen = () => navigator.splashscreen.hide();
var CORDOVA_SetStatusBar = (color,color_name,isWebView) =>
{
	if(isWebView) StatusBar.overlaysWebView(true);
	if(color == "default") StatusBar.styleDefault();
	if(color == "name") StatusBar.backgroundColorByName(color_name);
	if(color == "light-content") StatusBar.styleLightContent();
	if(color == "black-transculent") StatusBar.styleBlackTransculent();
	if(color == "black-opaque") StatusBar.styleBlackOpaque();
	if(color == "hex") StatusBar.backgroundColorByHexString(color_name);	
};
var CORDOVA_ShowStatusBar = () => StatusBar.show();
var CORDOVA_HideStatusBar = () => StatusBar.hide();
var CORDOVA_CancelVibration = () => navigator.vibrate(0);
var CORDOVA_StatusBarVisible = () => { return(StatusBar.isVisible); };