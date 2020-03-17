//Created By Rabia Alhaffar In 21/February/2020
//A Way Of Integrating Cake With Another Game Engine/Framework
Initialize();
IntegrateWith("tululoo");   
var Level_1 = new Level(() =>
{

//By Tululoo Framework
draw_set_color(0,0,255);
draw_rectangle(100,100,400,400);   
draw_set_color(255,0,0);
draw_circle(600,200,50,0);  
        
//By Cake        
SetDrawingMode("fill");
DrawRect(600,300,100,100,"green");

},1000);
Level_1.Start();