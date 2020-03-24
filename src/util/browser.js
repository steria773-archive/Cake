//Cake Web Browser Detecting Library
//Always In Updates!!!
var Opera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
var Firefox = typeof InstallTrigger !== 'undefined';
var Safari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
var IE = false || !!document.documentMode;
var Edge = navigator.userAgent.indexOf("Edge") > -1;
var SamsungInternet = navigator.userAgent.indexOf("SamsungBrowser") > -1;
var Chrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
var OpenURL = (url) => window.open(url);
var JRE = navigator.javaEnabled(),Language = navigator.language,Online = navigator.onLine;
var ReloadHistory = () => window.location.reload();
var NextHistory = () => window.history.forward();
var BackHistory = () => window.history.back();