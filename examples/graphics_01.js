CreateCanvas(350,400,u,"3px black solid");
Initialize();
SetDrawingMode("fill");
SetFont("20px arial");
var x = 0,y = 0,h = 50,w = 50;
for(i = 0;i < 7;i++)
{
DrawRect(x,y,h,w,"red");
DrawRect(x += 50,y,h,w,"orange");
DrawRect(x += 50,y,h,w,"yellow");
DrawRect(x += 50,y,h,w,"green");
DrawRect(x += 50,y,h,w,"blue");
DrawRect(x += 50,y,h,w,"pink");
DrawRect(x += 50,y,h,w,"purple");
y += 50;
x = 0;
}
DrawText(35,375,"Made With Cake Game Engine!!!","black","center");