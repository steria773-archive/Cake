//Created By Rabia Alhaffar In 13/February/2020
var s1;
Initialize();
SetDrawingMode("fill");
s1 = new Square(cakecanvas.width - 40,0,40,RandomColor(),false);
var Scene_1 = new Level(() =>
{
    ClearCanvas();
    s1.Update();
    s1.SetInteractions(() => 
    {
        setInterval(() => { s1.color = RandomColor(),s1.size += 5,s1.x -= 5,s1.y += 5; },0);
    });
},720);
Scene_1.Start();