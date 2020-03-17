//Copyright (c)2019-Present Rabia Alhaffar,All Rights Reserved!!!
//Cake Canvas (2D And 3D) And WebGL(2D And 3D) HTML5 Game Framework!!!
//Date: 17/March/2020
//The Engine/Framework Code Starts Here!!!
//Variables:
var Opera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0,
	Firefox = typeof InstallTrigger !== 'undefined',
	Safari = /constructor/i.test(window.HTMLElement) || (function (p)
	{
		return p.toString() === "[object SafariRemoteNotification]";
	})(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification)),
	IE = false || !!document.documentMode,
	Chrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime),
	iOS = navigator.userAgent.match(/iPhone|iPad|iPod|Apple-iPhone/i),
	Android = navigator.userAgent.match(/Android/i),
	Mac = navigator.userAgent.match(/Macintosh|Intel Mac OS X/i),
	Windows = navigator.userAgent.match(/Windows|Windows Phone|Windows NT/i),
	Windows_Phone = navigator.userAgent.match(/Windows Phone/i),
	Blackberry = navigator.userAgent.match(/Blackberry|BB/i),
	Linux = navigator.userAgent.match(/Android|Linux|Ubuntu|X11/i),
	Ubuntu = navigator.userAgent.match(/Ubuntu|X11/i),
	Chromecast = navigator.userAgent.match(/CrKey/i),
	Chrome_OS = navigator.userAgent.match(/CrOS/i),
	PS4 = navigator.userAgent.match(/PlayStation 4/i),
	Playstation = navigator.userAgent.match(/PlayStation/i),
	PSVita = navigator.userAgent.match(/PlayStation Vita/i),
	XB1 = navigator.userAgent.match(/Xbox One/i),
	XB1S = navigator.userAgent.match(/XBOX_ONE_ED/i),
	XBOX = navigator.userAgent.match(/Xbox/i),
	Nintendo = navigator.userAgent.match(/Nintendo/i),
	N_3DS = navigator.userAgent.match(/Nintendo 3DS/i),
	WiiU = navigator.userAgent.match(/Nintendo WiiU/i),
	FireTV = navigator.userAgent.match(/AFTS/i),
	Roku_Ultra = navigator.userAgent.match(/Roku4640X/i),
	Roku = navigator.userAgent.match(/Roku/i),
	Google_Nexus_Player = navigator.userAgent.match(/Nexus Player/i),
	Minix_NEO_X5 = navigator.userAgent.match(/NEO-X5/i),
	AppleTV = navigator.userAgent.match(/AppleTV/i),
	Kindle = navigator.userAgent.match(/Kindle/i),
	Google_Bot = navigator.userAgent.match(/Googlebot/i),
	ChromeDevice = navigator.userAgent.match(/Cr/i),
	Bing_Bot = navigator.userAgent.match(/bingbot/i),
	Yahoo_Bot = navigator.userAgent.match(/Yahoo!/i),
	Desktop = navigator.userAgent.match(/Windows|Windows Phone|Windows NT|Macintosh|Intel Mac OS X|Android|Linux|Ubuntu|X11|CrKey|CrOS/i),
	Mobile = navigator.userAgent.match(/Android|Linux|Ubuntu|iPhone|iPad|iPod|Apple-iPhone|Blackberry|BB|Windows Phone/i),
	Console = navigator.userAgent.match(/PlayStation|Nintendo|Xbox|XBOX/i),
	TV = navigator.userAgent.match(/AppleTV|CrKey|CrOS|Roku|AFTS|Nexus Player/i),
	JRE = navigator.javaEnabled(),
	Language = navigator.language,
	Online = navigator.onLine,
	BrowserClientPlatform = navigator.platform,
	OS = window.navigator.userAgent,
	RAM = navigator.deviceMemory,
	OS_Codename = window.navigator.oscpu,
	Location = navigator.geolocation,
	Device_Languages = navigator.languages,
	ScreenHeight = screen.height,
	ScreenWidth = screen.width,
	WindowHeight = window.innerHeight,
	WindowWidth = window.innerWidth,
	RandomAlpha = Math.random(),
	CanvasHeight,
	CanvasWidth,
	calltime = performance.now(),
	RandomColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`,
	RED = "red",
	ORANGE = "orange",
	YELLOW = "yellow",
	GREEN = "green",
	BLUE = "blue",
	PINK = "pink",
	PURPLE = "purple",
	WHITE = "white",
	BLACK = "black",
	GREY = "grey",
	SILVER = "silver",
	CYAN = "cyan";
var u = undefined;
var cheat, Target, cakecanvas, cakepen;
//Colors
var HEXCOLOR = {
	RED: 0xFF0000,
	ORANGE: 0xFF3300,
	YELLOW: 0xFFD900,
	HONEY: 0xAA4F08,
	GREEN: 0x35CC5A,
	BLUE: 0x3500FA,
	PINK: 0xC34288,
	PURPLE: 0x650A5A,
	WHITE: 0xFFFFFF,
	BLACK: 0x000000,
	GREY: 0x424949,
	SILVER: 0xB3B6B7,
	CYAN: 0x1ABC9C
};
//Gamepad(USB,PS4,PS3,XBOX) Keys:
var XBKey =
{
A:0,
B:1,
X:2,
Y:3,
LB:4,
RB:5,
LT:6,
RT:7,
Back:8,
Start:9,
LeftAnalogStick:10,
RightAnalogStick:11,
Up:12,
Down:13,
Left:14,
Right:15
};
var PSKey =
{
X:0,
O:1,
Square:2,
Triangle:3,
L1:4,
R1:5,
L2:6,
R2:7,
Select:8,
Start:9,
LeftAnalogStick:10,
RightAnalogStick:11,
Up:12,
Down:13,
Left:14,
Right:15
};
//TV Keys
var TVKey = {
	Up: 38,
	Down: 40,
	Left: 37,
	Right: 39,
	ChannelUp: 516,
	ChannelDown: 517,
	F0: 588,
	F1: 589,
	F2: 590,
	F3: 591,
	Enter: 13,
	Aspect: 642,
	Info: 615,
	Return: 8,
	Option: 623,
	Zero: 48,
	One: 49,
	Two: 50,
	Three: 51,
	Four: 52,
	Five: 53,
	Six: 54,
	Seven: 55,
	Eight: 56,
	Nine: 57,
	LastView: 651,
	Play: 250,
	Pause: 19,
	Stop: 178,
	Record: 603,
	SkipToNext: 176,
	SkipToPrevious: 177,
	Next: 228,
	Previous: 227
};

//Module: Browser
var ReloadHistory = () => window.location.reload();
var NextHistory = () => window.history.forward();
var BackHistory = () => window.history.back();
var OpenURL = (url) => window.open(url);

//Module: Audio
var PlayAudio = (url) => audio = new Audio(url).play();

function Music(url)
{
	this.url = url;
	this.audio = new Audio(this.url);
	this.Play = function ()
	{
		this.audio.play();
	}
	this.Pause = function ()
	{
		this.audio.pause();
	}
	this.Resume = function ()
	{
		this.Play();
	}
};

//Module: Fullscreen API
var Fullscreen = window.fullscreen;
var ToggleFullscreen = () =>
{
	var screen = document.documentElement;
	if (screen.requestFullscreen) screen.requestFullscreen();
	if (screen.mozRequestFullScreen) screen.mozRequestFullScreen();
	if (screen.webkitRequestFullscreen) screen.webkitRequestFullscreen();
	if (screen.msRequestFullscreen) screen.msRequestFullscreen();
};

var ExitFullscreen = () =>
{
	if (document.exitFullscreen) document.exitFullscreen();
	if (document.mozCancelFullScreen) document.mozCancelFullScreen();
	if (document.webkitExitFullscreen) document.webkitExitFullscreen();
	if (document.msExitFullscreen) document.msExitFullscreen();
};

//Module: Storage(JSON)
//Cake Saving Game To Local Storage API Using JSON
var Save = (variable_name, value) => localStorage.setItem(variable_name, JSON.stringify(value));
var Load = (variable_name) => JSON.parse(localStorage.getItem(variable_name));
var Modify = (variable_name, value) => localStorage[variable_name] = value;
var ClearData = () => localStorage.clear();

//Module: Tracking
//An Tracking Objects,PC,Player,And Game Specifications For Cake Game Framework!!!
//Works Successfully But It Still In Development!!!
var RAM = navigator.deviceMemory;
var OS_Codename = window.navigator.oscpu;
var Location = navigator.geolocation;
var Device_Languages = navigator.languages;
var TrackGameObject = (object) => console.info(`Object ${object.name} Properties:\nX Position: ${object.x}\nY Position: ${object.y}\nWidth: ${object.width}\nHeight: ${object.width}\nSpeed X: ${object.speedX}\nSpeed Y: ${object.speedY}\nGravity: ${object.gravity}\nGravity Speed: ${object.gravitySpeed}\nBouncing: ${object.bounce}\n`);
var TrackWebGL = () =>
{
	var gl = document.createElement("canvas").getContext("webgl"),
		ext = gl.getExtension("WEBGL_debug_renderer_info");
	console.info(`WebGL Properties:\nWebGL Version: ${gl.getParameter(gl.VERSION)}\nWebGL GLSL Version: ${gl.getParameter(gl.SHADING_LANGUAGE_VERSION)}\nWebGL Vendor/Provider: ${gl.getParameter(gl.VENDOR)}\nWebGL GPU Vendor: ${gl.getParameter(ext.UNMASKED_VENDOR_WEBGL)}\nPC GPU: ${gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)}\n`);
};
var TrackDevice = () => console.info(`Device Info:\nDevice OS: ${window.navigator.userAgent}\nDevice Browser OS: ${navigator.platform}\nDevice Language: ${navigator.language}\nJava Enabled: ${navigator.javaEnabled()}\nIs The Device Online: ${navigator.onLine}\nDevice RAM: ${navigator.deviceMemory} GB\nOperating System Real Name: ${window.navigator.oscpu}\nDevice Location: ${navigator.geolocation}\nLanguages List: ${navigator.languages}\n`);
var TrackCanvas = () => console.info(`Game Canvas Info:\nCanvas Height: ${cakecanvas.height}\nCanvas Width: ${cakecanvas.width}\n`);

//Module: Physics
var CheckCollisionRect = (r1,r2) => { return(r1.x < r2.x + r2.width && r1.x + r1.width > r2.x && r1.y < r2.y + r2.height && r1.y + r1.height > r2.y && r1.collidable && r2.collidable); };
var CheckCollisionRectAdvanced = (r_1_x,r_1_y,r_1_w,r_1_h,r_2_x,r_2_y,r_2_w,r_2_h) => { return(r_1_x < r_2_x + r_2_w && r_1_x + r_1_w > r_2_x && r_1_y < r_2_y + r_2_h && r_1_y + r_1_h > r_2_y); };
var CheckCollisionCircleAdvanced = (c_1_x,c_1_y,c_1_r,c_2_x,c_2_y,c_2_r) => { return(Math.sqrt((c_1_x - c_2_x * c_1_x - c_2_x) + (c_1_y + c_2_y * c_1_y + c_2_y)) < c_1_r + c_2_r); };
var CheckCollisionCircle = (c1,c2) => { return(Math.sqrt((c1.x - c2.x * c1.x - c2.x) + (c1.y + c2.y * c1.y + c2.y))  < c1.radius + c2.radius && c1.collidable && c2.collidable); };
var CheckCollisionCircleRectAdvanced = (c_1_x,c_1_y,c_1_r,r_1_x,r_1_y,r_1_w,r_1_h) =>
{
	if (Math.abs(c_1_x - r_1_x - r_1_w / 2) > (r_1_w / 2 + c_1_r) || Math.abs(c_1_y - r_1_y - r_1_h / 2) > (r_1_h / 2 + c_1_r)) { return false; }
	if (Math.abs(c_1_x - r_1_x - r_1_w / 2) <= (r_1_w / 2) || Math.abs(c_1_y - r_1_y - r_1_h / 2) <= (r_1_h / 2)) { return true; }
	return (Math.abs(c_1_x - r_1_x - r_1_w / 2) - r_1_w / 2 * Math.abs(c_1_x - r_1_x - r_1_w / 2) - r_1_w /2 + Math.abs(c_1_y - r_1_y - r_1_h / 2) - r_1_h / 2 * Math.abs(c_1_y - r_1_y - r_1_h / 2) - r_1_h / 2 <= (c_1_r * c_1_r));  
};
var CheckCollisionCircleRect = (c1,r1) =>
{
	if (Math.abs(c1.x - r1.x - r1.width / 2) > (r1.width / 2 + c1.radius) || Math.abs(c1.y - r1.y - r1.height / 2) > (r1.height / 2 + c1.radius)) { return false; }
	if (Math.abs(c1.x - r1.x - r1.width / 2) <= (r1.width / 2) || Math.abs(c1.y - r1.y - r1.height / 2) <= (r1.height / 2)) { return true; }
	return (Math.abs(c1.x - r1.x - r1.width / 2) - r1.width / 2 * Math.abs(c1.x - r1.x - r1.width / 2) - r1.width / 2 + Math.abs(c1.y - r1.y - r1.height / 2) - r1.height / 2 * Math.abs(c1.y - r1.y - r1.height / 2) - r1.height / 2 <= (c1.radius * c1.radius) && c1.collidable && r1.collidable);
};
var CheckCanvasCollisionLeft = (object) => { return(object.x <= object.width * 0.5); };
var CheckCanvasCollisionLeftAdvanced = (o_x,o_w) => { return(o_x <= o_w * 0.5); };		
var CheckCanvasCollisionRight = (object) => { return(object.x + object.width >= cakecanvas.width + object.width * 0.5); };
var CheckCanvasCollisionRightAdvanced = (o_x,o_w) => { return(o_x + o_w >= cakecanvas.width + o_w * 0.5); };
var CheckCanvasCollisionTop = (object) => { return(object.y <= object.height * 0.5); };
var CheckCanvasCollisionTopAdvanced = (o_y,o_h) => { return(o_y <= o_h * 0.5); };
var CheckCanvasCollisionBottom = (object) => { return(object.y + object.height >= cakecanvas.height + object.height * 0.5); };
var CheckCanvasCollisionBottomAdvanced = (o_y,o_h) => { return(o_y + o_h >= cakecanvas.height + o_h * 0.5); };
var CheckCollisionCircleLeftCanvas = (c1) => { return c1.x + c1.speedX < c1.radius; };
var CheckCollisionCircleRightCanvas = (c1) => { return c1.x + c1.speedX > cakecanvas.width - c1.radius; };
var CheckCollisionCircleBottomCanvas = (c1) => { return c1.y + c1.speedY > cakecanvas.height - c1.radius; };
var CheckCollisionCircleTopCanvas = (c1) => { return c1.y + c1.speedY < c1.radius; };
var CheckCollisionCircleTopCanvasAdvanced = (c1_y,c1_speedY,c1_r) => { return c1_y + c1_speedY < c1_r; }; 
var CheckCollisionCircleBottomCanvasAdvanced = (c1_y,c1_speedY,c1_r) => { return c1_y + c1_speedY > cakecanvas.height - c1_r; };
var CheckCollisionCircleLeftCanvasAdvanced = (c1_x,c1_speedX,c1_r) => { return c1_x + c1_speedX < c1_r; };
var CheckCollisionCircleRightCanvasAdvanced = (c1_x,c1_speedX,c1_r) => { return c1_x + c1_speedX > cakecanvas.width - c1_r; };

//Module: Mobile
//Created By Rabia Alhaffar In 23/April/2019
//An Library Specified To Use With Smartphones For Cake Game Framework
var Vibrate = (x) => window.navigator.vibrate(x);
var StopVibrating = () => window.navigator.vibrate(0);
var ShowBatteryLevel = () => console.info(`Battery Level: ${window.navigator.battery.level * 100}%`);
var UnlockDeviceRotation = () => ScreenOrientation.unlock();
var LockDeviceRotation = (position) => ScreenOrientation.lock(position);
/*
Position Could Be:

    "any"
    "natural"
    "landscape"
    "portrait"
    "portrait-primary"
    "portrait-secondary"
    "landscape-primary"
    "landscape-secondary"

*/

//Module: Graphics(2D)
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
	    var SetLineProperties = (line_width,line_height) =>
		{
			if(Unknown(line_height)) line_height = 1;
			if(Unknown(line_width)) line_width = 1;
			cakepen.lineHeight = line_height,cakepen.lineWidth = line_width;
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
			var gamecanvas = document.createElement("canvas");
			gamecanvas.id = gametitle.toString().toLowerCase() + "-game-canvas",gamecanvas.height = height,gamecanvas.width = width;
			document.body.appendChild(gamecanvas);
			var cakecanvas = document.getElementById(gametitle.toString().toLowerCase() + "-game-canvas");
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
	var RandomBetween = (x) => { return Math.floor(Math.random() * x); };
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
	var DrawGradientRect = (x,y,w,h,content,alpha) =>
	{
		if(Unknown(x)) x = 0;
		if(Unknown(y)) y = 0;
		if(Unknown(w)) w = 0;
		if(Unknown(h)) h = 0;
		if(Unknown(alpha)) alpha = 1;
		var linear = cakepen.createLinearGradient(x, y, w, h);
		for(var loopdlg = 0;loopdlg < content.length;loopdlg++) linear.addColorStop(content[loopdlg][0], content[loopdlg][1]);
		cakepen.fillStyle = linear;
		cakepen.strokeStyle = linear;
		cakepen.globalAlpha = alpha;
		if (mode == "fill") cakepen.fillRect(x,y,w,h);
		if (mode == "stroke") cakepen.strokeRect(x,y,w,h);
		if (mode == "custom")
		{
			cakepen.fillRect(x,y,w,h);
			cakepen.strokeRect(x,y,w,h);
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
	var DrawArrays = (type,content) =>
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
//Module: Game
//Cake Game Library!!!
//Just For Closing Game Page As Exit Or Opening URL Or Even Restart Game!!!
var RestartGame = () => window.location.reload();
var CloseGame = () => window.close();
var Title = (document_title) => document.title = document_title;
var CrashGame = () =>
{
	while (true) console.log(0);
};
var ViewSourceCode = (index) => window.open(document.scripts[index].src);
var ViewGameSourceCode = () => window.open(document.scripts[2].src);
var StartProcess = (dir) => window.open("file:///" + dir.toString);
var UpdateCake = () => Import("https://cdn.jsdelivr.net/gh/Cake-Engine/Cake@master/build/cake.js");
var Destroy = (component) =>
{
    if(!component.destroyed) component.Destroy();
};

//Module: Components(Game Objects)
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
this.alpha = 1;
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
this.alpha = 1;
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

//Module: Input Tracking
//Cake Keyboard Keys,Mouse Buttons,Touch Recording API
//This Is For Recording
var KeyCode,Key,MouseX,MouseY,MouseButton,MouseButtonName,TouchX,TouchY;
var Log = (log) => console.log(log);
var RecordKeyboard = (KeyboardKey) =>
{
	Key = KeyboardKey.key;
	KeyCode = KeyboardKey.keyCode;
	console.info(`Key Pressed: ${Key} , Key Code: ${KeyCode}`);	
};		
var RecordMouse = (event) =>
{
		MouseX = event.clientX,MouseY = event.clientY,MouseButton = event.button;
		if(MouseButton == 0) MouseButtonName = "Left";
		if(MouseButton == 1) MouseButtonName = "Middle(Wheel)"
		if(MouseButton == 2) MouseButtonName = "Right";
		console.info(`Mouse X Position: ${MouseX} , Mouse Y Position: ${MouseY} , Button Pressed: ${MouseButtonName} Mouse Button`);
};
var RecordTouch = (event) =>
{
	    TouchX = event.clientX || event.pageX,TouchY = event.clientY || event.pageY;
		console.info(`Touch X Position: ${TouchX} , Touch Y Position: ${TouchY}`);
};
var RecordMotion = (event) =>
{
	console.log(`Acceleration X: ${event.accelerationIncludingGravity.x} , Acceleration Y: ${event.accelerationIncludingGravity.y}`);
};
document.addEventListener("keydown",RecordKeyboard);
document.addEventListener("keyup",RecordKeyboard);
document.addEventListener("mousemove",RecordMouse);
document.addEventListener("click",RecordMouse);
document.addEventListener("touchmove",RecordTouch);
document.addEventListener("touchstart",RecordTouch);
var EnableAccelerometer = () => document.addEventListener("devicemotion",RecordMotion); //Did This For Not Conflicting With Other Browsers(Other Than Chrome)
var ClearConsole = () => console.clear();		

//Module: Cheat
//Created By Rabia Alhaffar In 25/April/2019
//An Cake Cheatcoding Library Example!!!
//It Could Add Cheats To Your Game By Prompting
//Next Version:Add Keyboard Key Chains
var cheat;
var InputCheatCode = () => cheat = prompt("Enter Cheatcode:");
var CheckCheatCode = (cheatcode, f) =>
{
	if (cheat == cheatcode)
	{
		setTimeout(f, 0);
		return true;
	}
	else
	{
		return false;
	}
};
var SetCheatCode = (cheatcode) => cheat = cheatcode;

//Module: Execution
//Created By Rabia Alhaffar On 15/November/2019
//An Library To Debug,Run Scripts In-Game
var scripts_added = 0;
var Execute = (code,l,time) =>
{
    if(Unknown(l)) l = 0;
    if(Unknown(time)) time = 0;
    if(l == 0) setTimeout(code,0);
    if(l == 1) setTimeout(code,time);
    if(l == 2) setInterval(code,0);
    if(l == 3) setInterval(code,time);
};

var Import = (script_source) =>
{
  var script = document.createElement('script'); 
  script.src = script_source; 
  script.type = 'text/javascript'; 
  script.defer = true; 
  document.getElementsByTagName('head')[scripts_added].appendChild(script); 
  scripts_added++;
};

//Module: FPS And Levels
//Created By Rabia Alhaffar On 16/November/2019
//An Library For Timers,Frames Per Second
function Level(code,fps)
{
this.code = code;
this.fps = fps;
this.paused = false;
this.played = false;
this.resumed = false;
this.started = false;
this.interval = 0;
if(Unknown(this.fps)) this.fps = 120;
this.Play = function() 
{ 
	this.interval = setInterval(this.code,1000 / this.fps); 
	this.started = true,this.played = true;
};
this.Pause = function() 
{
	clearInterval(this.interval);
	this.started = true,this.played = false,this.resumed = false,this.paused = true;
};
this.Resume = function() 
{
	this.Start();
	this.started = true,this.played = true,this.resumed = true;
};
this.Start = function() 
{
	this.Play();
	this.started = true,this.played = true;
};
this.Switch = function(level) { this.Pause(); level.Start(); };	
this.SetFPS = function(fps) { this.fps = fps; };
this.Unlimit = function() { this.fps = 1; };
}
var DrawFPS = (Level) =>
{
	cakepen.font = "20px arial";
	cakepen.fillStyle = "black";
	cakepen.fillText("FPS: " + Level.fps,30,30);
};
var SetFPS = (Level,fps_value) => Level.fps = fps_value;

//Module: Exceptions And Errors
var Exception = (name, code, description) =>
{
	throw "\nEXCEPTION CODE: " + code + "\nEXCEPTION NAME: " + name.toString() + "\nEXCEPTION DESCRIPTION: " + description.toString();
};
var Info = (title, info) => console.info(title.toString() + ":\n" + info.toString());
var Trace = () => console.trace();
var Warn = (name, description) => console.warn(name.toString() + ": " + description.toString());
var Error = (name, code, description) => console.error("\nERROR CODE: " + code + "\nERROR NAME: " + name.toString() + "\nERROR DESCRIPTION: " + description.toString());
var StartConsoleTimer = () => console.timer();
var EndConsoleTimer = () => console.timeEnd();

//Module: Performance Getting And Calling
var GetPerformance = () => console.log("Calling Functions Performance: " + performance.now() + " Milliseconds");

//Module: Filters(Canvas CSS Filters)
//Created By Rabia Alhaffar In November Of 2019
//A Library Of CSS Filters For Your Game In Canvas!!!
var SetFilters = (filters) => cakecanvas.style.filter = filters;
var AddFilters = (filters) => cakecanvas.style.filter += filters;
var SetBlur = (pixels) => cakecanvas.style.filter += ` blur(${pixels}px) `;
var SetBrightness = (percentage) => cakecanvas.style.filter += ` brightness(${percentage}%) `;
var SetContrast = (percentage) => cakecanvas.style.filter += ` contrast(${percentage}%) `;
var SetGrayscale = (percentage) => akecanvas.style.filter += ` grayscale(${percentage}%) `;
var SetInvert = (percentage) => cakecanvas.style.filter += ` invert(${percentage}%) `;
var SetOpacity = (percentage) => cakecanvas.style.filter += ` opacity${percentage}%) `;
var SetSaturation = (percentage) => cakecanvas.style.filter += ` saturate(${percentage}%) `;
var SetSepia = (percentage) => cakecanvas.style.filter += ` sepia(${percentage}%) `;
var SetHueRotation = (degrees) => cakecanvas.style.filter += ` hue-rotate(${degrees}deg) `;
var RemoveFilters = () => cakecanvas.style.filter = "none";

function Filter(name, px, per, deg)
{
	this.name = name;
	this.degrees = deg;
	this.pixels = px;
	this.percentage = per;
	this.filtervalue = 0;
	this.Add = function ()
	{
		if (this.name != "blur" && this.name != "hue-rotate") this.filtervalue = `${this.percentage}%`;
		if (this.name == "blur") this.filtervalue = `${this.pixels}px`;
		if (this.name == "hue-rotate") this.filtervalue = `${this.degrees}deg`;
		cakecanvas.style.filter += ` ${this.name}(${this.filtervalue}) `;
	};
}

//Module: Testwall(To Test Equality Then Do Function If True)
//Created By Rabia Alhaffar In 13/December/2019
//Testing Basics: a,b Are Values And c Is A Function!!!
//If a Equal b(However What Type Is They),c Which Is A Function Runs Via setTimeout()
var Is = (a, b, c) =>
{
	if (a == b) setTimeout(c, 0);
	return a == b, a, b, c;
};

//Module: Browser Compatibility
//Created By Rabia Alhaffar In 16/December/2019
//For Making Some Functions Compatible With Other Browsers!!!
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || window.webkitRequestAnimationFrame;
window.cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame;
document.documentElement.requestFullscreen = document.documentElement.requestFullscreen || document.documentElement.mozRequestFullScreen || document.documentElement.msRequestFullscreen || document.documentElement.webkitRequestFullscreen;
document.exitFullscreen = document.exitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitExitFullscreen;
document.requestPointerLock = document.requestPointerLock || document.mozRequestPointerLock || document.webkitRequestPointerLock;
document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock;

//Module: Pointer Lock API
//Created By Rabia Alhaffar In 16/December/2019
var LockPointer = () =>
{
	if (cakecanvas.requestPointerLock) cakecanvas.requestPointerLock();
	if (document.pointerLockElement === canvas) cakecanvas.requestPointerLock();
};
var UnlockPointer = () => document.exitPointerLock();

//Module: Mouse Cursor
//Created By Rabia Alhaffar In 5/February/2020
//A Library To Change Cursor Shape To Image!!!
var HideCursor = () => cakecanvas.style.cursor = "none";
var ShowCursor = () => cakecanvas.style.cursor = "auto";
var SetCursor = (img_src,type,cursor_size) =>
{
var cursor_image;
if(Unknown(cursor_size)) cursor_size = 10;
if(type == "color") 
{ 
    cakepen.fillStyle = img_src; 
    //Part 1: Hide Mouse Cursor If Mouse Cursor Enters Game Canvas
    cakecanvas.addEventListener("mouseenter",() => { HideCursor(); });
    cakecanvas.addEventListener("click",() => { HideCursor(); });
    //Part 2: Draw Mouse Cursor Shape As Circle
    cakecanvas.addEventListener("mousemove",(e) => { cakepen.arc(e.clientX, e.clientY, cursor_size, 90, 180 * Math.PI); cakepen.fill(); }); 
    cakecanvas.addEventListener("mouseover",(e) => { cakepen.arc(e.clientX, e.clientY, cursor_size, 90, 180 * Math.PI); cakepen.fill(); }); 
    cakecanvas.addEventListener("mousedown",(e) => { cakepen.arc(e.clientX, e.clientY, cursor_size, 90, 180 * Math.PI); cakepen.fill(); });
    cakecanvas.addEventListener("touchmove",(e) => { cakepen.arc(e.clientX || e.pageX, e.clientY || e.pageY, cursor_size, 90, 180 * Math.PI); cakepen.fill(); });
    cakecanvas.addEventListener("touchstart",(e) => { cakepen.arc(e.clientX || e.pageX, e.clientY || e.pageY, cursor_size, 90, 180 * Math.PI); cakepen.fill(); });  
}
if(type == "image")
{
    //Part 1: Hide Mouse Cursor If Mouse Cursor Enters Game Canvas
    cakecanvas.addEventListener("mouseenter",() => { HideCursor(); }); 
    cakecanvas.addEventListener("click",() => { HideCursor(); });
    //Part 2: Draw Mouse Cursor Shape/Icon From Image
    cursor_image = new Image(),cursor_image.src = img_src,cursor_image.height = cursor_size,cursor_image.width = cursor_size;
    cakecanvas.addEventListener("mousemove",(e) => { cakepen.drawImage(cursor_image,e.clientX,e.clientY); }); 
    cakecanvas.addEventListener("mouseover",(e) => { cakepen.drawImage(cursor_image,e.clientX,e.clientY); }); 
    cakecanvas.addEventListener("mousedown",(e) => { cakepen.drawImage(cursor_image,e.clientX,e.clientY); });
    cakecanvas.addEventListener("touchmove",(e) => { cakepen.drawImage(cursor_image,e.clientX || e.pageX,e.clientY || e.pageY); });
    cakecanvas.addEventListener("touchstart",(e) => { cakepen.drawImage(cursor_image,e.clientX || e.pageX,e.clientY || e.pageY); });  
       
}
if(type == "icon") cakecanvas.style.cursor = img_src; //CSS Style,Your Call ;)
};

//Module: Compiler Fixing For Values
//Written By Rabia Alhaffar In 16/December/2019
var FixValue = (x,type) =>
{
if((type == undefined) || (type == NaN) || (type == null)) type = "bool";
if((x == undefined) || (x == NaN) || (x == null) && (type == "string")) x = "";
if((x == undefined) || (x == NaN) || (x == null) && (type == "int")) x = 0;
if((x == undefined) || (x == NaN) || (x == null) && (type == "bool")) x = false;
if((x == undefined) || (x == NaN) || (x == null) && (type == "char")) x = '';
if((x == undefined) || (x == NaN) || (x == null) && (type == "array")) x = [];
};
var FixValuesFromArray = (values,type) =>
{
for(x in values)
{
if((type == undefined) || (type == NaN) || (type == null)) type = "bool";
if((values[x] == undefined) || (values[x] == NaN) || (values[x] == null) && type == "string") values[x] = "";
if((values[x] == undefined) || (values[x] == NaN) || (values[x] == null) && type == "int") values[x] = 0;
if((values[x] == undefined) || (values[x] == NaN) || (values[x] == null) && type == "bool") values[x] = false;
if((values[x] == undefined) || (values[x] == NaN) || (values[x] == null) && type == "char") values[x] = '';
if((values[x] == undefined) || (values[x] == NaN) || (values[x] == null) && type == "array") values[x] = [];
}		
};
var Unknown = (x) => ((x == undefined) || (x == NaN) || (x == null));
var Help = (f) => { if(typeof f == "function") console.log(f); };
var Do = (c) => eval(c);

//Module: Support
//Created By Rabia Alhaffar In 23/December/2019 
//File To Check Supporting Some Features In-Game!!!
var CANVAS = () =>
{
	return (!!(document.createElement('canvas').getContext) && (document.createElement('canvas').getContext('2d')));
};
var WEBGL = () =>
{
	return (!!((document.createElement('canvas').getContext) && (document.createElement('canvas').getContext('2d')) && (document.createElement('canvas').getContext('webgl')) || (document.createElement('canvas').getContext("experimental-webgl"))));
};
var MP3 = () =>
{
	return (document.createElement('audio').canPlayType('audio/mpeg'));
};
var AIFF = () =>
{
	return (document.createElement('audio').canPlayType('audio/x-aiff'));
};
var MP4 = () =>
{
	return (document.createElement('video').canPlayType('video/mp4'));
};
var OGG = () =>
{
	return (document.createElement('audio').canPlayType('audio/ogg'));
};
var WAV = () =>
{
	return (document.createElement('audio').canPlayType('audio/wav'));
};
var WEBM = () =>
{
	return (document.createElement('video').canPlayType('video/webm'));
};
var WEBXR = () =>
{
	return ("xr" in window.navigator);
};
var WEBVR = () =>
{
	return (navigator.getVRDisplays);
};
var JAVA = () =>
{
	return (navigator.javaEnabled());
};
var ONLINE = () =>
{
	return (navigator.onLine);
};

//Module: Loading
//Created By Rabia Alhaffar In 25/December/2019
//An File Explains Loading Game Images!!!
//That Happens Each Time Document Or Window Is Loaded
//If No Loading Screen Images Added It Will Starts Game By Default
//You Can Make A Scene For Game Loading Instead Of Images If You Love Coding!!!
var LoadingImageSource = "";
var LoadingImageTime, LoadingLevelTime = 0;
var LoadingLevelAvailable, LoadLevelInsteadOfImage, LoadingImagesAvailable = false;
var LoadingLevel, StartingLevel;
window.onload = () =>
{
	cakecanvas = document.getElementsByTagName("canvas")[0];
	if (LoadingImagesAvailable)
	{
		cakecanvas.style.backgroundImage = `url(${src.toString()})`;
		setTimeout(() =>
		{
			cakecanvas.style.backgroundImage = "none";
			ClearCanvas();
			StartingLevel.Start();
		}, LoadingImageTime);
	}
	if (!LoadingImagesAvailable) LoadLevelInsteadOfImage = true;
	if (LoadLevelInsteadOfImage && LoadingLevelAvailable)
	{
		LoadingLevel.Start();
		setTimeout(() =>
		{
			LoadingLevel.Pause();
			LoadingLevel.Switch(StartingLevel);
		}, LoadingLevelTime);
	}
};
var SetLoadingImage = (src, level, time) =>
{
	StartingLevel = level;
	LoadingImagesAvailable = true;
	LoadingImageSource = src.toString();
	LoadingImageTime = time;
};
var SetLoadingLevel = (loading_level, level, time) =>
{
	LoadingLevelAvailable = true;
	LoadingLevel = loading_level;
	LoadingLevelTime = time;
	StartingLevel = level;
};

//Module: Splashscreen
//Created By Rabia Alhaffar In 26/December/2019
//For Splash Screen Creation
var SetSplashscreen = (src, level, time) =>
{
	cakecanvas.style.backgroundImage = `url(${src.toString()})`;
	setTimeout(() =>
	{
		cakecanvas.style.backgroundImage = "none";
		level.Start();
	}, time);
};

//Module: Graphics(3D)
//Created By Rabia Alhaffar In 26/December/2019
//A Fork Of Google's Space 3D For 2D Canvas Graphics Engine
//Do Not Use It For 3D If You Do Not Know What Are You Doing
/* 
Features:
1- No Dependencies Needed  
2- Works With 2D Graphics And Huge Polygonal Designs
3- Easy To Use,You Can Add Your Shaped As Code Contribution
4- Use Cake Game Framework Features Without Hassle    
    */
/*
	Copyright 2006 Google Inc.

	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

	  http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.
*/
var canvasWidth = CanvasWidth,
	halfCanvasWidth = CanvasWidth * 0.5,
	canvasHeight = CanvasHeight,
	halfCanvasHeight = CanvasHeight * 0.5;

function Space()
{
	this.m = createMatrixIdentity();
	this.mStack = [];
}

Space.prototype.createMatrixIdentity = function ()
{
	return [
		[1, 0, 0, 0],
		[0, 1, 0, 0],
		[0, 0, 1, 0],
		[0, 0, 0, 1]
	];
}

/**
 * Multiplies two 4x4 matricies together.
 */
Space.prototype.matrixMultiply = function (m1, m2)
{
	var result = this.createMatrixIdentity();

	var width = m1[0].length;
	var height = m1.length;

	if (width != m2.length)
	{
		// error
	}

	for (var x = 0; x < width; x++)
	{
		for (var y = 0; y < height; y++)
		{
			var sum = 0;

			for (var z = 0; z < width; z++)
			{
				sum += m1[y][z] * m2[z][x];
			}

			result[y][x] = sum;
		}
	}

	return result;
}

/**
 * Transforms a coordinate using the current transformation
 * matrix, then flattens it using the projection matrix.
 */
Space.prototype.flatten = function (point)
{
	var p = [
		[point.x, point.y, point.z, 1]
	];
	var pm = this.matrixMultiply(p, this.m);

	point.tx = pm[0][0];
	point.ty = pm[0][1];
	point.tz = pm[0][2];

	// lazy projection
	point.fx = halfCanvasWidth + (canvasWidth * point.tx / point.tz);
	point.fy = halfCanvasHeight - (canvasWidth * point.ty / point.tz);
}

/**
 * Translate (move) the current transformation matrix
 */
Space.prototype.translate = function (x, y, z)
{
	var m = [
		[1, 0, 0, 0],
		[0, 1, 0, 0],
		[0, 0, 1, 0],
		[x, y, z, 1]
	];

	this.m = this.matrixMultiply(m, this.m);
}

/**
 * Rotate the current transformation matrix. Rotations are
 * world-oriented, and occur in y,x,z order.
 */
Space.prototype.rotate = function (x, y, z)
{
	if (y)
	{
		var cosY = Math.cos(y);
		var sinY = Math.sin(y);
		var rotY = [
			[cosY, 0, sinY, 0],
			[0, 1, 0, 0],
			[-sinY, 0, cosY, 0],
			[0, 0, 0, 1]
		];

		this.m = this.matrixMultiply(this.m, rotY);
	}

	if (x)
	{
		var cosX = Math.cos(x);
		var sinX = Math.sin(x);
		var rotX = [
			[1, 0, 0, 0],
			[0, cosX, -sinX, 0],
			[0, sinX, cosX, 0],
			[0, 0, 0, 1]
		];
		this.m = this.matrixMultiply(this.m, rotX);
	}

	if (z)
	{
		var cosZ = Math.cos(z);
		var sinZ = Math.sin(z);
		var rotZ = [
			[cosZ, -sinZ, 0, 0],
			[sinZ, cosZ, 0, 0],
			[0, 0, 1, 0],
			[0, 0, 0, 1]
		];

		this.m = this.matrixMultiply(this.m, rotZ);
	}
}

/**
 * Pushes the current transformation onto the stack
 */
Space.prototype.push = function ()
{
	this.mStack.push(this.m);
	this.m = [
		[this.m[0][0], this.m[0][1], this.m[0][2], this.m[0][3]],
		[this.m[1][0], this.m[1][1], this.m[1][2], this.m[1][3]],
		[this.m[2][0], this.m[2][1], this.m[2][2], this.m[2][3]],
		[this.m[3][0], this.m[3][1], this.m[3][2], this.m[3][3]]
	];
}

/**
 * Pops the end off the transformation stack
 */
Space.prototype.pop = function ()
{
	this.m = this.mStack.pop();
}

/* -------------------------------------------------------------------- */

/**
 * A 3d coordinate
 */
function Point(x, y, z)
{
	this.x = x;
	this.y = y;
	this.z = z;

	// Relative to camera coordinates
	this.tx;
	this.ty;
	this.tz;

	// Flattened coordinates
	this.fx;
	this.fy;
}

/**
 * A Shape is made up of polygons
 */
function Shape()
{
	this.points = [];
	this.polygons = [];
}

/**
 * Draws the shape
 */
Shape.prototype.draw = function (drawlist)
{
	for (var i = 0; i < this.points.length; i++)
	{
		space.flatten(this.points[i]);
	}

	for (var i = 0; i < this.polygons.length; i++)
	{
		var poly = this.polygons[i]; // convenience

		space.flatten(poly.origin);

		// lazy backface culling
		if (poly.normal && this.backface)
		{
			space.flatten(poly.normal);

			var originDist = Math.pow(poly.origin.tx, 2) +
				Math.pow(poly.origin.ty, 2) +
				Math.pow(poly.origin.tz, 2);

			var normalDist = Math.pow(poly.normal.tx, 2) +
				Math.pow(poly.normal.ty, 2) +
				Math.pow(poly.normal.tz, 2);

			if (originDist > normalDist)
			{
				drawlist.push(poly);
			}
		}
		else
		{
			drawlist.push(poly);
		}
	}
}

/**
 * A polygon is a connection of points in the shape object. You
 * should probably try to make them coplanar.
 */
function Polygon(points, normal, backface, type, color)
{
	this.points = points;

	this.origin = new Point(0, 0, 0);
	for (var i = 0; i < this.points.length; i++)
	{
		this.origin.x += this.points[i].x;
		this.origin.y += this.points[i].y;
		this.origin.z += this.points[i].z;
	}

	this.origin.x /= this.points.length;
	this.origin.y /= this.points.length;
	this.origin.z /= this.points.length;

	if (normal)
	{
		this.normal = new Point(this.origin.x + normal.x,
			this.origin.y + normal.y,
			this.origin.z + normal.z);
	}
	else
	{
		this.normal = null;
	}

	this.backface = backface;
	this.type = type;
	this.color = color;
}

Polygon.SOLID = 0;
Polygon.WIRE = 1;

/**
 * Draws the polygon. Assumes that the points have already been
 * flattened.
 */
Polygon.prototype.draw = function ()
{
	cakepen.beginPath();
	cakepen.moveTo(this.points[0].fx, this.points[0].fy);

	for (var i = 0; i < this.points.length; i++)
	{
		cakepen.lineTo(this.points[i].fx, this.points[i].fy);
	}

	cakepen.closePath();

	var color = this.color;

	/*
	// Do lighting here
	lightvector = Math.abs(this.normal.x + this.normal.y);
	if(lightvector > 1) {
		lightvector = 1;
	}

	color[0] = (color[0] * lightvector).toString();
	color[1] = (color[1] * lightvector).toString();
	color[2] = (color[2] * lightvector).toString();
	*/

	if (color.length > 3)
	{
		var style = ["rgba(",
			color[0], ",",
			color[1], ",",
			color[2], ",",
			color[3], ")"
		].join("");
	}
	else
	{
		var style = ["rgb(",
			color[0], ",",
			color[1], ",",
			color[2], ")"
		].join("");
	}

	if (this.type == Polygon.SOLID)
	{
		cakepen.fillStyle = style;
		cakepen.fill();
	}
	else if (this.type == Polygon.WIRE)
	{
		cakepen.strokeStyle = style;
		cakepen.stroke();
	}
}

/* -------------------------------------------------------------------- */

/**
 * Scene describes the 3D environment
 */
function Scene()
{
	this.shapes = {};
	this.camera = new Point(0, 0, 0);
	this.cameraTarget = new Point(0, 0, 0);
	this.cameraRotation = 0;

	this.drawlist = [];
}

/**
 * Draw the world
 */
Scene.prototype.draw = function ()
{
	space.push();

	// Camera transformation
	space.translate(
		-this.camera.x,
		-this.camera.y,
		-this.camera.z
	);

	// Camera rotation
	var xdiff = this.cameraTarget.x - this.camera.x;
	var ydiff = this.cameraTarget.y - this.camera.y;
	var zdiff = this.cameraTarget.z - this.camera.z;

	var xzdist = Math.sqrt(Math.pow(xdiff, 2) + Math.pow(zdiff, 2));

	var xrot = -Math.atan2(ydiff, xzdist); // up/down rotation
	var yrot = Math.atan2(xdiff, zdiff); // left/right rotation

	space.rotate(xrot, yrot, this.cameraRotation);

	// Drawing
	this.drawlist = [];

	for (var i in this.shapes)
	{
		this.shapes[i].draw(this.drawlist);
	}

	// Depth sorting (warning: this is only enough to drive this demo - feel
	// free to contribute a better system).
	this.drawlist.sort(function (poly1, poly2)
	{
		return poly2.origin.tz - poly1.origin.tz;
	});

	for (var i = 0; i < this.drawlist.length; i++)
	{
		this.drawlist[i].draw();
	}

	space.pop();
}

function createMatrixIdentity()
{
	return [
		[1, 0, 0, 0],
		[0, 1, 0, 0],
		[0, 0, 1, 0],
		[0, 0, 0, 1]
	];

}
//Module: Cookies
//https://www.w3schools.com/js/tryit.asp?filename=tryjs_cookie_username
var Cookie = (cname, cvalue, exdays) =>
{
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

var GetCookie = (cname) =>
{
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++)
	{
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1);
		if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
	}
	return "";
};

var CheckCookie = (cname) =>
{
	var cookie = GetCookie(cname);
	if (cookie == "")
	{
		cookie = prompt("Please Enter Something:", "");
		if (user != "" && user != null) Cookie(cname, cookie, 365);
	}
};

//Module: Content
//Created By Rabia Alhaffar In 4/January/2020
//A Module To Add Flash SWF And Java JAR Content!!!
var AddContent = (source, w, h) =>
{
	var content = document.createElement("object");
	content.data = source, content.height = h, content.width = w;
	document.getElementsByTagName("body").appendChild(content);
};

//Module: App Windows
//Created By Rabia Alhaffar In 4/January/2020
function Window(l,t,w,h,s)
{
	this.src = s;
	this.h = h, this.w = w;
	this.l = l, this.t = t;
	this.height = "height=" + this.h, this.width = "width=" + this.w;
	this.Win = 0, this.resizable = "yes";
	this.left = "left=" + this.l, this.top = "top=" + this.t;
	this.Init = function ()
	{
		if (Unknown(this.src)) this.src = "";
		if (Unknown(this.h)) this.h = 400;
		if (Unknown(this.w)) this.w = 400;
		if (Unknown(this.l)) this.l = 0;
		if (Unknown(this.t)) this.t = 0;
		this.Win = window.open(this.src, "", this.height + "," + this.width + "," + this.left + "," + this.top + "," + "resizable=" + this.resizable);
	};
	this.Translate = function (x, y)
	{
		if (Unknown(x)) x = 0;
		if (Unknown(y)) y = 0;
		this.Win.moveTo(x, y);
	};
	this.Move = function (x, y)
	{
		if (Unknown(x)) x = 0;
		if (Unknown(y)) y = 0;
		this.Win.moveBy(x, y);
	};
	this.Resize = function (w, h)
	{
		if (Unknown(h)) h = 0;
		if (Unknown(w)) w = 0;
		this.Win.resizeTo(w, h);
	};
	this.Scale = function (w, h)
	{
		if (Unknown(h)) h = 0;
		if (Unknown(w)) w = 0;
		this.Win.resizeBy(w, h);
	};
	this.Close = function ()
	{
		this.Win.close();
	};
	this.Pause = function ()
	{
		this.Win.stop();
	};
	this.Write = function (w)
	{
		if (Unknown(w)) w = "";
		this.Win.document.write(w);
	};
	this.WriteLine = function (wl)
	{
		if (Unknown(wl)) wl = "";
		this.Win.document.writeln(wl);
	};
}

//Module: Camera
//Created By Rabia Alhaffar In 5/January/2020
//A Library For 2D And 3D Camera Controlling(Canvas 2D,3D Space And WebGL)
var cx, cy, cz;
var SetCameraPosition = (x, y, z) =>
{
	if (Unknown(x)) x = 0;
	if (Unknown(y)) y = 0;
	if (Unknown(z)) z = 0;
	cx = x, cy = y, cz = z;
};
var InitializeCamera = (mode, scene) =>
{
	if (Unknown(mode)) mode = "canvas";
	if (mode == "canvas") setInterval(() =>
	{
		cakepen.translate(cx, cy);
	}, 0);
	if (mode == "space") setInterval(() =>
	{
		scene.camera.x = cx, scene.camera.y = cy, scene.camera.z = cz;
	}, 0);
	if (mode == "webgl") setInterval(() =>
	{
		cakepen.translate(cx, cy, cz);
	}, 0);
};
var MoveCamera = (x, y, z) =>
{
	cx += x, cy += y, cz += z;
};
var FreezeCamera = () =>
{
	cx = 0;
	cy = 0;
	cz = 0;
};

//Utilities Functions
var ApplyMod = (mod_code) => setInterval(mod_code, 0);

var Swap = (a, b) =>
{
	var disposed = a;
	a = b;
	b = disposed;
};

//Module: Buttons
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
	this.state = 'default'; // current button state
	var isClicking = false,
		isTouching = false,
		mousePosition = {
			x: 0,
			y: 0
		},
		touchPosition = {
			x: 0,
			y: 0
		},
		mousePressed = false,
		canvasTouched = false;
	this.Add = function ()
	{
		cakecanvas.addEventListener('mousemove', (event) =>
		{
			mousePosition.x = event.offsetX || event.layerX, mousePosition.y = event.offsetY || event.layerY;
		});
		cakecanvas.addEventListener("touchmove", (event) =>
		{
			touchPosition.x = event.pageX || event.clientX, touchPosition.y = event.pageY || event.clientY;
		});
		cakecanvas.addEventListener("touchstart", () =>
		{
			canvasTouched = true;
		});
		cakecanvas.addEventListener("touchend", () =>
		{
			canvasTouched = false;
		});
		/**
		 * Track the user's clicks.
		 * @param {Event} event
		 */
		cakecanvas.addEventListener('mousedown', () =>
		{
			mousePressed = true;
		});
		cakecanvas.addEventListener('mouseup', () =>
		{
			mousePressed = false;
		});
	};
	/**
	 * Check to see if the user is hovering over or clicking on the button.
	 */
	this.UpdatePosition = function ()
	{
		// check for hover
		if ((mousePosition.x >= this.x && mousePosition.x <= this.x + this.width &&
				mousePosition.y >= this.y && mousePosition.y <= this.y + this.height) ||
			(touchPosition.x >= this.x && touchPosition.x <= this.x + this.width &&
				touchPosition.y >= this.y && touchPosition.y <= this.y + this.height))
		{
			this.state = 'hover';
			// check for click
			if (mousePressed || canvasTouched)
			{
				this.state = 'active';
				if ((typeof clickCB === 'function') && (!isClicking || !isTouching))
				{
					clickCB();
					isClicking = true, isTouching = true;
				}
			}
			else isClicking = false, isTouching = false;
		}
		else this.state = 'default';
	};
	/**
	 * Draw the button.
	 */
	this.Draw = function ()
	{
		var colors = this.colors[this.state],
			halfH = this.height / 2;
		// button
		if (this.destroyed) cakepen.globalAlpha = 0;
		cakepen.fillStyle = colors.top;
		cakepen.fillRect(this.x, this.y, this.width, halfH);
		cakepen.fillStyle = colors.bottom;
		cakepen.fillRect(this.x, this.y + halfH, this.width, halfH);
		// text
		var size = cakepen.measureText(this.text),
			x = this.x + (this.width - size.width) / 2,
			y = this.y + (this.height - 15) / 2 + 12;
		cakepen.fillStyle = this.textColor;
		cakepen.fillText(this.text, x, y);
		cakepen.globalAlpha = this.alpha;
	};
	this.Update = function ()
	{
		this.UpdatePosition();
		this.Draw();
	};
	this.Add();
	this.Destroy = function ()
	{
		this.destroyed = true;
	};
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
	this.state = 'default'; // current button state
	var isClicking = false,
		isTouching = false,
		mousePosition = {
			x: 0,
			y: 0
		},
		touchPosition = {
			x: 0,
			y: 0
		},
		mousePressed = false,
		canvasTouched = false;
	this.Add = function ()
	{
		cakecanvas.addEventListener('mousemove', (event) =>
		{
			mousePosition.x = event.offsetX || event.layerX, mousePosition.y = event.offsetY || event.layerY;
		});
		cakecanvas.addEventListener("touchmove", (event) =>
		{
			touchPosition.x = event.pageX || event.clientX, touchPosition.y = event.pageY || event.clientY;
		});
		cakecanvas.addEventListener("touchstart", (event) =>
		{
			canvasTouched = true;
		});
		cakecanvas.addEventListener("touchend", (event) =>
		{
			canvasTouched = false;
		});
		/**
		 * Track the user's clicks.
		 * @param {Event} event
		 */
		cakecanvas.addEventListener('mousedown', (event) =>
		{
			mousePressed = true;
		});
		cakecanvas.addEventListener('mouseup', (event) =>
		{
			mousePressed = false;
		});
	};
	/**
	 * Check to see if the user is hovering over or clicking on the button.
	 */
	this.UpdatePosition = function ()
	{
		// check for hover
		if ((mousePosition.x >= this.x && mousePosition.x <= this.x + this.radius &&
				mousePosition.y >= this.y && mousePosition.y <= this.y + this.radius) ||
			(touchPosition.x >= this.x && touchPosition.x <= this.x + this.radius &&
				touchPosition.y >= this.y && touchPosition.y <= this.y + this.radius))
		{
			this.state = 'hover';
			// check for click
			if (mousePressed || canvasTouched)
			{
				this.state = 'active';
				if ((typeof clickCB === 'function') && (!isClicking || !isTouching))
				{
					clickCB();
					isClicking = true, isTouching = true;
				}
			}
			else isClicking = false, isTouching = false;
		}
		else this.state = 'default';
	};
	/**
	 * Draw the button.
	 */
	this.Draw = function ()
	{
		var colors = this.colors[this.state],
			halfR = this.radius / 2;
		// button
		if (this.destroyed) cakepen.globalAlpha = 0;
		cakepen.fillStyle = colors.top;
		cakepen.arc(this.x, this.y, this.radius, 90, 180 * Math.PI);
		cakepen.fillStyle = colors.bottom;
		cakepen.arc(this.x, this.y + halfR, this.radius, 90, 180 * Math.PI);
		// text
		var size = cakepen.measureText(this.text),
			x = this.x + (this.radius - size.width) / 2,
			y = this.y + (this.radius - 15) / 2 + 12;
		cakepen.fillStyle = this.textColor;
		cakepen.fillText(this.text, x, y);
		cakepen.globalAlpha = this.alpha;
	};
	this.Update = function ()
	{
		this.UpdatePosition();
		this.Draw();
	};
	this.Destroy = function ()
	{
		this.destroyed = true;
	};
	this.Add();
}

function RoundedButton(x, y, width, height, radius, text, colors, clickCB)
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
	this.state = 'default'; // current button state
	this.radius = radius;
	var isClicking = false,
		isTouching = false,
		mousePosition = {
			x: 0,
			y: 0
		},
		touchPosition = {
			x: 0,
			y: 0
		},
		mousePressed = false,
		canvasTouched = false;
	this.Add = function ()
	{
		cakecanvas.addEventListener('mousemove', (event) =>
		{
			mousePosition.x = event.offsetX || event.layerX, mousePosition.y = event.offsetY || event.layerY;
		});
		cakecanvas.addEventListener("touchmove", (event) =>
		{
			touchPosition.x = event.pageX || event.clientX, touchPosition.y = event.pageY || event.clientY;
		});
		cakecanvas.addEventListener("touchstart", () =>
		{
			canvasTouched = true;
		});
		cakecanvas.addEventListener("touchend", () =>
		{
			canvasTouched = false;
		});
		/**
		 * Track the user's clicks.
		 * @param {Event} event
		 */
		cakecanvas.addEventListener('mousedown', () =>
		{
			mousePressed = true;
		});
		cakecanvas.addEventListener('mouseup', () =>
		{
			mousePressed = false;
		});
	};
	this.UpdatePosition = function ()
	{
		/**
		 * Check to see if the user is hovering over or clicking on the button.
		 */
		// check for hover
		if ((mousePosition.x >= this.x && mousePosition.x <= this.x + this.width &&
				mousePosition.y >= this.y && mousePosition.y <= this.y + this.height) ||
			(touchPosition.x >= this.x && touchPosition.x <= this.x + this.width &&
				touchPosition.y >= this.y && touchPosition.y <= this.y + this.height))
		{
			this.state = 'hover';
			// check for click
			if (mousePressed || canvasTouched)
			{
				this.state = 'active';
				if ((typeof clickCB === 'function') && (!isClicking || !isTouching))
				{
					clickCB();
					isClicking = true, isTouching = true;
				}
			}
			else isClicking = false, isTouching = false;
		}
		else this.state = 'default';
	};
	this.Draw = function ()
	{
		var colors = this.colors[this.state],
			halfR = this.radius / 2;
		// button
		if (this.destroyed) cakepen.globalAlpha = 0;
		cakepen.beginPath();
		//Part 1 Of Button
		cakepen.fillStyle = colors.top;
		cakepen.moveTo(this.x + this.radius, this.y);
		cakepen.lineTo(this.x + this.width - this.radius, this.y);
		cakepen.quadraticCurveTo(this.x + this.width, this.y, this.x + this.width, this.y + this.radius);
		cakepen.lineTo(this.x + this.width, this.y + this.height - this.radius);
		cakepen.quadraticCurveTo(this.x + this.width, this.y + this.height, this.x + this.width - this.radius, this.y + this.height);
		//Part 2 Of Button
		cakepen.fillStyle = colors.bottom;
		cakepen.lineTo(this.x + this.radius, this.y + this.height);
		cakepen.quadraticCurveTo(this.x, this.y + this.height, this.x, this.y + this.height - this.radius);
		cakepen.lineTo(this.x, this.y + this.radius);
		cakepen.quadraticCurveTo(this.x, this.y, this.x + this.radius, this.y);
		cakepen.closePath();
		// text
		var size = cakepen.measureText(this.text),
			x = this.x + (this.radius - size.width) / 2,
			y = this.y + (this.radius - 15) / 2 + 12;
		cakepen.fillStyle = this.textColor;
		cakepen.fillText(this.text, x, y);
		cakepen.globalAlpha = this.alpha;
	};
	this.Update = function ()
	{
		this.UpdatePosition();
		this.Draw();
	};
	this.Destroy = function ()
	{
		this.destroyed = true;
	};
	this.Add();
}



function ImagedButton(x, y, width, height, text, img_src, clickCB)
{
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.text = text;
	this.destroyed = false;
	this.alpha = 1;
	this.width = width;
	this.height = height;
	this.textColor = "black";
	this.img = new Image();
	this.img.src = img_src;
	this.state = 'default'; // current button state
	var isClicking = false,
		isTouching = false,
		mousePosition = {
			x: 0,
			y: 0
		},
		touchPosition = {
			x: 0,
			y: 0
		},
		mousePressed = false,
		canvasTouched = false;
	this.Add = function ()
	{
		cakecanvas.addEventListener('mousemove', (event) =>
		{
			mousePosition.x = event.offsetX || event.layerX, mousePosition.y = event.offsetY || event.layerY;
		});
		cakecanvas.addEventListener("touchmove", (event) =>
		{
			touchPosition.x = event.pageX || event.clientX, touchPosition.y = event.pageY || event.clientY;
		});
		cakecanvas.addEventListener("touchstart", () =>
		{
			canvasTouched = true;
		});
		cakecanvas.addEventListener("touchend", () =>
		{
			canvasTouched = false;
		});
		/**
		 * Track the user's clicks.
		 * @param {Event} event
		 */
		cakecanvas.addEventListener('mousedown', () =>
		{
			mousePressed = true;
		});
		cakecanvas.addEventListener('mouseup', () =>
		{
			mousePressed = false;
		});
	};
	this.UpdatePosition = function ()
	{
		/**
		 * Check to see if the user is hovering over or clicking on the button.
		 */
		// check for hover
		if ((mousePosition.x >= this.x && mousePosition.x <= this.x + this.width &&
				mousePosition.y >= this.y && mousePosition.y <= this.y + this.height) ||
			(touchPosition.x >= this.x && touchPosition.x <= this.x + this.width &&
				touchPosition.y >= this.y && touchPosition.y <= this.y + this.height))
		{
			this.state = 'hover';
			// check for click
			if (mousePressed || canvasTouched)
			{
				this.state = 'active';
				if ((typeof clickCB === 'function') && (!isClicking || !isTouching))
				{
					clickCB();
					isClicking = true, isTouching = true;
				}
			}
			else isClicking = false, isTouching = false;
		}
		else this.state = 'default';
	};
	this.Draw = function ()
	{
		if (this.destroyed) cakepen.globalAlpha = 0;
		//image
		cakepen.drawImage(this.img, this.x, this.y, this.width, this.height);
		// text
		var size = cakepen.measureText(this.text),
			x = this.x + (this.radius - size.width) / 2,
			y = this.y + (this.radius - 15) / 2 + 12;
		cakepen.fillStyle = this.textColor;
		cakepen.fillText(this.text, x, y);
		cakepen.globalAlpha = this.alpha;
	};
	this.Update = function ()
	{
		this.UpdatePosition();
		this.Draw();
	};
	this.Destroy = function ()
	{
		this.destroyed = true;
	};
	this.Add();
}


//Module: Bars
//Created By Rabia Alhaffar In 1/February/2020
function Bar(x, y, width, height, color)
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
	if (Unknown(this.color)) this.color = "black";
	this.UpdatePosition = function ()
	{
		if (this.resizeMode == "width") this.width += this.resizeAmount;
		if (this.resizeMode == "height") this.height += this.resizeAmount;
	};
	this.Draw = function ()
	{
		if (Unknown(this.x)) this.x = 0;
		if (Unknown(this.y)) this.y = 0;
		if (Unknown(this.height)) this.height = 0;
		if (Unknown(this.width)) this.width = 0;
		cakepen.fillStyle = this.color;
		if (this.destroyed) cakepen.globalAlpha = 0;
		cakepen.fillRect(this.x, this.y, this.width, this.height);
		cakepen.globalAlpha = this.alpha;
	};
	this.Destroy = function ()
	{
		this.destroyed = true;
	};
	this.Update = function (resizing_way, amount)
	{
		this.resizeMode = resizing_way, this.resizeAmount += amount;
		this.UpdatePosition();
		this.Draw();
	};
}

//Module: Integration
//Created By Rabia Alhaffar In 13/December/2019
//An Library To Use Cake Game Framework Context Functions With Other HTML5 Game Framework Canvas Contexts
var cake;
var IntegrateWith = (engine) =>
{
if(engine == "tululoo") tu_canvas = cakecanvas,tu_context = cakepen;	
if(engine == "blacksmith") CANVAS = cakecanvas,CONTEXT = cakepen;	
if(engine == "blocksjs") cakecanvas = canvasElement,cakepen = layer.ctx;
if(engine == "booty") b5.Display.canvas = cakecanvas,b5.Display.context = cakepen,cake = b5;	
if(engine == "cartridge") canvas = cakecanvas,ctx = cakepen;	
if(engine == "easel") canvas = cakecanvas,Graphics._ctx = cakepen;	
if(engine == "pixi") PIXI.Graphics = cakepen,cake = PIXI;	
if(engine == "iio") iio = cake;
if(engine == "quark") cake = Quark,Quark._helpContext.canvas = cakecanvas,Quark._helpContext.context = cakepen; 
if(engine == "quintus") cake = Q,Q.ctx.canvas = cakecanvas,Q.ctx = cakepen;
if(engine == "simplegameengine") cakecanvas = _tempCanvas2D.canvas,cakepen = _tempCanvas2D;
if(engine == "oversimplified") cake = Oversimplified,Oversimplified.canvas = cakecanvas,Oversimplified.context = cakepen;
if(engine == "joy") cake = Joy,Joy.currentEngine.context.canvas = cakecanvas,Joy.currentEngine.context.ctx = cakepen;
if(engine == "gamvas") cake = gamvas,gamvas._canvas = cakecanvas,gamvas._context2D = cakepen;
if(engine == "nini") Graphics.canvas = cakecanvas,cakepen = Graphics.canvas.getContext("2d");	
if(engine == "squarepig") pig.canvas = cakecanvas,pig.context = cakepen,cake = pig;	
if(engine == "threejs") THREE = cake;	
if(engine == "hilo") cake = Hilo;
if(engine == "hilo3d") cake = Hilo3d;
if(engine == "stage") cake = Stage,ctx = cakepen,stage = cakecanvas;	
if(engine == "arcadejs") cake = ArcadeJS,ArcadeJS._firstGame.canvas = cakecanvas,ArcadeJS._firstGame.context = cakepen;
};

//Module: Steam
//Created By Rabia Alhaffar In 13/December/2019
//A Plugin For Integrating Cake With Valve Corporations's Steam Store!!!
var LaunchSteam = () => window.open("https://store.steampowered.com/");
var OpenSteamPage = (page) =>
{
	if (page == "Store") window.open("https://store.steampowered.com/");
	if (page == "Help") window.open("https://help.steampowered.com/");
	if (page == "Community") window.open("https://steamcommunity.com/");
	if (page == "News") window.open("https://store.steampowered.com/news/");
};
var DownloadSteamDirectly = () => window.open("https://steamcdn-a.akamaihd.net/client/installer/SteamSetup.exe");
//id_as_number Must Be Number,The Number Consists Of Over 6 Or More Numbers!!!
var OpenSteamAppPage = (id_as_number) => window.open("https://store.steampowered.com/app/" + id_as_number.toString());
var Steam_LogIn = () => window.open("https://store.steampowered.com/login/");
var Steam_LogOut = () => window.open("https://store.steampowered.com/logout/");

//Module: XBOX
var LaunchXBOX = () => window.open("https://www.xbox.com/");
var OpenXBOXPage = (page) =>
{
	if (page == "Main") window.open("https://www.xbox.com");
	if (page == "Games") window.open("https://www.xbox.com/games");
	if (page == "Feedback") window.open("https://aka.ms/xboxideas");
	if (page == "Support") window.open("https://support.xbox.com/");
	if (page == "News") window.open("https://news.xbox.com/");
	if (page == "Developers") window.open("https://www.xbox.com/developers");
	if (page == "XBOX Game Pass") window.open("https://www.xbox.com/xbox-game-pass");
	if (page == "Profile") window.open("https://account.xbox.com/Profile");
	if (page == "Settings") window.open("https://account.xbox.com/Settings/");
	if (page == "Trending") window.open("https://account.xbox.com/trendingtopics");
	if (page == "Home") window.open("https://account.xbox.com/social");
	if (page == "Friends") window.open("https://account.xbox.com/Friends");
	if (page == "Messages") window.open("https://account.xbox.com/SkypeMessages");
	if (page == "My Games") window.open("https://account.xbox.com/MyGames");
	if (page == "Clubs") window.open("https://account.xbox.com/clubs");
	if (page == "Community") window.open("https://www.xbox.com/community");
	if (page == "XBOX Live") window.open("https://www.xbox.com/live");
}
var OpenXBOXGamePage = (game_name) => window.open("https://www.xbox.com/games/" + game_name.toString());
var SignOutFromXBOX = () => window.open("https://account.xbox.com/Account/Signout");

//Module: WEBGL_NEXT
//Created By Rabia Alhaffar In 11/February/2020
//A WebGL Pure,No Libraries Or Extensions
//WebGL Made From Scratch,But Still In Development Cause Contains Huge Content
var cakecanvas,
    cakepen,
    cake_webgl_debugger,
    program_location,
    TRIANGLES,
    LINES,
    FAN,
    LINELOOP,
    POINTS,
    LINESTRIP,
    VERTEX,
    FRAGMENT,
    TRISTRIP,
    program,
    buffer,
    pos_buffer,
    color_buffer,
    shader_variable,
    shader,
    GPU,
    GLSL_VER,
    VENDOR,
    GL_VER,
    UNMASKED;
    var InitializeWebGL = (c) =>
    {
    if(Unknown(c)) c = 0;
    cakecanvas = document.getElementsByTagName("canvas")[c];
    cakepen = cakecanvas.getContext('webgl2');
    if(cakepen) console.info("CAKE GAME ENGINE: INITIALIZING WebGL2RenderingContext...");
    if(!cakepen) console.error("WEBGL NOT SUPPORTED!!!");
    EnableDebugger();
    EnableScissor(true);
    TRIANGLES = cakepen.TRIANGLES;
    LINES = cakepen.LINES;
    POINTS = cakepen.POINTS;
    VERTEX = cakepen.VERTEX_SHADER;
    FRAGMENT = cakepen.FRAGMENT_SHADER;
    TRIFAN = cakepen.TRIANGLE_FAN;
    TRISTRIP = cakepen.TRIANGLE_STRIP;
    LINELOOP = cakepen.LINE_LOOP;
    LINESTRIP = cakepen.LINE_STRIP;
    GPU = cakepen.getParameter(cake_webgl_debugger.UNMASKED_VENDOR_WEBGL);
    GL_VER = cakepen.getExtension(cakepen.VERSION);
    GLSL_VER = cakepen.getParameter(cakepen.SHADING_LANGUAGE_VERSION);
    UNMASKED = cakepen.getParameter(cake_webgl_debugger.UNMASKED_RENDERER_WEBGL);
    VENDOR = cakepen.getParameter(cakepen.VENDOR);
    };
var GetWebGLFullInfo = () => console.info(`GPU: ${GPU}\nWEBGL VERSION: ${GL_VER}\nGLSL VERSION: ${GLSL_VER}\nVENDOR: ${VENDOR}\nUNMASKED RENDERER: ${UNMASKED}\n`);
var GetWebGLErrors = () => cakepen.getError();
var ClearCanvasFully = () =>
{
    cakepen.clearColor(0,0,0,0);
    cakepen.clearDepth(1.0);
    cakepen.clear(cakepen.COLOR_BUFFER_BIT | cakepen.DEPTH_BUFFER_BIT);
};
var WebGLClearCanvas = (r,g,b,a) =>
{
    if(Unknown(r)) r = 0;
    if(Unknown(g)) g = 0;
    if(Unknown(b)) b = 0;
    if(Unknown(a)) a = 0;
    cakepen.clearColor(r,g,b,a);
    cakepen.clear(cakepen.COLOR_BUFFER_BIT);
};
var WebGLExtension = (ext) => cakepen.getExtension(ext);
var WebGLParameter = (param) => cakepen.getParameter(param);
var LoadGLID = () => cakepen.loadIdentity();
var ShaderParameter = (shader,param) => cakepen.getShaderParameter(shader,param);
var ProgramParameter = (program,param) => cakepen.getProgramParameter(program,param);
var CreateShader = (shader,type,src) =>
{
    var shader = cakepen.createShader(type);
    cakepen.shaderSource(shader,src);
    cakepen.compileShader(shader);
    console.info(cakepen.getShaderParameter(shader,cakepen.COMPILE_STATUS) ? "CAKE GAME ENGINE: SHADER COMPILED SUCCESSFULLY!!!" : "CAKE GAME ENGINE: SHADER COMPILATION FAILED!!!");
    console.info(cakepen.getShaderInfoLog(shader));
    console.info(cakepen.getShaderSource(shader));
    cakepen.deleteShader(shader);
};
var CreateProgram = (program,vertex,frag) => 
{
    var program = cakepen.createProgram();
    cakepen.attachShader(program,vertex);
    cakepen.attachShader(program,frag);
    cakepen.linkProgram(program);
    cakepen.validateProgram(program);
    console.info(cakepen.getAttachedShaders(program));
    console.info(cakepen.getShaderSource(vertex));
    console.info(cakepen.getShaderSource(frag));
    console.info(cakepen.getShaderInfoLog(vertex));
    console.info(cakepen.getShaderInfoLog(frag));
    console.info(cakepen.getProgramParameter(cakepen.LINK_STATUS) ? "CAKE GAME ENGINE: PROGRAM CREATED SUCCESSFULLY!!!" : "CAKE GAME ENGINE: PROGRAM CREATION FAILED!!!");
    console.info(cakepen.getProgramInfoLog(program));
    cakepen.deleteProgram(program);
};
var CreateBuffer = (buffer,arr) =>
{
    var buffer = cakepen.createBuffer();
    cakepen.bindBuffer(cakepen.ARRAY_BUFFER, buffer);
    cakepen.bufferData(cakepen.ARRAY_BUFFER, new Float32Array(arr), cakepen.DYNAMIC_DRAW);
};
var SetGeometry = (program,pos_attrib,pos_buffer,pos_arr) =>
{
    cakepen.getAttribLocation(program,pos_attrib);
    var pos_buffer = cakepen.createBuffer();
    cakepen.bindBuffer(cakepen.ARRAY_BUFFER,pos_buffer);
    cakepen.bufferData(cakepen.ARRAY_BUFFER,new Float32Array(pos_arr),cakepen.DYNAMIC_DRAW);
};
var SetColor = (program,color_attribute,color_buffer,color_arr) =>
{
  var color_buffer = cakepen.createBuffer();
  cakepen.bindBuffer(cakepen.ARRAY_BUFFER, color_buffer);
  cakepen.bufferData(cakepen.ARRAY_BUFFER,color_arr,cakepen.DYNAMIC_DRAW);
  cakepen.enableVertexAttribArray(cakepen.getAttribLocation(program,color_attribute));
  cakepen.bindBuffer(cakepen.ARRAY_BUFFER, color_buffer);
  cakepen.vertexAttribPointer(cakepen.getAttribLocation(program,color_attribute), 4, cakepen.FLOAT, false, 0);
};
var EnableDebugger = () => cake_webgl_debugger = (cakepen.getExtension("WEBGL_debug_renderer_info") || cakepen.getExtension("WEBGL_debug_shaders"));
var SetLineSize = (size) => cakepen.lineWidth(size);
var WebGLFeatureEnable = (feature) => cakepen.isEnabled(feature);
var EnableWebGLFeature = (feature) => cakepen.enable(feature);
var DisableWebGLFeature = (feature) => cakepen.disable(feature);
var RemoveShader = (shader) => cakepen.deleteShader(shader);
var RemoveProgram = (program) => cakepen.deleteProgram(program);
var RemoveBuffer = (buffer) => cakepen.deleteBuffer(buffer);
var RemoveFrameBuffer = (buffer) => cakepen.deleteFrameBuffer(buffer);
var RemoveRenderBuffer = (buffer) => cakepen.deleteRenderBuffer(buffer);
var CreateFrameBuffer = (buffer) => buffer = cakepen.createFrameBuffer();
var CreateRenderBuffer = (buffer) => buffer = cakepen.createRenderBuffer();
var ShaderSourceCode = (shader) => cakepen.getShaderSource(shader);
var WebGLTranslate = (x,y,z) => cakepen.translate(x,y,z);
var WebGLRotate = (angle,x,y,z) => cakepen.rotate(angle,x,y,z);
var WebGLScale = (x,y,z) => cakepen.scale(x,y,z);
var WebGLViewport = (x,y,width,height) => cakepen.viewport(x,y,width,height);
var BEGIN = (mode) => cakepen.begin(mode);
var END = () =>
{
    cakepen.flush();
    cakepen.end();
};
var UseProgram = (program) => cakepen.useProgram(program);
var BindBuffer = (buffer) => cakepen.bindBuffer(cakepen.ARRAY_BUFFER,buffer);
var Transform = (mode,a,b,c,d) =>
{
	if(mode == "translate") cakepen.translate(a,b,c);
	if(mode == "rotate") cakepen.rotate(a,b,c,d);
	if(mode == "scale") cakepen.scale(a,b,c);
};
var EnableScissor = (m) =>
{
    if(m) cakepen.enable(cakepen.SCISSOR_TEST);
    if(!m) cakepen.disable(cakepen.SCISSOR_TEST);
};
var CompatibleCanvas = () =>
{
    if (cakecanvas.width  !== cakecanvas.clientWidth || cakecanvas.height !== cakecanvas.clientHeight) 
    {
        cakecanvas.width  = cakecanvas.clientWidth;
        cakecanvas.height = cakecanvas.clientHeight;
    }
    cakepen.viewport(0,0,cakecanvas.width,cakecanvas.height);
};
var PROGRAM = (program) => cakepen.isProgram(program);
var SHADER = (shader) => cakepen.isShader(shader);
var BUFFER = (buffer) => cakepen.isBuffer(buffer);
var SetClearDepth = (d) => cakepen.clearDepth(d);
var DrawContent = (mode,pos_arr) => cakepen.drawArrays(mode,0,pos_arr.length / 2);
var FINISH = () => cakepen.finish();
var Avoid = (x,y,w,h) => cakepen.scissor(x,y,w,h);
var DisableAttribute = (program,att) => cakepen.disableVertexAttribArray(cakepen.getAttribLocation(program,att));
var EnableAttribute = (program,att) => cakepen.enableVertexAttribArray(cakepen.getAttribLocation(program, att));
var Multisample = (enabled,value,invert) =>
{
    if(enabled) 
    {
        cakepen.enable(cakepen.SAMPLE_COVERAGE);
        cakepen.sampleCoverage(value,invert);
    }
    if(!enabled) cakepen.disable(cakepen.SAMPLE_COVERAGE);
};
var BindBufferContent = (content,buffer,size,start) =>
{
    cakepen.enableVertexAttribArray(content);
    cakepen.bindBuffer(cakepen.ARRAY_BUFFER, buffer);
    cakepen.vertexAttribPointer(content, size, cakepen.FLOAT, false, 0, start);
};
var WebGLScissor = (x,y,width,height) => cakepen.scissor(x,y,width,height);
var WebGLSupportedExtensions = () => cakepen.getSupportedExtensions();
var CreateSolidColorShader = (r,g,b,a) =>
{
    var solid_color_shader = CreateShader(solid_color_shader,FRAGMENT,`
    precision mediump float;
    void main() {
        gl_fragColor = vec4(${r},${g},${b},${a});
    }`);
};

var Create2DPositionBuffer = (position2d_buffer,pos2d_arr) =>
{
    var position2d_buffer = cakepen.createBuffer();
    cakepen.bindBuffer(cakepen.ARRAY_BUFFER, position2d_buffer);
    cakepen.bufferData(cakepen.ARRAY_BUFFER,new Float32Array(pos2d_arr),cakepen.DYNAMIC_DRAW);
};

var CreateColorBuffer = (color_buffer,colors_arr) =>
{
      var color_buffer = cakepen.createBuffer();
      cakepen.bindBuffer(cakepen.ARRAY_BUFFER,color_buffer);
      cakepen.bufferData(cakepen.ARRAY_BUFFER,new Float32Array(colors_arr),cakepen.DYNAMIC_DRAW);
};

//NOTES: Resolution Must Be Uniform vec2 If Possible
var SetResolution = (program,res_loc,width,height) => cakepen.uniform2f(cakepen.getUniformLocation(program,res_loc),width,height);

var ProgramContentLocation = (type,program,content) =>
{
    if(type == "uniform") cakepen.getUniformLocation(program,content);
    if(type == "attribute") cakepen.getAttribLocation(program,content);
};

var EnableAttributeFromLocation = (location,pos_each,program,content) =>
{
    var location = cakepen.getAttribLocation(program,content);
    cakepen.enableVertexAttribArray(location);
    cakepen.vertexAttribPointer(location,pos_each,cakepen.FLOAT,false,0,0);
};

var DisableAttributeFromLocation = (location,program,content) =>
{
    var location = cakepen.getAttribLocation(program,content);
    cakepen.disableVertexAttribArray(location);
};

//Module: Isometric Graphics
//Created By Rabia Alhaffar In 3/February/2020
var Shade = (color, percent) =>
{
	var R = (parseInt(color.substr(1), 16) >> 16) + Math.round(2.55 * percent),
		G = (parseInt(color.substr(1), 16) >> 8 & 0x00FF) + Math.round(2.55 * percent),
		B = (parseInt(color.substr(1), 16) & 0x0000FF) + Math.round(2.55 * percent);
	return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 + (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
};

var DrawIsometricCube = (x, y, width_x, width_y, height, color) =>
{
	cakepen.beginPath();
	cakepen.moveTo(x, y);
	cakepen.lineTo(x - width_x, y - width_x * 0.5);
	cakepen.lineTo(x - width_x, y - height - width_x * 0.5);
	cakepen.lineTo(x, y - height * 1);
	cakepen.closePath();
	cakepen.fillStyle = Shade(color, -10);
	cakepen.strokeStyle = color;
	cakepen.stroke();
	cakepen.fill();
	cakepen.beginPath();
	cakepen.moveTo(x, y);
	cakepen.lineTo(x + width_y, y - width_y * 0.5);
	cakepen.lineTo(x + width_y, y - height - width_y * 0.5);
	cakepen.lineTo(x, y - height * 1);
	cakepen.closePath();
	cakepen.fillStyle = Shade(color, 10);
	cakepen.strokeStyle = Shade(color, 50);
	cakepen.stroke();
	cakepen.fill();
	cakepen.beginPath();
	cakepen.moveTo(x, y - height);
	cakepen.lineTo(x - width_x, y - height - width_x * 0.5);
	cakepen.lineTo(x - width_x + width_y, y - height - (width_x * 0.5 + width_y * 0.5));
	cakepen.lineTo(x + width_y, y - height - width_y * 0.5);
	cakepen.closePath();
	cakepen.fillStyle = Shade(color, 20);
	cakepen.strokeStyle = Shade(color, 60);
	cakepen.stroke();
	cakepen.fill();
};

//Module: Simulation(Emulation)
//Created By Rabia Alhaffar In 25/January/2020
//To Simulate Mobile Touch On Desktop And Desktop Mouse And It's Pointer On Mobile!!!
var SimulateMobile = () =>
{
	document.onclick = document.onclick || document.onmousedown || document.ontouchstart;
	document.ontouchmove = document.ontouchmove || document.onpointermove || document.onmousemove;
	document.ontouchcancel = document.ontouchcancel || document.ontouchend || document.onmouseleave || document.onpointerleave || document.onpointerout;
	document.ontouchstart = document.ontouchstart || document.onmouseenter || document.onpointerenter || document.onmouseover || document.onpointerover;
};
var SimulateDesktop = () =>
{
	document.onclick = document.onclick || document.onmousedown || document.ontouchstart;
	document.onmousemove = document.onmousemove || document.ontouchmove || document.onpointermove;
	document.onmouseleave = document.onmouseleave || document.ontouchend || document.ontouchcancel || document.onpointerleave || document.onpointerout;
	document.onmouseenter = document.onmouseenter || document.ontouchstart || document.onpointerenter || document.onmouseover || document.onpointerover;
};

//Watermark!!!
var _0x4071=['TWFkZSBXaXRoIENha2UgR2FtZSBFbmdpbmUhISEKaHR0cHM6Ly9naXRodWIuY29tL0Nha2UtRW5naW5lL0Nha2UKaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL0Nha2UtRW5naW5lL0Nha2UvYnVpbGQvY2FrZS5qcw==','aW5mbw=='];(function(_0x2ffcdf,_0x4071f9){var _0x2217c0=function(_0x5da423){while(--_0x5da423){_0x2ffcdf['push'](_0x2ffcdf['shift']());}};_0x2217c0(++_0x4071f9);}(_0x4071,0x12d));var _0x2217=function(_0x2ffcdf,_0x4071f9){_0x2ffcdf=_0x2ffcdf-0x0;var _0x2217c0=_0x4071[_0x2ffcdf];if(_0x2217['ZbYTFh']===undefined){(function(){var _0x4234fe;try{var _0x20d68f=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x4234fe=_0x20d68f();}catch(_0x161007){_0x4234fe=window;}var _0x475299='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x4234fe['atob']||(_0x4234fe['atob']=function(_0x5dfb23){var _0x35385f=String(_0x5dfb23)['replace'](/=+$/,'');var _0x5cd396='';for(var _0x530d4d=0x0,_0x3a45c9,_0xd42657,_0xa013dc=0x0;_0xd42657=_0x35385f['charAt'](_0xa013dc++);~_0xd42657&&(_0x3a45c9=_0x530d4d%0x4?_0x3a45c9*0x40+_0xd42657:_0xd42657,_0x530d4d++%0x4)?_0x5cd396+=String['fromCharCode'](0xff&_0x3a45c9>>(-0x2*_0x530d4d&0x6)):0x0){_0xd42657=_0x475299['indexOf'](_0xd42657);}return _0x5cd396;});}());_0x2217['fddcuW']=function(_0x73aa9a){var _0x72e26b=atob(_0x73aa9a);var _0x5230fc=[];for(var _0x255543=0x0,_0x582728=_0x72e26b['length'];_0x255543<_0x582728;_0x255543++){_0x5230fc+='%'+('00'+_0x72e26b['charCodeAt'](_0x255543)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x5230fc);};_0x2217['adKNex']={};_0x2217['ZbYTFh']=!![];}var _0x5da423=_0x2217['adKNex'][_0x2ffcdf];if(_0x5da423===undefined){_0x2217c0=_0x2217['fddcuW'](_0x2217c0);_0x2217['adKNex'][_0x2ffcdf]=_0x2217c0;}else{_0x2217c0=_0x5da423;}return _0x2217c0;};console[_0x2217('0x0')](_0x2217('0x1'));

//Module: CanvasRenderingContext2D
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

//Module: requestAnimationFrame
//Created By Rabia Alhaffar In 8/February/2020
//Not By Me,All Rights To Paul Irish
//I Just Improved His Code
//https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
window.update = () =>
{
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.msRequestAnimationFrame     ||
            window.oRequestAnimationFrame      ||
            function( callback,fps ) 
            {
                window.setTimeout(callback, 1000 / fps);
            };
};


//Module: Checkbox
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

//Module: Events
var CanvasTouched = false,
    CanvasClicked = false,
    CanvasSwiped = false,
    CanvasDragged = false
    OverCanvas = false;
var Listen = () =>
{
    cakecanvas.addEventListener("click",() => { CanvasClicked = true; });
    cakecanvas.addEventListener("mouseover",() => { OverCanvas = true; });
    cakecanvas.addEventListener("touchstart",() => { CanvasTouched = true; });
    cakecanvas.addEventListener("touchmove",() => { CanvasSwiped = true; });
    cakecanvas.addEventListener("drag",() => { CanvasDragged = true; });
};

//Module: Controls
//Created By Rabia Alhaffar In 15/February/2020
//Events Binding(Instead Of Using Mousetrap.js)
var KeyUp = () => {};
var KeyDown = () => {};
var KeyHit = () => {};
var Tap = () => {};
var Swipe = () => {};
var Click = () => {};
var MouseButtonDown = () => {};
var MouseButtonUp = () => {};
var Hover = () => {};
var GamepadID = (gamepad) => navigator.getGamepads()[gamepad].id; 
var GamepadConnected = (gamepad) => navigator.getGamepads()[gamepad].connected;
var GamepadButtonPressed = (gamepad,button) => navigator.getGamepads()[gamepad].buttons[button].pressed;
var GamepadButtonTouched = (gamepad,button) => navigator.getGamepads()[gamepad].buttons[button].touched;
var GamepadAxeValue = (gamepad,axe) => navigator.getGamepads()[gamepad].axes[axe];
document.onkeyup = KeyUp;
document.onkeydown = KeyDown;
document.onkeypress = KeyHit;
document.ontouchstart = Tap;
document.ontouchmove = Swipe;
document.onclick = Click;
document.onmousedown = MouseButtonDown;
document.onmouseup = MouseButtonUp;
document.onmouseover = Hover;

//Module: Game Events
//Created By Rabia Alhaffar In 22/February/2020
//Events Based System For Cake,Similar To Unity LOL
var OnAwake = (f) =>
{
    window.onload = () => setTimeout(f,0); 
};
var OnStart = (f) => 
{
    window.onload = () => setTimeout(f,1000);
};
var OnUpdate = (f) =>
{
    window.onload = () => setInterval(f,1);
};
var OnClose = (f) =>
{
    window.onclose = () => setTimeout(f,0);
};
var OnLevelStart = (l,f) =>
{
    if(l.started || l.resumed) setTimeout(f,0);
};
var OnLevelPause = (l,f) =>
{
    if(l.paused) setTimeout(f,0);
};
var OnCollision = (obj1,obj2,f) =>
{
    if(CheckCollisionRect(obj1,obj2)) setTimeout(f,1);
    if(CheckCollisionCircle(obj1,obj2)) setTimeout(f,1);
    if(CheckCollisionCircleRect(obj1,obj2)) setTimeout(f,1);
};
var OnDestroy = (obj,f) =>
{
    if(obj.destroyed) setTimeout(f,0);
};
var OnRotate = (obj,f) =>
{
    if(obj.rotated) setTimeout(f,0);
};

//Module: Handlers
//Created By Rabia Alhaffar In 10/March/2020
var AddKeyDownHandler = (f) => window.addEventListener("keydown",f);
var AddKeyUpHandler = (f) => window.addEventListener("keyup",f);
var AddKeyHitHandler = (f) => window.addEventListener("keypress",f);
var AddMouseDownHandler = (f) => window.addEventListener("mousedown",f);
var AddMouseMoveHandler = (f) => window.addEventListener("mousemove",f);
var AddClickHandler = (f) => window.addEventListener("click",f);
var AddTapHandler = (f) => window.addEventListener("touchstart",f);
var AddSwipeHandler = (f) => window.addEventListener("touchmove",f);

//Module: Y8 SDK
//Created By Rabia Alhaffar In 20/April/2019
//Rewritten By Rabia Alhaffar In 15/March/2020
var Y8_CloseSDKMenus = () => ID.closeMenu();
var Y8_ShowProfile = () => ID.OpenProfile();
var Y8_SDKMenusVisible = () => ID.isVisible();
var Y8_OpenAD = (after_ad_finished) => 
{
	ID.gameBreak(() => {
		window.setTimeout(after_ad_finished,0);
	});
};
var Y8_Register = () => ID.register();
var Y8_Login = () => ID.login();
var Y8_ShowAchievements = () => ID.GameAPI.Achievements.list({ embedded: false });
var Y8_UnlockAchievement = (title,key) =>
{
	ID.GameAPI.Achievements.save({
		achievement: title,
		achievementKey: key,
		overwrite: false,
		allowduplicates: false
	});
};
var Y8_ShowLeaderboards = (table_name) => 
{
	ID.GameAPI.Leaderboards.list({
		table: table_name,
		mode: "alltime",
		highest: true,
		useMilli: false,
		embedded: false
	});
};
var Y8_SaveScore = (score,player_name,table_name) =>
{
	ID.GameAPI.Leaderboards.save({
		table: table_name,
		points: score,
		allowduplicates: false,
		highest: true,
		playername: player_name
	});
};
var Y8_Share = (name,description,caption,picture,link) => 
{
	ID.ui({
		method: "feed",
		link: link,
		description: description,
		name: name,
		caption: caption,
		picture: picture
	  });
};
var Y8_DomainBlacklisted = () => ID.Protection.isBlacklisted();
var Y8_DomainSponsored = () => ID.Protection.isSponsor();
var Y8_SaveData = (data,datakey) =>
{
	ID.api('user_data/submit','POST', 
	{
		key: datakey,
		value: JSON.stringify(data)
	});
};
var Y8_RetrieveData = (datakey) => ID.api('user_data/retrieve','POST',{ key: datakey });
var Y8_RemoveData = (datakey) => ID.api('user_data/remove','POST',{ key: datakey });
var Y8_Initialize = (app_id) => ID.init({ appId: app_id,status: true });
var Y8_GetPlayerLoginStatus = () => ID.getLoginStatus();
var Y8_RequestFriend = (friend_id,uri) =>
{
	ID.ui({
		method: "friends",
		redirect_uri: uri,
		id: friend_id
	});
};
var Y8_SubmitImage = (base64_imagestring) => ID.submit_image(base64_imagestring);
var Y8_GetRoomsList = (lobby_or_game,room_id) => ID.Multiplayer.roomList(lobby_or_game, room_id,{},"00000000000000");
var Y8_CreateRoom = (lobby_or_game,room_id,is_open,is_visible,max_players) => 
{
	ID.Multiplayer.roomCreate(lobby_or_game,room_id,{}," ",{
		isOpen: is_open,
		isVisible: is_visible,
		maxPlayers: max_players
	});
}
var Y8_JoinRoom = (room_id) => ID.Multiplayer.roomJoin(room_id);
var Y8_LeaveRoom = () => ID.Multiplayer.roomLeave(" ");
var Y8_MessagePlayers = (msg) => ID.Multiplayer.broadcastAll(msg);
var Y8_MessagePlayer = (player_id,msg) => ID.Multiplayer.sendTo(player_id,msg);
var Y8_SetDebuggerLevel = (level) => ID.multiplayer.debuglevel = level;
var Y8_AutoJoinGame = () => ID.Matchmaking.autoJoinGame();

//Module: Facebook Instant Games
//Created By Rabia Alhaffar In 20/April/2019
//Rewritten By Rabia Alhaffar In 15/March/2020
var FB_Initialize = () => FBInstant.initializeAsync();
var FB_PlayerID = () => FBInstant.player.getID();
var FB_PlayerName = () => FBInstant.player.getName();
var FB_PlayerPhoto = () => FBInstant.player.getPhoto();	
var FB_ContextID = () => FBInstant.context.getID();
var FB_ContextType = () => FBInstant.context.getType();
var FB_OS = () => FBInstant.getPlatform();
var FB_SDKVersion = () => FBInstant.getSDKVersion();
var FB_Localization = () => FBInstant.getLocale();
var FB_SetProgress = (x) => FBInstant.setLoadingProgress(x);
var FB_ExitGame = () => FBInstant.quit();
var FB_APIS = () => FBInstant.getSupportedAPIs();
var FB_LeaderboardName = () => FBInstant.leaderboard.getName();
var FB_PostScore = (x) => FBInstant.postSessionScore(x);

//Module: Vertices
//Created By Rabia Alhaffar In 12/February/2020
//A Vertices For Some Shapes,Made From Scratch
var x1 = 0.0,x2 = 0.0,y1 = 0.0,y2 = 0.0,x3 = 0.0,y3 = 0.0,x4 = 0.0,y4 = 0.0,w = 0.0,h = 0.0;
var SHAPES =
{
    VERLINE: vertices_of_line,
    VERRECTANGLE: vertices_of_rectangle,
    VERTRIANGLE: vertices_of_triangle
};
var vertices_of_line = 
[
    0.0,0.0,
    0.0,0.0
];
var vertices_of_rectangle =
[
    0.0,0.0,
    0.0,0.0,
    0.0,0.0,
    0.0,0.0,
    0.0,0.0
];
var vertices_of_triangle =
[
    0.0,0.0,
    0.0,0.0,
    0.0,0.0,
    0.0,0.0
];
var SetLine = (pos1,pos2,size) => 
{
    cakepen.lineWidth(size);
    vertices_of_line[0] = pos1[0];
    vertices_of_line[1] = pos1[1];
    vertices_of_line[2] = pos2[0];
    vertices_of_line[3] = pos2[1];
};
var SetTriangle = (pos1,pos2,pos3) => 
{ 
    vertices_of_triangle[0] = pos1[0];
    vertices_of_triangle[1] = pos1[1];
    vertices_of_triangle[2] = pos2[0];
    vertices_of_triangle[3] = pos2[1];
    vertices_of_triangle[4] = pos3[0];
    vertices_of_triangle[5] = pos3[1];
    vertices_of_triangle[6] = pos1[0];
    vertices_of_triangle[7] = pos1[1];
};
var SetRectangle = (pos,w,h) => 
{
    vertices_of_rectangle[0] = pos[0];
    vertices_of_rectangle[1] = pos[1];
    vertices_of_rectangle[2] = pos[0] + w;
    vertices_of_rectangle[3] = pos[1];
    vertices_of_rectangle[4] = pos[0] + w;
    vertices_of_rectangle[5] = pos[1] - h;
    vertices_of_rectangle[6] = pos[0] - w;
    vertices_of_rectangle[7] = pos[1] - h;
    vertices_of_rectangle[8] = pos[0];
    vertices_of_rectangle[9] = pos[1];
};
