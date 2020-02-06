CreateCanvas(400,400,"3px black solid");
Initialize();
Title("Scrolling Graphics");
var player = new Rectangle(180,180,40,40,"blue");
var Level_1 = new Level(function()
{
ClearCanvas();
player.Update();
//Game Controls
Mousetrap.bind(["up","w"],function(){ player.speedY = -5; player.speedX = 0; });
Mousetrap.bind(["down","s"],function(){ player.speedY = 5; player.speedX = 0; });
Mousetrap.bind(["left","a"],function(){ player.speedX = -5;	player.speedY = 0; });
Mousetrap.bind(["right","d"],function(){ player.speedX = 5;	player.speedY = 0; });
Mousetrap.bind("q",function(){ player.Stop(); });
//Scrolling Side Idea
if(CheckCanvasCollisionBottom(player)) player.y = player.width;
if(CheckCanvasCollisionRight(player)) player.x = player.height;
if(CheckCanvasCollisionLeft(player)) player.x = CanvasWidth - player.width;
if(CheckCanvasCollisionTop(player)) player.y = CanvasHeight - player.height;
},120);
Level_1.Start();