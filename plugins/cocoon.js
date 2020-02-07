//Created By Rabia Alhaffar In 12/December/2019
//An Library To Use Cocoon Javascript API Easier!!!
//Notes: You Still Needs Cake Game Framework,And Cocoon.js In Order To Do That!!!
var DeviceID = Cocoon.Device.getDeviceId();
var DeviceInfo = JSON.Stringify(Cocoon.Device.getDeviceInfo());
var DeviceOrientation = Cocoon.Device.getOrientation();
var AccelerometerInterval = Cocoon.Motion.getAccelerometerInterval();
var GyroscopeInterval = Cocoon.Motion.getGyroscopeInterval();
var CocoonWebGLEnabled = Cocoon.Utils.isWebGLEnabled();
var ExitApp = () => Cocoon.App.exit();	
var OpenPage = (url) => Cocoon.App.openURL(url);
var ExecuteCode = (code) => Cocoon.App.forward(code);	
var ExecuteCodeAsync = (code,code_2) => Cocoon.App.forwardAsync(code,code_2);	
var HideWebView = () => Cocoon.App.hideTheWebView();
var LoadPage = (url) => Cocoon.App.load(url);	
var ShowWebView = (x,y,height,width) => Cocoon.App.showTheWebView(x,y,height,width);	
var PauseApp = () => Cocoon.App.pause();
var ResumeApp = () => Cocoon.App.resume();	
var RestartAppContext = () => Cocoon.App.reload();	
var RestartWebViewContext = () => Cocoon.App.reloadWebView();	
var LoadPageInWebView = (url) => Cocoon.App.loadInTheWebView(url);	
var ScreenAlwaysOn = () => Cocoon.Device.autoLock(false);
var ScreenCanSleep = () => Cocoon.Device.autoLock(true);	
var SetAutoLock = (state) => Cocoon.Device.autoLock(state);	
var SetDeviceOrientation = (orientation) =>
{
if(orientation == "PORTAIT") Cocoon.Device.setOrientation(Cocoon.Device.Orientations.PORTRAIT);
if(orientation == "LANDSCAPE") Cocoon.Device.setOrientation(Cocoon.Device.Orientations.LANDSCAPE);
if(orientation == "LANDSCAPE_LEFT") Cocoon.Device.setOrientation(Cocoon.Device.Orientations.LANDSCAPE_LEFT);
if(orientation == "LANDSCAPE_RIGHT") Cocoon.Device.setOrientation(Cocoon.Device.Orientations.LANDSCAPE_RIGHT);
if(orientation == "BOTH") Cocoon.Device.setOrientation(Cocoon.Device.Orientations.BOTH);
if(orientation == "PORTRAIT_UPSIDE_DOWN") Cocoon.Device.setOrientation(Cocoon.Device.Orientations.PORTRAIT_UPSIDE_DOWN);	
};
var ShowKeyboard = (type) =>
{
if(type == "TEXT") Cocoon.Dialog.showKeyboard({ type: Cocoon.Dialog.KeyboardType.TEXT });
if(type == "NUMBER") Cocoon.Dialog.showKeyboard({ type: Cocoon.Dialog.KeyboardType.NUMBER });
if(type == "EMAIL") Cocoon.Dialog.showKeyboard({ type: Cocoon.Dialog.KeyboardType.EMAIL });
if(type == "PHONE") Cocoon.Dialog.showKeyboard({ type: Cocoon.Dialog.KeyboardType.PHONE });	
if(type == "URL") Cocoon.Dialog.showKeyboard({ type: Cocoon.Dialog.KeyboardType.URL });
};
var HideKeyboard = () => Cocoon.Dialog.dismissKeyboard();	
var SetAccelerometerInterval = (seconds) => Cocoon.Motion.setAccelerometerInterval(seconds);
var SetGyroscopeInterval = (seconds) => Cocoon.Motion.setGyroscopeInterval(seconds);	
var EnableTouchInCocoon = () => Cocoon.Touch.enable();
var EnableTouchInWebView = () => Cocoon.Touch.enableInWebView();	
var DisableTouchInCocoon = () => Cocoon.Touch.disable();	
var DisableTouchInWebView = () => Cocoon.Touch.disableInWebView();
var EnableTouch = () => Cocoon.Touch.enable(); Cocoon.Touch.enableInWebView();	
var DisableTouch = () => Cocoon.Touch.disable(); Cocoon.Touch.disableInWebView();	
function WebDialog(url)
{
this.Dialog = new Cocoon.Widget.WebDialog();
this.url = url;
this.time = 0;
this.ShowPage = function() { this.Dialog.show(this.url); };
this.Close = function() { setTimeout(function() { this.Dialog.close(); },this.time); };	
this.Evaluate = function(evaluation_string) { this.Dialog.eval(evaluation_string); };
}
var EnableWebGL = () => Cocoon.Utils.setWebGLEnabled(true);
var DisableWebGL = () => Cocoon.Utils.setWebGLEnabled(false);
var EnableAntialiasing = () => Cocoon.Utils.setAntialias(true);	
var DisableAntialiasing = () => Cocoon.Utils.setAntialias(false);	
var LimitMemory = (megabytes) => Cocoon.Utils.setMaxMemory(megabytes);	
var LogMemoryInfo = () => Cocoon.Utils.logMemoryInfo();	
var PathExists = (filepath) => { return(Cocoon.Utils.existsPath(filepath));	};
var Screenshoot = (name) => Cocoon.Utils.capturescreen(name.toString() + ".png");	
var MarkAsMusic = (filepath) => Cocoon.Utils.markAsMusic(filepath.toString());	
var EnablePowerOfTwo = () => Cocoon.Utils.setNPOTEnabled(false);
var DisablePowerOfTwo = () => Cocoon.Utils.setNPOTEnabled(true);	
var LimitTextCache = (cache_size) => Cocoon.Utils.setTextCacheSize(cache_size);	
var LimitTextureSize = (size) => Cocoon.Utils.setTextureReduction(size);
var ProxifyAudio = () => Cocoon.Proxify.audio();	
var ProxifyConsole = () => Cocoon.Proxify.console();	
var ProxifyXHR = () => Cocoon.Proxify.xhr();	
var RestoreConsole = () => Cocoon.Proxify.deproxifyConsole();	