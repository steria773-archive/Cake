    var Random_X = Math.floor(Math.random() * 400);
    var Random_Y = Math.floor(Math.random() * 400);
    CreateCanvas(400,400,u,"black 3px solid");
    Initialize();
    SetDrawingMode("custom");
    var Scene_1 = new Level(function()
    {  
    DrawSquare(Random_X,Random_Y,50,RandomColor());
    Random_X = Math.floor(Math.random() * 400);
    Random_Y = Math.floor(Math.random() * 400);
    DrawFPS(Scene_1);
    },120);
    Scene_1.Start();