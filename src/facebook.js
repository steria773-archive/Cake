//Created By Rabia Alhaffar In 20/April/2019
//Rewritten By Rabia Alhaffar In 15/March/2020
var FB_Initialize = () => FBInstant.initializeAsync();
var FB_PlayerID = () => FBInstant.player.getID();
var FB_PlayerName = () => FBInstant.player.getName();
var FB_PlayerPhoto = () => FBInstant.player.getPhoto();	
var FB_ContextID = () => FBInstant.context.getID();
var FB_ContextType = () => FBInstant.context.getType();
var FB_OS = () => FBInstant.getPlatform();
var FB_SDKVersion = () => FBInstant.getSDKVersion();
var FB_Localization = () => FBInstant.getLocale();
var FB_SetProgress = (x) => FBInstant.setLoadingProgress(x);
var FB_ExitGame = () => FBInstant.quit();
var FB_APIS = () => FBInstant.getSupportedAPIs();
var FB_LeaderboardName = () => FBInstant.leaderboard.getName();
var FB_PostScore = (x) => FBInstant.postSessionScore(x);