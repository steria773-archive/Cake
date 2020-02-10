//Created By Rabia Alhaffar In 9/February/2020
//A Library For Checkbox GUI
function Checkbox(x,y,size,color,clickCB)
{
    this.x = x;
    this.y = y;
    this.size = size;
    this.width = this.size;
    this.height = this.size;
    this.color = color;
    this.alpha = 1;
    this.lineSize = this.size / 5;
    this.destroyed = false;
    this.clicked = false;
    this.touched = false;
    this.hovered = false;
    this.checked = false;
    this.state = "default";
    var isClicking = false,isTouching = false,mousePosition = { x: 0, y: 0 },touchPosition = { x: 0, y: 0 },mousePressed = false,canvasTouched = false;
    this.Add = function() 
    {
    cakecanvas.addEventListener('mousemove',(event) => { mousePosition.x = event.offsetX || event.layerX,mousePosition.y = event.offsetY || event.layerY; });
    cakecanvas.addEventListener("touchmove",(event) => { touchPosition.x = event.pageX || event.clientX,touchPosition.y = event.pageY || event.clientY; });
    cakecanvas.addEventListener("touchstart",() => { canvasTouched = true; });
    cakecanvas.addEventListener("touchend",() => { canvasTouched = false; });
		/**
		 * Track the user's clicks.
		 * @param {Event} event
		 */
		cakecanvas.addEventListener('mousedown',() => { mousePressed = true; });
		cakecanvas.addEventListener('mouseup',() => { mousePressed = false; });
    };
    this.UpdatePosition = function() 
      {
        // check for hover
        if ((mousePosition.x >= this.x && mousePosition.x <= this.x + this.width &&
            mousePosition.y >= this.y && mousePosition.y <= this.y + this.height) ||
            (touchPosition.x >= this.x && touchPosition.x <= this.x + this.width &&
            touchPosition.y >= this.y && touchPosition.y <= this.y + this.height)) {
          this.state = 'hover'; this.hovered = true;
          // check for click
          if (mousePressed || canvasTouched) 
          {
            this.state = 'active';
            if ((typeof clickCB === 'function') && (!isClicking || !isTouching)) {
              clickCB();
              isClicking = true,isTouching = true,this.clicked = true,this.touched = true,this.checked = true;
            }
          }
          else isClicking = false,isTouching = false,this.clicked = false,this.touched = false;
        }
        else this.state = 'default';
      };
      this.Draw = function()
      {
        if(this.destroyed) cakepen.globalAlpha = 0;
        cakepen.fillStyle = this.color;
        cakepen.strokeStyle = this.color;
        cakepen.lineHeight = this.lineSize;
        cakepen.lineWidth = this.lineSize;
        if(this.checked) cakepen.fillRect(this.x,this.y,this.size,this.size);
        if(!this.checked) { cakepen.strokeRect(this.x,this.y,this.size,this.size); }
        cakepen.globalAlpha = this.alpha;
      };
      this.Update = function()
      {
          this.UpdatePosition();
          this.Draw();
      };
      this.Destroy = function()
      {
          this.destroyed = true;
      };
      this.Add();
}