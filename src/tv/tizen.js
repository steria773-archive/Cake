//Created By Rabia Alhaffar In 27/March/2020
//For Tizen OS
//See Here: https://developer.samsung.com/SmartTV/develop/api-references.html
//Also: Don't Forget To Add Needed From API References (Prerequisites)

//Emptied For Some Cases
var Tizen_SUCCESS = () => {};
var Tizen_FAILURE = () => {};

//Video And Window
var Tizen_SetWindowVideoInputSource = (source) => tizen.tvwindow.setSource(source,Tizen_SUCCESS,Tizen_FAILURE);
var Tizen_WindowVideoInputSource = () => { return tizen.tvwindow.getSource(); };
var Tizen_Resolution = () => { return tizen.tvwindow.getVideoResolution(); };

//Input
var Tizen_SupportedKeys = () => { return tizen.tvinputdevice.getSupportedKeys(); };
var Tizen_RegisterKey = (key) => tizen.tvinputdevice.registerKey(key);
var Tizen_UnregisterKey = (key) => tizen.tvinputdevice.unregisterKey(key);
var Tizen_RegisterKeys = (keys) => tizen.tvinputdevice.registerKeyBatch(keys,Tizen_SUCCESS,Tizen_FAILURE);
var Tizen_UnregisterKeys = (keys) => tizen.tvinputdevice.unregisterKeyBatch(keys,Tizen_SUCCESS,Tizen_FAILURE);
var Tizen_KeyCode = (key) => { return tizen.tvinputdevice.getKey(key).code; };

//Display Control
var Tizen_3DEffectMode = () => { return tizen.tvdisplaycontrol.get3DEffectMode(); };
var Tizen_3DModeEnabled = () => { return tizen.tvdisplaycontrol.is3DModeEnabled(); };

//Audio Control
var Tizen_Mute = () => tizen.tvaudiocontrol.setMute(true);
var Tizen_Unmute = () => tizen.tvaudiocontrol.setMute(false);
var Tizen_Muted = () => { return tizen.tvaudiocontrol.isMute(); };
var Tizen_IncreaseVolume = () => tizen.tvaudiocontrol.setVolumeUp();
var Tizen_DecreaseVolume = () => tizen.tvaudiocontrol.setVolumeDown();
var Tizen_SetVolume = (v) => tizen.tvaudiocontrol.setVolume(v); //From 1 To 100
var Tizen_GetVolume = () => tizen.tvaudiocontrol.getVolume();
var Tizen_ListenVolumeChange = (l) => tizen.tvaudiocontrol.setVolumeChangeListener(l);
var Tizen_UnlistenVolumeChange = () => tizen.tvaudiocontrol.unsetVolumeChangeListener();
var Tizen_AudioOutputMode = () => { return tizen.tvaudiocontrol.getOutputMode(); };
var Tizen_PlaySound = (beep) => tizen.tvaudiocontrol.playSound(beep);

//Voice Control
var Tizen_Client = () => { return tizen.voicecontrol.getVoiceControlClient(); };
var Tizen_Language = () => { return tizen.voicecontrol.getVoiceControlClient().getCurrentLanguage(); };
var Tizen_VoiceCommand = (c) => { return new tizen.VoiceControlCommand(c); };
var Tizen_RegisterVoiceCommandsList = (list) => tizen.voicecontrol.getVoiceControlClient().setCommandList(list,"FOREGROUND"); //List Is JavaScript Array Consists Of Tizen_VoiceCommand() Voice Commands
var Tizen_AddVoiceCommandListener = (l) => { return tizen.voicecontrol.getVoiceControlClient().addResultListener(l); };
var Tizen_RemoveVoiceCommandListener = (l) => { return tizen.voicecontrol.getVoiceControlClient().removeResultListener(l); };
var Tizen_AddLanguageChangeListener = (l) => { return tizen.voicecontrol.getVoiceControlClient().addLanguageChangeListener(l); };
var Tizen_RemoveLanguageChangeListener = (l) => { tizen.voicecontrol.getVoiceControlClient().removeLanguageChangeListener(l); };
var Tizen_DisableVoiceControls = () => { tizen.voicecontrol.getVoiceControlClient().release(); }; 

//WebView Settings
var Tizen_SetWebUserAgent = (useragent_string) => tizen.websetting.setUserAgentString(useragent_string,Tizen_SUCCESS,Tizen_FAILURE);
var Tizen_RemoveWebCookies = () => tizen.websetting.removeAllCookies(Tizen_SUCCESS,Tizen_FAILURE);

//Time
var Tizen_CurrentTime = () => { return tizen.time.getCurrentDateTime().toLocaleString(); };
var Tizen_LocalTimezone = () => { return tizen.time.getLocalTimezone(); };
var Tizen_Timezone = (place) => { return new tizen.TZDate(new Date(),place).toString(); };
var Tizen_AvailableTimezones = () => { return tizen.time.getAvailableTimezones(); };
var Tizen_TimezoneExists = (place) => { return tizen.time.getAvailableTimezones().indexOf(place) > -1; };
var Tizen_LongDateFormat = () => { return tizen.time.getDateFormat(); };
var Tizen_ShortDateFormat = () => { return tizen.time.getDateFormat(true); };
var Tizen_TimeFormat = () => { return tizen.time.getTimeFormat(); };
var Tizen_LeapYear = () => { return tizen.time.isLeapYear(tizen.time.getCurrentDateTime().getFullYear()); };
var Tizen_TimezoneDate = () => { return new tizen.TZDate(); };
var Tizen_ListenDateTimeChange = (l) => { tizen.time.setDateTimeChangeListener(l); };
var Tizen_UnlistenDateTimeChange = () => { tizen.time.unsetDateTimeChangeListener(); };
var Tizen_ListenTimezoneChange = (l) => { tizen.time.setTimezoneChangeListener(l); };
var Tizen_UnlistenTimezoneChange = () => { tizen.time.unsetTimezoneChangeListener(); };

//System Info
//For Properties And Capabilities,See Link Below!!!
//https://developer.samsung.com/SmartTV/develop/api-references/tizen-web-device-api-references/systeminfo-api.html
var Tizen_AvailableRAM = () => { return tizen.systeminfo.getAvailableMemory() * 1000 + "GB"; };
var Tizen_DeviceCapabilities = () => { return tizen.systeminfo.getCapabilities(); };
var Tizen_DeviceCapability = (c) => { return tizen.systeminfo.getCapability(c); };
var Tizen_PropertyValue = (p) => { tizen.systeminfo.getPropertyValue(p,Tizen_SUCCESS,Tizen_FAILURE); };

//Data Saving
var Tizen_SaveData = (data_name,raw_data,password) => { tizen.keymanager.saveData(data_name,raw_data,password,Tizen_SUCCESS); }; //password Can Be Set To Null,password Is Password To Encrypt Saved Raw Data
var Tizen_RemoveData = (data_name) => tizen.keymanager.removeData({ "name": data_name });
var Tizen_Data = (data_name) => { return tizen.keymanager.getData({ "name": data_name }); };

//Download
var Tizen_DownloadAPISupported = () => { return tizen.systeminfo.getCapability("http://tizen.org/feature/download"); };
var Tizen_DownloadRequest = (url,location,name,download_mode) => { return new tizen.DownloadRequest(url,location,name,download_mode); };
/*
1- Location Can Be "downloads","documents",etc...
2- If You Set Parameter name Value To null,Tizen Will Download The File In His Original Name
3- download_mode Can Be "WIFI","CELLUAR",Or "ALL",Which Means What Way User Wants To Download File
*/
var Tizen_DownloadFile = (url,location,name,download_mode,listener) => { return tizen.download.start(new tizen.DownloadRequest(url,location,name,download_mode),listener); };
//NOTES: Tizen_DownloadFile() Downloads A File
//But You Must Store It As Value In A Variable
//Cause It Returns Himself As Download ID
var Tizen_CancelDownload = (tizen_downloadfile_as_id) => tizen.download.cancel(tizen_downloadfile_as_id);
var Tizen_PauseDownload = (tizen_downloadfile_as_id) => tizen.download.pause(tizen_downloadfile_as_id);
var Tizen_ResumeDownload = (tizen_downloadfile_as_id) => tizen.download.resume(tizen_downloadfile_as_id);
var Tizen_DownloadState = (tizen_downloadfile_as_id) => { return tizen.download.getState(tizen_downloadfile_as_id); };
var Tizen_DownloadRequestInfo = (tizen_downloadfile_as_id) => { return tizen.download.getDownloadRequest(tizen_downloadfile_as_id); };

//Packages
var Tizen_InstallPackage = (file_package) => tizen.package.install(file_package.toURI(),Tizen_SUCCESS,Tizen_FAILURE);
var Tizen_UninstallPackage = (package_id) => tizen.package.uninstall(package_id,Tizen_SUCCESS,Tizen_FAILURE);

//Application
//You Can Use Function Below This Comment To Get Info About The App(Assign It As Value To Variable)
var Tizen_CurrentApp = () => { return tizen.application.getCurrentApplication(); };
var Tizen_CurrentAppID = () => { return tizen.application.getCurrentApplication().appInfo.id; };
var Tizen_KillApp = (app_target_id) => tizen.application.kill(app_target_id,Tizen_SUCCESS,Tizen_FAILURE);
var Tizen_LaunchApp = (app_target_id) => tizen.application.launch(app_target_id,Tizen_SUCCESS);
var Tizen_AppInfo = () => { return tizen.application.getAppInfo(null); };
var Tizen_CloseApp = () => tizen.application.getCurrentApplication().exit();
var Tizen_HideApp = () => tizen.application.getCurrentApplication().hide();

//Archives
var Tizen_ReadArchive = (directory) => tizen.archive.open(directory,"r",Tizen_SUCCESS);
var Tizen_OpenArchive = (directory,mode) => tizen.archive.open(directory,mode,Tizen_SUCCESS);
var Tizen_ExtractArchive = (directory,extract_directory) =>
{
    tizen.archive.open(directory,"rw",(archive) =>
    {
        var extra = archive.extractAll(extract_directory);
        tizen.archive.abort(extra);
        archive.close();
    });
};
var Tizen_CreateArchive = (directory,files) =>
{
    tizen.archive.open(directory,"rw",(archive) =>
    {
        for(var arc = 0;arc < files.length;arc++) archive.add(files[arc],null,null,null);
        archive.close();
    },null,null);
};

//Alarms
//Tizen_Alarm() Assigned As Value To Variable,Cause Also Treated As Alarm ID
//In Case User Wants To Control It
var Tizen_Alarm = (date) => { return new tizen.AlarmAbsolute(date); };
var Tizen_AddAlarm = (alarm,app_target_id) => tizen.alarm.add(alarm,app_target_id,null);
var Tizen_RemoveAlarm = (alarm) => tizen.alarm.add(alarm);
var Tizen_AllAlarms = () => { return tizen.alarm.getAll(); };
var Tizen_RemoveAllAlarms = () => tizen.alarm.removeAll();
var Tizen_GetAlarm = (alarm) => { return tizen.alarm.get(alarm); };