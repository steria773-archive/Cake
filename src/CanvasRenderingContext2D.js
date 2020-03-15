//Created By Rabia Alhaffar In 9/February/2020
//A Additions To CanvasRenderingContext2D That Adds More Functions!!!
//New: Added CanvasRenderingContext2D.shear() Function
if(!CanvasRenderingContext2D.prototype.cc) 
{
    CanvasRenderingContext2D.prototype.cc = function() 
    {
        this.clearRect(0,0,this.canvas.width,this.canvas.height);
    };
}
CanvasRenderingContext2D.prototype.clear = function()
{
    this.cc();
};
if(!CanvasRenderingContext2D.prototype.fc)
{
    CanvasRenderingContext2D.prototype.fc = function(x,y,radius)
    {
        this.beginPath();
        this.arc(x,y,radius,90,180 * Math.PI);
        this.fill();
        this.closePath();
    };
}
CanvasRenderingContext2D.prototype.fillCircle = function(x,y,radius) 
{ 
    this.fc(x,y,radius); 
};
if(!CanvasRenderingContext2D.prototype.sc)
{
    CanvasRenderingContext2D.prototype.sc = function(x,y,radius)
    {
        this.beginPath();
        this.arc(x,y,radius,90,180 * Math.PI);
        this.stroke();
        this.closePath();
    };
}
CanvasRenderingContext2D.prototype.strokeCircle = function(x,y,radius) 
{ 
    this.sc(x,y,radius); 
};
if(!CanvasRenderingContext2D.prototype.ft)
{
    CanvasRenderingContext2D.prototype.ft = function(x1,y1,x2,y2,x3,y3)
    {
        this.beginPath();
        this.moveTo(x1,y1);
        this.lineTo(x2,y2);
        this.lineTo(x3,y3);
        this.lineTo(x1,y1);
        this.fill();
        this.closePath();
    };
}
CanvasRenderingContext2D.prototype.fillTriangle = function(x1,y1,x2,y2,x3,y3) 
{ 
    this.ft(x1,y1,x2,y2,x3,y3); 
};
if(!CanvasRenderingContext2D.prototype.st)
{
    CanvasRenderingContext2D.prototype.st = function(x1,y1,x2,y2,x3,y3)
    {
        this.beginPath();
        this.moveTo(x1,y1);
        this.lineTo(x2,y2);
        this.lineTo(x3,y3);
        this.lineTo(x1,y1);
        this.stroke();
        this.closePath();
    };
}
CanvasRenderingContext2D.prototype.strokeTriangle = function(x1,y1,x2,y2,x3,y3)
{
    this.st(x1,y1,x2,y2,x3,y3);
};
if(!CanvasRenderingContext2D.prototype.fp)
{
    CanvasRenderingContext2D.prototype.fp = function(points)
    {
        this.beginPath();
        this.moveTo(points[0][0], points[0][1]);
        for(var i = 0; i < points.length; i++) this.lineTo(points[i][0], points[i][1]);
        this.fill();
        this.closePath();
    };
}
CanvasRenderingContext2D.prototype.fillPolygon = function(points)
{
    this.fp(points);
};
if(!CanvasRenderingContext2D.prototype.sp)
{
    CanvasRenderingContext2D.prototype.sp = function(points)
    {
        this.beginPath();
        this.moveTo(points[0][0], points[0][1]);
        for(var i = 0; i < points.length; i++) this.lineTo(points[i][0], points[i][1]);
        this.stroke();
        this.closePath();
    };
}
CanvasRenderingContext2D.prototype.strokePolygon = function(points)
{
    this.sp(points);
};
if(!CanvasRenderingContext2D.prototype.frr)
{
    CanvasRenderingContext2D.prototype.frr = function(x,y,width,height,radius)
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
        this.fill();
        this.closePath();
    };
}
CanvasRenderingContext2D.prototype.fillRoundedRect = function(x,y,width,height,radius)
{
    this.frr(x,y,width,height,radius);
};
if(!CanvasRenderingContext2D.prototype.srr)
{
    CanvasRenderingContext2D.prototype.srr = function(x,y,width,height,radius)
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
        this.stroke();
        this.closePath();
    };
}
CanvasRenderingContext2D.prototype.strokeRoundedRect = function(x,y,width,height,radius)
{
    this.srr(x,y,width,height,radius);
};
if(!CanvasRenderingContext2D.prototype.fas)
{
    CanvasRenderingContext2D.prototype.fas = function()
    {
        this.fill();
        this.stroke();
    };
}
CanvasRenderingContext2D.prototype.fillAndStroke = function()
{
    this.fas();
};
if(!CanvasRenderingContext2D.prototype.blu) 
{
    CanvasRenderingContext2D.prototype.blu = function(px) 
    { 
        this.canvas.style.filter += " blur(" + px + "px) "; 
    };
}
CanvasRenderingContext2D.prototype.blur = function(px)
{
    this.blu(px);
};
if(!CanvasRenderingContext2D.prototype.brightness) 
{
    CanvasRenderingContext2D.prototype.brightness = function(percentage) 
    {
        this.canvas.style.filter += " brightness(" + percentage + "%) ";
    };
}
CanvasRenderingContext2D.prototype.bright = function(percentage)
{
    this.brightness(percentage);
};
if(!CanvasRenderingContext2D.prototype.contras) 
{
    CanvasRenderingContext2D.prototype.contras = function(percentage) 
    {
        this.canvas.style.filter += " contrast(" + percentage + "%) ";
    };
}
CanvasRenderingContext2D.prototype.contrast = function(percentage)
{
    this.contras(percentage);
};
if(!CanvasRenderingContext2D.prototype.inv) 
{
    CanvasRenderingContext2D.prototype.inv = function(percentage)
    {
        this.canvas.style.filter += " invert(" + percentage + "%) ";
    };
}
CanvasRenderingContext2D.prototype.invert = function(percentage)
{
    this.inv(percentage);
};
if(!CanvasRenderingContext2D.prototype.grace) 
{
    CanvasRenderingContext2D.prototype.grace = function(percentage)
    {
        this.canvas.style.filter += " grayscale(" + percentage + "%) ";
    };
}
CanvasRenderingContext2D.prototype.grayscale = function(percentage)
{
    this.grace(percentage);
};
if(!CanvasRenderingContext2D.prototype.opal) 
{
    CanvasRenderingContext2D.prototype.opal = function(percentage) 
    {
        this.canvas.style.filter += " opacity(" + percentage + "%) ";
    };
}
CanvasRenderingContext2D.prototype.opacity = function(percentage)
{
    this.opal(percentage);
};
if(!CanvasRenderingContext2D.prototype.sat) 
{
    CanvasRenderingContext2D.prototype.sat = function(percentage)
    {
        this.canvas.style.filter += " saturate(" + percentage + "%) ";
    };
}
CanvasRenderingContext2D.prototype.saturate = function(percentage)
{
    this.sat(percentage);
};
if(!CanvasRenderingContext2D.prototype.spyro) 
{
    CanvasRenderingContext2D.prototype.spyro = function(percentage)
    {
        this.canvas.style.filter += " sepia(" + percentage + "%) ";
    };
}
CanvasRenderingContext2D.prototype.sepia = function(percentage)
{
    this.spyro(percentage);
};
if(!CanvasRenderingContext2D.prototype.roue) 
{
    CanvasRenderingContext2D.prototype.roue = function(percentage) 
    {
        this.canvas.style.filter += " hue-rotate(" + percentage + "%) ";
    };
}
CanvasRenderingContext2D.prototype.rotateHue = function(percentage)
{
    this.roue(percentage);
};
if(!CanvasRenderingContext2D.prototype.applyFilters) 
{
    CanvasRenderingContext2D.prototype.applyFilters = function(filters)
    {
        this.canvas.style.filter = filters.toString();
    };
}
CanvasRenderingContext2D.prototype.setFilters = function(filters)
{
    this.applyFilters(filters);
};
if(!CanvasRenderingContext2D.prototype.clearFilters) 
{
    CanvasRenderingContext2D.prototype.clearFilters = function()
    {
        this.canvas.style.filter = "none";
    };
}
CanvasRenderingContext2D.prototype.removeFilters = function()
{
    this.clearFilters();
};
if(!CanvasRenderingContext2D.prototype.flis) 
{
    CanvasRenderingContext2D.prototype.flis = function(x,y,size)
    {
        this.fillRect(x,y,size,size);
    };
}
CanvasRenderingContext2D.prototype.fillSquare = function(x,y,size)
{
    this.flis(x,y,size);
};
if(!CanvasRenderingContext2D.prototype.slis) 
{
    CanvasRenderingContext2D.prototype.slis = function(x,y,size)
    {
        this.strokeRect(x,y,size,size);
    };
}        
CanvasRenderingContext2D.prototype.strokeSquare = function(x,y,size)
{
    this.slis(x,y,size);
};
if(!CanvasRenderingContext2D.prototype.hoco) 
{
    CanvasRenderingContext2D.prototype.hoco = function()
    {
        this.canvas.style.visibility = "hidden";
    };
}
CanvasRenderingContext2D.prototype.hideCanvas = function()
{
    this.hoco();
};
if(!CanvasRenderingContext2D.prototype.sirocco) 
{
    CanvasRenderingContext2D.prototype.sirocco = function()
    {
        this.canvas.style.visibility = "visible";
    };
}
CanvasRenderingContext2D.prototype.showCanvas = function()
{
    this.sirocco();
};
if(!CanvasRenderingContext2D.prototype.rocco) 
{
    CanvasRenderingContext2D.prototype.rocco = function()
    {
        this.canvas.parentNode.removeChild(this.canvas);
    };
}
CanvasRenderingContext2D.prototype.removeCanvas = function()
{
    this.rocco();
};
if(!CanvasRenderingContext2D.prototype.sxsy)
{
    CanvasRenderingContext2D.prototype.sxsy = function(sx,sy)
    {
        this.transform(1,sy,sx,1,0,0);
    };
}
CanvasRenderingContext2D.prototype.shear = function(shear_x,shear_y)
{
    this.sxsy(shear_x,shear_y);
};