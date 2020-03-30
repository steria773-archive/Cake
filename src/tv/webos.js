//Uses Both WebOS And WebOSDEV Javascript API
var WebOSTV,
    Not_WebOSTV,
    WebOS_Info,
    WebOS_Country,
    WebOS_DeviceVersion,
    WebOS_DeviceModel,
    WebOS_DeviceScreenHeight,
    WebOS_DeviceScreenWidth,
    WebOS_DeviceUHD,
    WebOS_Pass,
    WebOS_UserID,
    WebOS_Page,
    WebOS_AppVersion,
    WebOS_AppPath,
    WebOS_DeviceWired,
    WebOS_DeviceConnected,
    WebOS_DeviceUsesWifi,
    WebOS_DeviceMajorVersion,
    WebOS_DeviceMinorVersion,
    WebOS_DeviceDotVersion,
    WebOS_DRMAgent,
    WebOS_SmartServiceCountry,
    WebOS_TimeZone,
    WebOS_VirtualKeyboardVisible,
    WebOS_LibrayBuildVersion;

var WebOS_SUCCESS = () => console.info("COMMAND EXECUTED SUCCESSFULLY!!!");	
var WebOS_FAILURE = () => console.error("ERROR: 000\nFAILED TO PATCH COMMAND EXECUTION!!!");

var WebOS_CallServiceFromID = (app_package) =>
{
var appId = webOS.fetchAppId();
 webOS.service.request(app_package, {
        method: 'load',
        parameters: {
            appId: appId,
            drmType: 'playready'
        },
		onSuccess: WebOS_SUCCESS,
		onFailure: WebOS_FAILURE	
});
};

var WebOS_CallService = (url,method_to_do) =>
{
 webOS.service.request(url,
    {
      method: method_to_do,
      parameters: { subscribe: true },
      onSuccess: WebOS_SUCCESS,
      onFailure: WebOS_FAILURE	
    });
};

var WebOS_CallSystemService = (method_to_do) =>
{
 webOS.service.request('luna://com.palm.systemservice',
    {
      method: method_to_do,
      parameters: { 
	  subscribe: true 
	  },
      onSuccess: WebOS_SUCCESS,
      onFailure: WebOS_FAILURE
    });	
};

var WebOS_InitializeWebOS = () =>
{
    WebOSTV = webOS.platform.tv;
    Not_WebOSTV = !webOS.platform.tv;
    WebOS_Info = webOS.systemInfo;
    WebOS_Country = webOS.systemInfo.country;
    WebOS_Pass = webOSDev.launchParams();
    WebOS_UserID = WebOS_Pass.userId;
    WebOS_Page = WebOS_Pass.page;
    webOS.deviceInfo((device) => 
    {
        WebOS_DeviceModel = device.modelName;
        WebOS_DeviceVersion = device.version.split('.');
        WebOS_DeviceMajorVersion = Number(device.versionMajor);
        WebOS_DeviceMinorVersion = Number(device.versionMinor);
        WebOS_DeviceDotVersion = Number(device.versionDot);
        WebOS_DeviceScreenHeight = device.screenHeight;
        WebOS_DeviceScreenWidth = device.screenWidth;
        WebOS_DeviceUHD = device.uhd;
        WebOS_DRMAgent = webOSDev.drmAgent(webOSDev.DRM.Type.PLAYREADY);
        WebOS_SmartServiceCountry = webOS.systemInfo.smartServiceCountry;
        WebOS_TimeZone = webOS.systemInfo.timezone;
        WebOS_VirtualKeyboardVisible = webOS.keyboard.isShowing();
        WebOS_LibrayBuildVersion = Number(webOS.libVersion.split('.')[0]);
    });
};

var WebOS_SimulateBackKeyPress = () => webOS.platformBack();
var WebOS_GetAppID = () => webOS.fetchAppId();
var WebOS_TrackWebOSDevice = () => console.info("Device Model: " + WebOS_DeviceModel + "\nDevice Version: " + WebOS_DeviceVersion + "\nMajor Version: " + WebOS_DeviceMajorVersion + "\nMinor Version: " + WebOS_DeviceMajorVersion + "\nMinor Version: " + WebOS_DeviceMajorVersion + "\nMedium Version: " + WebOS_DeviceDotVersion + "\nScreen Height: " + WebOS_DeviceScreenHeight + "\nScreen Width: " + WebOS_DeviceScreenWidth + "UHD: " + WebOS_DeviceUHD);
var WebOS_GetAppPath = () => webOS.fetchAppRootPath();	
var WebOS_GetAppInfo = () =>
{
var path = webOS.fetchAppRootPath();
 webOS.fetchAppInfo(function (info) {
  if (info) 
  {
  WebOS_AppVersion = Number(info.version.split('.'));   
    }
}, path + 'appinfo.json');
};	

//From Here,WebOSDev API Functions Start
var WebOS_GetNetworkState = () =>
{
webOSDev.connection.getStatus({
    onSuccess: function (res) {
		WebOS_DeviceConnected = res.isInternetConnectionAvailable;
        WebOS_DeviceWired = res.wired;
        WebOS_DeviceUsesWifi = res.wifi;
            },
    onFailure: WebOS_FAILURE,
    subscribe: true
});
};

var WebOS_LaunchBrowserWithURL = (url) =>
{
webOSDev.launch({
    id: webOSDev.APP.BROWSER,
    params: { target: url },
    onSuccess: WebOS_SUCCESS,
    onFailure: WebOS_FAILURE
});	
};

var WebOS_LaunchApp = (app_package) =>
{
webOSDev.launch({
    id: app_package,
    params: 
	{
        userId: 'user',
        page: 'shown page'
    },
    onSuccess: WebOS_SUCCESS,
    onFailure: WebOS_FAILURE
});	
}; 