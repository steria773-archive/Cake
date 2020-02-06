 CreateCanvas(490,430,"3px black solid");
	  Initialize();
      var ball_dx = 20;
      var ball_dy = 0;
      var p1_score = 0;
      var p2_score = 0;
      var player_1_1 = new Rectangle(440,150,30,80,"blue");
      var player_1_2 = new Rectangle(440,210,30,80,"blue");
      var player_2_1 = new Rectangle(20,120,30,80,"red");
      var player_2_2 = new Rectangle(20,180,30,80,"red");
      var ball = new Rectangle(235,200,30,30,"gray");
      var Level_1 = new Level(function()
           {
               cakepen.clearRect(0,0,cakecanvas.width,cakecanvas.height);
               cakepen.fillStyle = "red";
               cakepen.font = "60px Georgia";
               cakepen.fillText(p2_score, 120, 60);
               cakepen.fillStyle = "blue";
               cakepen.fillText(p1_score, 320, 60);
               ball.x += ball_dx;
               ball.y += ball_dy;
               player_1_1.Update();
               player_1_2.Update();
               player_2_1.Update();
               player_2_2.Update();
               ball.Update();
               Mousetrap.bind("up",function(){ player_1_1.y -= 120; player_1_2.y -= 120; });
               Mousetrap.bind("down",function(){ player_1_1.y += 120; player_1_2.y += 120; });
               Mousetrap.bind("w",function(){ player_2_1.y -= 120; player_2_2.y -= 120; });
               Mousetrap.bind("s",function(){ player_2_1.y += 120; player_2_2.y += 120; });
               if(CheckCollisionRect(player_1_1,ball) || CheckCollisionRect(player_1_2,ball)) { ball_dx = -10; ball_dy = Math.floor(Math.random() * -10); }
               if(CheckCollisionRect(player_2_1,ball) || CheckCollisionRect(player_2_2,ball)) { ball_dx = 10; ball_dy = Math.floor(Math.random() * 10); }
               if(CheckCollisionRect(ball,player_1_1) || CheckCollisionRect(ball,player_1_2)) { ball_dx = -10; ball_dy = Math.floor(Math.random() * -10); }
               if(CheckCollisionRect(ball,player_2_1) || CheckCollisionRect(ball,player_2_2)) { ball_dx = 10; ball_dy = Math.floor(Math.random() * 10); }
               if(CheckCanvasCollisionLeft(ball)) { p1_score++; console.log("Player 1 Score: " + Number(p1_score)); ball_dx = 10; ball_dy = Math.floor(Math.random() * 10); }
               if(CheckCanvasCollisionTop(ball)) { ball_dx = -10; ball_dy = Math.floor(Math.random() * 10); }
               if(CheckCanvasCollisionBottom(ball)) { ball_dx = 10; ball_dy = Math.floor(Math.random() * -10); }
               if(CheckCanvasCollisionRight(ball)) { p2_score ++; console.log("Player 2 Score: " + Number(p2_score)); ball_dx = -10; ball_dy = Math.floor(Math.random() * -10); }
           },120);
		   Level_1.Start();