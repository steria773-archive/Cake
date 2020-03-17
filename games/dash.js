//Created By Rabia Alhaffar In 2/January/2020
//Made With Cake Game Framework,Version 2.3
//How To Play: Up And Down Arrow Or W And S To Move
//Do Not Get Hitted By The Red Rectangles,Good Luck!!!
var score = 0;
CreateCanvas(400,400,u,"3px black solid");
Initialize();
SetDrawingMode("fill");
var player = new Rectangle(40,200,40,40,"blue");
var r1 = new Rectangle(360,200,40,40,"red");
var r2 = new Rectangle(360,160,40,40,"red");
var r3 = new Rectangle(360,40,40,40,"red");
var r4 = new Rectangle(360,280,40,40,"red");
var r5 = new Rectangle(360,320,40,40,"red");
var r6 = new Rectangle(360,360,40,40,"red");
var r7 = new Rectangle(360,80,40,40,"red");
var r8 = new Rectangle(360,120,40,40,"red");
var r9 = new Rectangle(360,240,40,40,"red");
var r10 = new Rectangle(360,400,40,40,"red");
var Menu = new Level(() =>
{
    ClearCanvas();
    SetFont("40px Georgia bold");
    DrawText(200,40,"DASH!!!","blue",u,"center");
    SetFont("20px Georgia bold");
    DrawText(200,360,"Hit X To Start Game","black",u,"center");
},120);
var Game = new Level(() =>
{
    score += 1;
    ClearCanvas();
    player.Update();
    r1.Update();
    r2.Update();
    r3.Update();
    r4.Update();
    r5.Update();
    r6.Update();
    r7.Update();
    r8.Update();
    r9.Update();
    r10.Update();
    r1.speedX = -6,r2.speedX = -6,r3.speedX = -6,r4.speedX = -6,r5.speedX = -6;
    r6.speedX = -6,r7.speedX = -6,r8.speedX = -6,r9.speedX = -6,r10.speedX = -6;
    if(CheckCollisionRect(player,r1) ||
       CheckCollisionRect(player,r2) ||
       CheckCollisionRect(player,r3) ||
       CheckCollisionRect(player,r4) ||
       CheckCollisionRect(player,r5) ||
       CheckCollisionRect(player,r6) ||
       CheckCollisionRect(player,r7) ||
       CheckCollisionRect(player,r8) ||
       CheckCollisionRect(player,r9) ||
       CheckCollisionRect(player,r10))
       {
           Game.Pause();
           alert("Your Score Is: " + score + "\nThanks For Playing!!!");
           Game.Switch(Menu);
        }
    if(CheckCanvasCollisionTop(player)) player.y += 40;
    if(CheckCanvasCollisionBottom(player)) player.y -= 40;
    if(CheckCanvasCollisionLeft(r1)) r1.Translate(CanvasWidth - Math.floor(Math.random() * 2) * 40,Math.floor(Math.random() * 10) * 40);
    if(CheckCanvasCollisionLeft(r2)) r2.Translate(CanvasWidth - Math.floor(Math.random() * 2) * 40,Math.floor(Math.random() * 10) * 40);
    if(CheckCanvasCollisionLeft(r3)) r3.Translate(CanvasWidth - Math.floor(Math.random() * 2) * 40,Math.floor(Math.random() * 10) * 40);
    if(CheckCanvasCollisionLeft(r4)) r4.Translate(CanvasWidth - Math.floor(Math.random() * 2) * 40,Math.floor(Math.random() * 10) * 40);
    if(CheckCanvasCollisionLeft(r5)) r5.Translate(CanvasWidth - Math.floor(Math.random() * 2) * 40,Math.floor(Math.random() * 10) * 40);
    if(CheckCanvasCollisionLeft(r6)) r6.Translate(CanvasWidth - Math.floor(Math.random() * 2) * 40,Math.floor(Math.random() * 10) * 40);
    if(CheckCanvasCollisionLeft(r7)) r7.Translate(CanvasWidth - Math.floor(Math.random() * 2) * 40,Math.floor(Math.random() * 10) * 40);
    if(CheckCanvasCollisionLeft(r8)) r8.Translate(CanvasWidth - Math.floor(Math.random() * 2) * 40,Math.floor(Math.random() * 10) * 40);
    if(CheckCanvasCollisionLeft(r9)) r9.Translate(CanvasWidth - Math.floor(Math.random() * 2) * 40,Math.floor(Math.random() * 10) * 40);
    if(CheckCanvasCollisionLeft(r10)) r10.Translate(CanvasWidth - Math.floor(Math.random() * 2) * 40,Math.floor(Math.random() * 10) * 40);
    DrawFPS(Game);
    if(Opera) Game.fps = 60;
    if(!Opera) Game.fps = 120;
},120);
var Reassign = () =>
{
    r1.Translate(CanvasWidth - Math.floor(Math.random() * 2) * 40,Math.floor(Math.random() * 10) * 40);
    r2.Translate(CanvasWidth - Math.floor(Math.random() * 2) * 40,Math.floor(Math.random() * 10) * 40);
    r3.Translate(CanvasWidth - Math.floor(Math.random() * 2) * 40,Math.floor(Math.random() * 10) * 40);
    r4.Translate(CanvasWidth - Math.floor(Math.random() * 2) * 40,Math.floor(Math.random() * 10) * 40);
    r5.Translate(CanvasWidth - Math.floor(Math.random() * 2) * 40,Math.floor(Math.random() * 10) * 40);
    r6.Translate(CanvasWidth - Math.floor(Math.random() * 2) * 40,Math.floor(Math.random() * 10) * 40);
    r7.Translate(CanvasWidth - Math.floor(Math.random() * 2) * 40,Math.floor(Math.random() * 10) * 40);
    r8.Translate(CanvasWidth - Math.floor(Math.random() * 2) * 40,Math.floor(Math.random() * 10) * 40);
    r9.Translate(CanvasWidth - Math.floor(Math.random() * 2) * 40,Math.floor(Math.random() * 10) * 40);
    r10.Translate(CanvasWidth - Math.floor(Math.random() * 2) * 40,Math.floor(Math.random() * 10) * 40);
};
document.addEventListener("keydown",(e) =>
{
    if(e.key && e.key == "x")
    {
        player.Translate(40,200);
        score = 0; 
        Menu.Switch(Game); 
        Reassign();
    }
    if(e.key == "w" || e.keyCode == 38) player.y -= 40;
    if(e.key == "s" || e.keyCode == 40) player.y += 40;
});
Reassign();
Menu.Start();
