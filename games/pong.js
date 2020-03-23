CreateCanvas(490,430,"black","3px black solid");
Initialize();
var ball_dx = 6,ball_dy = 0,p1_score = 0,p2_score = 0;
var player_1_1 = new Rectangle(440,150,30,80,"white");
var player_1_2 = new Rectangle(440,210,30,80,"white");
var player_2_1 = new Rectangle(20,120,30,80,"white");
var player_2_2 = new Rectangle(20,180,30,80,"white");
var ball = new Circle(235,200,10,"white");
var Level_1 = new Level(function()
{
    cakepen.clearRect(0,0,cakecanvas.width,cakecanvas.height);
    cakepen.fillStyle = "white",cakepen.font = "60px Georgia";
    cakepen.fillText(p2_score, 120, 60);
    cakepen.fillText(p1_score, 320, 60);
    ball.x += ball_dx,ball.y += ball_dy;
    player_1_1.Update(); player_1_2.Update(); //Player 1(Note That It Has 2 Parts)
    player_2_1.Update(); player_2_2.Update(); //Player 2(Note That It Has 2 Parts)
    ball.Update();
    if(CheckCollisionCircleRect(ball,player_1_1) || CheckCollisionCircleRect(ball,player_1_2)) ball_dx = -6,ball_dy = Math.floor(Math.random() * -10);
    if(CheckCollisionCircleRect(ball,player_2_1) || CheckCollisionCircleRect(ball,player_2_2)) ball_dx = 6,ball_dy = Math.floor(Math.random() * 10);
    if(CheckCollisionCircleRect(ball,player_1_1) || CheckCollisionCircleRect(ball,player_1_2)) ball_dx = -6,ball_dy = Math.floor(Math.random() * -10);
    if(CheckCollisionCircleRect(ball,player_2_1) || CheckCollisionCircleRect(ball,player_2_2)) ball_dx = 6,ball_dy = Math.floor(Math.random() * 10);
    if(CheckCollisionCircleLeftCanvas(ball))
    {
        p1_score++;
        console.log("Player 1 Score: " + Number(p1_score));
        ball_dx = 6,ball_dy = Math.floor(Math.random() * 10);
    }
    if(CheckCollisionCircleTopCanvas(ball)) ball_dx = -6,ball_dy = Math.floor(Math.random() * 10);
    if(CheckCollisionCircleBottomCanvas(ball)) ball_dx = 6,ball_dy = Math.floor(Math.random() * -10);
    if(CheckCollisionCircleRightCanvas(ball))
    {
        p2_score++; 
        console.log("Player 2 Score: " + Number(p2_score)); 
        ball_dx = -6,ball_dy = Math.floor(Math.random() * -10);
    }
},120);
Level_1.Start(); 
document.addEventListener("keydown",(e) =>
{
    if(e.key == "w") player_2_1.y -= 120,player_2_2.y -= 120;
    if(e.key == "s") player_2_1.y += 120,player_2_2.y += 120;
    if(e.keyCode == 38) player_1_1.y -= 120,player_1_2.y -= 120;
    if(e.keyCode == 40) player_1_1.y += 120,player_1_2.y += 120;
});