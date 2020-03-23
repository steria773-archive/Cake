//Created By Rabia Alhaffar In 21/March/2020
//Flappy Cube
CreateCanvas(900,600,"dodgerblue");
Initialize();
var score = 0;
var pipex = Math.floor(Math.random() * 30) * 30 + 320;
var pipey = Math.floor(Math.random() * 30) * 20 + 320;
var pipey2 = -pipey / Math.floor(Math.random() * 3);
var px = 128,py = CanvasHeight / 2; 
var Flappy = new Level(() =>
{
    ClearCanvas();
    pipex -= 20,py += 3;
    DrawRect(pipex,pipey,32,320,"lime");
    DrawRect(pipex,pipey2,32,320,"lime");
    DrawCircle(px,py,16,"yellow");
    if(CheckCanvasCollisionLeftAdvanced(pipex,32))
    {
        pipex = Math.floor(Math.random() * 30) * 30 + 320;
        pipey = Math.floor(Math.random() * 30) * 20 + 320; 
        pipey2 = -pipey / Math.floor(Math.random() * 4),score++;
    }
    if(CheckCollisionCircleRectAdvanced(px,py,16,pipex,pipey,32,320) ||
       CheckCollisionCircleRectAdvanced(px,py,16,pipex,pipey2,32,320)) RestartGame(),score = 0;
    if(CheckCollisionCircleBottomCanvasAdvanced(py,3,16)) RestartGame();
},240);
Flappy.Start();
window.onclick = () => py -= 128;