//Created By Rabia Alhaffar In 6/February/2020
CreateCanvas(WindowWidth,WindowHeight);
Initialize();
SetCanvasBackgroundColor("black");
SetDrawingMode("fill");
cakecanvas.onmousemove = (e) => DrawCircle(e.clientX,e.clientY,20,RandomColor(),u,RandomAlpha());
cakecanvas.ontouchmove = (e) => DrawCircle(e.pageX,e.pageY,20,RandomColor(),u,RandomAlpha());