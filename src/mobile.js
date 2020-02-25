//Created By Rabia Alhaffar In 23/April/2019
//An Library Specified To Use With Smartphones For Cake Game Framework
var Vibrate = (x) => window.navigator.vibrate(x);
var StopVibrating = () => window.navigator.vibrate(0);
var ShowBatteryLevel = () => console.info(`Battery Level: ${window.navigator.battery.level * 100}%`);
var UnlockDeviceRotation = () => ScreenOrientation.unlock();
var LockDeviceRotation = (position) => ScreenOrientation.lock(position);
/*
Position Could Be:

    "any"
    "natural"
    "landscape"
    "portrait"
    "portrait-primary"
    "portrait-secondary"
    "landscape-primary"
    "landscape-secondary"

*/