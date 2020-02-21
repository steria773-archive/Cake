CreateCanvas(400,400,u,"3px black solid");
	Initialize();
	var player = new Rectangle(200,200,20,20,"blue");
	var Level_1 = new Level(function()
	{
		ClearCanvas();
		player.Update();
	},120);
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