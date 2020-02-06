CreateCanvas(400,400,"3px black solid");
Initialize(); 
Title("Game Levels System");
SetDrawingMode("fill");
var game_fps = 120;


var Level_1 = new Level(function()
{
ClearCanvas();
SetCanvasBackgroundColor("yellow");	
DrawFPS(Level_1);
SetFont("30px arial bold");
DrawText(50,200,"Welcome To The Summer!!!","black","center");
DrawText(50,240,"Wanna Change,Press 1","black","center");
Mousetrap.bind("1",function()
{ 
ClearCanvas();
Level_1.Switch(Level_2);
});
},game_fps); //game_fps Is The Frames Per Second!!!



var Level_2 = new Level(function()
{
ClearCanvas();
SetCanvasBackgroundColor("green");	
DrawFPS(Level_2);
SetFont("30px arial bold");
DrawText(50,200,"Welcome To The Spring!!!","black","center");
DrawText(50,240,"You Do Not Like It,Press 2","black","center");
Mousetrap.bind("2",function()
{ 
ClearCanvas();
Level_2.Switch(Level_3);
});	
},game_fps);



var Level_3 = new Level(function()
{
ClearCanvas();
SetCanvasBackgroundColor("orange");	
DrawFPS(Level_3);
SetFont("30px arial bold");
DrawText(50,200,"Welcome To The Automn!!!","black","center");
DrawText(50,240,"Wanna Change,Press 3","black","center");
Mousetrap.bind("3",function()
{ 
ClearCanvas();
Level_3.Switch(Level_4);
});	
},game_fps);



var Level_4 = new Level(function()
{
ClearCanvas();
SetCanvasBackgroundColor("white");
DrawFPS(Level_4);
SetFont("30px arial bold");	
DrawText(50,200,"Welcome To The Winter!!!","black","center");
DrawText(50,240,"Wanna Go Back,Press 4","black","center");
Mousetrap.bind("4",function()
{ 
ClearCanvas();
Level_4.Switch(Level_1);
});	
},game_fps);

Level_1.Start();

Mousetrap.bind("r",function(){ RestartGame(); });