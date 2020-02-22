//Created By Rabia Alhaffar In 22/2/2020
//Based On Artboard Core
var brushtype = "pencil";
var drawmode = "fill";
Initialize();
SetDrawingMode("fill");
ResizeCanvas(window.innerWidth,CanvasHeight);
var SetMode = (m) =>
{
    if(m == 1) SetDrawingMode("fill");
    if(m == 2) SetDrawingMode("stroke");
};
var SetBrush = (b) =>
{
    if(b == 1) brushtype = "pencil"; 
    if(b == 2) brushtype = "squares";
    if(b == 3) brushtype = "text";
    if(b == 4) brushtype = "eraser";
};
var SetOption = (o) =>
{
    if(o == 1) Screenshot();
    if(o == 2) ClearCanvas();
    if(o == 3) alert("Akizami Is Painting App Based On It's Old Grandpa,Artboard!!!\nCreated By Rabia Alhaffar Using Cake Game Engine!!!");
};
cakecanvas.onmousemove = (e) =>
{
    SetCanvasBackgroundColor(document.getElementById("bgcolor").value.toString());
    if(brushtype == "pencil" || brushtype == 1) DrawCircle(e.clientX,e.clientY,document.getElementById("bsize").value,document.getElementById("color").value.toString(),document.getElementById("color").value.toString(),document.getElementById("alpha").value / 100);
    if(brushtype == "squares" || brushtype == 2) DrawSquare(e.clientX,e.clientY,document.getElementById("bsize").value,document.getElementById("color").value.toString(),document.getElementById("color").value.toString(),document.getElementById("alpha").value / 100);
    if(brushtype == "text" || brushtype == 3)
    {
        SetFont(document.getElementById("txtfont").value.toString());
        DrawText(e.clientX,e.clientY,document.getElementById("txt").value.toString());
    }
    if(brushtype == "eraser" || brushtype == 4) cakepen.clearRect(e.clientX,e.clientY,document.getElementById("esize").value,document.getElementById("esize").value);
};