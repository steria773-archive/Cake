CreateCanvas(400,400,u,"3px black solid");
Initialize();
Title("Scrolling Graphics");
var player = new Rectangle(180,180,40,40,"blue");
var Level_1 = new Level(function()
{
ClearCanvas();
player.Update();
//Scrolling Side Idea
if(CheckCanvasCollisionBottom(player)) player.y = player.width;
if(CheckCanvasCollisionRight(player)) player.x = player.height;
if(CheckCanvasCollisionLeft(player)) player.x = CanvasWidth - player.width;
if(CheckCanvasCollisionTop(player)) player.y = CanvasHeight - player.height;
},120);
Level_1.Start();
//Game Controls
document.addEventListener("keydown",(e) =>
{
    if(e.key == "w" || e.keyCode == 38) player.speedY = -5,player.speedX = 0;
    if(e.key == "s" || e.keyCode == 40) player.speedY = 5,player.speedX = 0;
    if(e.key == "a" || e.keyCode == 37) player.speedX = -5,player.speedY = 0;
    if(e.key == "d" || e.keyCode == 39) player.speedX = 5,player.speedY = 0;
    if(e.key == "q") player.Stop();
});