//Created By Rabia Alhaffar In 13/December/2019
var Facebook = Cocoon.Social.Facebook;
var InitializeFacebook = () => Facebook.init();	
var Facebook_LogIn = () => Facebook.login();	
var Facebook_LogOut = () => Facebook.logout();	
var Facebook_GetLoginStatus = () => Facebook.getLoginStatus();	
var Facebook_GetPermissions = () => Facebook.getPermssions();	
var Facebook_GetSocialInterface = () => Facebook.getSocialInterface();	
var Facebook_Subscribe = (event_name) => Facebook.subscribe(event_name);	
var Facebook_UnSubscribe = (event_name) => Facebook.unsubscribe(event_name);
var Facebook_UploadPhoto = (file) => Facebook.uploadPhoto(file);	