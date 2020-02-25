# Calling Native Code In Cake Game Framework/Engine
Cake Has A Special Part Written Especially For Node.js And NW.js Named `native.js`,You Can Use It To Call Native Code From Desktop Devices(Windows,Mac,Linux)

## Example
```javascript

//native.js
var child_process = require("child_process");
var CallBatch = (script) =>           child_process.exec("start " + script);
var CallPython = (script) =>          child_process.exec("start python " + script);
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
var CallCSharpRoslyn = (script) =>    child_process.exec("start csc " + script);
var CallCSharpMono = (script) =>      child_process.exec("start mcs " + script);
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

//But We Add This Line:
CallPython("native.py");
```

```python

#native.py
print("Hello Native!!!")
input()

```

```batch

node native.js

```

## Languages Supported
1. Batch
2. Python
3. Janet
4. Node.js JavaScript
5. .NET JScript(Directly,Or To .exe,Or To .dll)
6. Pascal(Turbo Pascal And Free Pascal)
7. Ruby
8. Basic
9. Perl
10. Haxe
11. PHP
12. Ring
13. C#(Roslyn And Mono)
14. C++(VC++)
15. Java
16. CoffeeScript(Directly,Or Compile To JavaScript Code)
17. TypeScript
18. MoonScript(Directly,Or Compile To Lua Code)
19. Lua
20. Elixir
21. Nim
22. Boo
23. IronRuby
24. IronPython
25. JS++