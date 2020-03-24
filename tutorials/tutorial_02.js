CreateCanvas(1000,600,"black");
Initialize();
SetDrawingMode("fill");
DrawRect(500,100,200,100,"silver");
DrawCircle(600,500,50,"purple");
DrawLine([ 0,0 ],[ CanvasWidth,CanvasHeight ],5,"red");
DrawTriangle([ 500,500 ],[ 400,400 ],[ 450,450 ],"blue");
DrawSquare(300,300,50,"pink");
DrawPolygon([
    [ 10,200 ],
    [ 150,150 ],
    [ 250,200 ],
    [ 150,100, ],
    [ 0,50 ]
],"blue");
DrawRoundedRect(100,400,100,100,15,"orange");