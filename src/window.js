//Created By Rabia Alhaffar In 4/January/2020
function Window(l,t,w,h,s)
{
this.src = s;
this.h = h,this.w = w;
this.l = l,this.t = t;
this.height = "height=" + this.h,this.width = "width=" + this.w;    
this.Win = 0,this.resizable = "yes";
this.left = "left=" + this.l,this.top = "top=" + this.t;
this.Init = function()
{
if(Unknown(this.src)) this.src = "";
if(Unknown(this.h)) this.h = 400;
if(Unknown(this.w)) this.w = 400;
if(Unknown(this.l)) this.l = 0;
if(Unknown(this.t)) this.t = 0;
this.Win = window.open(this.src,"",this.height + "," + this.width + "," + this.left + "," + this.top + "," + "resizable=" + this.resizable);
};
this.Translate = function(x,y)
{
if(Unknown(x)) x = 0;
if(Unknown(y)) y = 0;
this.Win.moveTo(x,y);
};
this.Move = function(x,y)
{
if(Unknown(x)) x = 0;
if(Unknown(y)) y = 0;
this.Win.moveBy(x,y);
};
this.Resize = function(w,h)
{
if(Unknown(h)) h = 0;
if(Unknown(w)) w = 0;
this.Win.resizeTo(w,h);
};
this.Scale = function(w,h)
{
if(Unknown(h)) h = 0;
if(Unknown(w)) w = 0;
this.Win.resizeBy(w,h);
};
this.Close = function() { this.Win.close(); };
this.Pause = function() { this.Win.stop(); };
this.Write = function(w) { if(Unknown(w)) w = ""; this.Win.document.write(w); };
this.WriteLine = function(wl) { if(Unknown(wl)) wl = ""; this.Win.document.writeln(wl); };
}