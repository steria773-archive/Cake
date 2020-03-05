//Cake Library For Creating Players With Shape,Or Image,Or Custom Functioned Type Or Shape!!!
//In Update,Not Completed Yet!!!
//Only For 2D,3D Version Are Standalone!!!
function Rectangle(x,y,width,height,color,stroke_color,autoupdate)
{	
		this.x = x;
		this.y = y;
		this.height = height;
		this.width = width;
		this.h = this.height;
		this.w = this.width;
		this.speedX = 0;
		this.speedY = 0;
		this.speed = 0;
		this.color = color;
		this.gravity = 0;
		this.stroke_color = stroke_color;
		this.alpha = 1;
		this.bounce = 0;
		this.gravitySpeed = 0;
		this.name = "";
		this.destroyed = false;
		this.rotated = false;
		this.collidable = true;
		this.clicked = false;
		this.touched = false;
		this.hovered = false;
		this.state = "default";
		this.rotationAngle = 0;
		this.clickFunction = 0;
		var touchPosition = { x:0,y:0 };
		var mousePosition = { x:0,y:0 };
		var isClicking = false,isTouching = false,mousePressed = false,canvasTouched = false;
this.SetInteractions = function(clickF) 
{
	if(Unknown(clickF)) clickF = 0;
	this.clickFunction = clickF;
};
this.Add = function()
{
document.addEventListener("mousemove",(e) => 
{ 
	mousePosition.x = e.offsetX || e.layerX;
	mousePosition.y	= e.offsetY || e.layerY;
});
document.addEventListener("touchmove",(e) => 
{
	touchPosition.x = e.pageX || e.clientX;
	touchPosition.y = e.pageY || e.clientY;
});
cakecanvas.addEventListener("touchstart",() => { canvasTouched = true; });
cakecanvas.addEventListener("touchend",() => { canvasTouched = false; });
cakecanvas.addEventListener('mousedown',() => { mousePressed = true; });
cakecanvas.addEventListener('mouseup',() => { mousePressed = false; });
};
this.Name = function(x) { this.name = x; };
this.Rotate = function(a) { this.rotated = true,this.rotationAngle = a; };
this.Draw = function()
{  
        if(Unknown(this.x)) this.x = 0;
		if(Unknown(this.y)) this.y = 0;
		if(Unknown(this.height)) this.height = 0;
		if(Unknown(this.width)) this.width = 0;		
		if(Unknown(this.stroke_color)) this.stroke_color = color;
		if(Unknown(autoupdate)) autoupdate = false;
        cakepen.strokeStyle = this.stroke_color,cakepen.globalAlpha = this.alpha,cakepen.fillStyle = this.color;
		if(this.destroyed) cakepen.globalAlpha = 0;
		if(this.rotated) cakepen.rotate(this.rotationAngle);
		cakepen.strokeRect(this.x,this.y,this.width,this.height);
		cakepen.fillRect(this.x,this.y,this.width,this.height);
		cakepen.globalAlpha = this.alpha;
		cakepen.rotate(-this.rotationAngle);
		};
		
this.UpdatePosition = function() 
{ 
	this.gravitySpeed += this.gravity;
	this.x += this.speedX;
	this.y += this.speedY + this.gravitySpeed; 
	if ((mousePosition.x >= this.x && mousePosition.x <= this.x + this.width &&
		mousePosition.y >= this.y && mousePosition.y <= this.y + this.height) ||
		(touchPosition.x >= this.x && touchPosition.x <= this.x + this.width &&
		touchPosition.y >= this.y && touchPosition.y <= this.y + this.height)) {
	  this.state = 'hover'; this.hovered = true;
	  // check for click
	  if (mousePressed || canvasTouched) 
	  {
		this.state = 'active';
		if ((typeof this.clickFunction === 'function') && (!isClicking || !isTouching)) {
		  this.clickFunction();
		  isClicking = true; isTouching = true; this.clicked = true; this.touched = true;
		}
	  }
	  else isClicking = false,isTouching = false,this.clicked = false,this.touched = false;
	}
	else this.state = 'default';
};
this.Update = function() { this.UpdatePosition(); this.Draw(); };
this.Floor = function() { if(this.y > cakecanvas.height - this.height) this.y = cakecanvas.height - this.height; };
this.FloorAndBounce = function() { if(this.y > cakecanvas.height - this.height) this.y = cakecanvas.height - this.height,this.gravitySpeed = -(this.gravitySpeed * this.bounce); };
this.Accelerate = function(g) { this.gravity = g; };
this.Destroy = function() { this.destroyed = true; };
this.Stop = function() { this.speedX = 0,this.speedY = 0; };
this.Translate = function(position_x,position_y)
{
   if(Unknown(position_x)) position_x = this.x;
   if(Unknown(position_y)) position_y = this.y;
   this.x = position_x,this.y = position_y;   
};
this.Resize = function(w,h)
{
  if(Unknown(h)) h = this.height;
  if(Unknown(w)) w = this.width;
  this.height = h,this.width = w;	
};

this.Force = function(force_x,force_y)
{
   if(Unknown(force_x)) force_x = this.speedX;
   if(Unknown(force_y)) force_y = this.speedY;
   this.speedX = force_x,this.speedY = force_y;   
};

this.Move = function(position,force)
{
   if(Unknown(force)) force = 0;
   if(position == "up") this.speedY = Math.abs(force);
   if(position == "down") this.speedY = force;
   if(position == "left") this.speedX = Math.abs(force);
   if(position == "right") this.speedX = force;
};
this.AddFeature = function(feature,code) { this.feature = code; };
this.InPosition = function(x_pos,y_pos) { return(this.x == x_pos && this.y == y_pos); };
if(autoupdate) this.Update();
this.Add();
}
function Text(x,y,text,color,font,textAlign,autoupdate)
{
	
this.x = x;
this.y = y;
this.speedX = 0;
this.speedY = 0;
this.text = text;	
this.textAlign = textAlign;
this.alpha = 1;
this.stroke_color = "black";
this.font = font;
this.color = color;
this.name = "";
this.rotationAngle = 0;
this.rotated = false;
this.destroyed = false;
this.Name = function(x) { this.name = x; };
this.Destroy = function() { this.destroyed = true; };
this.Rotate = function(a) { this.rotated = true,this.rotationAngle = a; };
this.Draw = function()
{
if(Unknown(this.x)) this.x = 0;
if(Unknown(this.y)) this.y = 0; 
if(Unknown(this.text)) this.text = "";
if(Unknown(this.font)) this.font = "12px arial";
if(Unknown(autoupdate)) autoupdate = false;
if(Unknown(this.textAlign)) this.textAlign = "";
cakepen.globalAlpha = this.alpha;
if(Unknown(this.color)) this.color = "black";
if(Unknown(this.stroke_color)) this.stroke_color = this.color;
cakepen.fillStyle = this.color,cakepen.strokeStyle = this.stroke_color,cakepen.font = this.font,cakepen.textAlign = this.textAlign,cakepen.globalAlpha = this.alpha;
if(this.destroyed) cakepen.globalAlpha = 0;
if(this.rotated) cakepen.rotate(this.rotationAngle);
cakepen.fillText(this.text,this.x,this.y);
cakepen.strokeText(this.text,this.x,this.y);
cakepen.globalAlpha = this.alpha;
cakepen.rotate(-this.rotationAngle);
};
this.Highlight = function(text_color) { this.color = text_color; };
this.UpdatePosition = function() { this.x += this.speedX,this.y += this.speedY; };
this.Update = function() { this.UpdatePosition(); this.Draw(); };	
this.Stop = function() { this.speedX = 0,this.speedY = 0; };

this.Translate = function(position_x,position_y)
{
   if(Unknown(position_x)) position_x = this.x;
   if(Unknown(position_y)) position_y = this.y;
   this.x = position_x,this.y = position_y;   
};

this.Force = function(force_x,force_y)
{
   if(Unknown(force_x)) force_x = this.speedX;
   if(Unknown(force_y)) force_y = this.speedY;
   this.speedX = force_x,this.speedY = force_y;   
};

this.Move = function(position,force)
{
   if(Unknown(force)) force = 0;
   if(position == "up") this.speedY = Math.abs(force);
   if(position == "down") this.speedY = force;
   if(position == "left") this.speedX = Math.abs(force);
   if(position == "right") this.speedX = force;
};
this.AddFeature = function(feature,code) { this.feature = code; };
this.InPosition = function(x_pos,y_pos) { return(this.x == x_pos && this.y == y_pos); };
if(autoupdate) this.Update();
this.Add();
}

function Texture(url,x,y,width,height,autoupdate)
{
	
this.img = new Image();
this.img.src = url;
this.x = x;
this.y = y;
this.speedX = 0;
this.speedY = 0;
this.bounce = 0;
this.gravity = 0;
this.gravitySpeed = 0;
this.height = height;
this.alpha = 1;
this.width = width;
this.h = this.height;
this.w = this.width;
this.destroyed = false;
this.rotated = false;
this.collidable = true;
this.clicked = false;
this.touched = false;
this.hovered = false;
this.state = "default";
this.clickFunction = 0;
this.rotationAngle = 0;
this.name = "";
var mousePosition = { x:0,y:0 };
var isClicking = false,isTouching = false,mousePressed = false,canvasTouched = false;
this.SetInteractions = function(clickF) 
{
	if(Unknown(clickF)) clickF = 0;
	this.clickFunction = clickF;
};
this.Add = function()
{
document.addEventListener("mousemove",(e) => 
{ 
	mousePosition.x = e.offsetX || e.layerX;
	mousePosition.y	= e.offsetY || e.layerY;
});
document.addEventListener("touchmove",(e) => 
{
	touchPosition.x = e.pageX || e.clientX;
	touchPosition.y = e.pageY || e.clientY;
});
cakecanvas.addEventListener("touchstart",() => { canvasTouched = true; });
cakecanvas.addEventListener("touchend",() => { canvasTouched = false; });
cakecanvas.addEventListener('mousedown',() => { mousePressed = true; });
cakecanvas.addEventListener('mouseup',() => { mousePressed = false; });
};
this.Name = function(x) { this.name = x; };
this.Rotate = function(a) { this.rotated = true,this.rotationAngle = a; };
this.Draw = function()
{
if(Unknown(this.x)) this.x = 0;
if(Unknown(this.y)) this.y = 0;
if(Unknown(autoupdate)) autoupdate = false;
cakepen.globalAlpha = this.alpha;
if(this.destroyed) cakepen.globalAlpha = 0;
if(this.rotated) cakepen.rotate(this.rotationAngle);
cakepen.drawImage(this.img,this.x,this.y,this.height,this.width);
cakepen.globalAlpha = this.alpha;
cakepen.rotate(-this.rotationAngle);
};
	
 this.UpdatePosition = function() 
 {
	 this.gravitySpeed += this.gravity;
	 this.x += this.speedX;
	 this.y += this.speedY;
	 if ((mousePosition.x >= this.x && mousePosition.x <= this.x + this.width &&
		mousePosition.y >= this.y && mousePosition.y <= this.y + this.height) ||
		(touchPosition.x >= this.x && touchPosition.x <= this.x + this.width &&
		touchPosition.y >= this.y && touchPosition.y <= this.y + this.height)) {
	  this.state = 'hover'; this.hovered = true;
	  // check for click
	  if (mousePressed || canvasTouched) 
	  {
		this.state = 'active';
		if ((typeof this.clickFunction === 'function') && (!isClicking || !isTouching)) {
		  this.clickFunction();
		  isClicking = true; isTouching = true; this.clicked = true; this.touched = true;
		}
	  }
	  else isClicking = false,isTouching = false,this.clicked = false,this.touched = false;
	}
	else this.state = 'default'; 
};
 this.Floor = function() { if(this.y > cakecanvas.height - this.height) this.y = cakecanvas.height - this.height; };
 this.FloorAndBounce = function() { if(this.y > cakecanvas.height - this.height) this.y = cakecanvas.height - this.height,this.gravitySpeed = -(this.gravitySpeed * this.bounce); };		
 this.Accelerate = function(g) { this.gravity = g; };
 this.Destroy = function() { this.destroyed = true; };
 this.Update = function() { this.UpdatePosition(); this.Draw(); };	
 this.Stop = function() { this.speedX = 0,this.speedY = 0; };
 this.Translate = function(position_x,position_y)
 {
   if(Unknown(position_x)) position_x = this.x;
   if(Unknown(position_y)) position_y = this.y;
   this.x = position_x,this.y = position_y;   
 };

this.Resize = function(w,h)
{
  if(Unknown(h)) h = this.height;
  if(Unknown(w)) w = this.width;  
  this.height = h,this.width = w;	
};

this.Force = function(force_x,force_y)
{
   if(Unknown(force_x)) force_x = this.speedX;
   if(Unknown(force_y)) force_y = this.speedY;
   this.speedX = force_x,this.speedY = force_y;   
};

this.Move = function(position,force)
{
   if(Unknown(force)) force = 0;
   if(position == "up") this.speedY = Math.abs(force);
   if(position == "down") this.speedY = force;
   if(position == "left") this.speedX = Math.abs(force);
   if(position == "right") this.speedX = force;
};
this.AddFeature = function(feature,code) { this.feature = code; };
this.InPosition = function(x_pos,y_pos) { return(this.x == x_pos && this.y == y_pos); };
if(autoupdate) this.Update();
this.Add();
}

function Circle(x,y,radius,color,autoupdate)
{
		this.x = x;
		this.y = y;
		this.a = 90;
		this.b = 180 * Math.PI;
		this.radius = radius;
		this.r = this.radius;
		this.alpha = 1;
		this.speedX = 0;
		this.speedY = 0;
		this.speed = 0;
		this.color = color;
		this.stroke = this.color;
		this.gravity = 0;
		this.bounce = 0;
		this.gravitySpeed = 0;
		this.destroyed = false;
		this.rotated = false;
		this.collidable = true;
		this.clicked = false;
		this.touched = false;
		this.hovered = false;
		this.clickFunction = 0;
		this.rotationAngle = 0;
		this.name = "";
		this.state = "default";
		var touchPosition = { x:0,y:0 };
		var mousePosition = { x:0,y:0 };
		var isClicking = false,isTouching = false,mousePressed = false,canvasTouched = false;
this.SetInteractions = function(clickF) 
{
	if(Unknown(clickF)) clickF = 0;
	this.clickFunction = clickF;
};
this.Add = function()
{
document.addEventListener("mousemove",(e) => 
{ 
	mousePosition.x = e.offsetX || e.layerX;
	mousePosition.y	= e.offsetY || e.layerY;
});
document.addEventListener("touchmove",(e) => 
{
	touchPosition.x = e.pageX || e.clientX;
	touchPosition.y = e.pageY || e.clientY;
});
cakecanvas.addEventListener("touchstart",() => { canvasTouched = true; });
cakecanvas.addEventListener("touchend",() => { canvasTouched = false; });
cakecanvas.addEventListener('mousedown',() => { mousePressed = true; });
cakecanvas.addEventListener('mouseup',() => { mousePressed = false; });
};
this.Name = function(x) { this.name = x; };
this.Draw = function()
{  
        if(Unknown(this.x)) this.x = 0;
		if(Unknown(this.y)) this.y = 0;
		if(Unknown(this.radius)) this.radius = 1;
		if(Unknown(this.color)) this.color = "black";
		if(Unknown(this.a)) this.a = 90;
		if(Unknown(autoupdate)) autoupdate = false;
		if(Unknown(this.b)) this.b = 180;
		cakepen.fillStyle = this.color;
		cakepen.globalAlpha = this.alpha;
		cakepen.strokeStyle = this.stroke;
        if(this.destroyed) cakepen.globalAlpha = 0;
		if(this.rotated) cakepen.rotate(this.rotationAngle);
		cakepen.beginPath();
        cakepen.arc(this.x, this.y, this.radius, this.a, this.b);
        cakepen.stroke();
        cakepen.fill();
        cakepen.closePath();
        cakepen.globalAlpha = this.alpha;
        cakepen.rotate(-this.rotationAngle);		
		};
this.UpdatePosition = function() 
{ 
	this.gravitySpeed += this.gravity;
	this.x += this.speedX;
	this.y += this.speedY + this.gravitySpeed;
	if ((mousePosition.x >= this.x && mousePosition.x <= this.x + this.radius &&
		mousePosition.y >= this.y && mousePosition.y <= this.y + this.radius) ||
		(touchPosition.x >= this.x && touchPosition.x <= this.x + this.radius &&
		touchPosition.y >= this.y && touchPosition.y <= this.y + this.radius)) {
	  this.state = 'hover'; this.hovered = true;
	  // check for click
	  if (mousePressed || canvasTouched) 
	  {
		this.state = 'active';
		if ((typeof clickFunction === 'function') && (!isClicking || !isTouching)) {
		  this.clickFunction();
		  isClicking = true; isTouching = true; this.clicked = true; this.touched = true;
		}
	  }
	  else isClicking = false,isTouching = false,this.clicked = false,this.touched = false;
	}
	else this.state = 'default';
 };
this.Floor = function() { if(this.y > cakecanvas.height - this.radius) this.y = cakecanvas.height - this.radius; };
this.FloorAndBounce = function() { if(this.y > cakecanvas.height - this.radius) this.y = cakecanvas.height - this.radius,this.gravitySpeed = -(this.gravitySpeed * this.bounce); };
this.Accelerate = function(g) { this.gravity = g; };
this.Destroy = function() { this.destroyed = true; };
this.Rotate = function(a) { this.rotated = true,this.rotationAngle = a; };
this.Update = function() { this.UpdatePosition(); this.Draw(); };
this.Stop = function() { this.speedX = 0,this.speedY = 0; };
this.Translate = function(position_x,position_y)
{
   if(Unknown(position_x)) position_x = this.x;
   if(Unknown(position_y)) position_y = this.y;
   this.x = position_x,this.y = position_y;   
};
this.Resize = function(r) { if(Unknown(r)) r = this.radius; this.radius = r; };
this.Force = function(force_x,force_y)
{
   if(Unknown(force_x)) force_x = this.speedX;
   if(Unknown(force_y)) force_y = this.speedY;
   this.speedX = force_x,this.speedY = force_y;   
};
this.Move = function(position,force)
{
   if(Unknown(force)) force = 0;
   if(position == "up") this.speedY = Math.abs(force);
   if(position == "down") this.speedY = force;
   if(position == "left") this.speedX = Math.abs(force);
   if(position == "right") this.speedX = force;
};
this.AddFeature = function(feature,code) { this.feature = code; };
this.InPosition = function(x_pos,y_pos) { return(this.x == x_pos && this.y == y_pos); };
if(autoupdate) this.Update();
this.Add();
}

function Square(x,y,size,color,autoupdate)
{
        this.x = x;
		this.y = y;
		this.size = size;
		this.height = this.size;
		this.width = this.size;
		this.h = this.height;
		this.w = this.width;
		this.speedX = 0;
		this.speedY = 0;
		this.speed = 0;
		this.color = color;
		this.gravity = 0;
		this.bounce = 0;
		this.gravitySpeed = 0;
		this.destroyed = false;
		this.rotated = false;
		this.collidable = true;
		this.alpha = 1;
		this.stroke = this.color;
		this.clicked = false;
		this.touched = false;
		this.hovered = false;
		this.state = "default";
		this.clickFunction = 0;
		this.rotationAngle = 0;
		this.name = "";
		var touchPosition = { x:0,y:0 };
		var mousePosition = { x:0,y:0 };
		var isClicking = false,isTouching = false,mousePressed = false,canvasTouched = false;
this.SetInteractions = function(clickF) 
{
	if(Unknown(clickF)) clickF = 0;
	this.clickFunction = clickF;
};
this.Add = function()
{
document.addEventListener("mousemove",(e) => 
{ 
	mousePosition.x = e.offsetX || e.layerX;
	mousePosition.y	= e.offsetY || e.layerY;
});
document.addEventListener("touchmove",(e) => 
{
	touchPosition.x = e.pageX || e.clientX;
	touchPosition.y = e.pageY || e.clientY;
});
cakecanvas.addEventListener("touchstart",() => { canvasTouched = true; });
cakecanvas.addEventListener("touchend",() => { canvasTouched = false; });
cakecanvas.addEventListener('mousedown',() => { mousePressed = true; });
cakecanvas.addEventListener('mouseup',() => { mousePressed = false; });
};
this.Name = function(x) { this.name = x; };
this.Draw = function()
{  
        if(Unknown(this.x)) this.x = 0;
        if(Unknown(this.y)) this.y = 0;
		if(Unknown(this.size)) this.size = 0;
		if(Unknown(autoupdate)) autoupdate = false;
        if(Unknown(this.color)) this.color = "black";		
        cakepen.globalAlpha = this.alpha,cakepen.strokeStyle = this.stroke,cakepen.fillStyle = this.color;
		if(this.destroyed) cakepen.globalAlpha = 0;
		if(this.rotated) cakepen.rotate(this.rotationAngle);
		cakepen.fillRect(this.x,this.y,this.size,this.size);
		cakepen.globalAlpha = this.alpha;
		cakepen.rotate(-this.rotationAngle);
		};
this.UpdatePosition = function() 
{ 
	this.gravitySpeed += this.gravity;
	this.x += this.speedX;
	this.y += this.speedY + this.gravitySpeed;
	if ((mousePosition.x >= this.x && mousePosition.x <= this.x + this.size &&
		mousePosition.y >= this.y && mousePosition.y <= this.y + this.size) ||
		(touchPosition.x >= this.x && touchPosition.x <= this.x + this.size &&
		touchPosition.y >= this.y && touchPosition.y <= this.y + this.size)) {
	  this.state = 'hover'; this.hovered = true;
	  // check for click
	  if (mousePressed || canvasTouched) 
	  {
		this.state = 'active';
		if ((typeof this.clickFunction === 'function') && (!isClicking || !isTouching)) {
		  this.clickFunction();
		  isClicking = true; isTouching = true; this.clicked = true; this.touched = true;
		}
	  }
	  else isClicking = false,isTouching = false,this.clicked = false,this.touched = false;
	}
	else this.state = 'default';
};
this.Floor = function() { if(this.y > cakecanvas.height - this.size) this.y = cakecanvas.height - this.size; };
this.FloorAndBounce = function() { if(this.y > cakecanvas.height - this.size) this.y = cakecanvas.height - this.size,this.gravitySpeed = -(this.gravitySpeed * this.bounce); };
this.Accelerate = function(g) { this.gravity = g; };
this.Destroy = function() { this.destroyed = true; };	
this.Rotate = function(a) { this.rotated = true,this.rotationAngle = a; };
this.Update = function() { this.UpdatePosition(); this.Draw(); };
this.Stop = function() { this.speedX = 0,this.speedY = 0; };
this.Translate = function(position_x,position_y)
{
   if(Unknown(position_x)) position_x = this.x;
   if(Unknown(position_y)) position_y = this.y;
   this.x = position_x,this.y = position_y;   
};
this.Force = function(force_x,force_y)
{
   if(Unknown(force_x)) force_x = this.speedX;
   if(Unknown(force_y)) force_y = this.speedY;
   this.speedX = force_x,this.speedY = force_y;   
};

this.Move = function(position,force)
{
   if(Unknown(force)) force = 0;
   if(position == "up") this.speedY = Math.abs(force);
   if(position == "down") this.speedY = force;
   if(position == "left") this.speedX = Math.abs(force);
   if(position == "right") this.speedX = force;
};
this.AddFeature = function(feature,code) { this.feature = code; };
this.InPosition = function(x_pos,y_pos) { return(this.x == x_pos && this.y == y_pos); };
this.Resize = function(s) { if(Unknown(s)) s = this.size; this.size = s; };
if(autoupdate) this.Update();
this.Add();
}

function RoundedRect(x,y,width,height,color,radius,autoupdate)
{
	    this.x = x;
		this.y = y;
		this.alpha = 1;
		this.height = height;
		this.width = width;
		this.h = this.height;
		this.w = this.width;
		this.radius = radius;
		this.r = this.radius;
		this.speedX = 0;
		this.speedY = 0;
		this.speed = 0;
		this.color = color;
		this.stroke = this.color;
		this.gravity = 0;
		this.bounce = 0;
		this.gravitySpeed = 0;
		this.destroyed = false;
		this.rotated = false;
		this.collidable = true;
		this.clicked = false;
		this.touched = false;
		this.hovered = false;
		this.state = "default";
		this.clickFunction = 0;
		this.rotationAngle = 0;
		this.name = "";
		var touchPosition = { x:0,y:0 };
		var mousePosition = { x:0,y:0 };
		var isClicking = false,isTouching = false,mousePressed = false,canvasTouched = false;
this.SetInteractions = function(clickF) 
{
	if(Unknown(clickF)) clickF = 0;
	this.clickFunction = clickF;
};
this.Add = function()
{
document.addEventListener("mousemove",(e) => 
{ 
	mousePosition.x = e.offsetX || e.layerX;
	mousePosition.y	= e.offsetY || e.layerY;
});
document.addEventListener("touchmove",(e) => 
{
	touchPosition.x = e.pageX || e.clientX;
	touchPosition.y = e.pageY || e.clientY;
});
cakecanvas.addEventListener("touchstart",() => { canvasTouched = true; });
cakecanvas.addEventListener("touchend",() => { canvasTouched = false; });
cakecanvas.addEventListener('mousedown',() => { mousePressed = true; });
cakecanvas.addEventListener('mouseup',() => { mousePressed = false; });
};
this.Name = function(x) { this.name = x; };
this.Draw = function()
{  
        if(Unknown(this.x)) this.x = 0;
		if(Unknown(this.y)) this.y = 0;
		if(Unknown(this.height)) this.height = 0;
		if(Unknown(this.width)) this.width = 0;
		if(Unknown(this.color)) this.color = "black";
		if(Unknown(this.radius)) this.radius = 1;
		if(Unknown(autoupdate)) autoupdate = false;
		cakepen.fillStyle = this.color,cakepen.strokeStyle = this.stroke,cakepen.globalAlpha = this.alpha;
		if(this.destroyed) cakepen.globalAlpha = 0;
		if(this.rotated) cakepen.rotate(this.rotationAngle);
		cakepen.beginPath();
        cakepen.moveTo(this.x + this.radius,this.y);
        cakepen.lineTo(this.x + this.width - this.radius,this.y);
        cakepen.quadraticCurveTo(this.x + this.width,this.y,this.x + this.width,this.y + this.radius);
        cakepen.lineTo(this.x + this.width,this.y + this.height - this.radius);
        cakepen.quadraticCurveTo(this.x + this.width,this.y + this.height,this.x + width - this.radius,this.y + this.height);
        cakepen.lineTo(this.x + this.radius,this.y + this.height);
        cakepen.quadraticCurveTo(this.x,this.y + this.height,this.x,this.y + this.height - this.radius);
        cakepen.lineTo(this.x,this.y + this.radius);
        cakepen.quadraticCurveTo(this.x,this.y,this.x + this.radius,this.y);
        cakepen.closePath();
		cakepen.fill();
		cakepen.globalAlpha = this.alpha;
		cakepen.rotate(-this.rotationAngle);
		};
		
this.UpdatePosition = function() 
{ 
	this.gravitySpeed += this.gravity;
	this.x += this.speedX;
	this.y += this.speedY + this.gravitySpeed; 
	if ((mousePosition.x >= this.x && mousePosition.x <= this.x + this.width &&
		mousePosition.y >= this.y && mousePosition.y <= this.y + this.height) ||
		(touchPosition.x >= this.x && touchPosition.x <= this.x + this.width &&
		touchPosition.y >= this.y && touchPosition.y <= this.y + this.height)) {
	  this.state = 'hover'; this.hovered = true;
	  // check for click
	  if (mousePressed || canvasTouched) 
	  {
		this.state = 'active';
		if ((typeof this.clickFunction === 'function') && (!isClicking || !isTouching)) {
		  this.clickFunction();
		  isClicking = true; isTouching = true; this.clicked = true; this.touched = true;
		}
	  }
	  else isClicking = false,isTouching = false,this.clicked = false,this.touched = false;
	}
	else this.state = 'default';
};		
this.Floor = function() { if(this.y > cakecanvas.height - this.size) this.y = cakecanvas.height - this.size; };
this.FloorAndBounce = function() { if(this.y > cakecanvas.height - this.size) this.y = cakecanvas.height - this.size,this.gravitySpeed = -(this.gravitySpeed * this.bounce); };		
this.Accelerate = function(g) { this.gravity = g; };
this.Destroy = function() { this.destroyed = true; };	
this.Rotate = function(a) { this.rotated = true,this.rotationAngle = a; };
this.Update = function() { this.UpdatePosition(); this.Draw(); };
this.Stop = function() { this.speedX = 0,this.speedY = 0; };
this.Translate = function(position_x,position_y)
{
   if(Unknown(position_x)) position_x = this.x;
   if(Unknown(position_y)) position_y = this.y;
   this.x = position_x,this.y = position_y;   
};
this.Resize = function(w,h,r)
{
  if(Unknown(h)) h = this.height;
  if(Unknown(w)) w = this.width;
  if(Unknown(r)) r = this.radius;
  this.height = h,this.width = w,this.radius = r;
};
this.Force = function(force_x,force_y)
{
   if(Unknown(force_x)) force_x = this.speedX;
   if(Unknown(force_y)) force_y = this.speedY;
   this.speedX = force_x,this.speedY = force_y;   
};

this.Move = function(position,force)
{
   if(Unknown(force)) force = 0;
   if(position == "up") this.speedY = Math.abs(force);
   if(position == "down") this.speedY = force;
   if(position == "left") this.speedX = Math.abs(force);
   if(position == "right") this.speedX = force;
};
this.AddFeature = function(feature,code) { this.feature = code; };
this.InPosition = function(x_pos,y_pos) { return(this.x == x_pos && this.y == y_pos); };
if(autoupdate) this.Update();
this.Add();
}
function Polygon(points,color,autoupdate)
{
 this.points = points;
 this.x = this.points[0][0];
 this.y = this.points[0][1];
 this.speedX = 0;
 this.speedY = 0;
 this.color = color;
 this.stroke = this.color;
 this.gravity = 0;
 this.gravitySpeed = 0;
 this.color = color;
 this.alpha = 1;
 this.destroyed = false; 
 this.rotated = false;
 this.rotationAngle = 0;
 this.name = "";
 this.Name = function(x) { this.name = x; };
 this.UpdatePosition = function() { this.gravitySpeed += this.gravity,this.x += this.speedX,this.y += this.speedY + this.gravitySpeed; };
 this.Draw = function()
 {
 if(Unknown(this.color)) this.color = "black";
 if(Unknown(autoupdate)) autoupdate = false;
 cakepen.globalAlpha = this.alpha,cakepen.fillStyle = this.color,cakepen.strokeStyle = this.stroke;
 if(this.destroyed) cakepen.globalAlpha = 0;
 if(this.rotated) cakepen.rotate(this.rotationAngle);
 if (points.length <= 0) return;
 cakepen.moveTo(points[0][0], points[0][1]);
 for (var i = 0; i < points.length; i++) cakepen.lineTo(points[i][0], points[i][1]);
 cakepen.fill();
 cakepen.stroke();
 cakepen.globalAlpha = this.alpha;
 cakepen.rotate(-this.rotationAngle);
 };
 this.Update = function() { this.UpdatePosition(); this.Draw(); };
 this.Accelerate = function(g) { this.gravity = g; };
 this.Destroy = function() { this.destroyed = true; };
 this.Rotate = function(a) { this.rotated = true,this.rotationAngle = a; };
 this.Stop = function() { this.speedX = 0,this.speedY = 0; };
 this.Translate = function(position_x,position_y)
 {
 if(Unknown(position_x)) position_x = this.x;
 if(Unknown(position_y)) position_y = this.y;
 this.x = position_x,this.y = position_y; 
 };
 
 this.Force = function(force_x,force_y)
 {
 if(Unknown(force_x)) force_x = this.speedX;
 if(Unknown(force_y)) force_y = this.speedY;
 this.speedX = force_x,this.speedY = force_y; 
 };
 
this.Move = function(position,force)
{
   if(Unknown(force)) force = 0;
   if(position == "up") this.speedY = Math.abs(force);
   if(position == "down") this.speedY = force;
   if(position == "left") this.speedX = Math.abs(force);
   if(position == "right") this.speedX = force;
};
this.AddFeature = function(feature,code) { this.feature = code; };
this.InPosition = function(x_pos,y_pos) { return(this.x == x_pos && this.y == y_pos); };
if(autoupdate) this.Update();
this.Add();
}
function Sprite(url,x,y,width,height,autoupdate)
{	
this.url = url;
this.img = new Image();
this.img.src = this.url;
this.x = x;
this.y = y;
this.alpha = 1;
this.speedX = 0;
this.speedY = 0;
this.bounce = 0;
this.gravity = 0;
this.gravitySpeed = 0;
this.height = height;
this.width = width;
this.h = this.height;
this.w = this.width;
this.name = "";
this.destroyed = false;
this.rotated = false;
this.collidable = true;
this.clicked = false;
this.touched = false;
this.hovered = false;
this.state = "default";
this.clickFunction = 0;
this.rotationAngle = 0;
var touchPosition = { x:0,y:0 };
var mousePosition = { x:0,y:0 };
var isClicking = false,isTouching = false,mousePressed = false,canvasTouched = false;
this.SetInteractions = function(clickF) 
{
	if(Unknown(clickF)) clickF = 0;
	this.clickFunction = clickF;
};
this.Add = function()
{
document.addEventListener("mousemove",(e) => 
{ 
	mousePosition.x = e.offsetX || e.layerX;
	mousePosition.y	= e.offsetY || e.layerY;
});
document.addEventListener("touchmove",(e) => 
{
	touchPosition.x = e.pageX || e.clientX;
	touchPosition.y = e.pageY || e.clientY;
});
cakecanvas.addEventListener("touchstart",() => { canvasTouched = true; });
cakecanvas.addEventListener("touchend",() => { canvasTouched = false; });
cakecanvas.addEventListener('mousedown',() => { mousePressed = true; });
cakecanvas.addEventListener('mouseup',() => { mousePressed = false; });
};
this.Name = function(x) { this.name = x; };
this.Draw = function()
{
cakepen.globalAlpha = this.alpha;
if(Unknown(this.x)) this.x = 0;
if(Unknown(this.y)) this.y = 0;
if(Unknown(this.height)) this.height = 0;
if(Unknown(this.width)) this.width = 0;
if(Unknown(autoupdate)) autoupdate = false;
if(this.destroyed) cakepen.globalAlpha = 0;
if(this.rotated) cakepen.rotate(this.rotationAngle);
cakepen.drawImage(this.img.src[0],this.x,this.y,this.height,this.width);
cakepen.globalAlpha = this.alpha;
cakepen.rotate(-this.rotationAngle);
};
this.Animate = function()
{
if(this.destroyed) cakepen.globalAlpha = 0;
if(this.rotated) cakepen.rotate(this.rotationAngle);
for(x in this.img.src) cakepen.drawImage(this.img.src,this.x,this.y,this.height,this.width);
cakepen.globalAlpha = 1;
cakepen.rotate(-this.rotationAngle);
};
this.UpdatePosition = function() 
{ 
	this.gravitySpeed += this.gravity;
	this.x += this.speedX;
	this.y += this.speedY;
	if ((mousePosition.x >= this.x && mousePosition.x <= this.x + this.width &&
		mousePosition.y >= this.y && mousePosition.y <= this.y + this.height) ||
		(touchPosition.x >= this.x && touchPosition.x <= this.x + this.width &&
		touchPosition.y >= this.y && touchPosition.y <= this.y + this.height)) {
	  this.state = 'hover'; this.hovered = true;
	  // check for click
	  if (mousePressed || canvasTouched) 
	  {
		this.state = 'active';
		if ((typeof this.clickFunction === 'function') && (!isClicking || !isTouching)) {
		  this.clickFunction();
		  isClicking = true; isTouching = true; this.clicked = true; this.touched = true;
		}
	  }
	  else isClicking = false,isTouching = false,this.clicked = false,this.touched = false;
	}
	else this.state = 'default';
};
this.Floor = function() { if(this.y > cakecanvas.height - this.height) this.y = cakecanvas.height - this.height; };
this.FloorAndBounce = function() { if(this.y > cakecanvas.height - this.height) this.y = cakecanvas.height - this.height,this.gravitySpeed = -(this.gravitySpeed * this.bounce); };
this.Accelerate = function(g) { this.gravity = g; };
this.Destroy = function() { this.destroyed = true; };
this.Rotate = function(a) { this.rotated = true,this.rotationAngle = a; };
this.Update = function() { this.UpdatePosition(); this.Animate(); };	
this.Stop = function() { this.speedX = 0,this.speedY = 0; };
this.Translate = function(position_x,position_y)
{
   if(Unknown(position_x)) position_x = this.x;
   if(Unknown(position_y)) position_y = this.y;
   this.x = position_x,this.y = position_y;   
};

this.Resize = function(w,h)
{
  if(Unknown(h)) h = this.height;
  if(Unknown(w)) w = this.width;
  this.height = h,this.width = w;	
};

this.Force = function(force_x,force_y)
{
   if(Unknown(force_x)) force_x = this.speedX;
   if(Unknown(force_y)) force_y = this.speedY;
   this.speedX = force_x,this.speedY = force_y;   
};

this.Move = function(position,force)
{
   if(Unknown(force)) force = 0;
   if(position == "up") this.speedY = Math.abs(force);
   if(position == "down") this.speedY = force;
   if(position == "left") this.speedX = Math.abs(force);
   if(position == "right") this.speedX = force;
};
this.Add = function(feature,code) { this.feature = code; };
this.InPosition = function(x_pos,y_pos) { return(this.x == x_pos && this.y == y_pos); };
if(autoupdate) this.Update();
}
function PolygonLineSides(x,y,size,sides,color,stroke_color,start_angle,anticlockwise,autoupdate)
{
this.x = x;
this.y = y;
this.size = size;
this.sides = sides;
this.color = color;
this.stroke_color = stroke_color;
this.speedX = 0;
this.alpha = 0;
this.rotated = false;
this.name = "";
this.rotationAngle = 0;
this.speedY = 0;
this.gravitySpeed = 0;
this.gravity = 0;
this.destroyed = false;
this.startangle = start_angle;
this.anticlockwise = anticlockwise;
this.UpdatePosition = function() { this.gravitySpeed += this.gravity,this.x += this.speedX,this.y += this.speedY; };
this.Draw = function()
{
	cakepen.globalAlpha = this.alpha;
    if(Unknown(this.x)) this.x = 0;
    if(Unknown(this.y)) this.y = 0;
    if(Unknown(this.size)) this.size = 1;
    if(Unknown(this.color)) this.color = "black";
    if(Unknown(this.sides)) this.sides = 1;
    if(Unknown(this.anticlockwise)) this.anticlockwise = false;
    if(Unknown(this.startangle)) this.startangle = 90;
	if(Unknown(this.stroke)) this.stroke = this.color;
	if(this.destroyed) cakepen.globalAlpha = 0;
	if(this.rotated) cakepen.rotate(this.rotationAngle);
	cakepen.fillStyle = this.color,cakepen.strokeStyle = this.stroke_color;
	cakepen.beginPath();
	if (this.sides < 3) return;
	var a = 360 / this.sides;
	a = this.anticlockwise? -a : a;
	cakepen.moveTo(this.x,this.y);
	for (var i = 1; i < this.sides; i++) cakepen.lineTo(this.size * Math.cos(a * i),this.size * Math.sin(a * i));
	cakepen.closePath();
	cakepen.fill();
	cakepen.globalAlpha = this.alpha;
	cakepen.rotate(-this.rotationAngle);
};

this.Translate = function(position_x,position_y)
{
	if(Unknown(position_x)) position_x = this.x;
	if(Unknown(position_y)) position_y = this.y;
	this.x = position_x,this.y = position_y; 
};
this.Rotate = function(a) { this.rotated = true,this.rotationAngle = a; };
this.Destroy = function() { this.destroyed = true; };
this.Resize = function(s) { this.size = s; };
this.Force = function(force_x,force_y)
{
	if(Unknown(force_x)) force_x = this.speedX;
	if(Unknown(force_y)) force_y = this.speedY;
	this.speedX = force_x,this.speedY = force_y;   
};
this.Stop = function() { this.speedX = 0,this.speedY = 0; };
this.Force = function(force_x,force_y)
{
   if(Unknown(force_x)) force_x = this.speedX;
   if(Unknown(force_y)) force_y = this.speedY;
   this.speedX = force_x,this.speedY = force_y;   
};

this.Move = function(position,force)
{
   if(Unknown(force)) force = 0;
   if(position == "up") this.speedY = Math.abs(force);
   if(position == "down") this.speedY = force;
   if(position == "left") this.speedX = Math.abs(force);
   if(position == "right") this.speedX = force;
};
this.AddFeature = function(feature,code) { this.feature = code; };
this.InPosition = function(x_pos,y_pos) { return(this.x == x_pos && this.y == y_pos); };
this.Update = function() { this.UpdatePosition(); this.Draw(); };
if(autoupdate) this.Update();
this.Add();
}
function LinearGradient(x,y,w,h,content)
{
	this.x = x;
	this.y = y;
	this.height = h;
	this.width = w;
	this.content = content;
	this.gradient = cakepen.createLinearGradient(this.x, this.y, this.width, this.height);
	for(var loopdlg = 0;loopdlg < content.length;loopdlg++) this.gradient.addColorStop(content[loopdlg][0], content[loopdlg][1]);
}
function RadialGradient(x,y,w,h,r,content)
{
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.size = r;
	this.radius = r;
	this.content = content;
	this.gradient = cakepen.createRadialGradient(this.x, this.y, this.radius, this.width, this.height, this.radius);
	for(var loopdrg = 0;loopdrg < content.length;loopdrg++) this.gradient.addColorStop(content[loopdrg][0],content[loopdrg][1]);
}
function Line(pos1,pos2,size,color)
{
this.pos1 = pos1;
this.pos2 = pos2;
this.size = size;
this.color = color;
this.destroyed = false;
this.alpha = 1.0;
if(Unknown(this.pos1[0])) this.pos1[0] = 0;
if(Unknown(this.pos1[1])) this.pos1[1] = 0;
if(Unknown(this.pos2[0])) this.pos2[0] = 0;
if(Unknown(this.pos2[1])) this.pos2[1] = 0;
if(Unknown(this.size)) this.size = 1;
if(Unknown(this.color)) this.color = "black";
this.Draw = function()
{
	cakepen.strokeStyle = this.color;
	cakepen.lineHeight = this.size;
	cakepen.lineWidth = this.size;
	if(this.destroyed) cakepen.globalAlpha = 0;
	cakepen.beginPath();
	cakepen.moveTo(pos1[0],pos1[1]);
	cakepen.lineTo(pos2[0],pos2[1]);
	cakepen.stroke();
	cakepen.closePath();
	cakepen.globalAlpha = this.alpha;
};
this.Update = function()
{
	this.Draw();
};
this.Resize = function(linesize)
{
	if(Unknown(linesize)) linesize = this.size;
	this.size = linesize;
};
this.Translate = function(position1,position2)
{
	this.pos1[0] = position1[0];
	this.pos1[1] = position1[1];
	this.pos2[0] = position2[0];
	this.pos2[1] = position2[1];
};
this.Destroy = function(){ this.destroyed = true; };
}
function Triangle(pos1,pos2,pos3,color)
{
this.pos1 = pos1;
this.pos2 = pos2;
this.pos3 = pos3;
this.color = color;
this.destroyed = false;
this.rotated = false;
this.rotationAngle = 0;
this.alpha = 1.0;
if(Unknown(this.pos1[0])) this.pos1[0] = 0;
if(Unknown(this.pos1[1])) this.pos1[1] = 0;
if(Unknown(this.pos2[0])) this.pos2[0] = 0;
if(Unknown(this.pos2[1])) this.pos2[1] = 0;
if(Unknown(this.pos3[0])) this.pos3[0] = 0;
if(Unknown(this.pos3[1])) this.pos3[1] = 0;
if(Unknown(this.color)) this.color = "black";
this.Draw = function()
{
	cakepen.strokeStyle = this.color;
	if(this.destroyed) cakepen.globalAlpha = 0;
	if(this.rotated) cakepen.rotate(this.rotationAngle);
	cakepen.beginPath();
	cakepen.moveTo(pos1[0],pos1[1]);
	cakepen.lineTo(pos2[0],pos2[1]);
	cakepen.lineTo(pos3[0],pos3[1]);
	cakepen.lineTo(pos1[0],pos1[1]);
	cakepen.stroke();
	cakepen.closePath();
	cakepen.globalAlpha = this.alpha;
	cakepen.rotate(-this.rotationAngle);
};
this.Update = function()
{
	this.Draw();
};
this.Rotate = function(a)
{
	if(Unknown(a)) a = 0;
	this.rotated = true;
	this.rotationAngle = a;
};
this.Translate = function(position1,position2,position3)
{
	this.pos1[0] = position1[0];
	this.pos1[1] = position1[1];
	this.pos2[0] = position2[0];
	this.pos2[1] = position2[1];
	this.pos3[0] = position3[0];
	this.pos3[1] = position3[1];
};
this.Destroy = function(){ this.destroyed = true; };
}