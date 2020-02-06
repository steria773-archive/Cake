	CreateCanvas(625,1350,"3px black solid");
    Initialize();
    var Launchpad_Scene = new Level(function()
    {	
    DrawSuperFilledGrid(5);
    DrawFPS(Launchpad_Scene);
    },1000);
    Launchpad_Scene.Start();