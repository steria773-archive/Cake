           Initialize();
           var player_x = 0,player_y = 190;
           var player = new Rectangle(player_x,player_y,30,30,"blue");
           var e_1 = new Rectangle(100,300,30,30,"red");
           var e_2 = new Rectangle(200,175,30,30,"red");
           var e_3 = new Rectangle(300,350,30,30,"red");
           var e_4 = new Rectangle(350,125,30,30,"red");
           var e_5 = new Rectangle(350,250,30,30,"red");
           var j_1 = new Rectangle(100,400,60,30,"green");
           var j_2 = new Rectangle(200,400,60,30,"green");
           var j_3 = new Rectangle(300,400,60,30,"green");
           var j_4 = new Rectangle(100,0,60,30,"green");
           var j_5 = new Rectangle(200,0,60,30,"green");
           var j_6 = new Rectangle(300,0,60,30,"green");
           var j_7 = new Rectangle(450,100,30,60,"green");
           var j_8 = new Rectangle(450,250,30,60,"green");
           var j_9 = new Rectangle(0,100,30,60,"green");
           var j_10 = new Rectangle(0,250,30,60,"green");
           var gold_coin = new Rectangle(450,190,30,30,"yellow");
            var Level_1 = new Level(function()
			{
			 ClearCanvas();
            player.x = player_x;
            player.y = player_y;
            e_1.speedY = -8;
            e_2.speedY = 8;
            e_3.speedY = -8;
            e_4.speedX = -8;
            e_5.speedX = 8;
            player.Update();
            e_1.Update();
            e_2.Update();
            e_3.Update();
            e_4.Update();
            e_5.Update();
            j_1.Update();
            j_2.Update();
            j_3.Update();
            j_4.Update();
            j_5.Update();
            j_6.Update();
            j_7.Update();
            j_8.Update();
            j_9.Update();
            j_10.Update();
            gold_coin.Update();
            Mousetrap.bind(["d","right"],function(){ MovePlayerPC(); });
            Mousetrap.bind(["a","left"],function(){ BackPlayerPC();  });
            if(CheckCollisionRect(player,gold_coin))
            {
            alert("You Win The Game!!!");
            alert("Thanks For Playing!!!");
            console.log("You Win The Game,Thanks For Playing!!!\nRestarting The Game...");
            player_x = 0;
            player_y = 190;
            }
            if(CheckCollisionRect(e_1,j_1) || CheckCollisionRect(e_1,j_4)) e_1.y += 300;
            if(CheckCollisionRect(e_2,j_2) || CheckCollisionRect(e_2,j_5)) e_2.y -= 300;
            if(CheckCollisionRect(e_3,j_3) || CheckCollisionRect(e_3,j_6)) e_3.y += 300;
            if(CheckCollisionRect(e_4,j_7) || CheckCollisionRect(e_4,j_9)) e_4.x += 350;
            if(CheckCollisionRect(e_5,j_8) || CheckCollisionRect(e_5,j_10))e_5.x -= 350;
            if(
            CheckCollisionRect(player,e_1) ||
            CheckCollisionRect(player,e_2) ||
            CheckCollisionRect(player,e_3) ||
            CheckCollisionRect(player,e_4) ||
            CheckCollisionRect(player,e_5) ||
            CheckCollisionRect(player,j_1) ||
            CheckCollisionRect(player,j_2) ||
            CheckCollisionRect(player,j_3) ||
            CheckCollisionRect(player,j_4) ||
            CheckCollisionRect(player,j_5) ||
            CheckCollisionRect(player,j_6) ||
            CheckCollisionRect(player,j_7) ||
            CheckCollisionRect(player,j_8) ||
            CheckCollisionRect(player,j_9) ||
            CheckCollisionRect(player,j_10)
            )
            { 
            console.log("You Lose!!!\nRestarting The Game...");
            player_x = 0;
            player_y = 190;
            }
			},120);
            function MovePlayer()
            {
            player_x += 5;
            } 
            function MovePlayerPC()
            {
            player_x += 20;
            }
            function BackPlayerPC()
            {
            player_x -= 20;   
            }
Level_1.Start();