//Created By Rabia Alhaffar In 22/2/2020
//Based On Artboard Core
var brushtype = "pencil";
var brushcolor = "black";
var drawmode = "fill";
var brushsize = 5;
var brushtext;
var brushfont;
var alpha = 1;
var erasersize;
var brushishidden = false;
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
var bgcolor = document.getElementById("bgcolor");
bgcolor.onchange = () => SetCanvasBackgroundColor(bgcolor.value.toString());
bgcolor.onkeydown = () => SetCanvasBackgroundColor(bgcolor.value.toString());
var maincolor = document.getElementById("color");
maincolor.onchange = () => brushcolor = maincolor.value.toString();
maincolor.onkeydown = () => brushcolor = maincolor.value.toString();
var bsize = document.getElementById("bsize");
bsize.onchange = () => brushsize = bsize.value;
bsize.onkeydown = () => brushsize = bsize.value;
var esize = document.getElementById("esize");
esize.onclick = () => erasersize = esize.value;
esize.onkeydown = () => erasersize = esize.value;
var alphaman = document.getElementById("alpha");
alphaman.onclick = () => alpha = alphaman.value / 100;
alphaman.onkeydown = () => alpha = alphaman.value / 100;
cakecanvas.onmousemove = (e) =>
{
    if(brushtype == "pencil" || brushtype == 1) DrawCircle(e.clientX,e.clientY,brushsize,brushcolor,brushcolor,alpha);
    if(brushtype == "squares" || brushtype == 2) DrawSquare(e.clientX,e.clientY,brushsize,brushcolor,brushcolor,alpha);
    if(brushtype == "text" || brushtype == 3)
    {
        SetFont(document.getElementById("txtfont").value.toString());
        DrawText(e.clientX,e.clientY,document.getElementById("txt").value.toString());
    }
    if(brushtype == "eraser" || brushtype == 4) cakepen.clearRect(e.clientX,e.clientY,erasersize,erasersize);
};;