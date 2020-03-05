//Created By Rabia Alhaffar In 18/February/2020
//Example About Drawing Shapes
CreateCanvas(window.innerWidth,window.innerHeight,"black");
Initialize();
SetDrawingMode("fill");
var ligrad = new LinearGradient(850,140,800,800,
    [
        [ 0.0,"lightblue" ],
        [ 0.25,"aqua" ],
        [ 0.50,"cyan" ],
        [ 0.75,"blue" ],
        [ 1.00,"darkblue" ]
    ]);
var roundgrad = new LinearGradient(600,400,600,600,
    [
        [ 0.0,"white" ],
        [ 0.25,"wheat" ],
        [ 0.50,"silver" ],
        [ 0.75,"grey" ],
        [ 1.00,"black" ]
    ]);
var radgrad = new RadialGradient(200,200,1000,1000,50,
    [
        [ 0.0,"lightyellow" ],
        [ 0.25,"yellow" ],
        [ 0.50,"orange" ],
        [ 0.75,"red" ],
        [ 1.00,"darkred" ]
    ])
DrawRect(100,100,150,75,"blue");
DrawSquare(300,100,80,"cyan");
DrawCircle(480,140,50,"red");
DrawTexture("CAKE_APP_ICON.png",800,200,100,100);
SetFont("40px Cambria");
DrawText(570,150,"HELLO CAKE","blue",u);
DrawLine([ 850,140 ],[ 1200,140 ],20,ligrad.gradient);
DrawGradientRect(100,300,300,300,
    [
        [ 0.0,"lightyellow" ],
        [ 0.25,"yellow" ],
        [ 0.50,"orange" ],
        [ 0.75,"red" ],
        [ 1.00,"darkred" ]
    ]);
DrawTriangle([ 430,200 ],[ 700,300 ],[ 500,400 ],"purple");
DrawRoundedRect(800,400,300,300,100,roundgrad.gradient);
DrawCircle(600,600,100,radgrad.gradient,radgrad.gradient);
cakecanvas.onclick = () => ToggleFullscreen();