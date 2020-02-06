	    CreateCanvas(500,425,"3px black solid");
		Initialize();
        var player = new Rectangle(200,300,40,40,"blue");
        var box = new Rectangle(300,300,40,40,"red");
        var Level_1 = new Level(function()
		{
           ClearCanvas();
           player.Update();
           box.Update();
           Mousetrap.bind(["w","up"],function(){player.speedX = 0;    player.speedY = -3;});
           Mousetrap.bind(["a","left"],function(){player.speedX = -3; player.speedY = 0;});
           Mousetrap.bind(["s","down"],function(){player.speedX = 0;  player.speedY = 3;});
           Mousetrap.bind(["d","right"],function(){player.speedX = 3; player.speedY = 0;});
           Mousetrap.bind(["q","space"],function(){player.speedX = 0; player.speedY = 0;});
           if(CheckCollisionRect(player,box))
           {
               player.color = "green";
               console.log("Collision Detected!!!");
           }
           else player.color = "blue";
            },120);
       function MovePlayer()
       {
           player.speedX = 3;
       }
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