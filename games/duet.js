//Created By Rabia Alhaffar In 10/March/2020
//Duet Game Example
CreateCanvas(300,600,"black","3px silver solid");
Initialize();
var ball_speed = 0,ball_angle = 0,ring_size = 100,score = 0,rotateLeftPressed = false,rotateRightPressed = false,fall_speed = 5;
var white_rect_x = Math.floor(Math.random() * CanvasWidth),white_rect_y = 0,white_rect_w = 80,white_rect_h = 80;

var Menu = new Level(() =>
{

    ClearCanvas();

    //Drawing Title
    SetFont("40px Jura");
    DrawText(CanvasWidth / 2,60,"DUET","white","white","center");

    //Drawing "Press X To Start Game"
    SetFont("20px Jura");
    DrawText(CanvasWidth / 2,CanvasHeight - 40,"Press X To Start Game","white","white","center");

    window.addEventListener("keydown",(e) =>
    {
        if(e.key == "x" && !Duet.started) 
        {
            ball_speed = 0,ball_angle = 0;
            Menu.Switch(Duet);
        }
    });

    //Interactive Menu
    SetDrawingMode("stroke");
    DrawCircle(CanvasWidth / 2,CanvasHeight / 2,ring_size,"white","white");

    SetDrawingMode("fill");
    //Blue Ball
    DrawArc(CanvasWidth / 2 + Math.cos(ball_angle += ball_speed) * ring_size, //Position X (Circular Movement)
            CanvasHeight / 2 + Math.sin(ball_angle += ball_speed) * ring_size, //Position Y (Circular Movement)
            15, //Size
            "blue","blue", //Colors
            0,2 * Math.PI); //Angles

    //Red Ball
    DrawArc(CanvasWidth / 2 + -Math.cos(ball_angle += ball_speed) * ring_size, //Position X (Circular Movement)
            CanvasHeight / 2 + -Math.sin(ball_angle += ball_speed) * ring_size, //Position Y (Circular Movement)
            15, //Size
            "red","red", //Colors
            0,2 * Math.PI); //Angles

    ball_speed = 0.01; //Balls Speed In Menu

},1000);

var Duet = new Level(() =>
{

    ClearCanvas();

    //Ring
    SetDrawingMode("stroke");
    DrawCircle(CanvasWidth / 2,CanvasHeight / 1.3,ring_size,"white","white");

    SetDrawingMode("fill");
    //Blue Ball
    DrawArc(CanvasWidth / 2 + Math.cos(ball_angle += ball_speed) * ring_size, //Position X (Circular Movement)
            CanvasHeight / 1.3 + Math.sin(ball_angle += ball_speed) * ring_size, //Position Y (Circular Movement)
            15, //Size
            "blue","blue", //Colors
            0,2 * Math.PI); //Angles

    //Red Ball
    DrawArc(CanvasWidth / 2 + -Math.cos(ball_angle += ball_speed) * ring_size, //Position X (Circular Movement)
            CanvasHeight / 1.3 + -Math.sin(ball_angle += ball_speed) * ring_size, //Position Y (Circular Movement)
            15, //Size
            "red","red", //Colors
            0,2 * Math.PI); //Angles

    //Score Text
    SetFont("40px Jura");
    DrawText(CanvasWidth / 2,60,Math.floor(score),"white","white","center");

    //White Rect (Wall)
    DrawRect(white_rect_x,white_rect_y,white_rect_w,white_rect_h,"white");
    white_rect_y += fall_speed;

    //Collision (Both Balls With Rect)
    if(CheckCollisionRectAdvanced(CanvasWidth / 2 + Math.cos(ball_angle += ball_speed) * ring_size,
                                  CanvasHeight / 1.3 + Math.sin(ball_angle += ball_speed) * ring_size,15,15,
                                  white_rect_x,white_rect_y,white_rect_w,white_rect_h) ||

       CheckCollisionRectAdvanced(CanvasWidth / 2 + -Math.cos(ball_angle += ball_speed) * ring_size,
                                  CanvasHeight / 1.3 + -Math.sin(ball_angle += ball_speed) * ring_size,15,15,
                                  white_rect_x,white_rect_y,white_rect_w,white_rect_h)) RestartGame();
                                
    //Collision (Rect With Bottom Of The Canvas) With Generating New Squares
    if(CheckCanvasCollisionBottomAdvanced(white_rect_y,white_rect_h))
       {
           white_rect_x = Math.floor(Math.random() * CanvasWidth) - white_rect_w / 2;
           white_rect_y = 0;
           white_rect_w = Math.floor(Math.random() * 60) * 3;
           white_rect_h = Math.floor(Math.random() * 20) * 5;
        }

    //Case Game Is Impossible To Complete!!!
    if(white_rect_h <= 60 ||
       white_rect_w <= 60 ||
       white_rect_w >= CanvasWidth / 2 ||
       white_rect_h >= 100)
       {
           white_rect_w = Math.floor(Math.random() * 60) * 3; 
           white_rect_h = Math.floor(Math.random() * 20) * 5;
       } 

    if(white_rect_x >= CanvasWidth) white_rect_x = CanvasWidth - Math.floor(Math.random() * white_rect_w);
    if(white_rect_x < 0) white_rect_x = 0;

    //Controls And Speed
    if(rotateLeftPressed) ball_angle -= 0.1;
    if(rotateRightPressed) ball_angle += 0.1;

    score += 0.01;

},1000);

//Controls Library
document.addEventListener("keydown", keydown, false);
document.addEventListener("keyup", keyup, false);

function keydown(e) 
{
    if (e.key == "Right" || e.key == "ArrowRight" || e.keyCode == 39) rotateRightPressed = true;
    if (e.key == "d") rotateRightPressed = true;   
    if (e.key == "Left" || e.key == "ArrowLeft" || e.keyCode == 37) rotateLeftPressed = true;
    if (e.key == "a") rotateLeftPressed = true;
}

function keyup(e) 
{
    if (e.key == "Right" || e.key == "ArrowRight" || e.keyCode == 39) rotateRightPressed = false;
    if (e.key == "d") rotateRightPressed = false;
    if (e.key == "Left" || e.key == "ArrowLeft" || e.keyCode == 37) rotateLeftPressed = false;
    if (e.key == "a") rotateLeftPressed = false;
}

Menu.Start();