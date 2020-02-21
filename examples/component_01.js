CreateCanvas(400,400,u,"3px black solid");
Initialize();
var r1 = new Rectangle(180,180,20,20,"blue");
var Level_1 = new Level(function()
{
ClearCanvas();
r1.Update(); 
r1.Move("up",-10);
DrawFPS(Level_1);
},120);
Level_1.Start();