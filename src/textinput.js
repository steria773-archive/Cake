//Created By Rabia Alhaffar In 1/February/2020
function TextInput(x,y,width,height,colors,clickCB,typeCB)
{
this.x = x;
this.y = y;
this.width = width;
this.height = height;
this.text = "";
this.textColor = "black";
this.colors = colors;
this.alpha = 1;
this.destroyed = false;
var isClicking = false,isTouching = false,mousePosition = { x: 0, y: 0 },touchPosition = { x: 0, y: 0 },mousePressed = false,canvasTouched = false,isTyping = false;
this.Add = function() 
{
    cakecanvas.addEventListener('mousemove',(event) => { mousePosition.x = event.offsetX || event.layerX,mousePosition.y = event.offsetY || event.layerY; });
    cakecanvas.addEventListener("touchmove",(event) => { touchPosition.x = event.pageX || event.clientX,touchPosition.y = event.pageY || event.clientY; });
    cakecanvas.addEventListener("touchstart",() => { canvasTouched = true; });
    cakecanvas.addEventListener("touchend",() => { canvasTouched = false; });
    cakecanvas.addEventListener('mousedown', () => { mousePressed = true; });
    cakecanvas.addEventListener('mouseup', () => { mousePressed = false; });
    cakecanvas.addEventListener('keydown',(event) => { 
    if(this.state == "hover") 
    { 
    isTyping = true; text += event.key; 
    if(typeof typeCB == "function" || isTyping) typeCB();
    }});
};
this.UpdatePosition = function() 
{
    if ((mousePosition.x >= this.x && mousePosition.x <= this.x + this.width &&
        mousePosition.y >= this.y && mousePosition.y <= this.y + this.height) ||
        (touchPosition.x >= this.x && touchPosition.x <= this.x + this.width &&
        touchPosition.y >= this.y && touchPosition.y <= this.y + this.height)) {
        this.state = 'hover';
      // check for click
      if (mousePressed || canvasTouched) {
        this.state = 'active';
        if ((typeof clickCB === 'function') && (!isClicking || !isTouching)) {
          clickCB();
          isClicking = true,isTouching = true;
        }
      }
      else isClicking = false,isTouching = false;
    }
    else this.state = 'default';
};
this.Draw = function() 
{
    var colors = this.colors[this.state],halfH = this.height / 2;
    if(this.destroyed) cakepen.globalAlpha = 0;
    cakepen.fillStyle = colors.top;
    cakepen.strokeRect(this.x, this.y, this.width, halfH);
    cakepen.fillStyle = colors.bottom;
    cakepen.strokeRect(this.x, this.y + halfH, this.width, halfH);
    var size = cakepen.measureText(this.text),x = this.x + (this.width - size.width) / 2,y = this.y + (this.height - 15) / 2 + 12;
    cakepen.fillStyle = this.textColor;
    cakepen.fillText(this.text.toUpperCase(), x, y);
    cakepen.globalAlpha = this.alpha;
};
this.Destroy = function() { this.destroyed = true; };
this.Empty = function() { this.text = ""; };
this.Update = function() { this.UpdatePosition(); this.Draw(); }; this.Add();
}