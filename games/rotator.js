        //Created By Rabia Alhaffar In 20/April/2019
        //It Faces Problems In Pop-ups Alerts!!!
        //And Turning Each One Time Around The Level,Not Each Time You Turn,Do Click Double To Turn!!!
        /* Controls:
        PC: X To Turn , R To Restart Game If She Get Bugs,On PC:If You Get Lost The Tab Will Reloaded,Just Click Run To Play Again!!!
        Smartphones: Just The Button Called Turn!!!
        */
        CreateCanvas(400,400,"3px black solid");
		Initialize();
        var speedX = 0;
        var speedY = 0;
        var score = 0;
        var turn = 0;
        var player = new Rectangle(280,60,40,40,"black");
        var wall_1 = new Rectangle(0,0,400,40,"black");
        var wall_2 = new Rectangle(0,300,400,40,"black");
        var wall_3 = new Rectangle(0,20,40,300,"black");
        var wall_4 = new Rectangle(360,20,40,300,"black");
        var box_1 = new Rectangle(160,135,80,80,"black");
        var Level_1 = new Level(function()
		{
		ClearCanvas();
        player.x += speedX;
        player.y += speedY;
        player.Update();
        wall_1.Update();
        wall_2.Update();
        wall_3.Update();
        wall_4.Update();
        box_1.Update();
	    SetDrawingMode("fill");
        SetFont("40px Georgia bold");
	    DrawText(190,380,score,"black",u,"center");
        cakepen.fillText(score, 190, 380);
        Mousetrap.bind("x",() => { SetTurn(); });
        Mousetrap.bind("r",() => { RestartGame(); });
        if(CheckCollisionRect(player,wall_1) ||
           CheckCollisionRect(player,wall_2) ||
           CheckCollisionRect(player,wall_3) ||
           CheckCollisionRect(player,wall_4) ||
           CheckCollisionRect(player,box_1)) RestartGame();
		},120);
        function SetTurn()
        {
                if(turn == 0) { speedY = 0; speedX = -6;  setTimeout(function(){ turn++; score++;},1);}
                if(turn == 1) { speedY = 6; speedX = 0;  setTimeout(function(){ turn++; score++;},1);}
                if(turn == 2) { speedY = 0; speedX = 6;  setTimeout(function(){ turn++; score++;},1);}
                if(turn == 3) { speedY = -6; speedX = 0;  setTimeout(function(){ turn++; score++;},1);}
                if(turn == 4) { speedY = 0; speedX = -6; turn = 1; setTimeout(function(){ score++;},1);}
        }
		Level_1.Start();