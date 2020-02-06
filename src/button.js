//Rectangle Button
function Button(x, y, width, height, text, colors, clickCB) 
 {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.colors = colors;
    this.textColor = "black";
    this.text = text;
    this.alpha = 1;
    this.destroyed = false;
    this.state = 'default';  // current button state
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
      /**
       * Check to see if the user is hovering over or clicking on the button.
       */
      this.UpdatePosition = function() 
      {
        // check for hover
        if ((mousePosition.x >= this.x && mousePosition.x <= this.x + this.width &&
            mousePosition.y >= this.y && mousePosition.y <= this.y + this.height) ||
            (touchPosition.x >= this.x && touchPosition.x <= this.x + this.width &&
            touchPosition.y >= this.y && touchPosition.y <= this.y + this.height)) {
          this.state = 'hover';
          // check for click
          if (mousePressed || canvasTouched) 
          {
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
      /**
       * Draw the button.
       */
      this.Draw = function() 
      {
        var colors = this.colors[this.state],halfH = this.height / 2;
        // button
        if(this.destroyed) cakepen.globalAlpha = 0;
        cakepen.fillStyle = colors.top;
        cakepen.fillRect(this.x, this.y, this.width, halfH);
        cakepen.fillStyle = colors.bottom;
        cakepen.fillRect(this.x, this.y + halfH, this.width, halfH);
        // text
        var size = cakepen.measureText(this.text),x = this.x + (this.width - size.width) / 2,y = this.y + (this.height - 15) / 2 + 12;
        cakepen.fillStyle = this.textColor;
        cakepen.fillText(this.text, x, y);
        cakepen.globalAlpha = this.alpha;
      };
    this.Update = function() { this.UpdatePosition(); this.Draw(); }; this.Add();
    this.Destroy = function() { this.destroyed = true; };
    }


    //Circle-Shaped Button!!!
    function CircleButton(x, y, radius, text, colors, clickCB) 
    {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.text = text;
    this.destroyed = false;
    this.alpha = 1;
    this.textColor = "black";
    this.colors = colors;
    this.state = 'default';  // current button state
    var isClicking = false,isTouching = false,mousePosition = { x: 0, y: 0 },touchPosition = { x: 0, y: 0 },mousePressed = false,canvasTouched = false;
	  this.Add = function() {
    cakecanvas.addEventListener('mousemove',(event) => { mousePosition.x = event.offsetX || event.layerX,mousePosition.y = event.offsetY || event.layerY; });
    cakecanvas.addEventListener("touchmove",(event) => { touchPosition.x = event.pageX || event.clientX,touchPosition.y = event.pageY || event.clientY; });
    cakecanvas.addEventListener("touchstart",(event) => { canvasTouched = true; });
    cakecanvas.addEventListener("touchend",(event) => { canvasTouched = false; });
		/**
		 * Track the user's clicks.
		 * @param {Event} event
		 */
		cakecanvas.addEventListener('mousedown', (event) => { mousePressed = true; });
		cakecanvas.addEventListener('mouseup', (event) => { mousePressed = false; });
	  };
      /**
       * Check to see if the user is hovering over or clicking on the button.
       */
      this.UpdatePosition = function() {
        // check for hover
        if ((mousePosition.x >= this.x && mousePosition.x <= this.x + this.radius &&
            mousePosition.y >= this.y && mousePosition.y <= this.y + this.radius) ||
            (touchPosition.x >= this.x && touchPosition.x <= this.x + this.radius &&
            touchPosition.y >= this.y && touchPosition.y <= this.y + this.radius)) {
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
      /**
       * Draw the button.
       */
      this.Draw = function() {
        var colors = this.colors[this.state],halfR = this.radius / 2;
        // button
        if(this.destroyed) cakepen.globalAlpha = 0;
        cakepen.fillStyle = colors.top;
        cakepen.arc(this.x, this.y, this.radius,90,180 * Math.PI);
        cakepen.fillStyle = colors.bottom;
        cakepen.arc(this.x, this.y + halfR, this.radius,90,180 * Math.PI);
        // text
        var size = cakepen.measureText(this.text),x = this.x + (this.radius - size.width) / 2,y = this.y + (this.radius - 15) / 2 + 12;
        cakepen.fillStyle = this.textColor;
        cakepen.fillText(this.text, x, y);
        cakepen.globalAlpha = this.alpha;
      };
    this.Update = function() { this.UpdatePosition(); this.Draw(); }; 
    this.Destroy = function() { this.destroyed = true; };
    this.Add();
    }

    function RoundedButton(x,y,width,height,radius,text,colors,clickCB)
    {
      
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.colors = colors;
    this.textColor = "black";
    this.text = text;
    this.alpha = 1;
    this.destroyed = false;
    this.state = 'default';  // current button state
    this.radius = radius;
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
       /**
         * Check to see if the user is hovering over or clicking on the button.
        */
          // check for hover
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
      var colors = this.colors[this.state],halfR = this.radius / 2;
      // button
      if(this.destroyed) cakepen.globalAlpha = 0;
      cakepen.beginPath();
      //Part 1 Of Button
      cakepen.fillStyle = colors.top;
      cakepen.moveTo(this.x + this.radius,this.y);
      cakepen.lineTo(this.x + this.width - this.radius,this.y);
      cakepen.quadraticCurveTo(this.x + this.width,this.y,this.x + this.width,this.y + this.radius);
      cakepen.lineTo(this.x + this.width,this.y + this.height - this.radius);
      cakepen.quadraticCurveTo(this.x + this.width,this.y + this.height,this.x + this.width - this.radius,this.y + this.height);
      //Part 2 Of Button
      cakepen.fillStyle = colors.bottom;
      cakepen.lineTo(this.x + this.radius,this.y + this.height);
      cakepen.quadraticCurveTo(this.x,this.y + this.height,this.x,this.y + this.height - this.radius);
      cakepen.lineTo(this.x,this.y + this.radius);
      cakepen.quadraticCurveTo(this.x,this.y,this.x + this.radius,this.y);
      cakepen.closePath();
      // text
      var size = cakepen.measureText(this.text),x = this.x + (this.radius - size.width) / 2,y = this.y + (this.radius - 15) / 2 + 12;
      cakepen.fillStyle = this.textColor;
      cakepen.fillText(this.text, x, y);
      cakepen.globalAlpha = this.alpha; 
    };
    this.Update = function() { this.UpdatePosition(); this.Draw(); };
    this.Destroy = function() { this.destroyed = true; };
    this.Add();
    }
    


    function ImagedButton(x,y,width,height,text,img_src,clickCB)
    {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.text = text;
    this.destroyed = false;
    this.alpha = 1;
    this.textColor = "black";
    this.img = new Image();
    this.img.src = img_src;
    this.state = 'default';  // current button state
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
      /**
         * Check to see if the user is hovering over or clicking on the button.
        */
          // check for hover
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
      if(this.destroyed) cakepen.globalAlpha = 0;
      //image
      cakepen.drawImage(this.img, this.x , this.y, this.width, this.height);
      // text
      var size = cakepen.measureText(this.text),x = this.x + (this.radius - size.width) / 2,y = this.y + (this.radius - 15) / 2 + 12;
      cakepen.fillStyle = this.textColor;
      cakepen.fillText(this.text, x, y);
      cakepen.globalAlpha = this.alpha;
    };
    this.Update = function() { this.UpdatePosition(); this.Draw(); };
    this.Destroy = function() { this.destroyed = true; };
    this.Add();
    }