CreateCanvas(400,400);                    //Cake Can Avoid Missing Arguments Errors,As Of Version 2.3
Initialize();
SetDrawingMode("fill");
DrawRect(u,u,50,50);                      //u In Cake Game Framework Means undefined,I Made This Variable For Easiness
alert("Open compiler_01.js To Understand This Example!!!");
//Ok,Color Parameter Not Added That Means Is Not Defined,And x And y The Same,What Will Be Happened?
/*
x And y And Color Are undefined,So...
x And y Will Become 0(This New Feature Called Safe Running)
Color We Be Return To It's Origin(Black)
*/