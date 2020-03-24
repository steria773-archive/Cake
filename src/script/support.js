//Created By Rabia Alhaffar In 23/December/2019 
//File To Check Supporting Some Features In-Game!!!
var CANVAS = () => { return (!!(document.createElement('canvas').getContext) && (document.createElement('canvas').getContext('2d'))); };
var WEBGL = () => { return (!!((document.createElement('canvas').getContext) && (document.createElement('canvas').getContext('2d')) && (document.createElement('canvas').getContext('webgl')) || (document.createElement('canvas').getContext("experimental-webgl")))); };
var MP3 = () => { return(document.createElement('audio').canPlayType('audio/mp3')); };
var MPEG = () => { return(document.createElement('audio').canPlayType('audio/mpeg')); };
var AIFF = () => { return(document.createElement('audio').canPlayType('audio/x-aiff'));	};
var MP4 = () => { return(document.createElement('video').canPlayType('video/mp4')); };
var OGG = () => { return(document.createElement('audio').canPlayType('audio/ogg')); };
var WAV = () => { return(document.createElement('audio').canPlayType('audio/wav'));	};
var WEBM = () => { return(document.createElement('video').canPlayType('video/webm')); };
var WEBXR = () => { return("xr" in window.navigator); };  
var WEBVR = () => { return(navigator.getVRDisplays()); };
var JAVA = () => { return(navigator.javaEnabled()); };
var ONLINE = () => { return(navigator.onLine); };