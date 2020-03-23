//Created By Rabia Alhaffar In 21/March/2020
//A Game About Pushing Boxes To The Goal
//Note That This Is A Prototype
CreateCanvas(640,640,"lime");
Initialize();

//Letting Boxes And Goals As Array For Randoms
var boxes = [];
var goals = [];

//Creating Player
var player = new Texture("boxplayer.png",(Math.floor(Math.random() * 9) * 64) + 64,((Math.floor(Math.random() * 9) * 64) + 64) + 64,64,64);

//Adding Goals And Boxes With Letting Them Collidable
for(var g = 0;g < 5;g++)
{
    goals.push(new Square((Math.floor(Math.random() * 9) * 64) + 64,(Math.floor(Math.random() * 9) * 64) + 64,64,"lightgreen"));
    goals[g].collidable = true;
    boxes.push(new Texture("box.png",(Math.floor(Math.random() * 9) * 64) + 64,(Math.floor(Math.random() * 9) * 64) + 64,64,64))
    boxes[g].collidable = true;
}

var BoxGame = new Level(() =>
{
    ClearCanvas();
    //Updates All Goals With Checking If Boxes Are In The Goals Using Simple Collision
    for(var gc = 0;gc < goals.length;gc++)
    {
        goals[gc].Update();
        for(var dc = 0;dc < boxes.length;dc++)
        {
            if(CheckCollisionRect(boxes[dc],goals[dc])) console.log("You Win!!!");
            if(goals[dc].x > CanvasWidth - 64) goals[dc].x = CanvasWidth - 64;
            if(goals[dc].x < 0) goals[dc].x = 0;
            if(goals[dc].y >= CanvasHeight - 64) goals[dc].y = CanvasHeight - 64;
            if(goals[dc].y < 0) goals[dc].y = 0;
        };
    }

    //Updates Game Boxes,Goals And Player,With Adding Walls Around Canvas(If Everything Got Out Of The Canvas)
    for(var d = 0;d < boxes.length;d++)
    {
        boxes[d].Update();
        if(boxes[d].x > CanvasWidth - 64) boxes[d].x = CanvasWidth - 64;
        if(boxes[d].x < 0) boxes[d].x = 0;
        if(boxes[d].y >= CanvasHeight - 64) boxes[d].y = CanvasHeight - 64;
        if(boxes[d].y < 0) boxes[d].y = 0;
    }

    player.Update();
    if(player.x > CanvasWidth - 64) player.x = CanvasWidth - 64;
    if(player.x < 0) player.x = 0;
    if(player.y < 0) player.y = 0;
    if(player.y >= CanvasHeight - 64) player.y = CanvasHeight - 64;
},240);
BoxGame.Start();

window.addEventListener("keydown",(e) =>
{
    if(e.key == "w" || e.keyCode == 38) 
    {
        player.y -= 64;
        for(var d = 0;d < boxes.length;d++)
        {
            if(CheckCollisionRect(player,boxes[d])) boxes[d].y -= 64;
        }
    }
    if(e.key == "s" || e.keyCode == 40)
    {
        player.y += 64;
        for(var d = 0;d < boxes.length;d++)
        {
            if(CheckCollisionRect(player,boxes[d])) boxes[d].y += 64;
        }
    }
    if(e.key == "a" || e.keyCode == 37)
    {
        player.x -= 64;
        for(var d = 0;d < boxes.length;d++)
        {
            if(CheckCollisionRect(player,boxes[d])) boxes[d].x -= 64;
        }
    }
    if(e.key == "d" || e.keyCode == 39)
    {
        player.x += 64;
        for(var d = 0;d < boxes.length;d++)
        {
            if(CheckCollisionRect(player,boxes[d])) boxes[d].x += 64;
        }
    }
});