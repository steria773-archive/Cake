//Created By Rabia Alhaffar In 24/March/2020
//Breakout Game Made With Cake
CreateCanvas(WindowWidth - 20,WindowHeight - 20,"white");
Initialize();

var score = 0;
var bricks = [];
var lives = 3;
var classic_mode = confirm("Enable Classic Breakout Mode?");
var bricks_each_x = 800 / 20;
var bricks_each_y = 800 / 40;
var bricks_x = 0;
var bricks_y = 60;
var player = 
{
    x: (CanvasWidth - 100) / 2,
    y: CanvasHeight - 25,
    width: 120,
};
var ball = new Circle(player.x + 45,player.y - 50,8,"yellow");
ball.speedX = Math.random() * 2;
ball.speedY = -2;

var rightPressed = false,leftPressed = false;

for(var i = 0;i < bricks_each_y;i++)
{
	for(z = 0;z < bricks_each_x;z++)
	{
        bricks.push(new Rectangle(bricks_x,bricks_y,40,20,RandomColor()));
		bricks_x = bricks_x + bricks_each_x;
	}
    bricks_x = 0
    bricks_y += bricks_each_y;
}

var Breakout = new Level(() =>
{
    ClearCanvas();
    for(var b = 0;b < bricks.length;b++)
    {
        bricks[b].Update();
        if(CheckCollisionCircleRect(ball,bricks[b]) && !bricks[b].destroyed)
        {
            bricks[b].Destroy();
            score++;
            if(classic_mode)
            {
                ball.speedY = -ball.speedY;
                for(var b = 0;b < bricks.length;b++)
                {
                    bricks[b].color = RandomColor();
                    bricks[b].stroke_color = bricks[b].color;
                }
            }
        }
        if(score == bricks.length - 120)
        {
            Breakout.Pause();
            alert("YOU WIN!!!\nTHANKS FOR PLAYING!!!");
            RestartGame();
        }
    }
    ball.Update();
    SetFont("30px monospace");
    DrawText(0,30,`SCORE: ${score}`,RandomColor());
    DrawText(CanvasWidth - 150,30,`LIVES: ${lives}`,RandomColor());
    DrawRect(player.x,player.y,player.width / 2,100,"dodgerblue");
    DrawRect(player.x + 50,player.y,player.width / 2,100,"dodgerblue");
    if(rightPressed) player.x += 10;
    if(leftPressed) player.x -= 10;
    if(Fullscreen) player.y = WindowHeight - 100;
    if(CheckCollisionCircleRightCanvas(ball))
    {
        ball.speedX = -ball.speedX;
        ball.speedY = +(ball.speedY);
    }
    if(CheckCollisionCircleLeftCanvas(ball))
    {
        ball.speedX = Math.abs(ball.speedX);
        ball.speedY = +ball.speedY;
    }
    if(ball.y > CanvasHeight + 50)
    {
        ball.x = player.x + 45;
        ball.y = player.y - 60;
        ball.speedX = Math.random() * 2;
        ball.speedY = -2;
        lives--;
    }
    if(CheckCollisionCircleTopCanvas(ball))
    {
        if(ball.x < (WindowWidth - 20) / 2) ball.speedY = -ball.speedY
        else ball.speedY = -ball.speedY;
    }
    if(CheckCollisionCircleRectAdvanced(ball.x,ball.y,ball.radius,player.x,player.y,120,100))
    {
        if(ball.x > player.x + 30) ball.speedX = Math.abs(Math.random() * 2);
        else ball.speedX = -Math.abs(Math.random() * 2);
        ball.speedY = -2;
    }
    if(lives <= 0)
    {
        Breakout.Pause();
        alert("GAME OVER!!!");
        RestartGame();
    }
    if(player.x < 0) player.x = 0;
    if(player.x > CanvasWidth - 100) player.x = CanvasWidth - 100;
},240);

document.addEventListener("keydown", keydown, false);
document.addEventListener("keyup", keyup, false);

function keydown(e) 
{
    if (e.key == "Right" || e.key == "ArrowRight" || e.keyCode == 39 || e.key == "d") rightPressed = true;
    if (e.key == "Left" || e.key == "ArrowLeft" || e.keyCode == 37 || e.key == "a") leftPressed = true;
}

function keyup(e) 
{
    if (e.key == "Right" || e.key == "ArrowRight" || e.keyCode == 39 || e.key == "d") rightPressed = false;
    if (e.key == "Left" || e.key == "ArrowLeft" || e.keyCode == 37 || e.key == "a") leftPressed = false;
}

cakecanvas.onclick = () => ToggleFullscreen();
Breakout.Start();