//Created By Rabia Alhaffar In 17/February/2020
//Website JavaScript Code
var openwiki = () => window.open("https://github.com/Rabios/Cake/wiki");
var backhome = () => window.open("index.html");
var openabout = () => window.open("about.html");
var openapi = () => window.open("api.html");
var getcdn = () => window.open("https://cdn.jsdelivr.net/gh/Rabios/Cake/build/cake.js");
var githubrepo = () => window.open("https://github.com/Rabios/Cake");
var githubsource = () => window.open("https://github.com/Rabios/Cake/tree/src");
var openeditor = () => window.open("try.html");
var opengames = () => window.open("games.html");
var fulldownload = () => window.open("https://github.com/Rabios/Cake/archive/master.zip");
var downloadengine = () => window.open("js/cake.js");
var openapps = () => window.open("apps.html");
var openexperiments = () => window.open("experiments.html");
bubbly({
  colorStart: 'pink',
  colorStop: 'darkmagenta',
  blur: 0.5,
  bubbles: 50,
  bubbleFunc:() => `hsla(${Math.random() * 360}, 100%, 100%, ${Math.random() * 0.25})`
});
hljs.initHighlightingOnLoad();