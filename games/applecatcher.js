//Created By Rabia Alhaffar In 5/March/2020
//A Game About Catching Apples With Basket LOL
//This Will Be The Tutorial For Cake
UpdateEngine();
CreateCanvas(600,600,"white","3px black solid");
Initialize();

//Basket Position
var basket_x = CanvasWidth / 3,basket_y = CanvasHeight - 64,basket_speed = 6;

//Apple Position And Speed
var apple_x = Math.floor(Math.random() * 17) * 30,apple_y = 36,apple_speed = 4;

//Browser Compatibility
if(Chrome || Opera || Safari) apple_speed = 1;

//Score,Splashscreen Alpha,And Sound Options
var score = 0,logo_alpha = 1,sound_enabled = true,background_source = "backskies.png";

//Controls Improved!!!
var leftPressed = false,rightPressed = false;

//Button Colors (Default,When Hover,When Clicked)
var button_colors = 
{
    'default': { top: "purple" , bottom: "violet" },
    'hover': { top: "purple" , bottom: "violet" },
    'active': { top: "purple" , bottom: "violet" }
};
 
SetDrawingMode("fill");

//Buttons
var StartButton = new Button(170,200,250,75,"START",button_colors,() =>
{
    if(WAV() && sound_enabled) PlayAudio("button_click.wav");
    Menu.Switch(Game);
});
var SettingsButton = new Button(170,325,250,75,"SETTINGS",button_colors,() =>
{
    if(WAV() && sound_enabled) PlayAudio("button_click.wav");
    Menu.Switch(Settings);
});
var AboutButton = new Button(170,450,250,75,"ABOUT",button_colors,() =>
{
    if(WAV() && sound_enabled) PlayAudio("button_click.wav");
    Menu.Switch(About);
});
var ClearDataButton = new Button(170,235,250,75,"CLEAR DATA",button_colors,() =>
{
    if(WAV() && sound_enabled) PlayAudio("button_click.wav");
    if (confirm("Clear Game Data?")) 
    {
        localStorage.highscore = Number(0);
        alert("Game Data Cleared Successfully!!!");
    }
});
var SoundsButton = new Button(170,360,250,75,"MUTE",button_colors,() =>
{
    if(WAV() && sound_enabled) PlayAudio("button_click.wav");
    if(sound_enabled) sound_enabled = false;
    alert("Game Sounds Muted!!!");
});
var BackButton = new Button(170,485,250,75,"BACK",button_colors,() =>
{
    if(WAV() && sound_enabled) PlayAudio("button_click.wav");
    //Check Level/Scene To Go Back (We Don't Want Multiple Buttons)
    if(About.played) About.Switch(Menu);
    if(Settings.played) Settings.Switch(Menu);
});

var Startup = new Level(() =>
{

    ClearCanvas();
    SetCanvasBackgroundImage(background_source);
    DrawRect(0,0,CanvasWidth,CanvasHeight,RGB(34,44,55));
    SetFont("40px Jura");
    DrawText(180,200,"MADE WITH","white","white","left",logo_alpha);
    DrawTexture("CAKE_APP_ICON.png",191,240,191,199,logo_alpha);
    
    //Splashscreen Alpha
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
        },0.01);
    }
    
},10);

var Menu = new Level(() =>
{

    ClearCanvas();
    SetCanvasBackgroundImage(background_source);
    SetFont("40px Jura");
    DrawText(150,100,"APPLE CATCHER",RandomColor(),RandomColor());
    StartButton.Update();
    SettingsButton.Update();
    AboutButton.Update();

},10);

var Game = new Level(() =>
{

    ClearCanvas();
    SetCanvasBackgroundImage(background_source);
    DrawTexture("basket.png",basket_x,basket_y,100,64);
    DrawTexture("apple.png",0,5,64,64);
    SetFont("40px Jura");
    DrawText(80,55,score,RandomColor(),RandomColor());
    DrawText(330,55,"Highscore: " + localStorage.highscore,RandomColor(),RandomColor());
    DrawTexture("apple.png",apple_x,apple_y,64,64);
    if (basket_x >= 560) basket_x = 530;
    if (basket_x < 0) basket_x = 0;
    apple_y += apple_speed;


    if(apple_y > CanvasHeight) 
    {
        Game.Switch(Menu);
        basket_speed = 5,apple_speed = 4,score = 0,apple_y = 36,apple_x = Math.floor(Math.random() * 17) * 30;
        if(Chrome || Opera || Safari) apple_speed = 1;
        if(score > localStorage.highscore) localStorage.highscore = Number(score);
    }


    if(CheckCollisionRectAdvanced(apple_x,apple_y,64,64,basket_x,basket_y,64,64)) 
    {
        score++;
        apple_y = 36,apple_x = Math.floor(Math.random() * 17) * 30;
        if(MP3() && sound_enabled) PlayAudio("munch.mp3");
        if(score > localStorage.highscore) localStorage.highscore = Number(score);
    }
    
    //Game Difficulty Options
    if(Chrome || Opera || Safari) apple_speed += 0.00000002,basket_speed += 0.00000002;
    if(Firefox) apple_speed += 0.002,basket_speed += 0.002;

    //Game Backgrounds
    if(score > 40) background_source = "backskies_night.png";

    if(leftPressed) basket_x -= basket_speed;
    if(rightPressed) basket_x += basket_speed;

},1000);

var About = new Level(() =>
{
    
    var txtcolor = "black";
    if(background_source == "backskies_night.png") txtcolor = "white";
    ClearCanvas();
    SetFont("40px Jura");
    DrawText(150,100,"APPLE CATCHER",RandomColor(),RandomColor());
    SetFont("20px Jura");
    DrawText(50,210,"CREATED BY RABIA ALHAFFAR AND HAEDER BELLAU",txtcolor);
    DrawText(140,260,"POWERED BY CAKE GAME ENGINE",txtcolor);
    SetFont("20px monospace");
    DrawText(120,310,"https://github.com/Rabios/Cake",txtcolor);
    SetFont("40px Jura");
    BackButton.Update();

},10);
var Settings = new Level(() =>
{

    ClearCanvas();
    SetFont("40px Jura");
    DrawText(150,100,"APPLE CATCHER",RandomColor(),RandomColor());
    SoundsButton.Update();
    ClearDataButton.Update();
    BackButton.Update();

},10);

document.addEventListener("mousemove",(e) => { basket_x = e.clientX; });
document.addEventListener("touchmove",(e) => { basket_x = e.clientX; });
document.addEventListener("touchstart",(e) => { basket_x = e.clientX; });
document.addEventListener("keydown", keydown, false);
document.addEventListener("keyup", keyup, false);

//Controls Part
function keydown(e) 
{
    if (e.key == "Right" || e.key == "ArrowRight" || e.keyCode == 39) rightPressed = true;
    if (e.key == "d") rightPressed = true;   
    if (e.key == "Left" || e.key == "ArrowLeft" || e.keyCode == 37) leftPressed = true;
    if (e.key == "a") leftPressed = true;
}

function keyup(e) 
{
    if (e.key == "Right" || e.key == "ArrowRight" || e.keyCode == 39) rightPressed = false;
    if (e.key == "d") rightPressed = false;
    if (e.key == "Left" || e.key == "ArrowLeft" || e.keyCode == 37) leftPressed = false;
    if (e.key == "a") leftPressed = false;
}

if(Chrome || Opera || Safari) Game.fps /= 20;

Startup.Start();