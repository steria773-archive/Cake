//Created By Rabia Alhaffar In 13/December/2019
//A Plugin For Integrating Cake With Valve Corporations's Steam Store!!!
var LaunchSteam = () => window.open("https://store.steampowered.com/");
var OpenSteamPage = (page) =>
{
if(page == "Store") window.open("https://store.steampowered.com/");
if(page == "Help") window.open("https://help.steampowered.com/");
if(page == "Community") window.open("https://steamcommunity.com/");
if(page == "News") window.open("https://store.steampowered.com/news/");
};
var DownloadSteamDirectly = () => 
{
    if(Windows) window.open("https://steamcdn-a.akamaihd.net/client/installer/SteamSetup.exe");	
    if(Mac) window.open("https://steamcdn-a.akamaihd.net/client/installer/SteamSetup.dmg");
    if(!(Windows || Mac)) window.open("https://steamcdn-a.akamaihd.net/client/installer/SteamSetup.deb");
}
//id_as_number Must Be Number,The Number Consists Of Over 6 Or More Numbers!!!
var OpenSteamAppPage = (id_as_number) => window.open("https://store.steampowered.com/app/" + id_as_number.toString());	
var Steam_Login = () => window.open("https://store.steampowered.com/login/");	
var Steam_Logout = () => window.open("https://store.steampowered.com/logout/");	
