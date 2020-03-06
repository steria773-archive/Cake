//Created By Rabia Alhaffar In 5/March/2020
/*
Music By Sheyvan At freesound.org (https://freesound.org/people/Sheyvan/)
https://freesound.org/s/470122/
This work is licensed under the Creative Commons 0 License.
*/
//A Game About Catching Apples With Basket LOL
//This Will Be The Tutorial For Cake
CreateCanvas(600,600,"white","3px black solid");
Initialize();
var basket_x = CanvasWidth / 3,basket_y = CanvasHeight - 64;
var apple_x = Math.floor(Math.random() * 17) * 30,apple_y = 36;
var score = 0,logo_alpha = 1,apple_speed = 5;
var background_source = "backskies.png",sound_playing = true;
SetDrawingMode("fill");
var StartButton = new Button(200,300,200,75,"START",
{
 'default': { top: "purple" , bottom: "violet" },
 'hover': { top: "purple" , bottom: "violet" },
 'active': { top: "purple" , bottom: "violet" }
},() =>
{
    PlayAudio("button_click.wav");
    Menu.Switch(Game);
});
var AboutButton = new Button(200,425,200,75,"ABOUT",
{
 'default': { top: "purple" , bottom: "violet" },
 'hover': { top: "purple" , bottom: "violet" },
 'active': { top: "purple" , bottom: "violet" }
},() =>
{
    PlayAudio("button_click.wav");
    Menu.Switch(About);
});
var BackButton = new Button(200,360,200,75,"BACK",
{
 'default': { top: "purple" , bottom: "violet" },
 'hover': { top: "purple" , bottom: "violet" },
 'active': { top: "purple" , bottom: "violet" }
},() =>
{
    PlayAudio("button_click.wav");
    About.Switch(Menu);
});

var Startup = new Level(() =>
{
    sound_playing = false;
    ClearCanvas();
    SetCanvasBackgroundImage(background_source);
    DrawRect(0,0,CanvasWidth,CanvasHeight,RGB(34,44,55));
    SetFont("40px Jura");
    DrawText(180,200,"MADE WITH","white","white","left",logo_alpha);
    DrawTexture("CAKE_APP_ICON.png",191,240,191,199,logo_alpha);
    setTimeout(() =>
    {
        logo_alpha -= 0.1;
    },1000);
    if(logo_alpha <= 0.0) 
    {
        Startup.Pause();
        setTimeout(() =>
        {
            Startup.Switch(Menu);
            PlayGameMusic();
        },0.01);
    }
},10);

var Menu = new Level(() =>
{
    sound_playing = true;
    ClearCanvas();
    SetCanvasBackgroundImage(background_source);
    SetFont("40px Jura");
    DrawText(150,100,"APPLE CATCHER",RandomColor(),RandomColor());
    StartButton.Update();
    AboutButton.Update();

},10);

var Game = new Level(() =>
{
    sound_playing = false;
    ClearCanvas();
    SetCanvasBackgroundImage(background_source);
    DrawTexture("basket.png",basket_x,basket_y,64,64);
    DrawTexture("apple.png",0,0,64,64);
    SetFont("40px Jura");
    DrawText(80,55,score,RandomColor(),RandomColor());
    DrawTexture("apple.png",apple_x,apple_y,64,64);
    if (basket_x >= 560) basket_x = 530;
    if (basket_x < 0) basket_x = 0;
    apple_y += apple_speed;


    if(apple_y > CanvasHeight) 
    {
        Game.Switch(Menu);
        score = 0;
        apple_y = 36;
        apple_x = Math.floor(Math.random() * 17) * 30;
    }


    if(CheckCollisionRectAdvanced(apple_x,apple_y,64,64,basket_x,basket_y,64,64)) 
    {
        score++;
        apple_y = 36;
        apple_x = Math.floor(Math.random() * 17) * 30;
        if(WAV()) PlayAudio("collect_apple.wav");
    }
    
    //Game Difficulty Options
    if(score > 10) apple_speed = 6;
    if(score > 20) apple_speed = 7;
    if(score > 30) apple_speed = 8;
    if(score > 40) apple_speed = 9,background_source = "backskies_night.png";
    if(score > 50) apple_speed = 10;
    if(score > 60) apple_speed = 11;    
    if(score > 70) apple_speed = 12;
    if(score > 80) apple_speed = 13;
    if(score > 90) apple_speed = 14;
    if(score > 100) apple_speed = 15;
        
},1000);

var About = new Level(() =>
{
    sound_playing = true;
    var txtcolor = "black";
    if(background_source == "backskies_night.png") txtcolor = "white";
    ClearCanvas();
    SetFont("40px Jura");
    DrawText(150,100,"APPLE CATCHER",RandomColor(),RandomColor());
    SetFont("20px Jura");
    DrawText(60,210,"CREATED BY RABIA ALHAFFAR AND HAEDER BELLAU",txtcolor);
    DrawText(140,260,"POWERED BY CAKE GAME ENGINE",txtcolor);
    SetFont("20px monospace");
    DrawText(120,310,"https://github.com/Rabios/Cake",txtcolor);
    SetFont("40px Jura");
    BackButton.Update();

},10);

document.addEventListener("keydown",(e) =>
{
    if(e.keyCode == 39 || e.key == "d") basket_x += 60;
    if(e.keyCode == 37 || e.key == "a") basket_x -= 60;
});

document.addEventListener("mousemove",(e) =>
{
    basket_x = e.clientX;
});

var PlayGameMusic = () =>
{
    setInterval(() =>
    {
        if(WAV() && sound_playing) PlayAudio("470122__sheyvan__apple-hits.wav");
    },1000);
};
Startup.Start();