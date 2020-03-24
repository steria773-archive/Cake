//Created By Rabia Alhaffar In 19/March/2020
var GDSDK_LoadSDK = () =>
{
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://html5.api.gamedistribution.com/main.min.js';
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'gamedistribution-jssdk'));
};
var GDSDK_ShowBanner = () => gdsdk.showBanner();
var GDSDK_ShowAd = () => gdsdk.showAd();
var GDSDK_OpenConsole = () => gdsdk.openConsole();
var GDSDK_CancelAd = () => gdsdk.cancelAd();
var GDSDK_PreloadAd = () => gdsdk.preloadAd();