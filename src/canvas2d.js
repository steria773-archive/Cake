//Cake 2D Graphics Library!!!
//Always Needs More Additions And Updates!!!
//If You Calling A Function With Undefined Values You Defined,Use u Instead Of undefined Or NaN
//Defined Values
var WindowHeight = window.innerHeight,WindowWidth = window.innerWidth,ScreenHeight = screen.height,ScreenWidth = screen.width,RandomAlpha = Math.random(),RandomColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
//Undefined Values(Defined It's Value When You Initialize The Engine In-Game Code!!!)
var CanvasHeight,CanvasWidth,mode,texture,RandomX,RandomY,HalfCanvasHeight,HalfCanvasWidth,cakecanvas,cakepen;
//Game Graphics Functions!!!
		var DrawText = (x,y,text,color,stroke_color,textAlign) =>
		{
			if(Unknown(x)) x = 0;
			if(Unknown(y)) y = 0;
			if(Unknown(text)) text = "";
			if(Unknown(color)) color = "black";
			if(Unknown(stroke_color)) stroke_color = color;
			if(Unknown(textAlign)) textAlign = "";
			cakepen.fillStyle = color,cakepen.strokeStyle = stroke_color,cakepen.textAlign = textAlign;
			if(mode == "fill") cakepen.fillText(text,x,y);
			if(mode == "stroke") cakepen.strokeText(text,x,y);
			if(mode == "custom") { cakepen.fillText(text,x,y); cakepen.strokeText(text,x,y); }	
		};
		var SetFont = (textfont) => { if(Unknown(textfont)) cakepen.font = "12px arial"; cakepen.font = textfont; };
		var SetShadowProperties = (shadowOffsetX,shadowOffsetY,shadowcolor,shadowblur) =>
		{
			if(Unknown(shadowOffsetX)) cakepen.shadowOffsetX = 0;
			if(Unknown(shadowOffsetY)) cakepen.shadowOffsetY = 0;
			if(Unknown(shadowcolor)) cakepen.shadowColor = "black";
			if(Unknown(shadowblur)) cakepen.shadowBlur = "0px";
			cakepen.shadowOffsetX = shadowOffsetX,cakepen.shadowOffsetY = shadowOffsetY,cakepen.shadowColor = shadowcolor,cakepen.shadowBlur = shadowblur;			
		};
	    var SetLineProperties = (line_width,line_height) =>
		{
			if(Unknown(line_h)) line_height = 1;
			if(Unknown(line_w)) line_width = 1;
			cakepen.lineHeight = line_height,cakepen.lineWidth = line_width;
		};
		var DrawRect = (x,y,width,height,color,stroke_color) =>
		{
			if(Unknown(x)) x = 0;
			if(Unknown(y)) y = 0;
			if(Unknown(height)) height = 0;
			if(Unknown(width)) width = 0;
			if(!Unknown(color)) cakepen.fillStyle = color;
			if(Unknown(color)) cakepen.fillStyle = "black";
			if(!Unknown(stroke_color)) cakepen.strokeStyle = stroke_color;
			if(Unknown(stroke_color)) cakepen.strokeStyle = color;			
			if(mode == "fill") cakepen.fillRect(x,y,width,height);
			if(mode == "stroke") cakepen.strokeRect(x,y,width,height);
			if(mode == "custom") { cakepen.fillRect(x,y,width,height); cakepen.stroke(); }
		};

		var DrawLine = (line_height,line_width,start_x,start_y,end_x,end_y,color) =>
		{
			if(Unknown(start_x)) start_x = 0;
			if(Unknown(start_y)) start_y = 0;
			if(Unknown(end_x)) end_x = 0;
			if(Unknown(end_y)) end_y = 0;
			if(Unknown(line_h)) line_height = 1;
			if(Unknown(line_w)) line_width = 1;
			cakepen.lineHeight = line_height,cakepen.lineWidth = line_width;
			cakepen.beginPath();
			if(Unknown(color)) color = "black";
			cakepen.strokeStyle = color;
			cakepen.moveTo(start_x,start_y);
			cakepen.lineTo(end_x,end_y);
			cakepen.stroke();
			cakepen.closePath();
		};

		var DrawGrid = (gridsize,color) =>
		{
			if(Unknown(gridsize)) gridsize = 10;
			if(Unknown(color)) color = "black";
			cakepen.fillStyle = color;
			var grid_loop_width = cakecanvas.width / gridsize,grid_loop_height = cakecanvas.height / gridsize;
			var x = 0,y = 0;
			for(var i = 0;i < grid_loop_height;i++)
			{
				for(z = 0;z < grid_loop_width;z++)
				{
				cakepen.strokeRect(x,y,gridsize,gridsize);
				cakepen.strokeRect(x + gridsize,y,gridsize,gridsize);
				x = x + gridsize;
				}
				x = 0,y = y + gridsize;
			}
			};
		var DrawCircle = (x,y,radius,color,stroke_color) =>
		{
			        if(Unknown(x)) x = 0;
					if(Unknown(y)) y = 0;
                    if(Unknown(radius)) radius = 1;
					if(Unknown(color)) color = "black";
					if(Unknown(stroke_color)) stroke_color = "black";
					cakepen.fillStyle = color,cakepen.strokeStyle = stroke_color;
					cakepen.beginPath();
                    cakepen.arc(x, y, radius, 90, 180 * Math.PI);
				    if(mode == "fill") cakepen.fill();
					if(mode == "stroke") cakepen.stroke();		
					if(mode == "custom") { cakepen.stroke(); cakepen.fill(); }
					cakepen.closePath();
			};
			var DrawArc = (x,y,radius,color,stroke_color,startAngle,endAngle) =>
			{
						if(Unknown(x)) x = 0;
						if(Unknown(y)) y = 0;
						if(Unknown(radius)) radius = 1;
						if(Unknown(startAngle)) startAngle = 90;
						if(Unknown(endAngle)) endAngle = 180;				
						if(Unknown(color)) color = "black";
						if(Unknown(stroke_color)) stroke_color = "black";
						cakepen.fillStyle = color,cakepen.strokeStyle = stroke_color;
						cakepen.beginPath();
						cakepen.arc(x, y, radius, startAngle, endAngle);
						if(mode == "fill") cakepen.fill();
						if(mode == "stroke") cakepen.stroke();		
						if(mode == "custom") { cakepen.stroke(); cakepen.fill(); }
						cakepen.closePath();
				};

		var DrawTri = (a,b,c,size,color,stroke_color) =>
		{
			if(Unknown(a)) a = 0;
			if(Unknown(b)) b = 0;
			if(Unknown(c)) c = 0;
			if(Unknown(size)) size = 0;
			if(Unknown(color)) color = "black";
			if(Unknown(stroke_color)) stroke_color = color;
			cakepen.fillStyle = color,cakepen.strokeStyle = stroke_color;
			cakepen.beginPath();
		    cakepen.moveTo(a,b);
		    cakepen.lineTo(b,c);
		    cakepen.lineTo(c,a);
			cakepen.moveTo(a,b);
			if(mode == "fill") cakepen.fill();
			if(mode == "stroke") cakepen.stroke();			
			if(mode == "custom") { cakepen.stroke(); cakepen.fill(); }
			cakepen.closePath();
		};
		
		var DrawTriangle = (x1,y1,x2,y2,x3,y3,size,color,stroke_color) =>
		{
			if(Unknown(x1)) x1 = 0;
			if(Unknown(y1)) y1 = 0;
			if(Unknown(x2)) x2 = 0;
			if(Unknown(y2)) y2 = 0;
			if(Unknown(x3)) x3 = 0;
			if(Unknown(y3)) y3 = 0;
			if(Unknown(size)) size = 0;
			if(Unknown(color)) color = "black";
			if(Unknown(stroke_color)) stroke_color = color;
			cakepen.fillStyle = color;
			cakepen.strokeStyle = stroke_color;
			cakepen.beginPath();
		    cakepen.moveTo(x1,y1);
		    cakepen.lineTo(x2,y2);
		    cakepen.lineTo(x3,y3);
			cakepen.lineTo(x1,y1);
			if(mode == "fill") cakepen.fill();
			if(mode == "stroke") cakepen.stroke();			
			if(mode == "custom") { cakepen.stroke(); cakepen.fill(); }
			cakepen.closePath();
		};	
		var ClearCanvas = () =>
		{
		cakepen.clearRect(0,0,cakecanvas.height,cakecanvas.width);
		cakecanvas.height = cakecanvas.height,cakecanvas.width = cakecanvas.width;	
		};
		
		var DrawPolygon = (points,color,stroke_color) =>
		{
		 if(Unknown(color)) color = "black";
		 if(Unknown(stroke_color)) stroke_color = color; 
		 cakepen.fillStyle = color,cakepen.strokeStyle = stroke_color;
		 if (points.length <= 0) return;
         cakepen.moveTo(points[0][0], points[0][1]);
         for (var i = 0; i < points.length; i++) cakepen.lineTo(points[i][0], points[i][1]);
         if (mode == "fill") cakepen.fill();
         if (mode == "stroke") cakepen.stroke();
		 if (mode == "custom") { cakepen.fill(); cakepen.stroke(); }
		 };		 
		
		var DrawPolygonLineSides = (x,y,size,sides,color,stroke_color,start_angle,anticlockwise) =>
		{
		if(Unknown(x)) x = 0;
		if(Unknown(y)) y = 0;
		if(Unknown(size)) size = 1;
		if(Unknown(color)) color = "black";
		if(Unknown(sides)) sides = 1;
		if(Unknown(anticlockwise)) anticlockwise = false;
		if(Unknown(start_angle)) start_angle = 90;
		if(Unknown(end_angle)) end_angle = 180 * Math.PI;
		if(Unknown(stroke_color)) stroke_color = color;
		cakepen.fillStyle = color,cakepen.strokeStyle = stroke_color;
		cakepen.beginPath();
        if (sides < 3) return;
        var a = 360 / sides;
        a = anticlockwise? -a : a;
		cakepen.moveTo(x,y);
        for (var i = 1; i < sides; i++) cakepen.lineTo(size * Math.cos(a * i),size * Math.sin(a * i));
        cakepen.closePath();
		cakepen.fill();
		};

	    var DrawTexture = (url,x,y,width,height) =>
		{
		texture = new Image();
		texture.src = url;
		if(Unknown(x)) x = 0;
		if(Unknown(y)) y = 0;
		if(Unknown(height)) height = 0;
		if(Unknown(width)) width = 0;
		cakepen.drawImage(texture,x,y,width,height);
		};

	    var Scale = (scale_width,scale_height) =>
		 {
	     if(Unknown(scale_height)) scale_height = 0;
		 if(Unknown(scale_width)) scale_width = 0;
		 cakepen.scale(scale_height,scale_width);
		 };
		var Rotate = (angle) => { if(Unknown(angle)) angle = 0; cakepen.rotate(angle); };
        var Translate = (x,y) =>
		 {
	     if(Unknown(x)) x = 0;
		 if(Unknown(y)) y = 0;
		 cakepen.translate(x,y);
		 };
		 
		 var Transform = (a,b,mode) =>
		 {
		  if(Unknown(a)) a = 0;
		  if(Unknown(b)) b = 0;
		  if(mode == "translate") cakepen.translate(a,b);
          if(mode == "rotate") cakepen.rotate(a);
          if(mode == "scale") cakepen.scale(a,b);		  
		 };

         var DrawFilledGrid = (gridsize,color,stroke_color) =>
		 {
			if(Unknown(gridsize)) gridsize = 10;
			if(Unknown(color)) color = "black";
			if(Unknown(stroke_color)) stroke_color = color;
			cakepen.strokeStyle = stroke_color;
			cakepen.fillStyle = color;
			var grid_loop_width = cakecanvas.width / gridsize,grid_loop_height = cakecanvas.height / gridsize,x = 0,y = 0;
			for(var i = 0;i < grid_loop_height;i++)
			{
				for(z = 0;z < grid_loop_width;z++)
				{
				cakepen.fillRect(x,y,gridsize,gridsize);
				cakepen.strokeRect(x,y,gridsize,gridsize);
				cakepen.fillRect(x + gridsize,y,gridsize,gridsize);
				cakepen.strokeRect(x + gridsize,y,gridsize,gridsize);
				x = x + gridsize;
				}
				x = 0,y = y + gridsize;				
			}
			};

        var DrawSuperFilledGrid = (gridsize) =>
		{
			if(Unknown(gridsize)) gridsize = 0;
			var grid_loop_width = cakecanvas.width / gridsize,grid_loop_height = cakecanvas.height / gridsize,x = 0,y = 0;
			for(var i = 0;i < grid_loop_height;i++)
			{
				for(z = 0;z < grid_loop_width;z++)
				{
				cakepen.fillStyle = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
				cakepen.fillRect(x,y,gridsize,gridsize);
				cakepen.fillStyle = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
				cakepen.fillRect(x + gridsize,y,gridsize,gridsize);
				x = x + gridsize;
				}
				x = 0,y = y + gridsize;
			}
			}; 
      	var RemoveAlpha = () => cakepen.globalAlpha = 0;	 
        var SetTransform = (horizontal_scaling,horizontal_skewing,vertical_skewing,vertical_scaling,horizontal_moving,vertical_moving) =>
		 {
		 if(Unknown(horizontal_scaling)) horizontal_scaling = 0;
         if(Unknown(horizontal_skewing)) horizontal_skewing = 0;		
         if(Unknown(vertical_skewing)) vertical_skewing = 0;
         if(Unknown(vertical_scaling)) vertical_scaling = 0;		 
		 if(Unknown(horizontal_moving)) horizontal_moving = 0;
		 if(Unknown(vertical_moving)) vertical_moving = 0;
		 cakepen.setTransform(horizontal_scaling, horizontal_skewing, vertical_skewing, vertical_scaling, horizontal_moving, vertical_moving);
		 };
		 		 
        var DoTransform = (horizontal_scaling,horizontal_skewing,vertical_skewing,vertical_scaling,horizontal_moving,vertical_moving) =>
		 {
	     if(Unknown(horizontal_scaling)) horizontal_scaling = 0;
         if(Unknown(horizontal_skewing)) horizontal_skewing = 0;		
         if(Unknown(vertical_skewing)) vertical_skewing = 0;
         if(Unknown(vertical_scaling)) vertical_scaling = 0;		 
		 if(Unknown(horizontal_moving)) horizontal_moving = 0;
		 if(Unknown(vertical_moving)) vertical_moving = 0;
		 cakepen.transform(horizontal_scaling, horizontal_skewing, vertical_skewing, vertical_scaling, horizontal_moving, vertical_moving);
         };
		 
		var CreateTexturePattern = (texture_id,repeat_mode) =>
		{
		var texture = document.getElementById(texture_id),texture_patttern = cakepen.createPattern(texture,repeat_mode);
        cakepen.rect(0, 0, cakecanvas.height, cakecanvas.width);
		cakepen.fillStyle = texture_patttern;
		cakepen.fill();
		};

		var DrawPixel = (x,y,size,color,show_grid) =>
		{
		if(Unknown(color)) color = "black";
		if(Unknown(x)) x = 0;
		if(Unknown(y)) y = 0;
		if(Unknown(size)) size = 0;
		if(Unknown(show_grid)) show_grid = false;
		cakepen.fillStyle = color,cakepen.strokeStyle = "black";
		cakepen.fillRect(x,y,size,size);
		if(show_grid) cakepen.strokeRect(x,y,size,size);	
		};
		
		var ClearColor = (color) =>
		{
		if(Unknown(color)) color = "black";
		cakepen.fillStyle = color;
        cakepen.clearRect(0,0,cakecanvas.height,cakecanvas.width);
		cakecanvas.height = cakecanvas.height,cakecanvas.width = cakecanvas.width;
        cakepen.fillRect(0,0,cakecanvas.height,cakecanvas.width);		
		};
	    var SetAlpha = (alpha) => { if(Unknown(alpha)) alpha = 1; cakepen.globalAlpha = alpha; };
		var SetBackgroundImage = (url) => document.body.style.backgroundImage = `url(${url.toString()})`; 
        var SetBackgroundColor = (color) =>
        {
		if(Unknown(color)) color = "white";
	    document.body.style.color = color,document.body.style.backgroundColor = color;
        };
		var SetCanvasBackgroundImage = (url) => cakecanvas.style.backgroundImage = `url(${url.toString()})`;
		var RemoveCanvasBackgroundImage = () => cakecanvas.style.backgroundImage = "none";	
		var RemoveCanvasBackgroundColor = () => cakecanvas.style.backgroundColor = "none";
		var SetCanvasBackgroundColor = (color) => { if(Unknown(color)) color = "white"; cakecanvas.style.backgroundColor = color; };
		var MakeCanvasFullSize = () => { cakecanvas.style.height = "100%",cakecanvas.style.width = "100%"; };
		var CreateCanvas = (width,height,border_style) =>
		{
		if(Unknown(height)) height = 0;
		if(Unknown(width)) width = 0;
		if(Unknown(border_style)) border_style = "none";
		var canvas = document.createElement("canvas");
        canvas.id = "cake-canvas",canvas.height = height,canvas.width = width,canvas.style.border = border_style;
		document.getElementsByTagName("body")[0].appendChild(canvas);
		};

		var DrawSquare = (x,y,size,color,stroke_color) =>
		{
		if(Unknown(x)) x = 0;
		if(Unknown(y)) y = 0;
		if(Unknown(size)) size = 0;
		if(Unknown(color)) color = "black";
		if(Unknown(stroke_color)) stroke_color = color;
        cakepen.fillStyle = color,cakepen.strokeStyle = stroke_color;
        if(mode == "fill") cakepen.fillRect(x,y,size,size);			
		if(mode == "stroke") cakepen.strokeRect(x,y,size,size);	
		if(mode == "custom") { cakepen.fillRect(x,y,size,size); cakepen.stroke(); }
		};

		var DrawSnowflake = (x,y,length,color,stroke_color) =>
		{
		if(Unknown(x)) x = 0;
		if(Unknown(y)) y = 0;
		if(Unknown(length)) length = 0;
		if(Unknown(color)) color = "black";
		if(Unknown(stroke_color)) stroke_color = color;
		cakepen.fillStyle = color,cakepen.strokeStyle = stroke_color;
		var deg = Math.PI / 180; 
        cakepen.translate(x,y); 
        cakepen.moveTo(x,y); 
        Leg(mode);
        cakepen.rotate(-120 * deg);
        Leg(mode);
        cakepen.rotate(-120 * deg);
        Leg(mode);
        cakepen.closePath();
		var Leg = (mode) =>
		{
        if (mode == 0) cakepen.lineTo(length, 0);
        else 
		{ 
        cakepen.scale(1 / 3,1 / 3); 
        Leg(mode - 1); 
        cakepen.rotate(60 * deg); 
        Leg(mode - 1);
        cakepen.rotate(-120 * deg);
        Leg(mode - 1); 
        cakepen.rotate(60 * deg); 
        Leg(mode - 1);
        } 
        cakepen.translate(length, 0);
        };
        };		
		var DrawRoundedRect = (x,y,width,height,size,color,stroke_color) => 
		{
		if(Unknown(x)) x = 0;
		if(Unknown(y)) y = 0;
		if(Unknown(width)) width = 0;
		if(Unknown(height)) height = 0;
		if(Unknown(color)) color = "black";
		if(Unknown(stroke_color)) stroke_color = color;
		cakepen.fillStyle = color,cakepen.strokeStyle = stroke_color;
        if (typeof size === "undefined") size = 5;
        cakepen.beginPath();
        cakepen.moveTo(x + size,y);
        cakepen.lineTo(x + width - size,y);
        cakepen.quadraticCurveTo(x + width,y,x + width,y + size);
        cakepen.lineTo(x + width,y + height - size);
        cakepen.quadraticCurveTo(x + width,y + height,x + width - size,y + height);
        cakepen.lineTo(x + size,y + height);
        cakepen.quadraticCurveTo(x,y + height,x,y + height - size);
        cakepen.lineTo(x,y + size);
        cakepen.quadraticCurveTo(x,y,x + size,y);
        cakepen.closePath();
        if(mode == "fill") cakepen.fill();			
        if(mode == "stroke") cakepen.stroke();
		if(mode == "custom") { cakepen.fill(); cakepen.stroke(); }
	   };
	   var ResetAlpha = () => cakepen.globalAlpha = 1;
	   var Initialize = (c) =>
		{
		if(Unknown(c)) c = 1;
		cakecanvas = document.getElementsByTagName("canvas")[c - 1];
        cakepen	= cakecanvas.getContext("2d");
		CanvasHeight = cakecanvas.height,CanvasWidth = cakecanvas.width,HalfCanvasHeight = CanvasHeight * 0.5,HalfCanvasWidth = CanvasWidth * 0.5,RandomX = Math.floor(Math.random() * CanvasWidth),RandomY = Math.floor(Math.random() * CanvasHeight);
		};
		var ResizeCanvas = (canvas_width,canvas_height) => { cakecanvas.height = canvas_height,cakecanvas.width = canvas_width;	};
		var SetResolution = (canvas_width,canvas_height) => { cakecanvas.style.height = canvas_height,cakecanvas.style.width = canvas_width; };
		var SetAntialiasing = (enabled,quality) =>
		{
		if(Unknown(enabled)) enabled = true;
		if(Unknown(quality)) quality = "high";
		cakepen.imageSmoothingEnabled = enabled;
		if(cakepen.imageSmoothingEnabled) cakepen.imageSmoothingQuality = quality;
		};		
		var SetDrawingMode = (drawing_mode) => { if(Unknown(drawing_mode)) drawing_mode = "fill"; mode = drawing_mode; };
		var LineDash = (dash) => cakepen.setLineDash(dash);
		var RemoveCanvas = () => { cakecanvas = document.getElementsByTagName("canvas")[0]; cakecanvas.parentNode.removeChild(cakecanvas);	};	
		var MeasureText = (text) => cakepen.measureText(text);
		var EnableDOMInsideCanvas = (elements) =>
		{
		cakecanvas.style.position = "relative";
		var elm = document.querySelectorAll(elements);
		elm.style.position = "absolute";
		};
		var SetLineJoining = (mode) => cakepen.lineJoin = mode;	
		var DrawEllipse = (x,y,radius,color,stroke_color,rotation,start_angle,end_angle,anticlockwise) =>
		{
		if(Unknown(x)) x = 0;
		if(Unknown(y)) y = 0;
		if(Unknown(rotation)) rotation = 0;
		if(Unknown(start_angle)) start_angle = 90;
		if(Unknown(end_angle)) end_angle = 180;
		if(Unknown(anticlockwise)) anticlockwise = false;
		if(Unknown(radius)) radius = 1;
		if(Unknown(color)) color = "black";
		if(Unknown(stroke_color)) stroke_color = color;
		cakepen.fillStyle = color;
		cakepen.strokeStyle = stroke_color;
		if(anticlockwise) cakepen.ellipse(x,y,radius,radius,rotation,start_angle,end_angle * Math.PI,true);	else cakepen.ellipse(x,y,radius,radius,rotation,start_angle,end_angle * Math.PI,false);
		};
		var Cut = () => cakepen.clip();	
		var SetTextDrawingDirection = (dir) => cakepen.direction = dir;	
		var DoAroundCanvas = (each,fun) =>
		{
			if(Unknown(each)) each = 0;
			var grid_loop_width = CanvasWidth / each,grid_loop_height = CanvasHeight / each,x = 0,y = 0;
			for(var i = 0;i < grid_loop_height;i++)
			{
				for(z = 0;z < grid_loop_width;z++)
				{
				setTimeout(fun,0);
				x = 0,x = x + each;
				}
				x = 0,y = y + each;				
			}
		};
	var Color = (c) => cakepen.fillStyle = c;	
	var RGB = (r,g,b) =>
	{
	if(Unknown(r)) r = 0;
	if(Unknown(g)) g = 0;
	if(Unknown(b)) b = 0;
	return `rgb(${r.toString()},${g.toString()},${b.toString()})`;
	};

	var TranslateBackground = (horizontal,vertical) => 
	{
		cakecanvas.style.backgroundAttachment = "fixed";
		cakecanvas.style.backgroundRepeat = "no-repeat";
		cakecanvas.style.backgroundPosition = (horizontal +"px " + vertical + "px").toString();
	};

	var SetBackgroundPosition = (pos) =>
	{
        cakecanvas.style.backgroundAttachment = "fixed";
		cakecanvas.style.backgroundRepeat = "no-repeat";
		cakecanvas.style.backgroundPosition = pos;
	};
	var SwitchCanvas = (c) => { if(Unknown(c)) c = 1; cakecanvas = document.getElementsByTagName("canvas")[c - 1]; };
	var SwitchContext = (c) => { if(Unknown(c)) c = "2d"; cakepen = cakecanvas.getContext(c); };
	var SwitchContent = (canvas,c) => { cakecanvas = document.getElementsByTagName("canvas")[canvas - 1]; cakepen = cakecanvas.getContext(c); };
	//For SpriteSheets Drawing!!!
	var DrawImageAdvanced = (source_x,source_y,source_width,source_height,x,y,width,height) =>
	{
	    texture = new Image();
		texture.src = url;
		if(Unknown(source_x)) source_x = 0;
		if(Unknown(source_y)) source_y = 0;
		if(Unknown(source_height)) source_height = 0;
		if(Unknown(source_width)) source_width = 0;
		if(Unknown(x)) x = 0;
		if(Unknown(y)) y = 0;
		if(Unknown(height)) height = 0;
		if(Unknown(width)) width = 0
		cakepen.drawImage(source_x,source_y,source_width,source_height,x,y,width,height);	
	};	
	var HideCanvas = () => cakecanvas.style.visibility = "hidden";
	var ShowCanvas = () => cakecanvas.style.visibility = "visible";
	var ConvertToImage = () => cakecanvas.toDataURL();
	var Screenshot = () => window.open(cakecanvas.toDataURL());
	var Fitscreen = (res,type) =>
	{
	var nwidth = res[0],nheight = res[1],dwidth = window.innerWidth,dheight = window.innerHeight,modeused,fillnative = Math.max(dwidth / nwidth, dheight / nheight),fitnative = Math.min(dwidth / nwidth, dheight / nheight); 
	if(type == "fit") modeused = fitnative;
	if(type == "fill") modeused = fillnative;
	cakecanvas.style.width = `${dwidth}px`,cakecanvas.style.height = `${dheight}px`,cakecanvas.width = dwidth,cakecanvas.height = dheight;
	cakepen.setTransform(modeused,0,0,fitnative,Math.floor(dwidth / 2),Math.floor(dheight / 2));
	cakepen.imageSmoothingEnabled = fitnative < 1 ? true : false;
	};
	var Fitwindow = () => { cakecanvas.width = document.innerWidth; cakecanvas.height = document.innerHeight; };
	var UseAllCanvases = (context) =>
	{
	if(Unknown(context)) context = "2d";
	var canvases = document.getElementsByClassName("canvas");
    for(var i = 0; i < canvases.length; i++) cakepen = canvases[i].getContext(context);  
	};