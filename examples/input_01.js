CreateCanvas(400,400,"3px black solid");
	Initialize();
	var player = new Rectangle(200,200,20,20,"blue");
	var Level_1 = new Level(function()
	{
	       ClearCanvas();
	       player.Update();
	       Mousetrap.bind(["w","up"],function(){player.speedX = 0;    player.speedY = -3;});
	       Mousetrap.bind(["a","left"],function(){player.speedX = -3; player.speedY = 0;});
	       Mousetrap.bind(["s","down"],function(){player.speedX = 0;  player.speedY = 3;});
	       Mousetrap.bind(["d","right"],function(){player.speedX = 3; player.speedY = 0;});
	       Mousetrap.bind(["q","space"],function(){player.speedX = 0; player.speedY = 0;}); 
	    },120);
	Level_1.Start();