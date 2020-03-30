//Created By Rabia Alhaffar In 9/February/2020
//A Additions To CanvasRenderingContext2D That Adds More Functions!!!
//New: Added CanvasRenderingContext2D.shear() Function
//New: Added Flipping Horizontally And Vertically
//New: Added CanvasRenderingContext2D.line() And CanvasRenderingContext2D.applyFilters() And CanvasRenderingContext2D.setFilters()
if(!CanvasRenderingContext2D.prototype.clear) 
{
    CanvasRenderingContext2D.prototype.clear = function() 
    {
        this.clearRect(0,0,this.canvas.width,this.canvas.height);
    };
}

if(!CanvasRenderingContext2D.prototype.fillCircle)
{
    CanvasRenderingContext2D.prototype.fillCircle = function(x,y,radius)
    {
        this.beginPath();
        this.arc(x,y,radius,90,180 * Math.PI);
        this.closePath();
        this.fill();
    };
}

if(!CanvasRenderingContext2D.prototype.strokeCircle)
{
    CanvasRenderingContext2D.prototype.strokeCircle = function(x,y,radius)
    {
        this.beginPath();
        this.arc(x,y,radius,90,180 * Math.PI);
        this.closePath();
        this.stroke();
    };
}


if(!CanvasRenderingContext2D.prototype.fillTriangle)
{
    CanvasRenderingContext2D.prototype.fillTriangle = function(x1,y1,x2,y2,x3,y3)
    {
        this.beginPath();
        this.moveTo(x1,y1);
        this.lineTo(x2,y2);
        this.lineTo(x3,y3);
        this.lineTo(x1,y1);
        this.closePath();
        this.fill();
    };
}

if(!CanvasRenderingContext2D.prototype.strokeTriangle)
{
    CanvasRenderingContext2D.prototype.strokeTriangle = function(x1,y1,x2,y2,x3,y3)
    {
        this.beginPath();
        this.moveTo(x1,y1);
        this.lineTo(x2,y2);
        this.lineTo(x3,y3);
        this.lineTo(x1,y1);
        this.closePath();
        this.stroke();
    };
}

if(!CanvasRenderingContext2D.prototype.fillPolygon)
{
    CanvasRenderingContext2D.prototype.fillPolygon = function(points)
    {
        this.beginPath();
        this.moveTo(points[0][0], points[0][1]);
    for(var i = 0; i < points.length; i++) this.lineTo(points[i][0], points[i][1]);
        this.closePath();
        this.fill();
    };
}

if(!CanvasRenderingContext2D.prototype.strokePolygon)
{
    CanvasRenderingContext2D.prototype.strokePolygon = function(points)
    {
        this.beginPath();
        this.moveTo(points[0][0], points[0][1]);
    for(var i = 0; i < points.length; i++) this.lineTo(points[i][0], points[i][1]);
        this.closePath();
        this.stroke();
    };
}

if(!CanvasRenderingContext2D.prototype.fillRoundedRect)
{
    CanvasRenderingContext2D.prototype.fillRoundedRect = function(x,y,width,height,radius)
    {
        this.beginPath();
        this.moveTo(x + radius,y);
        this.lineTo(x + width - radius,y);
        this.quadraticCurveTo(x + width,y,x + width,y + radius);
        this.lineTo(x + width,y + height - radius);
        this.quadraticCurveTo(x + width,y + height,x + width - radius,y + height);
        this.lineTo(x + radius,y + height);
        this.quadraticCurveTo(x,y + height,x,y + height - radius);
        this.lineTo(x,y + radius);
        this.quadraticCurveTo(x,y,x + radius,y);
        this.closePath();
        this.fill();
    };
}

if(!CanvasRenderingContext2D.prototype.strokeRoundedRect)
{
    CanvasRenderingContext2D.prototype.strokeRoundedRect = function(x,y,width,height,radius)
    {
        this.beginPath();
        this.moveTo(x + radius,y);
        this.lineTo(x + width - radius,y);
        this.quadraticCurveTo(x + width,y,x + width,y + radius);
        this.lineTo(x + width,y + height - radius);
        this.quadraticCurveTo(x + width,y + height,x + width - radius,y + height);
        this.lineTo(x + radius,y + height);
        this.quadraticCurveTo(x,y + height,x,y + height - radius);
        this.lineTo(x,y + radius);
        this.quadraticCurveTo(x,y,x + radius,y);
        this.closePath();
        this.stroke();
    };
}

if(!CanvasRenderingContext2D.prototype.fillAndStroke)
{
    CanvasRenderingContext2D.prototype.fillAndStroke = function()
    {
        this.fill();
        this.stroke();
    };
}

if(!CanvasRenderingContext2D.prototype.blur) 
{
    CanvasRenderingContext2D.prototype.blur = function(px) 
    { 
        this.canvas.style.filter += " blur(" + px + "px) "; 
    };
}

if(!CanvasRenderingContext2D.prototype.bright) 
{
    CanvasRenderingContext2D.prototype.bright = function(percentage) 
    {
        this.canvas.style.filter += " brightness(" + percentage + "%) ";
    };
}

if(!CanvasRenderingContext2D.prototype.contrast) 
{
    CanvasRenderingContext2D.prototype.contrast = function(percentage) 
    {
        this.canvas.style.filter += " contrast(" + percentage + "%) ";
    };
}


if(!CanvasRenderingContext2D.prototype.invert) 
{
    CanvasRenderingContext2D.prototype.invert = function(percentage)
    {
        this.canvas.style.filter += " invert(" + percentage + "%) ";
    };
}


if(!CanvasRenderingContext2D.prototype.grayscale) 
{
    CanvasRenderingContext2D.prototype.grayscale = function(percentage)
    {
        this.canvas.style.filter += " grayscale(" + percentage + "%) ";
    };
}

if(!CanvasRenderingContext2D.prototype.opacity) 
{
    CanvasRenderingContext2D.prototype.opacity = function(percentage) 
    {
        this.canvas.style.filter += " opacity(" + percentage + "%) ";
    };
}

if(!CanvasRenderingContext2D.prototype.saturate) 
{
    CanvasRenderingContext2D.prototype.saturate = function(percentage)
    {
        this.canvas.style.filter += " saturate(" + percentage + "%) ";
    };
}

if(!CanvasRenderingContext2D.prototype.sepia) 
{
    CanvasRenderingContext2D.prototype.sepia = function(percentage)
    {
        this.canvas.style.filter += " sepia(" + percentage + "%) ";
    };
}

if(!CanvasRenderingContext2D.prototype.rotateHue) 
{
    CanvasRenderingContext2D.prototype.rotateHue = function(percentage) 
    {
        this.canvas.style.filter += " hue-rotate(" + percentage + "%) ";
    };
}

if(!CanvasRenderingContext2D.prototype.setFilters) 
{
    CanvasRenderingContext2D.prototype.setFilters = function(filters)
    {
        this.canvas.style.filter = filters.toString();
    };
}

if(!CanvasRenderingContext2D.prototype.applyFilters) 
{
    CanvasRenderingContext2D.prototype.applyFilters = function(filters)
    {
        this.canvas.style.filter += filters.toString();
    };
}


if(!CanvasRenderingContext2D.prototype.clearFilters) 
{
    CanvasRenderingContext2D.prototype.clearFilters = function()
    {
        this.canvas.style.filter = "none";
    };
}

if(!CanvasRenderingContext2D.prototype.fillSquare) 
{
    CanvasRenderingContext2D.prototype.fillSquare = function(x,y,size)
    {
        this.fillRect(x,y,size,size);
    };
}

if(!CanvasRenderingContext2D.prototype.strokeSquare) 
{
    CanvasRenderingContext2D.prototype.strokeSquare = function(x,y,size)
    {
        this.strokeRect(x,y,size,size);
    };
}      

if(!CanvasRenderingContext2D.prototype.hideCanvas) 
{
    CanvasRenderingContext2D.prototype.hideCanvas = function()
    {
        this.canvas.style.visibility = "hidden";
    };
}


if(!CanvasRenderingContext2D.prototype.showCanvas) 
{
    CanvasRenderingContext2D.prototype.showCanvas = function()
    {
        this.canvas.style.visibility = "visible";
    };
}

if(!CanvasRenderingContext2D.prototype.removeCanvas) 
{
    CanvasRenderingContext2D.prototype.removeCanvas = function()
    {
        this.canvas.parentNode.removeChild(this.canvas);
    };
}

if(!CanvasRenderingContext2D.prototype.shear)
{
    CanvasRenderingContext2D.prototype.shear = function(sx,sy)
    {
        this.transform(1,sy,sx,1,0,0);
    };
}

if(!CanvasRenderingContext2D.prototype.flipHorizontally)
{
    CanvasRenderingContext2D.prototype.flipHorizontally = function()
    {
        this.scale(-1,1);
    };
}


if(!CanvasRenderingContext2D.prototype.flipVertically)
{
    CanvasRenderingContext2D.prototype.flipVertically = function()
    {
        this.scale(1,-1);
    };
}

if(!CanvasRenderingContext2D.prototype.flipContent)
{
    CanvasRenderingContext2D.prototype.flipContent = function()
    {
        this.scale(-1,-1);
    };
}


if(!CanvasRenderingContext2D.prototype.resetFlipping)
{
    CanvasRenderingContext2D.prototype.resetFlipping = function()
    {
        this.scale(1,1);
    };
}

if(!CanvasRenderingContext2D.prototype.line)
{
    CanvasRenderingContext2D.prototype.line = function(x1,y1,x2,y2,size)
    {
        this.lineWidth = size;
        this.beginPath();
        this.moveTo(x1,y1);
        this.lineTo(x2,y2);
        this.closePath();
        this.stroke();
    };
}