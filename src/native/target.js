//Created By Rabia Alhaffar In 15/November/2019
//An Library To Set Build Target And Returning Errors For Builds Not Supported
var Target;
//Operating Systems Lists:
var iOS = navigator.userAgent.match(/iPhone|iPad|iPod|Apple-iPhone/i);
var Android = navigator.userAgent.match(/Android/i);
var Mac = navigator.userAgent.match(/Macintosh|Intel Mac OS X/i);
var Windows = navigator.userAgent.match(/Windows|Windows Phone|Windows NT/i);
var Windows_Phone = navigator.userAgent.match(/Windows Phone/i);
var Blackberry = navigator.userAgent.match(/Blackberry|BB/i);
var Linux = navigator.userAgent.match(/Android|Linux|Ubuntu|X11/i);
var Ubuntu = navigator.userAgent.match(/Ubuntu|X11/i);
var Chromecast = navigator.userAgent.match(/CrKey/i);
var Chrome_OS = navigator.userAgent.match(/CrOS/i);
var PS4 = navigator.userAgent.match(/PlayStation 4/i);
var Playstation = navigator.userAgent.match(/PlayStation/i);
var PSVita = navigator.userAgent.match(/PlayStation Vita/i);
var XB1 = navigator.userAgent.match(/Xbox One/i);
var XB1S = navigator.userAgent.match(/XBOX_ONE_ED/i);
var XBOX = navigator.userAgent.match(/Xbox|XBOX_ONE_ED|Xbox One/i);
var Nintendo = navigator.userAgent.match(/Nintendo/i);
var N_3DS = navigator.userAgent.match(/Nintendo 3DS/i);
var WiiU = navigator.userAgent.match(/Nintendo WiiU/i);
var FireTV = navigator.userAgent.match(/AFTS/i);
var Roku_Ultra = navigator.userAgent.match(/Roku4640X/i);
var Roku = navigator.userAgent.match(/Roku/i);
var Google_Nexus_Player = navigator.userAgent.match(/Nexus Player/i);
var Minix_NEO_X5 = navigator.userAgent.match(/NEO-X5/i);
var AppleTV = navigator.userAgent.match(/AppleTV/i);
var Kindle = navigator.userAgent.match(/Kindle/i);
var Google_Bot = navigator.userAgent.match(/Googlebot/i);
var ChromeDevice = navigator.userAgent.match(/Cr/i);
var Bing_Bot = navigator.userAgent.match(/bingbot/i);
var Yahoo_Bot = navigator.userAgent.match(/Yahoo!/i);
var OperaMini = navigator.userAgent.match(/Opera Mini/i);
var Desktop = navigator.userAgent.match(/Windows|Windows Phone|Windows NT|Macintosh|Intel Mac OS X|Android|Linux|Ubuntu|X11|CrKey|CrOS/i);
var Mobile = navigator.userAgent.match(/Android|Linux|Ubuntu|iPhone|iPad|iPod|Apple-iPhone|Blackberry|BB|Windows Phone/i);
var Console = navigator.userAgent.match(/PlayStation|Nintendo|Xbox|XBOX/i);
var TV = navigator.userAgent.match(/AppleTV|CrKey|CrOS|Roku|AFTS|Nexus Player/i);