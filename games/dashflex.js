//Created By Rabia Alhaffar In 21/March/2020
//DASHFLEX Game
CreateCanvas(WindowWidth - 20,WindowHeight - 32,"black","3px black solid");
Initialize();
var obstacles = [];
var player = new Square(0,0,16,"white");
for(var o = 0;o < 48;o++) obstacles.push(new Square(Math.floor(Math.random() * 25) * 64 + 256,Math.floor(Math.random() * 15) * 64 - 192,48,"white"));
player.speedX = 5,player.speedY = 5,score = 0;
var DASHFLEX = new Level(() =>
{
    ClearCanvas();
    player.Update();
    for(var o = 0;o < obstacles.length;o++)
    {
        SetFont("160px Monospace");
        DrawText(0,CanvasHeight / 2,Math.floor(score),RandomColor());
        obstacles[o].color = RandomColor();
        obstacles[o].Update();
        if(CheckCollisionRect(player,obstacles[o])) RestartGame();
        if(CheckCanvasCollisionTop(player)) player.speedY = Math.abs(player.speedY);
        if(CheckCanvasCollisionBottom(player)) player.speedY = -Math.abs(player.speedY);
        if(CheckCanvasCollisionRight(player))
        {
            for(var o = 0;o < obstacles.length;o++)
            {
                obstacles[o].x = Math.floor(Math.random() * 25) * 64 + 256;
                obstacles[o].y = Math.floor(Math.random() * 15) * 64 - 192;
            }
            player.x = 0; score++;
        }
    }
},240);
window.addEventListener("keydown",(e) =>
{
    if(e.keyCode == 32) player.speedY = -(player.speedY);
    score++;
});
window.addEventListener("click",() => { player.speedY = -(player.speedY); score++; });
window.addEventListener("touchstart",() => { player.speedY = -(player.speedY); score++; });
window.addEventListener("touchmove",() => { player.speedY = -(player.speedY); score++; });
DASHFLEX.Start();