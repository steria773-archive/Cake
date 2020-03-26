//Created By Rabia Alhaffar In 24/March/2020
//Breakout Game Made With Cake

//Create Game Canvas To Be Compatible With Screen Size,With Initializing
CreateCanvas(WindowWidth - 20,WindowHeight - 20,"white");
Initialize();

//Hide Cursor
HideCursor();

var score = 0;
var bricks = [];
var bricks_color = RandomColor();
var lives = 3;

//For Bricks Creating Loop
var bricks_each_x = 800 / 20;
var bricks_each_y = 800 / 40;
var bricks_x = 0;
var bricks_y = 60;

//Player(Paddle) Properties
var player = 
{
    x: (CanvasWidth - 100) / 2,
    y: CanvasHeight - 25,
    width: 120,
};

//Ball
var ball = new Circle(player.x + 45,player.y - 50,8,"yellow");
ball.speedX = Math.random() * 2;
ball.speedY = -2;

var rightPressed = false,leftPressed = false; //For Game Controls
var ai_enabled = false; //Set This To true For Enabling AI

//Ask For Enabling Classic Mode
var classic_mode = confirm("Enable Classic Breakout Mode?");
var disco_mode = confirm("Enable Disco Mode?");


//For Screen Height...Screen Width -> Add Bricks Around Each bricks_each_x And bricks_each_y
for(var i = 0;i < bricks_each_y;i++)
{
	for(z = 0;z < bricks_each_x;z++)
	{
        if(disco_mode) bricks.push(new Rectangle(bricks_x,bricks_y,40,20,RandomColor()));
        else bricks.push(new Rectangle(bricks_x,bricks_y,40,20,bricks_color,"black"));
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
        //Update All Bricks And Draw Them From Array(See Line 46)
        bricks[b].Update();

        //When Collision With Any Bricks
        //Warning: If You Remove && !bricks[b].destroyed,The Game Will Treat Removed Blocks As Blocks Still In Game
        if(CheckCollisionCircleRect(ball,bricks[b]) && !bricks[b].destroyed)
        {
            bricks_color = RandomColor();
            //Destroy Bricks And Increase Score
            bricks[b].Destroy();
            score++;
            //If Classic Mode Enabled
            if(classic_mode)
            {
                //Reversing Velocity Y Of The Ball
                ball.speedY = -ball.speedY;
                for(var b = 0;b < bricks.length;b++)
                {
                    
                    //Make Coloring Effect For Bricks
                    if(!disco_mode)
                    {
                        bricks[b].color = bricks_color;
                        bricks[b].stroke_color = "black";
                    }
                    else
                    {
                        bricks[b].color = RandomColor();
                        bricks[b].stroke_color = bricks[b].color;
                    }
                }
            }
        }
        
        //If Player Won
        if(score == bricks.length - 120)
        {
            Breakout.Pause();
            alert("YOU WIN!!!\nTHANKS FOR PLAYING!!!");
            RestartGame();
        }
    }

    ball.Update();

    //Setting Font,Then Draw Score And Lives Text
    SetFont("30px monospace");
    DrawText(0,30,`SCORE: ${score}`,RandomColor());
    DrawText(CanvasWidth - 150,30,`LIVES: ${lives}`,RandomColor());

    //Drawing Player(Note That Player Divided Into 2 Parts)
    DrawRect(player.x,player.y,player.width / 2,100,"dodgerblue");
    DrawRect(player.x + 50,player.y,player.width / 2,100,"dodgerblue");

    //Controls
    if(rightPressed) player.x += 10;
    if(leftPressed) player.x -= 10;
    if(Fullscreen) player.y = WindowHeight - 100;

    //Collision Of Ball With Canvas Sides
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
    //If Ball Collided With The Paddle(Player)
    if(CheckCollisionCircleRectAdvanced(ball.x,ball.y,ball.radius,player.x,player.y,120,100))
    {
        //What Part Collided Of The Paddle,Is It Right Part,Do This!!!
        if(ball.x > player.x + 30) ball.speedX = Math.abs(Math.random() * 2);

        //Else(Left Part),Do This!!!
        else ball.speedX = -Math.abs(Math.random() * 2);

        //Continue
        ball.speedY = -2;
    }

    //When Lives Are 0,Player Loses The Game
    if(lives <= 0)
    {
        Breakout.Pause();
        alert("GAME OVER!!!");
        RestartGame();
    }

    //For Not Letting Player Get Out Of Game Canvas
    if(player.x < 0) player.x = 0;
    if(player.x > CanvasWidth - 100) player.x = CanvasWidth - 100;

    //Basic AI
    if(ai_enabled) player.x = ball.x;
},240);


//Keyboard Controls
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


//Mouse Controls
cakecanvas.onmousemove = (e) => player.x = e.clientX;

//If Player Clicked On Game Canvas,Game Is In Fullscreen Mode
cakecanvas.onclick = () => ToggleFullscreen();

Breakout.Start(); //Start Game