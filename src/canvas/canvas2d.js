//Cake 2D Graphics Library!!!
//Cake Next Is Coming!!!
//Always Needs More Additions And Updates!!!
//If You Calling A Function With Undefined Values You Defined,Use u Instead Of undefined Or NaN
//Defined Values
var mode = "fill",WindowHeight = window.innerHeight,WindowWidth = window.innerWidth,ScreenHeight = screen.height,ScreenWidth = screen.width,RandomAlpha = Math.random(),RandomColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
//Undefined Values(Defined It's Value When You Initialize The Engine In-Game Code!!!)
var CanvasHeight,CanvasWidth,texture,RandomX,RandomY,HalfCanvasHeight,HalfCanvasWidth,cakecanvas,cakepen;
//Game Graphics Functions!!!
		var DrawText = (x,y,text,color,stroke_color,textAlign,alpha) =>
		{
			if(Unknown(x)) x = 0;
			if(Unknown(y)) y = 0;
			if(Unknown(text)) text = "";
			if(Unknown(color)) color = "black";
			if(Unknown(stroke_color)) stroke_color = color;
			if(Unknown(textAlign)) textAlign = "left";
			if(Unknown(alpha)) alpha = 1;
			cakepen.globalAlpha = alpha,cakepen.fillStyle = color,cakepen.strokeStyle = stroke_color,cakepen.textAlign = textAlign;
			if(mode == "fill") cakepen.fillText(text,x,y);
			if(mode == "stroke") cakepen.strokeText(text,x,y);
			if(mode == "custom") { cakepen.fillText(text,x,y); cakepen.strokeText(text,x,y); }	
		};
		var SetFont = (textfont) => { if(Unknown(textfont)) textfont = "20px arial"; cakepen.font = textfont; };
		var SetShadowProperties = (shadowOffsetX,shadowOffsetY,shadowcolor,shadowblur) =>
		{
			if(Unknown(shadowOffsetX)) cakepen.shadowOffsetX = 0;
			if(Unknown(shadowOffsetY)) cakepen.shadowOffsetY = 0;
			if(Unknown(shadowcolor)) cakepen.shadowColor = "black";
			if(Unknown(shadowblur)) cakepen.shadowBlur = "0px";
			cakepen.shadowOffsetX = shadowOffsetX,cakepen.shadowOffsetY = shadowOffsetY,cakepen.shadowColor = shadowcolor,cakepen.shadowBlur = shadowblur;			
		};
	    var SetLineProperties = (line_width) =>
		{
			if(Unknown(line_width)) line_width = 1;
			cakepen.lineWidth = line_width;
		};
		var DrawRect = (x,y,width,height,color,stroke_color,alpha) =>
		{
			if(Unknown(x)) x = 0;
			if(Unknown(y)) y = 0;
			if(Unknown(height)) height = 0;
			if(Unknown(width)) width = 0;
			if(Unknown(color)) cakepen.fillStyle = "black";
			if(Unknown(stroke_color)) cakepen.strokeStyle = color;
			if(Unknown(alpha)) alpha = 1;
			cakepen.fillStyle = color,cakepen.globalAlpha = alpha,cakepen.strokeStyle = stroke_color;			
			if(mode == "fill") cakepen.fillRect(x,y,width,height);
			if(mode == "stroke") cakepen.strokeRect(x,y,width,height);
			if(mode == "custom") { cakepen.fillRect(x,y,width,height); cakepen.strokeRect(x,y,width,height); }
		};

		var DrawLine = (pos1,pos2,line_size,color,alpha) =>
		{
			if(Unknown(pos1[0])) pos1[0] = 0;
			if(Unknown(pos1[1])) pos1[1] = 0;
			if(Unknown(pos2[0])) pos2[0] = 0;
			if(Unknown(pos2[1])) pos2[1] = 0;
			if(Unknown(line_size)) line_size = 1;
			if(Unknown(alpha)) alpha = 1;
			cakepen.globalAlpha = alpha,cakepen.lineHeight = line_size,cakepen.lineWidth = line_size;
			cakepen.beginPath();
			if(Unknown(color)) color = "black";
			cakepen.strokeStyle = color;
			cakepen.moveTo(pos1[0],pos1[1]);
			cakepen.lineTo(pos2[0],pos2[1]);
			cakepen.stroke();
			cakepen.closePath();
		};

		var DrawGrid = (gridsize,color,alpha) =>
		{
			if(Unknown(gridsize)) gridsize = 10;
			if(Unknown(color)) color = "black";
			if(Unknown(alpha)) alpha = 1;
			cakepen.globalAlpha = alpha,cakepen.fillStyle = color;
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
		var DrawCircle = (x,y,radius,color,stroke_color,alpha) =>
		{
			            if(Unknown(x)) x = 0;
					if(Unknown(y)) y = 0;
            if(Unknown(radius)) radius = 1;
					if(Unknown(color)) color = "black";
					if(Unknown(stroke_color)) stroke_color = "black";
					if(Unknown(alpha)) alpha = 1;
					cakepen.globalAlpha = alpha,cakepen.fillStyle = color,cakepen.strokeStyle = stroke_color;
					cakepen.beginPath();
            cakepen.arc(x, y, radius, 90, 180 * Math.PI);
				    if(mode == "fill") cakepen.fill();
					if(mode == "stroke") cakepen.stroke();		
					if(mode == "custom") { cakepen.stroke(); cakepen.fill(); }
					cakepen.closePath();
			};
			var DrawArc = (x,y,radius,color,stroke_color,startAngle,endAngle,alpha) =>
			{
						if(Unknown(x)) x = 0;
						if(Unknown(y)) y = 0;
						if(Unknown(radius)) radius = 1;
						if(Unknown(startAngle)) startAngle = 90;
						if(Unknown(endAngle)) endAngle = 180;				
						if(Unknown(color)) color = "black";
						if(Unknown(stroke_color)) stroke_color = "black";
						if(Unknown(alpha)) alpha = 1;
						cakepen.globalAlpha = alpha,cakepen.fillStyle = color,cakepen.strokeStyle = stroke_color;
						cakepen.beginPath();
						cakepen.arc(x, y, radius, startAngle, endAngle);
						if(mode == "fill") cakepen.fill();
						if(mode == "stroke") cakepen.stroke();		
						if(mode == "custom") { cakepen.stroke(); cakepen.fill(); }
						cakepen.closePath();
				};

		var DrawTri = (a,b,c,size,color,stroke_color,alpha) =>
		{
			if(Unknown(a)) a = 0;
			if(Unknown(b)) b = 0;
			if(Unknown(c)) c = 0;
			if(Unknown(size)) size = 0;
			if(Unknown(color)) color = "black";
			if(Unknown(stroke_color)) stroke_color = color;
			if(Unknown(alpha)) alpha = 1;
			cakepen.globalAlpha = alpha,cakepen.fillStyle = color,cakepen.strokeStyle = stroke_color;
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
		
		var DrawTriangle = (pos1,pos2,pos3,color,stroke_color,alpha) =>
		{
			if(Unknown(pos1[0])) pos1[0] = 0;
			if(Unknown(pos1[1])) pos1[1] = 0;
			if(Unknown(pos2[0])) pos2[0] = 0;
			if(Unknown(pos2[1])) pos2[1] = 0;
			if(Unknown(pos3[0])) pos3[0] = 0;
			if(Unknown(pos3[1])) pos3[1] = 0;
			if(Unknown(color)) color = "black";
			if(Unknown(stroke_color)) stroke_color = color;
			if(Unknown(alpha)) alpha = 1;
			cakepen.globalAlpha = alpha,cakepen.fillStyle = color,cakepen.strokeStyle = stroke_color;
			cakepen.beginPath();
		    cakepen.moveTo(pos1[0],pos1[1]);
		    cakepen.lineTo(pos2[0],pos2[1]);
		    cakepen.lineTo(pos3[0],pos3[1]);
			cakepen.lineTo(pos1[0],pos1[1]);
			if(mode == "fill") cakepen.fill();
			if(mode == "stroke") cakepen.stroke();			
			if(mode == "custom") { cakepen.stroke(); cakepen.fill(); }
			cakepen.closePath();
		};	
		var ClearCanvas = () =>
		{
		cakepen.clearRect(0,0,cakecanvas.width,cakecanvas.height);
		cakecanvas.height = cakecanvas.height,cakecanvas.width = cakecanvas.width;	
		};
		
		var DrawPolygon = (points,color,stroke_color,alpha) =>
		{
		 if(Unknown(color)) color = "black";
		 if(Unknown(stroke_color)) stroke_color = color; 
		 if(Unknown(alpha)) alpha = 1;
		 cakepen.globalAlpha = alpha,cakepen.fillStyle = color,cakepen.strokeStyle = stroke_color;
		 if (points.length <= 0) return;
		 cakepen.beginPath();
             cakepen.moveTo(points[0][0], points[0][1]);
             for (var i = 0; i < points.length; i++) cakepen.lineTo(points[i][0], points[i][1]);
             if (mode == "fill") cakepen.fill();
             if (mode == "stroke") cakepen.stroke();
		 if (mode == "custom") { cakepen.fill(); cakepen.stroke(); }
		 cakepen.closePath();
		 };		 
		
		var DrawPolygonLineSides = (x,y,size,sides,color,stroke_color,start_angle,end_angle,alpha) =>
		{
		if(Unknown(x)) x = 0;
		if(Unknown(y)) y = 0;
		if(Unknown(size)) size = 1;
		if(Unknown(color)) color = "black";
		if(Unknown(sides)) sides = 1;
		if(Unknown(start_angle)) start_angle = 90;
		if(Unknown(end_angle)) end_angle = 180 * Math.PI;
		if(Unknown(stroke_color)) stroke_color = color;
		if(Unknown(alpha)) alpha = 1;
		cakepen.globalAlpha = alpha,cakepen.fillStyle = color,cakepen.strokeStyle = stroke_color;
		cakepen.beginPath();
            var a = 360 / sides;
		cakepen.moveTo(x,y);
            for (var i = 1; i < sides; i++) cakepen.lineTo(size * Math.cos(a * i),size * Math.sin(a * i));
            cakepen.closePath();
		cakepen.fill();
		};

	    var DrawTexture = (url,x,y,width,height,alpha) =>
		{
		var texture = new Image();
		texture.src = url;
		if(Unknown(x)) x = 0;
		if(Unknown(y)) y = 0;
		if(Unknown(height)) height = 0;
		if(Unknown(width)) width = 0;
		if(Unknown(alpha)) alpha = 1;
		cakepen.globalAlpha = alpha;
		cakepen.drawImage(texture,x,y,width,height);
		};

	    var Scale = (scale_width,scale_height) =>
		 {
	     if(Unknown(scale_height)) scale_height = 0;
		 if(Unknown(scale_width)) scale_width = 0;
		 cakepen.scale(scale_width,scale_height);
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

             var DrawFilledGrid = (gridsize,color,stroke_color,alpha) =>
		 {
			if(Unknown(gridsize)) gridsize = 10;
			if(Unknown(color)) color = "black";
			if(Unknown(stroke_color)) stroke_color = color;
			if(Unknown(alpha)) alpha = 1;
			cakepen.globalAlpha = alpha,cakepen.strokeStyle = stroke_color,cakepen.fillStyle = color;
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

            var DrawSuperFilledGrid = (gridsize,alpha) =>
		{
			if(Unknown(gridsize)) gridsize = 0;
			if(Unknown(alpha)) alpha = 1;
			cakepen.globalAlpha = alpha;
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
           	var ClearAlpha = () => cakepen.globalAlpha = 0;	 
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

		var DrawPixel = (x,y,size,color,alpha,show_grid) =>
		{
		if(Unknown(color)) color = "black";
		if(Unknown(x)) x = 0;
		if(Unknown(y)) y = 0;
		if(Unknown(size)) size = 5;
		if(Unknown(show_grid)) show_grid = true;
		if(Unknown(alpha)) alpha = 1;
		cakepen.globalAlpha = alpha,cakepen.fillStyle = color,cakepen.strokeStyle = "black";
		cakepen.fillRect(x,y,size,size);
		if(show_grid) cakepen.strokeRect(x,y,size,size);	
		};
		
		var ClearColor = (color) =>
		{
		if(Unknown(color)) color = "black";
		cakepen.fillStyle = color;
            cakepen.clearRect(0,0,cakecanvas.width,cakecanvas.height);
		cakecanvas.height = cakecanvas.height,cakecanvas.width = cakecanvas.width;
            cakepen.fillRect(0,0,cakecanvas.width,cakecanvas.height);		
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
		var CreateCanvas = (width,height,bgcolor,border_style) =>
		{
		if(Unknown(height)) height = 150;
		if(Unknown(width)) width = 150;
		if(Unknown(border_style)) border_style = "none";
		if(Unknown(bgcolor)) bgcolor = "none";
		var canvas = document.createElement("canvas");
            canvas.id = "cake-canvas",canvas.height = height,canvas.width = width,canvas.style.backgroundColor = bgcolor,canvas.style.border = border_style;
		document.body.appendChild(canvas);
		};
		var CreateGame = (width,height,gametitle,context) =>
		{
			document.title = gametitle;
			if(Unknown(height)) height = 150;
			if(Unknown(width)) width = 150;
			var cakecanvas = document.createElement("canvas");
			cakecanvas.id = gametitle.toString().toLowerCase() + "-game-canvas",cakecanvas.height = height,cakecanvas.width = width;
			document.body.appendChild(cakecanvas);
			cakecanvas = document.getElementById(gametitle.toString().toLowerCase() + "-game-canvas");
		    var cakepen	= cakecanvas.getContext(context);
		    if(cakepen) console.info(context == "2d" ? "CAKE GAME ENGINE: INITIALIZING CanvasRenderingContext2D..." : "CAKE GAME ENGINE: INITIALIZING WebGLRenderingContext...");
		    if(!cakepen) 
		    {
			RemoveCanvas();
			alert("CAKE IS NOT SUPPORTED ON THIS BROWSER/DEVICE,WE ARE SORRY!!!");
			console.error("ERROR: CAKE_NOT_SUPPORTED");
		    }
		};
		var DrawSquare = (x,y,size,color,stroke_color,alpha) =>
		{
		if(Unknown(x)) x = 0;
		if(Unknown(y)) y = 0;
		if(Unknown(size)) size = 0;
		if(Unknown(color)) color = "black";
		if(Unknown(stroke_color)) stroke_color = color;
		if(Unknown(alpha)) alpha = 1;
            cakepen.globalAlpha = alpha,cakepen.fillStyle = color,cakepen.strokeStyle = stroke_color;
            if(mode == "fill") cakepen.fillRect(x,y,size,size);			
		if(mode == "stroke") cakepen.strokeRect(x,y,size,size);	
		if(mode == "custom") { cakepen.fillRect(x,y,size,size); cakepen.strokeRect(x,y,size,size); }
		};	
		var DrawRoundedRect = (x,y,width,height,radius,color,stroke_color,alpha) => 
		{
		if(Unknown(x)) x = 0;
		if(Unknown(y)) y = 0;
		if(Unknown(width)) width = 0;
		if(Unknown(height)) height = 0;
		if(Unknown(color)) color = "black";
		if(Unknown(stroke_color)) stroke_color = color;
		if(Unknown(alpha)) alpha = 1;
		cakepen.globalAlpha = alpha,cakepen.fillStyle = color,cakepen.strokeStyle = stroke_color;
            if (typeof radius === "undefined") radius = 5;
            cakepen.beginPath();
            cakepen.moveTo(x + radius,y);
            cakepen.lineTo(x + width - radius,y);
            cakepen.quadraticCurveTo(x + width,y,x + width,y + radius);
            cakepen.lineTo(x + width,y + height - radius);
            cakepen.quadraticCurveTo(x + width,y + height,x + width - radius,y + height);
            cakepen.lineTo(x + radius,y + height);
            cakepen.quadraticCurveTo(x,y + height,x,y + height - radius);
            cakepen.lineTo(x,y + radius);
            cakepen.quadraticCurveTo(x,y,x + radius,y);
            cakepen.closePath();
            if(mode == "fill") cakepen.fill();			
            if(mode == "stroke") cakepen.stroke();
		if(mode == "custom") { cakepen.fill(); cakepen.stroke(); }
	   };
	   var ResetAlpha = () => cakepen.globalAlpha = 1;
	   var Initialize = (c) =>
		{
		if(Unknown(c)) c = 0;
		cakecanvas = document.getElementsByTagName("canvas")[c];
		cakepen	= cakecanvas.getContext("2d");
		if(cakepen) console.info("CAKE GAME ENGINE: INITIALIZING CanvasRenderingContext2D...");
		if(!cakepen) 
		{
			RemoveCanvas();
			alert("CAKE IS NOT SUPPORTED ON THIS BROWSER/DEVICE,WE ARE SORRY!!!");
			console.error("ERROR: CAKE_NOT_SUPPORTED");
		}
		CanvasHeight = cakecanvas.height,CanvasWidth = cakecanvas.width,HalfCanvasHeight = CanvasHeight * 0.5,HalfCanvasWidth = CanvasWidth * 0.5,RandomX = Math.floor(Math.random() * CanvasWidth),RandomY = Math.floor(Math.random() * CanvasHeight);
		};
		var ResizeCanvasFully = (canvas_width,canvas_height) => { cakecanvas.height = canvas_height,cakecanvas.width = canvas_width,cakecanvas.style.height = canvas_height,cakecanvas.style.width = canvas_width; };
		var ResizeCanvas = (canvas_width,canvas_height) => { cakecanvas.height = canvas_height,cakecanvas.width = canvas_width; };
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
		var RemoveCanvas = (c) => { cakecanvas = document.getElementsByTagName("canvas")[c]; cakecanvas.parentNode.removeChild(cakecanvas);	};	
		var MeasureText = (text) => cakepen.measureText(text);
		var EnableDOMInsideCanvas = (elements) =>
		{
		cakecanvas.style.position = "relative";
		var elm = document.querySelectorAll(elements);
		elm.style.position = "absolute";
		};
		var SetLineJoining = (mode) => cakepen.lineJoin = mode;	
		var DrawEllipse = (x,y,radius,color,stroke_color,rotation,start_angle,end_angle,alpha) =>
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
		if(Unknown(alpha)) alpha = 1;
		cakepen.globalAlpha = alpha,cakepen.fillStyle = color,cakepen.strokeStyle = stroke_color;
		cakepen.ellipse(x,y,radius,radius,rotation,start_angle,end_angle * Math.PI,false);
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
	var RGB = (r, g, b) =>
	{
		if (Unknown(r)) r = 0;
		if (Unknown(g)) g = 0;
		if (Unknown(b)) b = 0;
		return `rgb(${r},${g},${b})`;
	};
	var HSL = (h, s, l) =>
	{
		if (Unknown(h)) h = 0;
		if (Unknown(s)) s = 0;
		if (Unknown(l)) l = 0;
		return `rgb(${h},${s},${l})`;
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
	var SwitchCanvas = (c) => { if(Unknown(c)) c = 1; cakecanvas = document.getElementsByTagName("canvas")[c]; };
	var SwitchContext = (c) => { if(Unknown(c)) c = "2d"; cakepen = cakecanvas.getContext(c); };
	var SwitchContent = (canvas,c) => { cakecanvas = document.getElementsByTagName("canvas")[canvas]; cakepen = cakecanvas.getContext(c); };
	//For SpriteSheets Drawing!!!
	var DrawImageAdvanced = (source_x,source_y,source_width,source_height,x,y,width,height,alpha) =>
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
		if(Unknown(alpha)) alpha = 1;
		cakepen.globalAlpha = alpha;
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
	var RandomColor = () => { return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`; };
	var RandomNumber = (x) => { return Math.floor(Math.random() * x); };
	var RandomCanvasWidth = () => { return Math.floor(Math.random() * CanvasWidth); };
	var RandomCanvasHeight = () => { return Math.floor(Math.random() * CanvasHeight); };
	var RandomAlpha = () => cakepen.globalAlpha = Math.random();
	var HSL = (h,s,l) =>
	{
		if(Unknown(h)) h = 0;
		if(Unknown(s)) s = 0;
		if(Unknown(l)) l = 0;
		return `hsl(${h},${s},${l})`;
	};
	var HSLA = (h,s,l,a) =>
	{
		if(Unknown(h)) h = 0;
		if(Unknown(s)) s = 0;
		if(Unknown(l)) l = 0;
		if(Unknown(a)) a = 1;
		return `hsla(${r},${g},${b},${a})`;
	};
	var RGBA = (r,g,b,a) =>
	{
		if(Unknown(r)) r = 0;
		if(Unknown(g)) g = 0;
		if(Unknown(b)) b = 0;
		if(Unknown(a)) a = 1;
		return `rgba(${r},${g},${b},${a})`;
	};
	var MakeCanvasCompatible = () => { cakecanvas.width = WindowWidth,cakecanvas.height = WindowHeight; };
	var DrawGradientRect = (x,y,width,height,content,alpha) =>
	{
		if(Unknown(x)) x = 0;
		if(Unknown(y)) y = 0;
		if(Unknown(width)) width = 0;
		if(Unknown(height)) height = 0;
		if(Unknown(alpha)) alpha = 1;
		var linear = cakepen.createLinearGradient(x, y, width, height);
		for(var loopdlg = 0;loopdlg < content.length;loopdlg++) linear.addColorStop(content[loopdlg][0], content[loopdlg][1]);
		cakepen.fillStyle = linear;
		cakepen.strokeStyle = linear;
		cakepen.globalAlpha = alpha;
		if (mode == "fill") cakepen.fillRect(x,y,width,height);
		if (mode == "stroke") cakepen.strokeRect(x,y,width,height);
		if (mode == "custom")
		{
			cakepen.fillRect(x,y,width,height);
			cakepen.strokeRect(x,y,width,height);
		}
	};
	//Modes For DrawArrays()
	var TRIANGLES = "triangles",
		RECTANGLES = "rectangles",
		SQUARES = "squares",
		LINES = "lines",
		CIRCLES = "circles",
		POLYGONS = "polygons",
		TEXTURES = "textures",
		TEXTS = "texts",
		ROUNDED_RECTANGLES = "rounded_rectangles";
//Drawing Using Arrays Feature Is Available,Now For Everyone!!!
	var DrawContent = (type,content) =>
	{
		if(type == RECTANGLES)
		{
			for(var loopcontent = 0;loopcontent < content.length;loopcontent++)
			{
				if(Unknown(content[loopcontent][0])) content[loopcontent][0] = 0;
				if(Unknown(content[loopcontent][1])) content[loopcontent][1] = 0;
				if(Unknown(content[loopcontent][2])) content[loopcontent][2] = 0;
				if(Unknown(content[loopcontent][3])) content[loopcontent][3] = 0;
				if(Unknown(content[loopcontent][4])) content[loopcontent][4] = "black";
				if(Unknown(content[loopcontent][5])) content[loopcontent][5] = "black";
				if(Unknown(content[loopcontent][6])) content[loopcontent][6] = 1;
				cakepen.fillStyle = content[loopcontent][4];
				cakepen.strokeStyle = content[loopcontent][5];
				cakepen.globalAlpha = content[loopcontent][6];
				if(mode == "fill") cakepen.fillRect(content[loopcontent][0],content[loopcontent][1],content[loopcontent][2],content[loopcontent][3]);
				if(mode == "stroke") cakepen.strokeRect(content[loopcontent][0],content[loopcontent][1],content[loopcontent][2],content[loopcontent][3]);
				if(mode == "custom")
				{
					cakepen.fillRect(content[loopcontent][0],content[loopcontent][1],content[loopcontent][2],content[loopcontent][3]);
					cakepen.fillRect(content[loopcontent][0],content[loopcontent][1],content[loopcontent][2],content[loopcontent][3]);
				}
			}
		}
		if(type == SQUARES)
		{
			for(var loopcontent = 0;loopcontent < content.length;loopcontent++)
			{
				if(Unknown(content[loopcontent][0])) content[loopcontent][0] = 0;
				if(Unknown(content[loopcontent][1])) content[loopcontent][1] = 0;
				if(Unknown(content[loopcontent][2])) content[loopcontent][2] = 0;
				if(Unknown(content[loopcontent][3])) content[loopcontent][3] = "black";
				if(Unknown(content[loopcontent][4])) content[loopcontent][4] = "black";
				if(Unknown(content[loopcontent][5])) content[loopcontent][5] = 1;
				cakepen.fillStyle = content[loopcontent][3];
				cakepen.strokeStyle = content[loopcontent][4];
				cakepen.globalAlpha = content[loopcontent][5];
				if(mode == "fill") cakepen.fillRect(content[loopcontent][0],content[loopcontent][1],content[loopcontent][2],content[loopcontent][2]);
				if(mode == "stroke") cakepen.strokeRect(content[loopcontent][0],content[loopcontent][1],content[loopcontent][2],content[loopcontent][2]);
				if(mode == "custom")
				{
					cakepen.fillRect(content[loopcontent][0],content[loopcontent][1],content[loopcontent][2],content[loopcontent][2]);
					cakepen.fillRect(content[loopcontent][0],content[loopcontent][1],content[loopcontent][2],content[loopcontent][2]);
				}
			}
		}
		if(type == CIRCLES)
		{
			for(var loopcontent = 0;loopcontent < content.length;loopcontent++)
			{
				if(Unknown(content[loopcontent][0])) content[loopcontent][0] = 0;
				if(Unknown(content[loopcontent][1])) content[loopcontent][1] = 0;
				if(Unknown(content[loopcontent][2])) content[loopcontent][2] = 0;
				if(Unknown(content[loopcontent][3])) content[loopcontent][3] = "black";
				if(Unknown(content[loopcontent][4])) content[loopcontent][4] = "black";
				if(Unknown(content[loopcontent][5])) content[loopcontent][5] = 1;
				cakepen.fillStyle = content[loopcontent][3];
				cakepen.strokeStyle = content[loopcontent][4];
				cakepen.globalAlpha = content[loopcontent][5];
				cakepen.beginPath();
              cakepen.arc(content[loopcontent][0], content[loopcontent][1], content[loopcontent][2], 90, 180 * Math.PI);
				if(mode == "fill") cakepen.fill();
				if(mode == "stroke") cakepen.stroke();		
				if(mode == "custom")
				{
					cakepen.stroke();
					cakepen.fill();
				}
				cakepen.closePath();
			}
		}
		if(type == LINES)
		{
			for(var loopcontent = 0;loopcontent < content.length;loopcontent++)
			{
				if(Unknown(content[loopcontent][0][0])) content[loopcontent][0][0] = 0;
				if(Unknown(content[loopcontent][0][1])) content[loopcontent][0][1] = 0;
				if(Unknown(content[loopcontent][1][0])) content[loopcontent][1][0] = 0;
				if(Unknown(content[loopcontent][1][1])) content[loopcontent][1][1] = 0;
				if(Unknown(content[loopcontent][2])) content[loopcontent][2] = 0;
				if(Unknown(content[loopcontent][3])) content[loopcontent][3] = "black";
				if(Unknown(content[loopcontent][4])) content[loopcontent][4] = 1;
				cakepen.strokeStyle = content[loopcontent][3];
				cakepen.beginPath();
			    cakepen.moveTo(content[loopcontent][0][0],content[loopcontent][0][1]);
			    cakepen.lineTo(content[loopcontent][1][0],content[loopcontent][1][1]);
			    cakepen.stroke();
			    cakepen.closePath();
			}
		}
		if(type == TRIANGLES)
		{
			for(var loopcontent = 0;loopcontent < content.length;loopcontent++)
			{
				if(Unknown(content[loopcontent][0][0])) content[loopcontent][0][0] = 0;
				if(Unknown(content[loopcontent][0][1])) content[loopcontent][0][1] = 0;
				if(Unknown(content[loopcontent][1][0])) content[loopcontent][1][0] = 0;
				if(Unknown(content[loopcontent][1][1])) content[loopcontent][1][1] = 0;
				if(Unknown(content[loopcontent][2][0])) content[loopcontent][2][0] = 0;
				if(Unknown(content[loopcontent][2][1])) content[loopcontent][2][1] = 0;
				if(Unknown(content[loopcontent][3])) content[loopcontent][3] = "black";
				if(Unknown(content[loopcontent][4])) content[loopcontent][4] = "black";
				if(Unknown(content[loopcontent][5])) content[loopcontent][5] = 1;
				cakepen.fillStyle = content[loopcontent][3];
				cakepen.strokeStyle = content[loopcontent][4];
				cakepen.globalAlpha = content[loopcontent][5];
				cakepen.beginPath();
		            cakepen.moveTo(content[loopcontent][0][0],content[loopcontent][0][1]);
		            cakepen.lineTo(content[loopcontent][1][0],content[loopcontent][1][1]);
		            cakepen.lineTo(content[loopcontent][2][0],content[loopcontent][2][1]);
			    cakepen.lineTo(content[loopcontent][0][0],content[loopcontent][0][1]);
			    if(mode == "fill") cakepen.fill();
			    if(mode == "stroke") cakepen.stroke();			
				if(mode == "custom")
				{
					cakepen.stroke();
					cakepen.fill();
				}
			    cakepen.closePath();
			}
		}
		if(type == POLYGONS)
		{
			for(var loopcontent = 0;loopcontent < content.length;loopcontent++)
			{
				if(Unknown(content[loopcontent][0][0])) content[loopcontent][0][0] = 0;
				if(Unknown(content[loopcontent][0][1])) content[loopcontent][0][1] = 0;
				if(Unknown(content[loopcontent][1])) content[loopcontent][1] = "black";
				if(Unknown(content[loopcontent][2])) content[loopcontent][2] = "black";
				if(Unknown(content[loopcontent][3])) content[loopcontent][3] = 1;
				cakepen.fillStyle = content[loopcontent][1];
				cakepen.strokeStyle = content[loopcontent][2];
				cakepen.globalAlpha = content[loopcontent][3];
				cakepen.beginPath();
				cakepen.moveTo(content[loopcontent][0][0], content[loopcontent][0][1]);
				for (var i = 4; i < content[loopcontent].length; i++) cakepen.lineTo(content[loopcontent][i][0], content[loopcontent][i][1]);
				if (mode == "fill") cakepen.fill();
				if (mode == "stroke") cakepen.stroke();
				if (mode == "custom") 
				{
					cakepen.fill();
					cakepen.stroke();
				}
				cakepen.closePath();
			}
		}
		if(type == TEXTURES)
		{
			for(var loopcontent = 0;loopcontent < content.length;loopcontent++)
			{
				if(Unknown(content[loopcontent][0])) content[loopcontent][0] = "";
				if(Unknown(content[loopcontent][1])) content[loopcontent][1] = 0;
				if(Unknown(content[loopcontent][2])) content[loopcontent][2] = 0;
				if(Unknown(content[loopcontent][3])) content[loopcontent][3] = 0;
				if(Unknown(content[loopcontent][4])) content[loopcontent][4] = 0;
				if(Unknown(content[loopcontent][5])) content[loopcontent][5] = 1;
				content[loopcontent][6] = new Image();
				content[loopcontent][6].src = content[loopcontent][0];
				cakepen.globalAlpha = content[loopcontent][5];
				cakepen.drawImage(content[loopcontent][6],content[loopcontent][1],content[loopcontent][2],content[loopcontent][3],content[loopcontent][4]);
			}
		}
		if(type == TEXTS)
		{
			for(var loopcontent = 0;loopcontent < content.length;loopcontent++)
			{
				if(Unknown(content[loopcontent][0])) content[loopcontent][0] = 0;
				if(Unknown(content[loopcontent][1])) content[loopcontent][1] = 0;
				if(Unknown(content[loopcontent][2])) content[loopcontent][2] = "";
				if(Unknown(content[loopcontent][3])) content[loopcontent][3] = "black";
				if(Unknown(content[loopcontent][4])) content[loopcontent][4] = "black";
				if(Unknown(content[loopcontent][5])) content[loopcontent][5] = "center";
				if(Unknown(content[loopcontent][6])) content[loopcontent][6] = 1;
				if(Unknown(content[loopcontent][7])) content[loopcontent][7] = "12px arial";
				cakepen.fillStyle = content[loopcontent][3];
				cakepen.strokeStyle = content[loopcontent][4];
				cakepen.globalAlpha = content[loopcontent][6];
				cakepen.font = content[loopcontent][7];
				if(mode == "fill") cakepen.fillText(content[loopcontent][2],content[loopcontent][0],content[loopcontent][1]);
			    if(mode == "stroke") cakepen.strokeText(content[loopcontent][2],content[loopcontent][0],content[loopcontent][1]);
				if(mode == "custom")
				{
					cakepen.fillText(content[loopcontent][2],content[loopcontent][0],content[loopcontent][1]);
					cakepen.strokeText(content[loopcontent][2],content[loopcontent][0],content[loopcontent][1]);
				}	
			}
		}
		if(type == ROUNDED_RECTANGLES)
		{
			for(var loopcontent = 0;loopcontent < content.length;loopcontent++)
			{
				if(Unknown(content[loopcontent][0])) content[loopcontent][0] = 0;
				if(Unknown(content[loopcontent][1])) content[loopcontent][1] = 0;
				if(Unknown(content[loopcontent][2])) content[loopcontent][2] = 0;
				if(Unknown(content[loopcontent][3])) content[loopcontent][3] = 0;
				if(Unknown(content[loopcontent][4])) content[loopcontent][4] = 0;
				if(Unknown(content[loopcontent][5])) content[loopcontent][5] = "black";
				if(Unknown(content[loopcontent][6])) content[loopcontent][6] = "black";
				if(Unknown(content[loopcontent][7])) content[loopcontent][7] = 1;
				cakepen.fillStyle = content[loopcontent][5];
				cakepen.strokeStyle = content[loopcontent][6];
				cakepen.globalAlpha = content[loopcontent][7];
				cakepen.beginPath();
				cakepen.moveTo(content[loopcontent][0] + content[loopcontent][4],content[loopcontent][1]);
				cakepen.lineTo(content[loopcontent][0] + content[loopcontent][2] - content[loopcontent][4],content[loopcontent][1]);
				cakepen.quadraticCurveTo(content[loopcontent][0] + content[loopcontent][2],content[loopcontent][1],content[loopcontent][0] + content[loopcontent][2],content[loopcontent][1] + content[loopcontent][4]);
				cakepen.lineTo(content[loopcontent][0] + content[loopcontent][2],content[loopcontent][1] + content[loopcontent][3] - content[loopcontent][4]);
				cakepen.quadraticCurveTo(content[loopcontent][0] + content[loopcontent][2],content[loopcontent][1] + content[loopcontent][3],content[loopcontent][0] + content[loopcontent][2] - content[loopcontent][4],content[loopcontent][1] + content[loopcontent][3]);
				cakepen.lineTo(content[loopcontent][0] + content[loopcontent][4],content[loopcontent][1] + content[loopcontent][3]);
				cakepen.quadraticCurveTo(content[loopcontent][0],content[loopcontent][1] + content[loopcontent][3],content[loopcontent][0],content[loopcontent][1] + content[loopcontent][3] - content[loopcontent][4]);
				cakepen.lineTo(content[loopcontent][0],content[loopcontent][1] + content[loopcontent][4]);
				cakepen.quadraticCurveTo(content[loopcontent][0],content[loopcontent][1],content[loopcontent][0] + content[loopcontent][4],content[loopcontent][1]);
				cakepen.closePath();
				if(mode == "fill") cakepen.fill();			
				if(mode == "stroke") cakepen.stroke();
				if(mode == "custom")
				{
					cakepen.fill();
					cakepen.stroke();
				}
			}
		}
		cakepen.globalAlpha = 1;
	};
	var FlipHorizontally = () => cakepen.scale(-1,1);
	var FlipVertically = () => cakepen.scale(1,-1);
	var FlipContent = () => cakepen.scale(-1,-1);
	var ResetFlipping = () => cakepen.scale(1,1);
	var Shear = (x,y) => 
	{
		if(Unknown(x)) x = 0;
		if(Unknown(y)) y = 0;
		cakepen.shear(x,y);
	};
	var SetCanvasBackground = (bg) => cakecanvas.style.background = bg;
	var RemoveCanvasBackground = () => cakecanvas.style.background = "none";