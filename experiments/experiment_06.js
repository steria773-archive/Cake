CreateCanvas(WindowWidth,WindowHeight,"black");
Initialize();
SetDrawingMode("fill");
var s1 = new Square(200,200,50,"cyan");
var Scene_1 = new Level(() =>
{
ClearCanvas();
},1000);
document.addEventListener("devicemotion",(e) =>
{
	s1.Update();
	s1.Translate(e.accelerationIncludingGravity.x,e.accelerationIncludingGravity.y);
});
Scene_1.Start();