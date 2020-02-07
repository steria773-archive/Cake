//Created By Rabia Alhaffar In 29/November/2019
//An Library To Help Developing Cordova Apps
var Device =
{
	CordovaVersion:device.cordova,
	Model:device.model,
	OS:device.platform,
	UUID:device.uuid,
	Version:device.version,
	Manufacturer:device.manufacturer,
	Emulated:device.isVirtual,
	SerialNumber:device.serial
};
var ShowSplashscreen = () => navigator.splashscreen.show();
var HideSplashscreen = () => navigator.splashscreen.hide();
var SetStatusBar = (color,color_name,isWebView) =>
{
	if(isWebView) StatusBar.overlaysWebView(true);
	if(color == "default") StatusBar.styleDefault();
	if(color == "name") StatusBar.backgroundColorByName(color_name);
	if(color == "light-content") StatusBar.styleLightContent();
	if(color == "black-transculent") StatusBar.styleBlackTransculent();
	if(color == "black-opaque") StatusBar.styleBlackOpaque();
	if(color == "hex") StatusBar.backgroundColorByHexString(color_name);	
};
var ShowStatusBar = () => StatusBar.show();
var HideStatusBar = () => StatusBar.hide();
var CancelVibration = () => navigator.vibrate(0);
var StatusBarVisible = () => { return(StatusBar.isVisible); };