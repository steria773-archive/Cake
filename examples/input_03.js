//Created By Rabia Alhaffar In 6/February/2020
CreateCanvas(WindowWidth,WindowHeight);
Initialize();
SetDrawingMode("fill");
cakecanvas.onmousemove = (e) => 
{
DrawCircle(e.clientX,e.clientY,20,RandomColor);
RandomColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
};
cakecanvas.ontouchmove = (e) =>
{
    DrawCircle(e.pageX,e.pageY,20,RandomColor);
    RandomColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
};