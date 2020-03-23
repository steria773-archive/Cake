//Created By Rabia Alhaffar In 18/January/2019
//A New Game - Dude ;)
CreateCanvas(1350, 650, u,"3px black solid");
Initialize();
SetDrawingMode("fill");
var psize = 60, score = 0;
var enemies = [];
//Adding 20 Enemies Using Loop And Push
for(var ep = 0;ep < 20;ep++) enemies.push(new Square(Math.floor(Math.random() * 360), Math.floor(Math.random() * 360), 40, RED));
for(var e = 0;e < enemies.length;e++) enemies[e].Force(Math.floor(Math.random() * 20), Math.floor(Math.random() * 20));
var Game = new Level(() => {
    score++;
    ClearCanvas();
    
    for(var eu = 0;eu < enemies.length;eu++) 
    {
        enemies[eu].Update();
        if (CheckCanvasCollisionRight(enemies[eu])) enemies[eu].Force(-(Math.floor(Math.random() * 20)), Math.floor(Math.random() * 20));
        if (CheckCanvasCollisionLeft(enemies[eu])) enemies[eu].Force(Math.floor(Math.random() * 20)), -(Math.floor(Math.random() * 20));
        if (CheckCanvasCollisionTop(enemies[eu])) enemies[eu].Force(Math.floor(Math.random() * 20)), Math.floor(Math.random() * 20); 
        if (CheckCanvasCollisionBottom(enemies[eu])) enemies[eu].Force(-(Math.floor(Math.random() * 20)), -(Math.floor(Math.random() * 20)));
    }

    cakecanvas.onmousemove = (e) => 
    {
        DrawSquare(e.clientX, e.clientY, psize, "blue");
        for (var ec = 0;ec < enemies.length;ec++)
        {
            if(CheckCollisionRectAdvanced(e.clientX, e.clientY, psize, psize, enemies[ec].x, enemies[ec].y, enemies[ec].height, enemies[ec].width)) psize--;
        }
        if(psize == 0)
        {
            Game.Pause();
            alert("Your Score Is: " + score + "\nThanks For Playing!!!");
            RestartGame();
        }
    }
},120);
Game.Start();