//Created By Rabia Alhaffar In 22/February/2020
var brushtype = "pencil";
var brushcolor = "black";
var drawmode = "fill";
var brushsize = 5;
var brushtext;
var brushfont;
var alpha = 1;
var erasersize;
var brushishidden = false;
alert("Welcome To Artboard App!!!\nMove The Mouse To Paint With Brush\nClick Canvas To Toggle Full Screen\nPress F Key To Set Text To Be Drawn With Font\nPress W Key To Clear Everything\nPress O Key To Set Background Color\nPress G Key To Set Grid\nPress C Key If You Want To Change Brush Color\nPress S Key If You Want To Change Brush Size\nPress T Key If You Want To Change Brush Type\nPress H Key To Hide Brush\nPress B Key To Show Brush\nPress E Key To Take Screenshot\nPress M Key To Set Brush Painting Mode\nPress Q Key To Show This Info Again\nPowered By Cake Game Engine!!!");
CreateCanvas(window.innerWidth,window.innerHeight,"white");
Initialize();
SetDrawingMode(drawmode);
cakecanvas.onclick = () => 
{
    if(!Fullscreen) ToggleFullscreen();
    if(Fullscreen) ExitFullscreen();
};
cakecanvas.onmousemove = (e) =>
{
    if(brushtype == "pencil" || brushtype == 1) DrawCircle(e.clientX,e.clientY,brushsize,brushcolor,brushcolor,brushishidden ? 0 : 1);
    if(brushtype == "squares" || brushtype == 2) DrawSquare(e.clientX,e.clientY,brushsize,brushcolor,brushcolor,brushishidden ? 0 : 1);
    if(brushtype == "arc" || brushtype == 3) DrawArc(e.clientX,e.clientY,brushsize,brushcolor,brushcolor,1,180,brushishidden ? 0 : 1);
    if(brushtype == "eraser") cakepen.clearRect(e.clientX,e.clientY,erasersize,erasersize);
    if(brushtype == "text") 
    {
        SetFont(brushfont);
        DrawText(e.clientX,e.clientY,brushtext,brushcolor,brushcolor);
    };
};
document.addEventListener("keydown",(e) =>
{
    if(e.key == "a") alpha = prompt("Enter Alpha: ",1);
    if(e.key == "m") 
    {
        drawmode = prompt("Draw Modes List:\n1. fill\n2. stroke\nEnter Draw Mode: ","fill").toString();
        SetDrawingMode(drawmode);
        brushishidden = false;
    }
    if(e.key == "b") brushishidden = false;
    if(e.key == "x") 
    {
        erasersize = prompt("Enter Eraser Size: ",1);
        brushtype = "eraser";
    }
    if(e.key == "h") brushishidden = true;
    if(e.key == "w") ClearCanvas();
    if(e.key == "o") 
    {
        var bgcolor = prompt("Enter Background Color: ","white").toString();
        SetCanvasBackgroundColor(bgcolor);
    }
    if(e.key == "g")
    { 
       var gridsize = prompt("Before Drawing Grid,Please Enter Grid Size: ",20);
       DrawGrid(gridsize,"black",1);
    }
    if(e.key == "f")
    {
        brushtext = prompt("Enter Text To Be Drawn: ","CAKE IS AMAZING!!!").toString();
        brushfont = prompt("Enter Font: ","40px sans-serif");
        brushtype = "text";
    }
    if(e.key == "e") Screenshot();
    if(e.key == "q") alert("Welcome To Artboard App!!!\nMove The Mouse To Paint With Brush\nClick Canvas To Toggle Full Screen\nPress F Key To Set Text To Be Drawn With Font\nPress W Key To Clear Everything\nPress O Key To Set Background Color\nPress G Key To Set Grid\nPress C Key If You Want To Change Brush Color\nPress S Key If You Want To Change Brush Size\nPress T Key If You Want To Change Brush Type\nPress H Key To Hide Brush\nPress B Key To Show Brush\nPress E Key To Take Screenshot\nPress M Key To Set Brush Painting Mode\nPress Q Key To Show This Info Again\nPowered By Cake Game Engine!!!");
    if(e.key == "c") brushcolor = prompt("Enter Brush Color: ","black").toString();
    if(e.key == "s") brushsize = prompt("Enter Brush Size: ",1);
    if(e.key == "t") brushtype = prompt("Brush Types List:\n1. pencil\n2. squares\n3. arc\nEnter Brush Type(Name Or Number): ","pencil").toString();
});