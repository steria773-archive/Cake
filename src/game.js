//Cake Game Library!!!
//Just For Closing Game Page As Exit Or Opening URL Or Even Restart Game!!!
var RestartGame = () => window.location.reload();
var CloseGame = () => window.close();
var Title = (document_title) => document.title = document_title;
var CrashGame = () => { while(true) console.log(0); };
var ViewSourceCode = (index) => window.open(document.scripts[index].src);
var ViewGameSourceCode = () => window.open(document.scripts[2].src);
var StartProcess = (dir) => window.open("file:///" + dir);
var UpdateCake = () => Import("https://cdn.jsdelivr.net/gh/Rabios/Cake/build/cake.js");