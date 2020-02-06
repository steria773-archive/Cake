//Created By Rabia Alhaffar In 1/February/2020
function Bar(x,y,width,height,color)
{
this.x = x;
this.y = y;
this.height = height;
this.width = width;
this.color = color;
this.resizeAmount = 0;
this.resizeMode = "none";
this.alpha = 1;
this.destroyed = false;
if(Unknown(this.color)) this.color = "black";
this.UpdatePosition = function()
{
if(this.resizeMode == "width") this.width += this.resizeAmount;
if(this.resizeMode == "height") this.height += this.resizeAmount;    
};
this.Draw = function()
{
if(Unknown(this.x)) this.x = 0;
if(Unknown(this.y)) this.y = 0;
if(Unknown(this.height)) this.height = 0;
if(Unknown(this.width)) this.width = 0;		
cakepen.fillStyle = this.color;
if(this.destroyed) cakepen.globalAlpha = 0;
cakepen.fillRect(this.x,this.y,this.width,this.height);
cakepen.globalAlpha = this.globalAlpha;
};
this.Destroy = function() { this.destroyed = true; };
this.Update = function(resizing_way,amount)
{
this.resizeMode = resizing_way,this.resizeAmount += amount;
this.UpdatePosition(); this.Draw();
};
}