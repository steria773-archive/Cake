//Created By Rabia Alhaffar In 3/January/2020
CreateCanvas(1350,650,"black");
Initialize();
var lasers = [];
for(var e = 0;e < 20;e++) lasers.push(new Rectangle(RandomX,RandomY,200,40,"blue"));
var Scene_1 = new Level(() =>
{
ClearCanvas();
for(var o = 0;o < lasers.length;o++)
{
    lasers[o].speedX = -10;
    lasers[o].Update();
    if(CheckCanvasCollisionLeft(lasers[o])) 
    {
        lasers[o].Translate(CanvasWidth - Math.floor(Math.random() * 10) * 80,Math.floor(Math.random() * CanvasHeight));
        lasers[o].alpha = Math.random();
    }
}
},120);
var Setup = () =>
{
for(var o = 0;o < lasers.length;o++)
{
    lasers[o].alpha = Math.random();
    lasers[o].Translate(CanvasWidth - Math.floor(Math.random() * 10) * 80,Math.floor(Math.random() * CanvasHeight));
}
};
Setup();
Scene_1.Start();