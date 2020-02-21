CreateCanvas(200,200,u,"3px black solid");
Initialize();
SetDrawingMode("fill");
var x = 0,y = 0,candy_x = 80,candy_y = 80;
for(a = 0;a < 10;a++)
{
for(i = 0;i < 10;i++)
{
DrawPixel(x,y,20,"brown",true);
DrawPixel(x += 20,y,20,"brown",true);
}
y += 20,x = 0;
}
for(b = 0;b < 2;b++)
{
DrawPixel(candy_x,candy_y,20,"red",true);
DrawPixel(candy_x += 20,candy_y,20,"red",true);
candy_y += 20,candy_x = 80;
}
alert("Look,It's A Chocolate Cake!!!");