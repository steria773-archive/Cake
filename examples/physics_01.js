	    CreateCanvas(500,425,u,"3px black solid");
		Initialize();
        var player = new Rectangle(200,300,40,40,"blue");
        var box = new Rectangle(300,300,40,40,"red");
        var Level_1 = new Level(function()
		{
           ClearCanvas();
           player.Update();
           box.Update();
           if(CheckCollisionRect(player,box))
           {
               player.color = "green";
               console.log("Collision Detected!!!");
           }
           else player.color = "blue";
            },120);
       var MovePlayer = () => player.speedX = 3;
       function StopPlayer()
       {
       if(player.speedX != 0)
       {
           player.speedX = 0;
           var b1 = document.getElementById("mobile_controls");
           b1.innerHTML = "Move Player(Mobile Devices)";
           b1.style.color = "cyan";
       }
       else if(player.speedX == 0)
       {
           player.speedX = 3;
           var b1 = document.getElementById("mobile_controls");
           b1.innerHTML = "Stop Player(Mobile Devices)";
           b1.style.color = "red";
       }
       }
       Level_1.Start();
//Game Controls
document.addEventListener("keydown",(e) =>
{
    if(e.key == "w" || e.keyCode == 38) player.speedX = 0,player.speedY = -3;
    if(e.key == "s" || e.keyCode == 40) player.speedX = 0,player.speedY = 3;
    if(e.key == "a" || e.keyCode == 37) player.speedX = -3,player.speedY = 0;
    if(e.key == "d" || e.keyCode == 39) player.speedX = 3,player.speedY = 0;
    if(e.key == "q") player.Stop();
});