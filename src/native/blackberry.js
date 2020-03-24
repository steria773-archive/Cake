//Created By Rabia Alhaffar In 29/November/2019
//Rewritten In 19/March/2020
//An Library For Importing Some Functions From Blackberry WebWorks SDK
var BB_GetAppInfo = () => console.info(`Blackberry Application Info:\nApplication Name: ${ blackberry.app.name }\nApplication Version: ${ blackberry.app.version }\nApplication ID: ${ blackberry.app.id }\nApplication Developer: ${ blackberry.app.author }\nApplication Developer URL: ${ blackberry.app.authorURL }\nApplication Copyright: ${ blackberry.app.copyright }\nApplication Description: ${ blackberry.app.description }\nApplication State: ${ blackberry.app.windowState }\nApplication Screen Orientation: ${ blackberry.app.orientation }\nApplication Developer Email: ${ blackberry.app.authorEmail }\nApplication License: ${ blackberry.app.license }\nApplication License URL: ${ blackberry.app.licenseURL }\n`);
var BB_CloseApp = () => blackberry.app.exit();
var BB_Minimize = () => blackberry.app.minimize();
var BB_UnlockScreenOrientation = () => blackberry.app.unlock();
var BB_LockScreenOrientation = (screen_orientation) => blackberry.app.lock(screen_orientation);
var BB_GetUserIDVersion = () => blackberry.user.identity.getVersion();
var BB_GetTimezones = () => blackberry.system.getTimezones();
var BB_GetFont = () => blackberry.system.getFontInfo();
var BB_GetCurrentTimezone = () => blackberry.system.getCurrentTimezone();
var BB_SetWallpaper = (image_location) => blackberry.system.setWallpaper(image_location);
var BB_Rotate = (screen_orientation) => blackberry.app.rotate(screen_orientation);