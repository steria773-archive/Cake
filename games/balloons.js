//Created By Rabia Alhaffar In 30/March/2020
//Balloons Game,A Simple Game Made With Cake
/*
Special Thanks To:

LivingMidnight (Kerri Coombs) At OpenGameArt.org For Using Some Sprites

https://opengameart.org/content/sprites-from-porcupop
Licensed Under Creative Commons 3.0 License (CC-BY-SA 3.0)


Gniffelbaf At freesound.org For Using Balloon Popping Sound

https://freesound.org/people/Gniffelbaf/sounds/82120/
This work is licensed under the Creative Commons 0 License.
*/

//Creating Game Canvas With Initializing
CreateCanvas(640,640,"dodgerblue");
Initialize();

//Score,Balloon Speed
var score = 0,balloon_speed = 6;

//Balloons Images
var balloons = 
[
    "balloon_black.png",
    "balloon_blue.png",
    "balloon_red.png",
    "balloon_green.png"
];

//Creating Balloon Using Texture Component And Set Balloon Image To Random One 
var balloon = new Texture(balloons[Math.floor(Math.random() * 4)],Math.floor(Math.random() * 10) * 64,CanvasHeight + 64,64,64);

var balloons_game = new Level(() =>
{
    //Increasing Balloon Speed
    balloon_speed += 0.001;

    //Clearing Graphics
    ClearCanvas();

    //Drawing Score
    SetFont("80px Cambria");
    DrawText(CanvasWidth / 2.2,80,score,"white");

    //Updating Balloon With Moving Him Up (Note The Decrease)
    balloon.speedY = -balloon_speed;
    balloon.Update();

    //If Balloon Clicked Or Touched
    balloon.SetInteractions(() =>
    {
        //Play Sound
        if(WAV()) PlayAudio("82120__gniffelbaf__balloon-burst-06.wav");

        //Increase Score
        score++;

        //Reset Balloon Position,And Set Image To Random One Again
        balloon.x = Math.floor(Math.random() * 10) * 64;
        balloon.y = CanvasHeight + 64;
        balloon.img.src = balloons[Math.floor(Math.random() * 4)];
    });

    //If Player Failed To Catch Balloon
    if(CheckCanvasCollisionTop(balloon))
    {
        //Stop Level With Alerting The User
        balloons_game.Pause();
        alert("GAME OVER!!!");
        
        //Restart Game
        RestartGame();
    }
});

//Start Game
balloons_game.Start();