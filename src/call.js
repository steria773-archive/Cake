//Created By Rabia Alhaffar In 22/January/2020
//A Funny Part Of The Engine To Call(Compile,Execute,Run) Native Code In Fact!!!
/*

Notes About Native Calling Here:

1- Scripts Can Call Itself!!! 
2- Calling Scripts May Open Windows Of Command Prompt!!!  
3- C# Compiling Uses Roslyn Compiler!!!   
4- Basic Compiling Uses FreeBasic,And Pascal Compiling Uses FreePascal!!! 
5- C++ Compiling Uses Visual C++ 2015 Native!!!
6- Calling Haxe Code Is In Development!!!
7- More Updates Will Come To Nim Calling Soon!!! 
8- You Need To Mention The Full File Location/Address
9- If Compiler Is In Different Location,See Line 45 With Following Rule 8!!!

*/
var child_process = require("child_process");
var CallBatch = (script) =>           child_process.exec("start " + script);
var CallPython = (script) =>          child_process.exec("start python " + [script]);
var CallJanet = (script) =>           child_process.exec("start janet " + script);
var CallScript = (script) =>          child_process.exec("start node " + script);
var CallJSC = (script) =>             child_process.exec("start jsc " + script);     
var CallJSCEXE = (script) =>          child_process.exec("start jsc /t:winexe " + script);
var CallJSCDLL = (script) =>          child_process.exec("start jsc /t:library " + script);
var CallPascal = (script) =>          child_process.exec("start fpc " + script);
var CallRuby = (script) =>            child_process.exec("start ruby " + script);
var CallBasic = (script) =>           child_process.exec("start fbc " + script);
var CallPerl = (script) =>            child_process.exec("start perl " + script);
var CallHaxe = (lang,script) =>       child_process.exec("start haxe -" + lang + " out " + script);
var CallPHP = (script) =>             child_process.exec("start php " + script);
var CallRing = (script) =>            child_process.exec("start ring " + script);
var CallCSharp = (script) =>          child_process.exec("start csc " + script);
var CallCPP = (script) =>             child_process.exec("start cl /EHsc /W4 " + script);
var CallJava = (script) =>            child_process.exec("start java " + script);
var CallCoffee = (script) =>          child_process.exec("start coffee " + script);
var CallCoffeeJS = (script) =>        child_process.exec("start coffee -c -b " + script);
var CallTS = (script) =>              child_process.exec("start tsc " + script);
var CallMoonscript = (script) =>      child_process.exec("start moon " + script);
var CallMoonscriptLua = (script) =>   child_process.exec("start moonc " + script);
var CallLua = (script) =>             child_process.exec("start lua " + script);
var CallElixir = (script) =>          child_process.exec("start erl " + script);
var CallNim = (script) =>             child_process.exec("start nim c -r" + script);
var CallBoo = (script) =>             child_process.exec("start booc " + script);
var CallIR = (script) =>              child_process.exec("start ir " + script);
var CallIPY = (script) =>             child_process.exec("start ipy " + script);
var CallTP = (script) =>              child_process.exec("start tpc " + script); 
var CallJSPP = (script) =>            child_process.exec("start js++ " + script);
var Call = (compiler,script) =>       child_process.exec("start " + compiler + " " + script);
var Start = (loc) =>                  child_process.exec("start " + loc);