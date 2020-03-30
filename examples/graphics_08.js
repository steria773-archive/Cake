Initialize(0); //Index Of Canvas Is 0,So First Canvas Will Drawn On
SetCanvasBackgroundColor("black");
SetDrawingMode("fill");
DrawGradientRect(0,0,CanvasWidth,CanvasHeight,
[
[ 0.0,"lightblue" ],
[ 0.25,"aqua" ],
[ 0.50,"cyan" ],
[ 0.75,"blue" ],
[ 1.0,"darkblue" ]
]);