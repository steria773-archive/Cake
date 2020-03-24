//Upcoming Library/Plugin To Use With WebOS/WebOSTV
//Uses Both WebOS And WebOSDEV Javascript API
var WebOSTV = webOS.platform.tv;
var Not_WebOSTV = !webOS.platform.tv;
var WebOS_Info = webOS.systemInfo;
var Country = webOS.systemInfo.country;
var WebOS_DeviceVersion;
var WebOS_DeviceModel;
var WebOS_DeviceScreenHeight;
var WebOS_DeviceScreenWidth;
var WebOS_DeviceUHD;
var WebOS_Pass = webOSDev.launchParams();
var UserID = WebOS_Pass.userId;
var Page = WebOS_Pass.page;
var WebOS_AppVersion;
var WebOS_AppPath;
var WebOS_DeviceWired;
var WebOS_DeviceConnected;
var WebOS_DeviceUsesWifi;
var WebOS_DeviceMajorVersion;
var WebOS_DeviceMinorVersion;
var WebOS_DeviceDotVersion;
var WebOS_DRMAgent = webOSDev.drmAgent(webOSDev.DRM.Type.PLAYREADY);
var SmartServiceCountry = webOS.systemInfo.smartServiceCountry;
var TimeZone = webOS.systemInfo.timezone;
var VirtualKeyboardVisible = webOS.keyboard.isShowing();
var LibrayBuildVersion = Number(webOS.libVersion.split('.')[0]);
var SUCCESS = function()
{
console.info("COMMAND EXECUTED SUCCESSFULLY!!!");	
};
var FAILED = function()
{
console.error("ERROR: 000\nFAILED TO PATCH COMMAND EXECUTION!!!");
};
function CallServiceFromID(app_package)
{
var appId = webOS.fetchAppId();
 webOS.service.request(app_package, {
        method: 'load',
        parameters: {
            appId: appId,
            drmType: 'playready'
        },
		onSuccess: SUCCESS,
		onFailure: FAILED	
});
}
function CallService(url,method_to_do)
{
 webOS.service.request(url,
    {
      method: method_to_do,
      parameters: { subscribe: true },
      onSuccess: SUCCESS,
      onFailure: FAILED	
    });
}
function CallSystemService(method_to_do)
{
 webOS.service.request('luna://com.palm.systemservice',
    {
      method: method_to_do,
      parameters: { 
	  subscribe: true 
	  },
      onSuccess: SUCCESS,
      onFailure: FAILED
    });	
}
var SimulateBackKeyPress = () => webOS.platformBack();
var GetAppID = () => webOS.fetchAppId();
function TrackWebOSDevice()
{
webOS.deviceInfo(function(device) 
{
	WebOS_DeviceModel = device.modelName;
    WebOS_DeviceVersion = device.version.split('.');
	WebOS_DeviceMajorVersion = Number(device.versionMajor);
	WebOS_DeviceMinorVersion = Number(device.versionMinor);
    WebOS_DeviceDotVersion = Number(device.versionDot);
    WebOS_DeviceScreenHeight = device.screenHeight;
	WebOS_DeviceScreenWidth = device.screenWidth;
    WebOS_DeviceUHD = device.uhd;
    console.info("Device Model: " + WebOS_DeviceModel + "\nDevice Version: " + WebOS_DeviceVersion + "\nMajor Version: " + WebOS_DeviceMajorVersion + "\nMinor Version: " + WebOS_DeviceMajorVersion + "\nMinor Version: " + WebOS_DeviceMajorVersion + "\nMedium Version: " + WebOS_DeviceDotVersion + "\nScreen Height: " + WebOS_DeviceScreenHeight + "\nScreen Width: " + WebOS_DeviceScreenWidth + "UHD: " + WebOS_DeviceUHD);
});	
}
var GetAppPath = () => webOS.fetchAppRootPath();	
function GetAppInfo()
{
var path = webOS.fetchAppRootPath();
 webOS.fetchAppInfo(function (info) {
  if (info) 
  {
  WebOS_AppVersion = Number(info.version.split('.'));   
    }
}, path + 'appinfo.json');
}	
//From Here,WebOSDev API Functions Start
function GetNetworkState()
{
webOSDev.connection.getStatus({
    onSuccess: function (res) {
		WebOS_DeviceConnected = res.isInternetConnectionAvailable;
        WebOS_DeviceWired = res.wired;
        WebOS_DeviceUsesWifi = res.wifi;
            },
    onFailure: FAILED,
    subscribe: true
});
}
function LaunchBrowserWithURL(url)
{
webOSDev.launch({
    id: webOSDev.APP.BROWSER,
    params: { target: url },
    onSuccess: SUCCESS,
    onFailure: FAILED
});	
}
function LaunchApp(app_package)
{
webOSDev.launch({
    id: app_package,
    params: 
	{
        userId: 'user',
        page: 'shown page'
    },
    onSuccess: SUCCESS,
    onFailure: FAILED
});	
} 