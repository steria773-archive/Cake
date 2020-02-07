CreateCanvas(1350,625,"3px black solid");
Initialize();
var Launchpad_Scene = new Level(() =>
{	
DrawSuperFilledGrid(5);
DrawFPS(Launchpad_Scene);
},1000);
Launchpad_Scene.Start();