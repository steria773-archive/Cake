//Created By Rabia Alhaffar In 8/February/2020
var CanvasTouched = false,
    CanvasClicked = false,
    CanvasSwiped = false,
    CanvasDragged = false
    OverCanvas = false;
var Listen = () =>
{
    cakecanvas.addEventListener("click",() => { CanvasClicked = true; });
    cakecanvas.addEventListener("mouseover",() => { OverCanvas = true; });
    cakecanvas.addEventListener("touchstart",() => { CanvasTouched = true; });
    cakecanvas.addEventListener("touchmove",() => { CanvasSwiped = true; });
    cakecanvas.addEventListener("drag",() => { CanvasDragged = true; });
};
    