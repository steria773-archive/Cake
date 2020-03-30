//Copyright (c)2019-Present Rabia Alhaffar,All Rights Reserved!!!
//Cake Canvas (2D And 3D) And WebGL(2D And 3D) HTML5 Game Engine!!!
//Date: 30/March/2020
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
var KeyboardKey = 
{
    Key: 
    {
        A: "a",
        B: "b",
        C: "c",
        D: "d",
        E: "e",
        F: "f",
        G: "g",
        H: "h",
        I: "i",
        J: "j",
        K: "k",
        L: "l",
        M: "m",
        N: "n",
        O: "o",
        P: "p",
        Q: "q",
        R: "r",
        S: "s",
        T: "t",
        U: "u",
        V: "v",
        W: "w",
        X: "x",
        Y: "y",
        Z: "z",
        ZERO: "0",
        ONE: "1",
        TWO: "2",
        THREE: "3",
        FOUR: "4",
        FIVE: "5",
        SIX: "6",
        SEVEN: "7",
        EIGHT: "8",
        NINE: "9",
        UP: "ArrowUp",
        DOWN: "ArrowDown",
        LEFT: "ArrowLeft",
        Right: "ArrowRight",
        SPACE: 32,
        TAB: "Tab",
        SHIFT: "Shift",
        CONTROL: "Control",
        ALT: "Alt",
        BACKSPACE: "Backspace",
        ENTER: "Enter",
        OS: "OS",
        UNIDENTIFIED: "Unidentified",
        HOME: "Home",
        PGUP: "PageUp",
        PGDN: "PageDown",
        CLEAR: "Clear",
        DELETE: "Delete",
        ESCAPE: "Escape",
        INSERT: "Insert"
    },

    KeyCode:
    {
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        ZERO: 48,
        ONE: 49,
        TWO: 50,
        THREE: 51,
        FOUR: 52,
        FIVE: 53,
        SIX: 54,
        SEVEN: 55,
        EIGHT: 56,
        NINE: 57,
        UP: 38,
        DOWN: 40,
        LEFT: 37,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        SHIFT: 16,
        CONTROL: 17,
        ALT: 18,
        BACKSPACE: 8,
        ENTER: 13,
        NUMLOCK: 144,
        OS: 91,
        UNIDENTIFIED: 0,
        HOME: 36,
        PGUP: 33,
        PGDN: 34,
        CLEAR: 12,
        DELETE: 46,
        ESCAPE: 27,
        INSERT: 45
    }
};

var MouseButton =
{
    LEFT: 0,
    RIGHT: 2,
    MIDDLE: 1
};

//Module: Browser
var ReloadHistory = () => window.location.reload();
var NextHistory = () => window.history.forward();
var BackHistory = () => window.history.back();
var OpenURL = (url) => window.open(url);

//Module: Media(Video And Audio)
//Audio
var PlayAudio = (url) => audio = new Audio(url).play();
function Music(url)
{
	this.url = url;
	this.audio = new Audio(this.url);
	this.Play = function() { this.audio.play(); };
	this.Pause = function() { this.audio.pause(); };
	this.Resume = function() { this.audio.play(); };
	this.Reload = function() { this.audio.load(); }
	this.SetVolume = function(v) { this.audio.volume = v; };
	this.SetSource = function(src) { this.audio.src = src; this.audio.load(); };
	this.ShowControls = function() { this.audio.controls = true; };
	this.HideControls = function() { this.audio.controls = false; };
	this.Mute = function() { this.audio.muted = true; };
	this.UnMute = function() { this.audio.muted = false; };
	this.EnableLoop = function() { this.audio.loop = true; };
	this.DisableLoop = function() { this.audio.loop = false; };
	this.paused = function() { return this.audio.paused; };
	this.finished = function() { return this.audio.ended; }; 
	this.muted = function() { return this.audio.muted; };
	this.EnablePreload = function() { this.audio.preload = "auto"; };
	this.DisablePreload = function() { this.audio.preload = "none"; };
};

//Video
var PlayVideo = (src) =>
{
    var video = document.createElement("video");
    video.src = src;
    video.loop = false;
    cakepen.drawImage(video,0,0,cakecanvas.width,cakecanvas.height);
    video.onended = () => video.parentNode.removeChild(video);
};

function Video(src)
{
    this.src = src;
    this.removeonfinish = false;
    this.video = document.createElement("video");
    this.video.src = this.src;
    this.video.loop = false;
    this.video.controls = false;
    this.Play = function() 
    {
		if(!this.video.autoplay) this.video.play();
        cakepen.drawImage(this.video,0,0,cakecanvas.width,cakecanvas.height); 
        if(this.removeonfinish) this.video.onended = () => this.video.parentNode.removeChild(this.video);
    };
	this.Pause = function() { this.video.pause(); };
	this.Resume = function() { this.Play(); };
	this.Reload = function() { this.video.load(); }
	this.SetVolume = function(v) { this.video.volume = v; };
	this.SetSource = function(src) { this.video.src = src; this.video.load(); };
	this.ShowControls = function() { this.video.controls = true; };
	this.HideControls = function() { this.video.controls = false; };
	this.Mute = function() { this.video.muted = true; };
	this.UnMute = function() { this.video.muted = false; };
	this.EnableLoop = function() { this.video.loop = true; };
	this.DisableLoop = function() { this.video.loop = false; };
	this.paused = function() { return this.video.paused; };
	this.finished = function() { return this.video.ended; }; 
	this.muted = function() { return this.video.muted; };
	this.EnablePreload = function() { this.video.preload = "auto"; };
    this.DisablePreload = function() { this.video.preload = "none"; };
    this.RemoveWhenFinish = function() 
    {
        this.removeonfinish = true;
    };

}

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
var CheckCollisionPointSphere = (point,sphere) =>
{
	return Math.sqrt((point.x - sphere.x) * (point.x - sphere.x) +
		             (point.y - sphere.y) * (point.y - sphere.y) +
                     (point.z - sphere.z) * (point.z - sphere.z)) < sphere.radius;
};
	   
var CheckCollisionSpheres = (sphere1,sphere2) =>
{
	return Math.sqrt((sphere1.x - sphere2.x) * (sphere1.x - sphere2.x) +
                     (sphere1.y - sphere2.y) * (sphere1.y - sphere2.y) +
                     (sphere1.z - sphere2.z) * (sphere1.z - sphere2.z)) < (sphere1.radius + sphere2.radius);
};
	   
var CheckCollisionCubes = (cube1,cube2) =>
{
	if (Math.abs(cube1.x - cube2.x) < cube1.size + cube2.size)
	{
		if (Math.abs(cube1.y - cube2.y) < cube1.size + cube2.size)
		{
			if (Math.abs(cube1.z - cube2.z) < cube1.size + cube2.size) return true;
		}
	}
};

var CheckCollisionCuboids = (cuboid1,cuboid2) =>
{
	if (Math.abs(cuboid1.x - cuboid2.x) < cuboid1.scale[0] + cuboid2.scale[0])
	{
		if (Math.abs(cuboid1.y - cuboid2.y) < cuboid1.scale[1] + cuboid2.scale[1])
		{
			if (Math.abs(cuboid1.z - cuboid2.z) < cuboid1.scale[2] + cuboid2.scale[2]) return true;
		}
	}
};

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
var UpdateEngine = () => Import("https://cdn.jsdelivr.net/gh/Cake-Engine/Cake@master/build/cake.js");
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
var touchPosition = { x:0,y:0 };
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
        cakepen.quadraticCurveTo(this.x + this.width,this.y + this.height,this.x + this.width - this.radius,this.y + this.height);
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
	cakepen.beginPath();
	cakepen.moveTo(points[0][0], points[0][1]);
	for (var i = 0; i < points.length; i++) cakepen.lineTo(points[i][0], points[i][1]);
	cakepen.closePath();
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
}
function Sprite(url,x,y,width,height,autoupdate)
{	
this.url = url;
this.sprites = this.url;
this.img = new Image();
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
for(var ps = 0;ps < this.sprites.length;ps++) this.sprites.push(this.url[ps]);
this.img.src = this.sprites[0];
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
for(var imgs = 0;imgs < this.sprites.length;imgs++)
{
	cakepen.drawImage(this.img,this.x,this.y,this.height,this.width);
}
cakepen.globalAlpha = this.alpha;
cakepen.rotate(-this.rotationAngle);
};
this.Animate = function()
{
if(this.destroyed) cakepen.globalAlpha = 0;
if(this.rotated) cakepen.rotate(this.rotationAngle);
for(var imgs = 0;imgs < this.sprites.length;imgs++)
{
	this.img.src = this.sprites[imgs];
	cakepen.drawImage(this.img,this.x,this.y,this.height,this.width);
}
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
this.AddFeature = function(feature,code) { this.feature = code; };
this.InPosition = function(x_pos,y_pos) { return(this.x == x_pos && this.y == y_pos); };
if(autoupdate) this.Update();
this.Add();
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
var Steam_Login = () => window.open("https://store.steampowered.com/login/");
var Steam_Logout = () => window.open("https://store.steampowered.com/logout/");

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
//Created By Rabia Alhaffar In 19/March/2020
//WebGL Version Of Cake
/*
 * lightgl.js
 * http://github.com/evanw/lightgl.js/
 *
 * Copyright 2011 Evan Wallace
 * Released under the MIT license
 */
var GL=function(){var t;var r={create:function(r){r=r||{ antialias: false };var a=document.createElement("canvas");a.width=window.innerWidth;a.height=window.innerHeight;if(!("alpha"in r))r.alpha=false;try{t=a.getContext("webgl2",r)}catch(o){}try{t=t||a.getContext("webgl2",r)}catch(o){}if(!t)throw new Error("WebGL not supported");t.HALF_FLOAT_OES=36193;e();i();n();u();return t},keys:{},Matrix:c,Indexer:h,Buffer:m,Mesh:d,HitTest:p,Raytracer:x,Shader:E,Texture:_,Vector:P};function e(){t.MODELVIEW=f|1;t.PROJECTION=f|2;var r=new c;var e=new c;t.modelviewMatrix=new c;t.projectionMatrix=new c;var i=[];var n=[];var a,o;t.matrixMode=function(r){switch(r){case t.MODELVIEW:a="modelviewMatrix";o=i;break;case t.PROJECTION:a="projectionMatrix";o=n;break;default:throw new Error("invalid matrix mode "+r)}};t.loadIdentity=function(){c.identity(t[a])};t.loadMatrix=function(r){var e=r.m,i=t[a].m;for(var n=0;n<16;n++){i[n]=e[n]}};t.multMatrix=function(r){t.loadMatrix(c.multiply(t[a],r,e))};t.perspective=function(e,i,n,a){t.multMatrix(c.perspective(e,i,n,a,r))};t.frustum=function(e,i,n,a,o,s){t.multMatrix(c.frustum(e,i,n,a,o,s,r))};t.ortho=function(e,i,n,a,o,s){t.multMatrix(c.ortho(e,i,n,a,o,s,r))};t.scale=function(e,i,n){t.multMatrix(c.scale(e,i,n,r))};t.translate=function(e,i,n){t.multMatrix(c.translate(e,i,n,r))};t.rotate=function(e,i,n,a){t.multMatrix(c.rotate(e,i,n,a,r))};t.lookAt=function(e,i,n,a,o,s,u,f,l){t.multMatrix(c.lookAt(e,i,n,a,o,s,u,f,l,r))};t.pushMatrix=function(){o.push(Array.prototype.slice.call(t[a].m))};t.popMatrix=function(){var r=o.pop();t[a].m=l?new Float32Array(r):r};t.project=function(r,e,i,n,a,o){n=n||t.modelviewMatrix;a=a||t.projectionMatrix;o=o||t.getParameter(t.VIEWPORT);var s=a.transformPoint(n.transformPoint(new P(r,e,i)));return new P(o[0]+o[2]*(s.x*.5+.5),o[1]+o[3]*(s.y*.5+.5),s.z*.5+.5)};t.unProject=function(i,n,a,o,s,u){o=o||t.modelviewMatrix;s=s||t.projectionMatrix;u=u||t.getParameter(t.VIEWPORT);var f=new P((i-u[0])/u[2]*2-1,(n-u[1])/u[3]*2-1,a*2-1);return c.inverse(c.multiply(s,o,r),e).transformPoint(f)};t.matrixMode(t.MODELVIEW)}function i(){var r={mesh:new d({coords:true,colors:true,triangles:false}),mode:-1,coord:[0,0,0,0],color:[1,1,1,1],pointSize:1,shader:new E("uniform float pointSize;varying vec4 color;varying vec4 coord;void main(){color=gl_Color;coord=gl_TexCoord;gl_Position=gl_ModelViewProjectionMatrix*gl_Vertex;gl_PointSize=pointSize;}","uniform sampler2D texture;uniform float pointSize;uniform bool useTexture;varying vec4 color;varying vec4 coord;void main(){gl_FragColor=color;if(useTexture)gl_FragColor*=texture2D(texture,coord.xy);}")};t.pointSize=function(t){r.shader.uniforms({pointSize:t})};t.begin=function(t){if(r.mode!=-1)throw new Error("mismatched gl.begin() and gl.end() calls");r.mode=t;r.mesh.colors=[];r.mesh.coords=[];r.mesh.vertices=[]};t.color=function(t,e,i,n){r.color=arguments.length==1?t.toArray().concat(1):[t,e,i,n||1]};t.texCoord=function(t,e){r.coord=arguments.length==1?t.toArray(2):[t,e]};t.vertex=function(t,e,i){r.mesh.colors.push(r.color);r.mesh.coords.push(r.coord);r.mesh.vertices.push(arguments.length==1?t.toArray():[t,e,i])};t.end=function(){if(r.mode==-1)throw new Error("mismatched gl.begin() and gl.end() calls");r.mesh.compile();r.shader.uniforms({useTexture:!!t.getParameter(t.TEXTURE_BINDING_2D)}).draw(r.mesh,r.mode);r.mode=-1}}function n(){var r=t,e=0,i=0,n={},a=false;var u=Object.prototype.hasOwnProperty;function f(){for(var t in n){if(u.call(n,t)&&n[t])return true}return false}function l(r){var n={};for(var o in r){if(typeof r[o]=="function"){n[o]=function(t){return function(){t.apply(r,arguments)}}(r[o])}else{n[o]=r[o]}}n.original=r;n.x=n.pageX;n.y=n.pageY;for(var s=t.canvas;s;s=s.offsetParent){n.x-=s.offsetLeft;n.y-=s.offsetTop}if(a){n.deltaX=n.x-e;n.deltaY=n.y-i}else{n.deltaX=0;n.deltaY=0;a=true}e=n.x;i=n.y;n.dragging=f();n.preventDefault=function(){n.original.preventDefault()};n.stopPropagation=function(){n.original.stopPropagation()};return n}function c(e){t=r;if(!f()){o(document,"mousemove",h);o(document,"mouseup",m);s(t.canvas,"mousemove",h);s(t.canvas,"mouseup",m)}n[e.which]=true;e=l(e);if(t.onmousedown)t.onmousedown(e);e.preventDefault()}function h(e){t=r;e=l(e);if(t.onmousemove)t.onmousemove(e);e.preventDefault()}function m(e){t=r;n[e.which]=false;if(!f()){s(document,"mousemove",h);s(document,"mouseup",m);o(t.canvas,"mousemove",h);o(t.canvas,"mouseup",m)}e=l(e);if(t.onmouseup)t.onmouseup(e);e.preventDefault()}function d(){a=false}function v(){n={};a=false}o(t.canvas,"mousedown",c);o(t.canvas,"mousemove",h);o(t.canvas,"mouseup",m);o(t.canvas,"mouseover",d);o(t.canvas,"mouseout",d);o(document,"contextmenu",v)}function a(t){var r={8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",27:"ESCAPE",32:"SPACE",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN"};return r[t]||(t>=65&&t<=90?String.fromCharCode(t):null)}function o(t,r,e){t.addEventListener(r,e)}function s(t,r,e){t.removeEventListener(r,e)}o(document,"keydown",function(t){if(!t.altKey&&!t.ctrlKey&&!t.metaKey){var e=a(t.keyCode);if(e)r.keys[e]=true;r.keys[t.keyCode]=true}});o(document,"keyup",function(t){if(!t.altKey&&!t.ctrlKey&&!t.metaKey){var e=a(t.keyCode);if(e)r.keys[e]=false;r.keys[t.keyCode]=false}});function u(){(function(r){t.makeCurrent=function(){t=r}})(t);t.animate=function(){var r=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(t){setTimeout(t,1e3/60)};var e=(new Date).getTime();var i=t;function n(){t=i;var a=(new Date).getTime();if(t.onupdate)t.onupdate((a-e)/1e3);if(t.ondraw)t.ondraw();r(n);e=a}n()};t.fullscreen=function(r){r=r||{};var e=r.paddingTop||0;var i=r.paddingLeft||0;var n=r.paddingRight||0;var a=r.paddingBottom||0;if(!document.body){throw new Error("document.body doesn't exist yet (call gl.fullscreen() from "+"window.onload() or from inside the <body> tag)")}document.body.appendChild(t.canvas);document.body.style.overflow="hidden";t.canvas.style.position="absolute";t.canvas.style.left=i+"px";t.canvas.style.top=e+"px";function s(){t.canvas.width=window.innerWidth-i-n;t.canvas.height=window.innerHeight-e-a;t.viewport(0,0,t.canvas.width,t.canvas.height);if(r.camera||!("camera"in r)){t.matrixMode(t.PROJECTION);t.loadIdentity();t.perspective(r.fov||45,t.canvas.width/t.canvas.height,r.near||.1,r.far||1e3);t.matrixMode(t.MODELVIEW)}if(t.ondraw)t.ondraw()}o(window,"resize",s);s()}}var f=305397760;var l=typeof Float32Array!="undefined";function c(){var t=Array.prototype.concat.apply([],arguments);if(!t.length){t=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}this.m=l?new Float32Array(t):t}c.prototype={inverse:function(){return c.inverse(this,new c)},transpose:function(){return c.transpose(this,new c)},multiply:function(t){return c.multiply(this,t,new c)},transformPoint:function(t){var r=this.m;return new P(r[0]*t.x+r[1]*t.y+r[2]*t.z+r[3],r[4]*t.x+r[5]*t.y+r[6]*t.z+r[7],r[8]*t.x+r[9]*t.y+r[10]*t.z+r[11]).divide(r[12]*t.x+r[13]*t.y+r[14]*t.z+r[15])},transformVector:function(t){var r=this.m;return new P(r[0]*t.x+r[1]*t.y+r[2]*t.z,r[4]*t.x+r[5]*t.y+r[6]*t.z,r[8]*t.x+r[9]*t.y+r[10]*t.z)}};c.inverse=function(t,r){r=r||new c;var e=t.m,i=r.m;i[0]=e[5]*e[10]*e[15]-e[5]*e[14]*e[11]-e[6]*e[9]*e[15]+e[6]*e[13]*e[11]+e[7]*e[9]*e[14]-e[7]*e[13]*e[10];i[1]=-e[1]*e[10]*e[15]+e[1]*e[14]*e[11]+e[2]*e[9]*e[15]-e[2]*e[13]*e[11]-e[3]*e[9]*e[14]+e[3]*e[13]*e[10];i[2]=e[1]*e[6]*e[15]-e[1]*e[14]*e[7]-e[2]*e[5]*e[15]+e[2]*e[13]*e[7]+e[3]*e[5]*e[14]-e[3]*e[13]*e[6];i[3]=-e[1]*e[6]*e[11]+e[1]*e[10]*e[7]+e[2]*e[5]*e[11]-e[2]*e[9]*e[7]-e[3]*e[5]*e[10]+e[3]*e[9]*e[6];i[4]=-e[4]*e[10]*e[15]+e[4]*e[14]*e[11]+e[6]*e[8]*e[15]-e[6]*e[12]*e[11]-e[7]*e[8]*e[14]+e[7]*e[12]*e[10];i[5]=e[0]*e[10]*e[15]-e[0]*e[14]*e[11]-e[2]*e[8]*e[15]+e[2]*e[12]*e[11]+e[3]*e[8]*e[14]-e[3]*e[12]*e[10];i[6]=-e[0]*e[6]*e[15]+e[0]*e[14]*e[7]+e[2]*e[4]*e[15]-e[2]*e[12]*e[7]-e[3]*e[4]*e[14]+e[3]*e[12]*e[6];i[7]=e[0]*e[6]*e[11]-e[0]*e[10]*e[7]-e[2]*e[4]*e[11]+e[2]*e[8]*e[7]+e[3]*e[4]*e[10]-e[3]*e[8]*e[6];i[8]=e[4]*e[9]*e[15]-e[4]*e[13]*e[11]-e[5]*e[8]*e[15]+e[5]*e[12]*e[11]+e[7]*e[8]*e[13]-e[7]*e[12]*e[9];i[9]=-e[0]*e[9]*e[15]+e[0]*e[13]*e[11]+e[1]*e[8]*e[15]-e[1]*e[12]*e[11]-e[3]*e[8]*e[13]+e[3]*e[12]*e[9];i[10]=e[0]*e[5]*e[15]-e[0]*e[13]*e[7]-e[1]*e[4]*e[15]+e[1]*e[12]*e[7]+e[3]*e[4]*e[13]-e[3]*e[12]*e[5];i[11]=-e[0]*e[5]*e[11]+e[0]*e[9]*e[7]+e[1]*e[4]*e[11]-e[1]*e[8]*e[7]-e[3]*e[4]*e[9]+e[3]*e[8]*e[5];i[12]=-e[4]*e[9]*e[14]+e[4]*e[13]*e[10]+e[5]*e[8]*e[14]-e[5]*e[12]*e[10]-e[6]*e[8]*e[13]+e[6]*e[12]*e[9];i[13]=e[0]*e[9]*e[14]-e[0]*e[13]*e[10]-e[1]*e[8]*e[14]+e[1]*e[12]*e[10]+e[2]*e[8]*e[13]-e[2]*e[12]*e[9];i[14]=-e[0]*e[5]*e[14]+e[0]*e[13]*e[6]+e[1]*e[4]*e[14]-e[1]*e[12]*e[6]-e[2]*e[4]*e[13]+e[2]*e[12]*e[5];i[15]=e[0]*e[5]*e[10]-e[0]*e[9]*e[6]-e[1]*e[4]*e[10]+e[1]*e[8]*e[6]+e[2]*e[4]*e[9]-e[2]*e[8]*e[5];var n=e[0]*i[0]+e[1]*i[4]+e[2]*i[8]+e[3]*i[12];for(var a=0;a<16;a++)i[a]/=n;return r};c.transpose=function(t,r){r=r||new c;var e=t.m,i=r.m;i[0]=e[0];i[1]=e[4];i[2]=e[8];i[3]=e[12];i[4]=e[1];i[5]=e[5];i[6]=e[9];i[7]=e[13];i[8]=e[2];i[9]=e[6];i[10]=e[10];i[11]=e[14];i[12]=e[3];i[13]=e[7];i[14]=e[11];i[15]=e[15];return r};c.multiply=function(t,r,e){e=e||new c;var i=t.m,n=r.m,a=e.m;a[0]=i[0]*n[0]+i[1]*n[4]+i[2]*n[8]+i[3]*n[12];a[1]=i[0]*n[1]+i[1]*n[5]+i[2]*n[9]+i[3]*n[13];a[2]=i[0]*n[2]+i[1]*n[6]+i[2]*n[10]+i[3]*n[14];a[3]=i[0]*n[3]+i[1]*n[7]+i[2]*n[11]+i[3]*n[15];a[4]=i[4]*n[0]+i[5]*n[4]+i[6]*n[8]+i[7]*n[12];a[5]=i[4]*n[1]+i[5]*n[5]+i[6]*n[9]+i[7]*n[13];a[6]=i[4]*n[2]+i[5]*n[6]+i[6]*n[10]+i[7]*n[14];a[7]=i[4]*n[3]+i[5]*n[7]+i[6]*n[11]+i[7]*n[15];a[8]=i[8]*n[0]+i[9]*n[4]+i[10]*n[8]+i[11]*n[12];a[9]=i[8]*n[1]+i[9]*n[5]+i[10]*n[9]+i[11]*n[13];a[10]=i[8]*n[2]+i[9]*n[6]+i[10]*n[10]+i[11]*n[14];a[11]=i[8]*n[3]+i[9]*n[7]+i[10]*n[11]+i[11]*n[15];a[12]=i[12]*n[0]+i[13]*n[4]+i[14]*n[8]+i[15]*n[12];a[13]=i[12]*n[1]+i[13]*n[5]+i[14]*n[9]+i[15]*n[13];a[14]=i[12]*n[2]+i[13]*n[6]+i[14]*n[10]+i[15]*n[14];a[15]=i[12]*n[3]+i[13]*n[7]+i[14]*n[11]+i[15]*n[15];return e};c.identity=function(t){t=t||new c;var r=t.m;r[0]=r[5]=r[10]=r[15]=1;r[1]=r[2]=r[3]=r[4]=r[6]=r[7]=r[8]=r[9]=r[11]=r[12]=r[13]=r[14]=0;return t};c.perspective=function(t,r,e,i,n){var a=Math.tan(t*Math.PI/360)*e;var o=a*r;return c.frustum(-o,o,-a,a,e,i,n)};c.frustum=function(t,r,e,i,n,a,o){o=o||new c;var s=o.m;s[0]=2*n/(r-t);s[1]=0;s[2]=(r+t)/(r-t);s[3]=0;s[4]=0;s[5]=2*n/(i-e);s[6]=(i+e)/(i-e);s[7]=0;s[8]=0;s[9]=0;s[10]=-(a+n)/(a-n);s[11]=-2*a*n/(a-n);s[12]=0;s[13]=0;s[14]=-1;s[15]=0;return o};c.ortho=function(t,r,e,i,n,a,o){o=o||new c;var s=o.m;s[0]=2/(r-t);s[1]=0;s[2]=0;s[3]=-(r+t)/(r-t);s[4]=0;s[5]=2/(i-e);s[6]=0;s[7]=-(i+e)/(i-e);s[8]=0;s[9]=0;s[10]=-2/(a-n);s[11]=-(a+n)/(a-n);s[12]=0;s[13]=0;s[14]=0;s[15]=1;return o};c.scale=function(t,r,e,i){i=i||new c;var n=i.m;n[0]=t;n[1]=0;n[2]=0;n[3]=0;n[4]=0;n[5]=r;n[6]=0;n[7]=0;n[8]=0;n[9]=0;n[10]=e;n[11]=0;n[12]=0;n[13]=0;n[14]=0;n[15]=1;return i};c.translate=function(t,r,e,i){i=i||new c;var n=i.m;n[0]=1;n[1]=0;n[2]=0;n[3]=t;n[4]=0;n[5]=1;n[6]=0;n[7]=r;n[8]=0;n[9]=0;n[10]=1;n[11]=e;n[12]=0;n[13]=0;n[14]=0;n[15]=1;return i};c.rotate=function(t,r,e,i,n){if(!t||!r&&!e&&!i){return c.identity(n)}n=n||new c;var a=n.m;var o=Math.sqrt(r*r+e*e+i*i);t*=Math.PI/180;r/=o;e/=o;i/=o;var s=Math.cos(t),u=Math.sin(t),f=1-s;a[0]=r*r*f+s;a[1]=r*e*f-i*u;a[2]=r*i*f+e*u;a[3]=0;a[4]=e*r*f+i*u;a[5]=e*e*f+s;a[6]=e*i*f-r*u;a[7]=0;a[8]=i*r*f-e*u;a[9]=i*e*f+r*u;a[10]=i*i*f+s;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return n};c.lookAt=function(t,r,e,i,n,a,o,s,u,f){f=f||new c;var l=f.m;var h=new P(t,r,e);var m=new P(i,n,a);var d=new P(o,s,u);var v=h.subtract(m).unit();var g=d.cross(v).unit();var p=v.cross(g).unit();l[0]=g.x;l[1]=g.y;l[2]=g.z;l[3]=-g.dot(h);l[4]=p.x;l[5]=p.y;l[6]=p.z;l[7]=-p.dot(h);l[8]=v.x;l[9]=v.y;l[10]=v.z;l[11]=-v.dot(h);l[12]=0;l[13]=0;l[14]=0;l[15]=1;return f};function h(){this.unique=[];this.indices=[];this.map={}}h.prototype={add:function(t){var r=JSON.stringify(t);if(!(r in this.map)){this.map[r]=this.unique.length;this.unique.push(t)}return this.map[r]}};function m(t,r){this.buffer=null;this.target=t;this.type=r;this.data=[]}m.prototype={compile:function(r){var e=[];for(var i=0,n=1e4;i<this.data.length;i+=n){e=Array.prototype.concat.apply(e,this.data.slice(i,i+n))}var a=this.data.length?e.length/this.data.length:0;if(a!=Math.round(a))throw new Error("buffer elements not of consistent size, average size is "+a);this.buffer=this.buffer||t.createBuffer();this.buffer.length=e.length;this.buffer.spacing=a;t.bindBuffer(this.target,this.buffer);t.bufferData(this.target,new this.type(e),r||t.STATIC_DRAW)}};function d(t){t=t||{};this.vertexBuffers={};this.indexBuffers={};this.addVertexBuffer("vertices","gl_Vertex");if(t.coords)this.addVertexBuffer("coords","gl_TexCoord");if(t.normals)this.addVertexBuffer("normals","gl_Normal");if(t.colors)this.addVertexBuffer("colors","gl_Color");if(!("triangles"in t)||t.triangles)this.addIndexBuffer("triangles");if(t.lines)this.addIndexBuffer("lines")}d.prototype={addVertexBuffer:function(r,e){var i=this.vertexBuffers[e]=new m(t.ARRAY_BUFFER,Float32Array);i.name=r;this[r]=[]},addIndexBuffer:function(r){var e=this.indexBuffers[r]=new m(t.ELEMENT_ARRAY_BUFFER,Uint16Array);this[r]=[]},compile:function(){for(var t in this.vertexBuffers){var r=this.vertexBuffers[t];r.data=this[r.name];r.compile()}for(var e in this.indexBuffers){var r=this.indexBuffers[e];r.data=this[e];r.compile()}},transform:function(t){this.vertices=this.vertices.map(function(r){return t.transformPoint(P.fromArray(r)).toArray()});if(this.normals){var r=t.inverse().transpose();this.normals=this.normals.map(function(t){return r.transformVector(P.fromArray(t)).unit().toArray()})}this.compile();return this},computeNormals:function(){if(!this.normals)this.addVertexBuffer("normals","gl_Normal");for(var t=0;t<this.vertices.length;t++){this.normals[t]=new P}for(var t=0;t<this.triangles.length;t++){var r=this.triangles[t];var e=P.fromArray(this.vertices[r[0]]);var i=P.fromArray(this.vertices[r[1]]);var n=P.fromArray(this.vertices[r[2]]);var a=i.subtract(e).cross(n.subtract(e)).unit();this.normals[r[0]]=this.normals[r[0]].add(a);this.normals[r[1]]=this.normals[r[1]].add(a);this.normals[r[2]]=this.normals[r[2]].add(a)}for(var t=0;t<this.vertices.length;t++){this.normals[t]=this.normals[t].unit().toArray()}this.compile();return this},computeWireframe:function(){var t=new h;for(var r=0;r<this.triangles.length;r++){var e=this.triangles[r];for(var i=0;i<e.length;i++){var n=e[i],a=e[(i+1)%e.length];t.add([Math.min(n,a),Math.max(n,a)])}}if(!this.lines)this.addIndexBuffer("lines");this.lines=t.unique;this.compile();return this},getAABB:function(){var t={min:new P(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)};t.max=t.min.negative();for(var r=0;r<this.vertices.length;r++){var e=P.fromArray(this.vertices[r]);t.min=P.min(t.min,e);t.max=P.max(t.max,e)}return t},getBoundingSphere:function(){var t=this.getAABB();var r={center:t.min.add(t.max).divide(2),radius:0};for(var e=0;e<this.vertices.length;e++){r.radius=Math.max(r.radius,P.fromArray(this.vertices[e]).subtract(r.center).length())}return r}};d.plane=function(t){t=t||{};var r=new d(t);detailX=t.detailX||t.detail||1;detailY=t.detailY||t.detail||1;for(var e=0;e<=detailY;e++){var i=e/detailY;for(var n=0;n<=detailX;n++){var a=n/detailX;r.vertices.push([2*a-1,2*i-1,0]);if(r.coords)r.coords.push([a,i]);if(r.normals)r.normals.push([0,0,1]);if(n<detailX&&e<detailY){var o=n+e*(detailX+1);r.triangles.push([o,o+1,o+detailX+1]);r.triangles.push([o+detailX+1,o+1,o+detailX+2])}}}r.compile();return r};var v=[[0,4,2,6,-1,0,0],[1,3,5,7,+1,0,0],[0,1,4,5,0,-1,0],[2,6,3,7,0,+1,0],[0,2,1,3,0,0,-1],[4,5,6,7,0,0,+1]];function g(t){return new P((t&1)*2-1,(t&2)-1,(t&4)/2-1)}d.cube=function(t){var r=new d(t);for(var e=0;e<v.length;e++){var i=v[e],n=e*4;for(var a=0;a<4;a++){var o=i[a];r.vertices.push(g(o).toArray());if(r.coords)r.coords.push([a&1,(a&2)/2]);if(r.normals)r.normals.push(i.slice(4,7))}r.triangles.push([n,n+1,n+2]);r.triangles.push([n+2,n+1,n+3])}r.compile();return r};d.sphere=function(t){function r(t,r,e){return s?[t,e,r]:[t,r,e]}function e(t){return t+(t-t*t)/2}t=t||{};var i=new d(t);var n=new h;detail=t.detail||6;for(var a=0;a<8;a++){var o=g(a);var s=o.x*o.y*o.z>0;var u=[];for(var f=0;f<=detail;f++){for(var l=0;f+l<=detail;l++){var c=f/detail;var m=l/detail;var v=(detail-f-l)/detail;var p={vertex:new P(e(c),e(m),e(v)).unit().multiply(o).toArray()};if(i.coords)p.coord=o.y>0?[1-c,v]:[v,1-c];u.push(n.add(p))}if(f>0){for(var l=0;f+l<=detail;l++){var c=(f-1)*(detail+1)+(f-1-(f-1)*(f-1))/2+l;var m=f*(detail+1)+(f-f*f)/2+l;i.triangles.push(r(u[c],u[c+1],u[m]));if(f+l<detail){i.triangles.push(r(u[m],u[c+1],u[m+1]))}}}}}i.vertices=n.unique.map(function(t){return t.vertex});if(i.coords)i.coords=n.unique.map(function(t){return t.coord});if(i.normals)i.normals=i.vertices;i.compile();return i};d.load=function(t,r){r=r||{};if(!("coords"in r))r.coords=!!t.coords;if(!("normals"in r))r.normals=!!t.normals;if(!("colors"in r))r.colors=!!t.colors;if(!("triangles"in r))r.triangles=!!t.triangles;if(!("lines"in r))r.lines=!!t.lines;var e=new d(r);e.vertices=t.vertices;if(e.coords)e.coords=t.coords;if(e.normals)e.normals=t.normals;if(e.colors)e.colors=t.colors;if(e.triangles)e.triangles=t.triangles;if(e.lines)e.lines=t.lines;e.compile();return e};function p(t,r,e){this.t=arguments.length?t:Number.MAX_VALUE;this.hit=r;this.normal=e}p.prototype={mergeWith:function(t){if(t.t>0&&t.t<this.t){this.t=t.t;this.hit=t.hit;this.normal=t.normal}}};function x(){var r=t.getParameter(t.VIEWPORT);var e=t.modelviewMatrix.m;var i=new P(e[0],e[4],e[8]);var n=new P(e[1],e[5],e[9]);var a=new P(e[2],e[6],e[10]);var o=new P(e[3],e[7],e[11]);this.eye=new P((-o.dot(i)),(-o.dot(n)),(-o.dot(a)));var s=r[0],u=s+r[2];var f=r[1],l=f+r[3];this.ray00=t.unProject(s,f,1).subtract(this.eye);this.ray10=t.unProject(u,f,1).subtract(this.eye);this.ray01=t.unProject(s,l,1).subtract(this.eye);this.ray11=t.unProject(u,l,1).subtract(this.eye);this.viewport=r}x.prototype={getRayForPixel:function(t,r){t=(t-this.viewport[0])/this.viewport[2];r=1-(r-this.viewport[1])/this.viewport[3];var e=P.lerp(this.ray00,this.ray10,t);var i=P.lerp(this.ray01,this.ray11,t);return P.lerp(e,i,r).unit()}};x.hitTestBox=function(t,r,e,i){var n=e.subtract(t).divide(r);var a=i.subtract(t).divide(r);var o=P.min(n,a);var s=P.max(n,a);var u=o.max();var f=s.min();if(u>0&&u<f){var l=1e-6,c=t.add(r.multiply(u));e=e.add(l);i=i.subtract(l);return new p(u,c,new P((c.x>i.x)-(c.x<e.x),(c.y>i.y)-(c.y<e.y),(c.z>i.z)-(c.z<e.z)))}return null};x.hitTestSphere=function(t,r,e,i){var n=t.subtract(e);var a=r.dot(r);var o=2*r.dot(n);var s=n.dot(n)-i*i;var u=o*o-4*a*s;if(u>0){var f=(-o-Math.sqrt(u))/(2*a),l=t.add(r.multiply(f));return new p(f,l,l.subtract(e).divide(i))}return null};x.hitTestTriangle=function(t,r,e,i,n){var a=i.subtract(e);var o=n.subtract(e);var s=a.cross(o).unit();var u=s.dot(e.subtract(t))/s.dot(r);if(u>0){var f=t.add(r.multiply(u));var l=f.subtract(e);var c=o.dot(o);var h=o.dot(a);var m=o.dot(l);var d=a.dot(a);var v=a.dot(l);var g=c*d-h*h;var x=(d*m-h*v)/g;var y=(c*v-h*m)/g;if(x>=0&&y>=0&&x+y<=1)return new p(u,f,s)}return null};function y(t,r,e){while((result=t.exec(r))!=null){e(result)}}var w="LIGHTGL";function E(r,e){function i(t){var r=document.getElementById(t);return r?r.text:t}r=i(r);e=i(e);var n="uniform mat3 gl_NormalMatrix;uniform mat4 gl_ModelViewMatrix;uniform mat4 gl_ProjectionMatrix;uniform mat4 gl_ModelViewProjectionMatrix;uniform mat4 gl_ModelViewMatrixInverse;uniform mat4 gl_ProjectionMatrixInverse;uniform mat4 gl_ModelViewProjectionMatrixInverse;";var a=n+"attribute vec4 gl_Vertex;attribute vec4 gl_TexCoord;attribute vec3 gl_Normal;attribute vec4 gl_Color;vec4 ftransform(){return gl_ModelViewProjectionMatrix*gl_Vertex;}";var o="precision highp float;"+n;var s=r+e;var u={};y(/\b(gl_[^;]*)\b;/g,n,function(t){var r=t[1];if(s.indexOf(r)!=-1){var e=r.replace(/[a-z_]/g,"");u[e]=w+r}});if(s.indexOf("ftransform")!=-1)u.MVPM=w+"gl_ModelViewProjectionMatrix";this.usedMatrices=u;function f(t,r){var e={};var i=/^((\s*\/\/.*\n|\s*#extension.*\n)+)[^]*$/.exec(r);r=i?i[1]+t+r.substr(i[1].length):t+r;y(/\bgl_\w+\b/g,t,function(t){if(!(t in e)){r=r.replace(new RegExp("\\b"+t+"\\b","g"),w+t);e[t]=true}});return r}r=f(a,r);e=f(o,e);function l(r,e){var i=t.createShader(r);t.shaderSource(i,e);t.compileShader(i);if(!t.getShaderParameter(i,t.COMPILE_STATUS)){throw new Error("compile error: "+t.getShaderInfoLog(i))}return i}this.program=t.createProgram();t.attachShader(this.program,l(t.VERTEX_SHADER,r));t.attachShader(this.program,l(t.FRAGMENT_SHADER,e));t.linkProgram(this.program);if(!t.getProgramParameter(this.program,t.LINK_STATUS)){throw new Error("link error: "+t.getProgramInfoLog(this.program))}this.attributes={};this.uniformLocations={};var c={};y(/uniform\s+sampler(1D|2D|3D|Cube)\s+(\w+)\s*;/g,r+e,function(t){c[t[2]]=1});this.isSampler=c}function M(t){var r=Object.prototype.toString.call(t);return r=="[object Array]"||r=="[object Float32Array]"}function b(t){var r=Object.prototype.toString.call(t);return r=="[object Number]"||r=="[object Boolean]"}var T=new c;var A=new c;E.prototype={uniforms:function(r){t.useProgram(this.program);for(var e in r){var i=this.uniformLocations[e]||t.getUniformLocation(this.program,e);if(!i)continue;this.uniformLocations[e]=i;var n=r[e];if(n instanceof P){n=[n.x,n.y,n.z]}else if(n instanceof c){n=n.m}if(M(n)){switch(n.length){case 1:t.uniform1fv(i,new Float32Array(n));break;case 2:t.uniform2fv(i,new Float32Array(n));break;case 3:t.uniform3fv(i,new Float32Array(n));break;case 4:t.uniform4fv(i,new Float32Array(n));break;case 9:t.uniformMatrix3fv(i,false,new Float32Array([n[0],n[3],n[6],n[1],n[4],n[7],n[2],n[5],n[8]]));break;case 16:t.uniformMatrix4fv(i,false,new Float32Array([n[0],n[4],n[8],n[12],n[1],n[5],n[9],n[13],n[2],n[6],n[10],n[14],n[3],n[7],n[11],n[15]]));break;default:throw new Error("don't know how to load uniform \""+e+'" of length '+n.length)}}else if(b(n)){(this.isSampler[e]?t.uniform1i:t.uniform1f).call(t,i,n)}else{throw new Error('attempted to set uniform "'+e+'" to invalid value '+n)}}return this},draw:function(r,e){this.drawBuffers(r.vertexBuffers,r.indexBuffers[e==t.LINES?"lines":"triangles"],arguments.length<2?t.TRIANGLES:e)},drawBuffers:function(r,e,i){var n=this.usedMatrices;var a=t.modelviewMatrix;var o=t.projectionMatrix;var s=n.MVMI||n.NM?a.inverse():null;var u=n.PMI?o.inverse():null;var f=n.MVPM||n.MVPMI?o.multiply(a):null;var l={};if(n.MVM)l[n.MVM]=a;if(n.MVMI)l[n.MVMI]=s;if(n.PM)l[n.PM]=o;if(n.PMI)l[n.PMI]=u;if(n.MVPM)l[n.MVPM]=f;if(n.MVPMI)l[n.MVPMI]=f.inverse();if(n.NM){var c=s.m;l[n.NM]=[c[0],c[4],c[8],c[1],c[5],c[9],c[2],c[6],c[10]]}this.uniforms(l);var h=0;for(var m in r){var d=r[m];var v=this.attributes[m]||t.getAttribLocation(this.program,m.replace(/^(gl_.*)$/,w+"$1"));if(v==-1||!d.buffer)continue;this.attributes[m]=v;t.bindBuffer(t.ARRAY_BUFFER,d.buffer);t.enableVertexAttribArray(v);t.vertexAttribPointer(v,d.buffer.spacing,t.FLOAT,false,0,0);h=d.buffer.length/d.buffer.spacing}for(var m in this.attributes){if(!(m in r)){t.disableVertexAttribArray(this.attributes[m])}}if(h&&(!e||e.buffer)){if(e){t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.buffer);t.drawElements(i,e.buffer.length,t.UNSIGNED_SHORT,0)}else{t.drawArrays(i,0,h)}}return this}};function _(r,e,i){i=i||{};this.id=t.createTexture();this.width=r;this.height=e;this.format=i.format||t.RGBA;this.type=i.type||t.UNSIGNED_BYTE;var n=i.filter||i.magFilter||t.LINEAR;var a=i.filter||i.minFilter||t.LINEAR;if(this.type===t.FLOAT){if(!_.canUseFloatingPointTextures()){throw new Error("OES_texture_float is required but not supported")}if((a!==t.NEAREST||n!==t.NEAREST)&&!_.canUseFloatingPointLinearFiltering()){throw new Error("OES_texture_float_linear is required but not supported")}}else if(this.type===t.HALF_FLOAT_OES){if(!_.canUseHalfFloatingPointTextures()){throw new Error("OES_texture_half_float is required but not supported")}if((a!==t.NEAREST||n!==t.NEAREST)&&!_.canUseHalfFloatingPointLinearFiltering()){throw new Error("OES_texture_half_float_linear is required but not supported")}}t.bindTexture(t.TEXTURE_2D,this.id);t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,1);t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,n);t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,a);t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,i.wrap||i.wrapS||t.CLAMP_TO_EDGE);t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,i.wrap||i.wrapT||t.CLAMP_TO_EDGE);t.texImage2D(t.TEXTURE_2D,0,this.format,r,e,0,this.format,this.type,i.data||null)}var R;var F;var z;_.prototype={bind:function(r){t.activeTexture(t.TEXTURE0+(r||0));t.bindTexture(t.TEXTURE_2D,this.id)},unbind:function(r){t.activeTexture(t.TEXTURE0+(r||0));t.bindTexture(t.TEXTURE_2D,null)},canDrawTo:function(){R=R||t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,R);t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,this.id,0);var r=t.checkFramebufferStatus(t.FRAMEBUFFER)==t.FRAMEBUFFER_COMPLETE;t.bindFramebuffer(t.FRAMEBUFFER,null);return r},drawTo:function(r){var e=t.getParameter(t.VIEWPORT);R=R||t.createFramebuffer();F=F||t.createRenderbuffer();t.bindFramebuffer(t.FRAMEBUFFER,R);t.bindRenderbuffer(t.RENDERBUFFER,F);if(this.width!=F.width||this.height!=F.height){F.width=this.width;F.height=this.height;t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_COMPONENT16,this.width,this.height)}t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,this.id,0);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,F);if(t.checkFramebufferStatus(t.FRAMEBUFFER)!=t.FRAMEBUFFER_COMPLETE){throw new Error("Rendering to this texture is not supported (incomplete framebuffer)")}t.viewport(0,0,this.width,this.height);r();t.bindFramebuffer(t.FRAMEBUFFER,null);t.bindRenderbuffer(t.RENDERBUFFER,null);t.viewport(e[0],e[1],e[2],e[3])},swapWith:function(t){var r;r=t.id;t.id=this.id;this.id=r;r=t.width;t.width=this.width;this.width=r;r=t.height;t.height=this.height;this.height=r}};_.fromImage=function(r,e){e=e||{};var i=new _(r.width,r.height,e);try{t.texImage2D(t.TEXTURE_2D,0,i.format,i.format,i.type,r)}catch(n){if(location.protocol=="file:"){throw new Error('image not loaded for security reasons (serve this page over "http://" instead)')}else{throw new Error("image not loaded for security reasons (image must originate from the same "+"domain as this page or use Cross-Origin Resource Sharing)")}}if(e.minFilter&&e.minFilter!=t.NEAREST&&e.minFilter!=t.LINEAR){t.generateMipmap(t.TEXTURE_2D)}return i};_.fromURL=function(r,e){z=z||function(){var t=document.createElement("canvas").getContext("2d");t.canvas.width=t.canvas.height=128;for(var r=0;r<t.canvas.height;r+=16){for(var e=0;e<t.canvas.width;e+=16){t.fillStyle=(e^r)&16?"#FFF":"#DDD";t.fillRect(e,r,16,16)}}return t.canvas}();var i=_.fromImage(z,e);var n=new Image;var a=t;n.onload=function(){a.makeCurrent();_.fromImage(n,e).swapWith(i)};n.src=r;return i};_.canUseFloatingPointTextures=function(){return!!t.getExtension("OES_texture_float")};_.canUseFloatingPointLinearFiltering=function(){return!!t.getExtension("OES_texture_float_linear")};_.canUseHalfFloatingPointTextures=function(){return!!t.getExtension("OES_texture_half_float")};_.canUseHalfFloatingPointLinearFiltering=function(){return!!t.getExtension("OES_texture_half_float_linear")};function P(t,r,e){this.x=t||0;this.y=r||0;this.z=e||0}P.prototype={negative:function(){return new P((-this.x),(-this.y),(-this.z))},add:function(t){if(t instanceof P)return new P(this.x+t.x,this.y+t.y,this.z+t.z);else return new P(this.x+t,this.y+t,this.z+t)},subtract:function(t){if(t instanceof P)return new P(this.x-t.x,this.y-t.y,this.z-t.z);else return new P(this.x-t,this.y-t,this.z-t)},multiply:function(t){if(t instanceof P)return new P(this.x*t.x,this.y*t.y,this.z*t.z);else return new P(this.x*t,this.y*t,this.z*t)},divide:function(t){if(t instanceof P)return new P(this.x/t.x,this.y/t.y,this.z/t.z);else return new P(this.x/t,this.y/t,this.z/t)},equals:function(t){return this.x==t.x&&this.y==t.y&&this.z==t.z},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},cross:function(t){return new P(this.y*t.z-this.z*t.y,this.z*t.x-this.x*t.z,this.x*t.y-this.y*t.x)},length:function(){return Math.sqrt(this.dot(this))},unit:function(){return this.divide(this.length())},min:function(){return Math.min(Math.min(this.x,this.y),this.z)},max:function(){return Math.max(Math.max(this.x,this.y),this.z)},toAngles:function(){return{theta:Math.atan2(this.z,this.x),phi:Math.asin(this.y/this.length())}},angleTo:function(t){return Math.acos(this.dot(t)/(this.length()*t.length()))},toArray:function(t){return[this.x,this.y,this.z].slice(0,t||3)},clone:function(){return new P(this.x,this.y,this.z)},init:function(t,r,e){this.x=t;this.y=r;this.z=e;return this}};P.negative=function(t,r){r.x=-t.x;r.y=-t.y;r.z=-t.z;return r};P.add=function(t,r,e){if(r instanceof P){e.x=t.x+r.x;e.y=t.y+r.y;e.z=t.z+r.z}else{e.x=t.x+r;e.y=t.y+r;e.z=t.z+r}return e};P.subtract=function(t,r,e){if(r instanceof P){e.x=t.x-r.x;e.y=t.y-r.y;e.z=t.z-r.z}else{e.x=t.x-r;e.y=t.y-r;e.z=t.z-r}return e};P.multiply=function(t,r,e){if(r instanceof P){e.x=t.x*r.x;e.y=t.y*r.y;e.z=t.z*r.z}else{e.x=t.x*r;e.y=t.y*r;e.z=t.z*r}return e};P.divide=function(t,r,e){if(r instanceof P){e.x=t.x/r.x;e.y=t.y/r.y;e.z=t.z/r.z}else{e.x=t.x/r;e.y=t.y/r;e.z=t.z/r}return e};P.cross=function(t,r,e){e.x=t.y*r.z-t.z*r.y;e.y=t.z*r.x-t.x*r.z;e.z=t.x*r.y-t.y*r.x;return e};P.unit=function(t,r){var e=t.length();r.x=t.x/e;r.y=t.y/e;r.z=t.z/e;return r};P.fromAngles=function(t,r){return new P(Math.cos(t)*Math.cos(r),Math.sin(r),Math.sin(t)*Math.cos(r))};P.randomDirection=function(){return P.fromAngles(Math.random()*Math.PI*2,Math.asin(Math.random()*2-1))};P.min=function(t,r){return new P(Math.min(t.x,r.x),Math.min(t.y,r.y),Math.min(t.z,r.z))};P.max=function(t,r){return new P(Math.max(t.x,r.x),Math.max(t.y,r.y),Math.max(t.z,r.z))};P.lerp=function(t,r,e){return r.subtract(t).multiply(e).add(t)};P.fromArray=function(t){return new P(t[0],t[1],t[2])};P.angleBetween=function(t,r){return t.angleTo(r)};return r}();

//NOTES: It Uses LightGL As 3rd Party
var cakepen,
    cakecanvas,
    cake_webgl_debugger,
    TRIANGLES,
    LINES,
    FAN,
    LINELOOP,
    POINTS,
    LINESTRIP,
    VERTEX,
    FRAGMENT,
    TRISTRIP,
    current_program,
    current_buffer,
    current_vertex_shader,
    current_fragment_shader,
    GPU,
    GLSL_VER,
    VENDOR,
    GL_VER,
    UNMASKED,
    cakecanvas2d,
    cakepen2d;

//Starting
var InitializeLightGL = (options) => 
{
    cakepen = GL.create(options);
    cakecanvas = cakepen.canvas;
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
    GL_VER = cakepen.getExtension(cakepen.VERSION);
    GLSL_VER = cakepen.getParameter(cakepen.SHADING_LANGUAGE_VERSION);
    VENDOR = cakepen.getParameter(cakepen.VENDOR);
};

var InitializeWebGL = (c,options) =>
{
    if(Unknown(c)) c = 0;
    cakecanvas = document.getElementsByTagName("canvas")[c];
    cakepen = cakecanvas.getContext('webgl',options);
    if(cakepen) console.info("CAKE GAME ENGINE: INITIALIZING WebGLRenderingContext...");
    if(!cakepen) console.error("WEBGL NOT SUPPORTED!!!");
    TRIANGLES = cakepen.TRIANGLES;
    LINES = cakepen.LINES;
    POINTS = cakepen.POINTS;
    TRIFAN = cakepen.TRIANGLE_FAN;
    TRISTRIP = cakepen.TRIANGLE_STRIP;
    LINELOOP = cakepen.LINE_LOOP;
    LINESTRIP = cakepen.LINE_STRIP;
    GL_VER = cakepen.getExtension(cakepen.VERSION);
    GLSL_VER = cakepen.getParameter(cakepen.SHADING_LANGUAGE_VERSION);
    VENDOR = cakepen.getParameter(cakepen.VENDOR);
};

//Drawing
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

var DrawCube = (shaders,position,rotation,size,options) => 
{
    var cube_shaders = new GL.Shader(shaders[0],shaders[1]);
    cakepen.loadIdentity();
    cakepen.translate(position[0],position[1],position[2]);
    cakepen.rotate(rotation[0],rotation[1],rotation[2],rotation[3]);
    cakepen.scale(size,size,-size);
    cube_shaders.draw(GL.Mesh.cube(options));
    cakepen.translate(-position[0],-position[1],-position[2]);
    cakepen.rotate(-rotation[0],-rotation[1],-rotation[2],-rotation[3]);
    cakepen.scale(-size,-size,size);
};

var DrawCuboid = (shaders,position,rotation,scale,options) =>
{
    var cuboid_shaders = new GL.Shader(shaders[0],shaders[1]);
    cakepen.loadIdentity();
    cakepen.translate(position[0],position[1],position[2]);
    cakepen.rotate(rotation[0],rotation[1],rotation[2],rotation[3]);
    cakepen.scale(scale[0],scale[1],-scale[2]);
    cuboid_shaders.draw(GL.Mesh.cube(options));
    cakepen.translate(-position[0],-position[1],-position[2]);
    cakepen.rotate(-rotation[0],-rotation[1],-rotation[2],-rotation[3]);
    cakepen.scale(-scale[0],-scale[1],scale[2]);
};

var DrawBall = (shaders,position,rotation,size,options) => 
{
    var ball_shaders = new GL.Shader(shaders[0],shaders[1]);
    cakepen.loadIdentity();
    cakepen.translate(position[0],position[1],position[2]);
    cakepen.rotate(rotation[0],rotation[1],rotation[2],rotation[3]);
    cakepen.scale(size,size,-size);
    ball_shaders.draw(GL.Mesh.sphere(options));
    cakepen.translate(-position[0],-position[1],-position[2]);
    cakepen.rotate(-rotation[0],-rotation[1],-rotation[2],-rotation[3]);
    cakepen.scale(-size,-size,size);
};

var DrawSphere = (shaders,position,rotation,scale,options) => 
{
    var sphere_shaders = new GL.Shader(shaders[0],shaders[1]);
    cakepen.loadIdentity();
    cakepen.translate(position[0],position[1],position[2]);
    cakepen.rotate(rotation[0],rotation[1],rotation[2],rotation[3]);
    cakepen.scale(scale[0],scale[1],-scale[2]);
    sphere_shaders.draw(GL.Mesh.sphere(options));
    cakepen.translate(-position[0],-position[1],-position[2]);
    cakepen.rotate(-rotation[0],-rotation[1],-rotation[2],-rotation[3]);
    cakepen.scale(-scale[0],-scale[1],scale[2]);
};

var DrawPlane = (shaders,position,rotation,size,options) => 
{
    var plane_shaders = new GL.Shader(shaders[0],shaders[1]);
    cakepen.loadIdentity();
    cakepen.translate(position[0],position[1],position[2]);
    cakepen.rotate(rotation[0],rotation[1],rotation[2],rotation[3]);
    cakepen.scale(size,size,-size);
    plane_shaders.draw(GL.Mesh.plane(options));
    cakepen.translate(-position[0],-position[1],-position[2]);
    cakepen.rotate(-rotation[0],-rotation[1],-rotation[2],-rotation[3]);
    cakepen.scale(-size,-size,size);
};

var DrawField = (shaders,position,rotation,scale,options) => 
{
    var plane_shaders = new GL.Shader(shaders[0],shaders[1]);
    cakepen.loadIdentity();
    cakepen.translate(position[0],position[1],position[2]);
    cakepen.rotate(rotation[0],rotation[1],rotation[2],rotation[3]);
    cakepen.scale(scale[0],scale[1],-scale[2]);
    plane_shaders.draw(GL.Mesh.plane(options));
    cakepen.translate(-position[0],-position[1],-position[2]);
    cakepen.rotate(-rotation[0],-rotation[1],-rotation[2],-rotation[3]);
    cakepen.scale(-scale[0],-scale[1],scale[2]);
};

var DrawArrays = (mode,pos_arr) => cakepen.drawArrays(mode,0,pos_arr.length / 2);
var BEGIN = (mode) => cakepen.begin(mode);
var END = () =>
{
    cakepen.flush();
    cakepen.end();
};
var FINISH = () => cakepen.finish();
var WebGLDrawContent = (mode,content) =>
{
    cakepen.begin(mode);
    for(l = 0;l < content.length;l++)
    {
            cakepen.color(content[l][3],content[l][4],content[l][5],content[l][6]);
            cakepen.vertex(content[l][0],content[l][1],content[l][2]);
    };
    cakepen.end();
};




//Shaders
var Shader = (vertex,frag) => GL.Shader(vertex,frag);
var ShaderParameter = (shader,param) => cakepen.getShaderParameter(shader,param);
var RemoveShader = (shader) => cakepen.deleteShader(shader);
var ShaderSourceCode = (shader) => cakepen.getShaderSource(shader);
var SHADER = (shader) => cakepen.isShader(shader);
var CreateShader = (type,src,current_vertex_shader,current_fragment_shader) =>
{
    if (type == VERTEX) current_vertex_shader = cakepen.createShader(VERTEX);
    if (type == FRAGMENT) current_vertex_shader = cakepen.createShader(FRAGMENT);
    cakepen.shaderSource(type == VERTEX ? current_vertex_shader : current_fragment_shader,src);
    cakepen.compileShader(type == VERTEX ? current_vertex_shader : current_fragment_shader);
    console.info(cakepen.getShaderParameter(type == VERTEX ? current_vertex_shader : current_fragment_shader,cakepen.COMPILE_STATUS) ? "CAKE GAME ENGINE: SHADER COMPILED SUCCESSFULLY!!!" : "CAKE GAME ENGINE: SHADER COMPILATION FAILED!!!");
    console.info(cakepen.getShaderInfoLog(type == VERTEX ? current_vertex_shader : current_fragment_shader));
    console.info(cakepen.getShaderSource(type == VERTEX ? current_vertex_shader : current_fragment_shader));
};


//Buffers
var BUFFER = (buffer) => cakepen.isBuffer(buffer);
var RemoveBuffer = (buffer) => cakepen.deleteBuffer(buffer);
var RemoveFrameBuffer = (buffer) => cakepen.deleteFrameBuffer(buffer);
var RemoveRenderBuffer = (buffer) => cakepen.deleteRenderBuffer(buffer);
var BindBuffer = (buffer) => cakepen.bindBuffer(cakepen.ARRAY_BUFFER,buffer);
var CreateFrameBuffer = (buffer) => buffer = cakepen.createFrameBuffer();
var CreateRenderBuffer = (buffer) => buffer = cakepen.createRenderBuffer();
var CreateBuffer = (current_buffer,arr) =>
{
    current_buffer = cakepen.createBuffer();
    cakepen.bindBuffer(cakepen.ARRAY_BUFFER, current_buffer);
    cakepen.bufferData(cakepen.ARRAY_BUFFER, new Float32Array(arr), cakepen.DYNAMIC_DRAW);
};


//Programs
var ProgramParameter = (program,param) => cakepen.getProgramParameter(program,param);
var RemoveProgram = (program) => cakepen.deleteProgram(program);
var UseProgram = (program) => cakepen.useProgram(program);
var PROGRAM = (program) => cakepen.isProgram(program);
var DisableAttribute = (program,att) => cakepen.disableVertexAttribArray(cakepen.getAttribLocation(program,att));
var EnableAttribute = (program,att) => cakepen.enableVertexAttribArray(cakepen.getAttribLocation(program, att));
var CreateProgram = (current_program,vertex,frag) => 
{
    current_program = cakepen.createProgram();
    cakepen.attachShader(current_program,vertex);
    cakepen.attachShader(current_program,frag);
    cakepen.linkProgram(current_program);
    cakepen.validateProgram(current_program);
    console.info(cakepen.getAttachedShaders(current_program));
    console.info(cakepen.getShaderSource(vertex));
    console.info(cakepen.getShaderSource(frag));
    console.info(cakepen.getShaderInfoLog(vertex));
    console.info(cakepen.getShaderInfoLog(frag));
    console.info(cakepen.getProgramParameter(cakepen.LINK_STATUS) ? "CAKE GAME ENGINE: PROGRAM CREATED SUCCESSFULLY!!!" : "CAKE GAME ENGINE: PROGRAM CREATION FAILED!!!");
    console.info(cakepen.getProgramInfoLog(current_program));
};


//Transformations
var WebGLTranslate = (x,y,z) => cakepen.translate(x,y,z);
var WebGLRotate = (angle,x,y,z) => cakepen.rotate(angle,x,y,z);
var WebGLScale = (x,y,z) => cakepen.scale(x,y,z);
var WebGLViewport = (x,y,width,height) => cakepen.viewport(x,y,width,height);
var WebGLScissor = (x,y,width,height) => cakepen.scissor(x,y,width,height);
var WebGLPerspective = (fov,aspect,near,far) => cakepen.perspective(fov,aspect,near,far);
var WebGLOrthographic = (left,right,bottom,top,near,far) => cakepen.ortho(left,right,bottom,top,near,far);
var WebGLFrustum = (left,right,bottom,top,near,far) => cakepen.frustum(left,right,bottom,top,near,far);
var WebGLLookAt = (eye_x,eye_y,eye_z,center_x,center_y,center_z,uniform_x,uniform_y,uniform_z) => cakepen.lookAt(eye_x,eye_y,eye_z,center_x,center_y,center_z,uniform_x,uniform_y,uniform_z);
var WebGLMatrixMode = (mode) => cakepen.matrixMode(mode);


//Meshes
var Cube = () => GL.Mesh.cube();
var Sphere = () => GL.Mesh.sphere();
var Plane = () => GL.Mesh.plane();
var LoadMesh = (json,options) => GL.Mesh.load(json,options);

//Options
var EnableDebugger = () => 
{
    cake_webgl_debugger = (cakepen.getExtension("WEBGL_debug_renderer_info") || cakepen.getExtension("WEBGL_debug_shaders"));
    GPU = cakepen.getParameter(cake_webgl_debugger.UNMASKED_VENDOR_WEBGL);
    UNMASKED = cakepen.getParameter(cake_webgl_debugger.UNMASKED_RENDERER_WEBGL);
    cakepen.getError();
};

var Multisample = (enabled,value,invert) =>
{
    if(enabled) 
    {
            cakepen.enable(cakepen.SAMPLE_COVERAGE);
            cakepen.sampleCoverage(value,invert);
    }
    if(!enabled) cakepen.disable(cakepen.SAMPLE_COVERAGE);
};
var EnableScissor = (m) =>
{
    if(m) cakepen.enable(cakepen.SCISSOR_TEST);
    if(!m) cakepen.disable(cakepen.SCISSOR_TEST);
};
var LoadGLID = () => cakepen.loadIdentity();
var SetLineSize = (size) => cakepen.lineWidth(size);
var SetClearDepth = (d) => cakepen.clearDepth(d);
var CompatibleCanvas = () =>
{
    if (cakecanvas.width !== cakecanvas.clientWidth || cakecanvas.height !== cakecanvas.clientHeight) cakecanvas.width = cakecanvas.clientWidth,cakecanvas.height = cakecanvas.clientHeight;
    cakepen.viewport(0,0,cakecanvas.width,cakecanvas.height);
};


//Misc
var WebGLSupportedExtensions = () => cakepen.getSupportedExtensions();
var WebGLExtension = (ext) => cakepen.getExtension(ext);
var WebGLParameter = (param) => cakepen.getParameter(param);
var WebGLFeatureEnable = (feature) => cakepen.isEnabled(feature);
var EnableWebGLFeature = (feature) => cakepen.enable(feature);
var Update = () => cakepen.animate();
var WebGLFullscreen = (options) => cakepen.fullscreen(options);
var DisableWebGLFeature = (feature) => cakepen.disable(feature);
var GetWebGLFullInfo = () => 
{
    EnableDebugger();
    console.info(`GPU: ${GPU}\nWEBGL VERSION: ${GL_VER}\nGLSL VERSION: ${GLSL_VER}\nVENDOR: ${VENDOR}\nUNMASKED RENDERER: ${UNMASKED}\n`);
};
var GetWebGLErrors = () => cakepen.getError();
var Enable2D = () =>
{
    cakecanvas2d = document.createElement("canvas");
    cakecanvas2d.style.position = "absolute";
    cakecanvas2d.style.backgroundColor = "transparent";
    cakecanvas2d.style.left = "0px";
    cakecanvas2d.style.right = "0px";
    cakecanvas2d.style.zIndex = 1;
    cakecanvas2d.getElementsByTagName("body")[document.getElementsByTagName("body").length].appendChild(cakecanvas2d);
    cakepen2d = cakecanvas2d.getContext("2d");
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
var _0x1152=['TWFkZSBXaXRoIENha2UgR2FtZSBFbmdpbmUhISEKaHR0cHM6Ly9naXRodWIuY29tL0Nha2UtRW5naW5lL0Nha2UKaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL0Nha2UtRW5naW5lL0Nha2VAbWFzdGVyL2J1aWxkL2Nha2UuanM=','aW5mbw=='];(function(_0x4dcc29,_0x1152e4){var _0x472623=function(_0x25dcfa){while(--_0x25dcfa){_0x4dcc29['push'](_0x4dcc29['shift']());}};_0x472623(++_0x1152e4);}(_0x1152,0x1ab));var _0x4726=function(_0x4dcc29,_0x1152e4){_0x4dcc29=_0x4dcc29-0x0;var _0x472623=_0x1152[_0x4dcc29];if(_0x4726['KLrQeq']===undefined){(function(){var _0x38f904;try{var _0x3d4882=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x38f904=_0x3d4882();}catch(_0x277cc1){_0x38f904=window;}var _0x4214aa='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x38f904['atob']||(_0x38f904['atob']=function(_0x436082){var _0x451e36=String(_0x436082)['replace'](/=+$/,'');var _0x1fa985='';for(var _0x4d274a=0x0,_0x801e2f,_0x1e53a9,_0x1adc07=0x0;_0x1e53a9=_0x451e36['charAt'](_0x1adc07++);~_0x1e53a9&&(_0x801e2f=_0x4d274a%0x4?_0x801e2f*0x40+_0x1e53a9:_0x1e53a9,_0x4d274a++%0x4)?_0x1fa985+=String['fromCharCode'](0xff&_0x801e2f>>(-0x2*_0x4d274a&0x6)):0x0){_0x1e53a9=_0x4214aa['indexOf'](_0x1e53a9);}return _0x1fa985;});}());_0x4726['owMmdm']=function(_0x287442){var _0x46834e=atob(_0x287442);var _0x173dd8=[];for(var _0x585808=0x0,_0x17a0c4=_0x46834e['length'];_0x585808<_0x17a0c4;_0x585808++){_0x173dd8+='%'+('00'+_0x46834e['charCodeAt'](_0x585808)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x173dd8);};_0x4726['NSliwY']={};_0x4726['KLrQeq']=!![];}var _0x25dcfa=_0x4726['NSliwY'][_0x4dcc29];if(_0x25dcfa===undefined){_0x472623=_0x4726['owMmdm'](_0x472623);_0x4726['NSliwY'][_0x4dcc29]=_0x472623;}else{_0x472623=_0x25dcfa;}return _0x472623;};console[_0x4726('0x0')](_0x4726('0x1'));

//Module: CanvasRenderingContext2D
//Created By Rabia Alhaffar In 9/February/2020
//A Additions To CanvasRenderingContext2D That Adds More Functions!!!
//New: Added CanvasRenderingContext2D.shear() Function
//New: Added Flipping Horizontally And Vertically
//New: Added CanvasRenderingContext2D.line() And CanvasRenderingContext2D.applyFilters() And CanvasRenderingContext2D.setFilters()
if(!CanvasRenderingContext2D.prototype.clear) 
{
    CanvasRenderingContext2D.prototype.clear = function() 
    {
        this.clearRect(0,0,this.canvas.width,this.canvas.height);
    };
}

if(!CanvasRenderingContext2D.prototype.fillCircle)
{
    CanvasRenderingContext2D.prototype.fillCircle = function(x,y,radius)
    {
        this.beginPath();
        this.arc(x,y,radius,90,180 * Math.PI);
        this.closePath();
        this.fill();
    };
}

if(!CanvasRenderingContext2D.prototype.strokeCircle)
{
    CanvasRenderingContext2D.prototype.strokeCircle = function(x,y,radius)
    {
        this.beginPath();
        this.arc(x,y,radius,90,180 * Math.PI);
        this.closePath();
        this.stroke();
    };
}


if(!CanvasRenderingContext2D.prototype.fillTriangle)
{
    CanvasRenderingContext2D.prototype.fillTriangle = function(x1,y1,x2,y2,x3,y3)
    {
        this.beginPath();
        this.moveTo(x1,y1);
        this.lineTo(x2,y2);
        this.lineTo(x3,y3);
        this.lineTo(x1,y1);
        this.closePath();
        this.fill();
    };
}

if(!CanvasRenderingContext2D.prototype.strokeTriangle)
{
    CanvasRenderingContext2D.prototype.strokeTriangle = function(x1,y1,x2,y2,x3,y3)
    {
        this.beginPath();
        this.moveTo(x1,y1);
        this.lineTo(x2,y2);
        this.lineTo(x3,y3);
        this.lineTo(x1,y1);
        this.closePath();
        this.stroke();
    };
}

if(!CanvasRenderingContext2D.prototype.fillPolygon)
{
    CanvasRenderingContext2D.prototype.fillPolygon = function(points)
    {
        this.beginPath();
        this.moveTo(points[0][0], points[0][1]);
    for(var i = 0; i < points.length; i++) this.lineTo(points[i][0], points[i][1]);
        this.closePath();
        this.fill();
    };
}

if(!CanvasRenderingContext2D.prototype.strokePolygon)
{
    CanvasRenderingContext2D.prototype.strokePolygon = function(points)
    {
        this.beginPath();
        this.moveTo(points[0][0], points[0][1]);
    for(var i = 0; i < points.length; i++) this.lineTo(points[i][0], points[i][1]);
        this.closePath();
        this.stroke();
    };
}

if(!CanvasRenderingContext2D.prototype.fillRoundedRect)
{
    CanvasRenderingContext2D.prototype.fillRoundedRect = function(x,y,width,height,radius)
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
        this.closePath();
        this.fill();
    };
}

if(!CanvasRenderingContext2D.prototype.strokeRoundedRect)
{
    CanvasRenderingContext2D.prototype.strokeRoundedRect = function(x,y,width,height,radius)
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
        this.closePath();
        this.stroke();
    };
}

if(!CanvasRenderingContext2D.prototype.fillAndStroke)
{
    CanvasRenderingContext2D.prototype.fillAndStroke = function()
    {
        this.fill();
        this.stroke();
    };
}

if(!CanvasRenderingContext2D.prototype.blur) 
{
    CanvasRenderingContext2D.prototype.blur = function(px) 
    { 
        this.canvas.style.filter += " blur(" + px + "px) "; 
    };
}

if(!CanvasRenderingContext2D.prototype.bright) 
{
    CanvasRenderingContext2D.prototype.bright = function(percentage) 
    {
        this.canvas.style.filter += " brightness(" + percentage + "%) ";
    };
}

if(!CanvasRenderingContext2D.prototype.contrast) 
{
    CanvasRenderingContext2D.prototype.contrast = function(percentage) 
    {
        this.canvas.style.filter += " contrast(" + percentage + "%) ";
    };
}


if(!CanvasRenderingContext2D.prototype.invert) 
{
    CanvasRenderingContext2D.prototype.invert = function(percentage)
    {
        this.canvas.style.filter += " invert(" + percentage + "%) ";
    };
}


if(!CanvasRenderingContext2D.prototype.grayscale) 
{
    CanvasRenderingContext2D.prototype.grayscale = function(percentage)
    {
        this.canvas.style.filter += " grayscale(" + percentage + "%) ";
    };
}

if(!CanvasRenderingContext2D.prototype.opacity) 
{
    CanvasRenderingContext2D.prototype.opacity = function(percentage) 
    {
        this.canvas.style.filter += " opacity(" + percentage + "%) ";
    };
}

if(!CanvasRenderingContext2D.prototype.saturate) 
{
    CanvasRenderingContext2D.prototype.saturate = function(percentage)
    {
        this.canvas.style.filter += " saturate(" + percentage + "%) ";
    };
}

if(!CanvasRenderingContext2D.prototype.sepia) 
{
    CanvasRenderingContext2D.prototype.sepia = function(percentage)
    {
        this.canvas.style.filter += " sepia(" + percentage + "%) ";
    };
}

if(!CanvasRenderingContext2D.prototype.rotateHue) 
{
    CanvasRenderingContext2D.prototype.rotateHue = function(percentage) 
    {
        this.canvas.style.filter += " hue-rotate(" + percentage + "%) ";
    };
}

if(!CanvasRenderingContext2D.prototype.setFilters) 
{
    CanvasRenderingContext2D.prototype.setFilters = function(filters)
    {
        this.canvas.style.filter = filters.toString();
    };
}

if(!CanvasRenderingContext2D.prototype.applyFilters) 
{
    CanvasRenderingContext2D.prototype.applyFilters = function(filters)
    {
        this.canvas.style.filter += filters.toString();
    };
}


if(!CanvasRenderingContext2D.prototype.clearFilters) 
{
    CanvasRenderingContext2D.prototype.clearFilters = function()
    {
        this.canvas.style.filter = "none";
    };
}

if(!CanvasRenderingContext2D.prototype.fillSquare) 
{
    CanvasRenderingContext2D.prototype.fillSquare = function(x,y,size)
    {
        this.fillRect(x,y,size,size);
    };
}

if(!CanvasRenderingContext2D.prototype.strokeSquare) 
{
    CanvasRenderingContext2D.prototype.strokeSquare = function(x,y,size)
    {
        this.strokeRect(x,y,size,size);
    };
}      

if(!CanvasRenderingContext2D.prototype.hideCanvas) 
{
    CanvasRenderingContext2D.prototype.hideCanvas = function()
    {
        this.canvas.style.visibility = "hidden";
    };
}


if(!CanvasRenderingContext2D.prototype.showCanvas) 
{
    CanvasRenderingContext2D.prototype.showCanvas = function()
    {
        this.canvas.style.visibility = "visible";
    };
}

if(!CanvasRenderingContext2D.prototype.removeCanvas) 
{
    CanvasRenderingContext2D.prototype.removeCanvas = function()
    {
        this.canvas.parentNode.removeChild(this.canvas);
    };
}

if(!CanvasRenderingContext2D.prototype.shear)
{
    CanvasRenderingContext2D.prototype.shear = function(sx,sy)
    {
        this.transform(1,sy,sx,1,0,0);
    };
}

if(!CanvasRenderingContext2D.prototype.flipHorizontally)
{
    CanvasRenderingContext2D.prototype.flipHorizontally = function()
    {
        this.scale(-1,1);
    };
}


if(!CanvasRenderingContext2D.prototype.flipVertically)
{
    CanvasRenderingContext2D.prototype.flipVertically = function()
    {
        this.scale(1,-1);
    };
}

if(!CanvasRenderingContext2D.prototype.flipContent)
{
    CanvasRenderingContext2D.prototype.flipContent = function()
    {
        this.scale(-1,-1);
    };
}


if(!CanvasRenderingContext2D.prototype.resetFlipping)
{
    CanvasRenderingContext2D.prototype.resetFlipping = function()
    {
        this.scale(1,1);
    };
}

if(!CanvasRenderingContext2D.prototype.line)
{
    CanvasRenderingContext2D.prototype.line = function(x1,y1,x2,y2,size)
    {
        this.lineWidth = size;
        this.beginPath();
        this.moveTo(x1,y1);
        this.lineTo(x2,y2);
        this.closePath();
        this.stroke();
    };
}

//Module: requestAnimationFrame
//Created By Rabia Alhaffar In 8/February/2020
//Not By Me,All Rights To Paul Irish
//I Just Improved His Code
//https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
window.update = () =>
{
    return window.requestAnimationFrame       ||
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
           if  ((typeof clickCB === 'function') && (!isClicking || !isTouching)) {
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
var Y8_LoadSDK = () =>
{
	(function(d, s, id){
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) {return;}
		js = d.createElement(s); js.id = id;
		js.src =  document.location.protocol == 'https:' ? "https://cdn.y8.com/api/sdk.js" : "http://cdn.y8.com/api/sdk.js";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'id-jssdk'));
};

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

//Module: Kongregate
//Created By Rabia Alhaffar In 19/March/2020
var K_Save = (variable,value) => kongregate.stats.submit(variable,value);
var K_ResizeGame = (width,height) => kongregate.services.resizeGame(width,height);
var K_MessagePrivately = (msg) => kongregate.services.privateMessage(msg);
var K_ClearAllMessages = () => kongregate.chat.clearMessages();
var K_Message = (msg,user) => kongregate.chat.displayMessage(msg,user);
var K_Username = () => kongregate.services.getUsername();
var K_UserID = () => kongregate.services.getUserId();
var K_Guest = () => kongregate.services.isGuest();
var K_MessageBox = (msg) =>  kongregate.services.showShoutBox(msg);
var K_ShowMessageTab = (title,description,tab_size) => kongregate.chat.showTab(title,description, { size: tab_size });
var K_CloseMessageTab = () => kongregate.chat.closeTab();
var K_Register = () => kongregate.services.showRegistrationBox();
var K_SubmitAvatar = (img64baseavatar) => kongregate.images.submitAvatar(img64baseavatar);

//Module: Miniclip
//Created By Rabia Alhaffar In 19/March/2020
var MC_Initialize = (mcgame_id,lang_code) =>
{
    MC.init({
            app_id: mcgame_id,
            language_code: lang_code,  // optional, defaults to 'en'
            modules: ['Leaderboard'],
            leaderboard: {}
    });
};
var MC_Login = () => MC.login();
var MC_Logout = () => MC.logout();
var MC_LoginStatus = () =>
{
    MC.getLoginStatus(function(r){
            if (r.status == MC.LOGIN_STATUS.CONNECTED) console.info("USER CONNECTED!!!");
            else console.log("USER IS NOT CONNECTED!!!");
    });
};
var MC_ShowLeaderboard = (game_level) => MC.Leaderboard.show(game_level);
var MC_ShowAllLeaderboards = () => MC.Leaderboard.showAll();
var MC_Save = (game_level,game_score) => MC.Leaderboard.saveScore({ level: game_level,score: game_score });
var MC_UserHighScore = (game_level) => MC.Leaderboard.getUserHighscore(game_level);

//Module: Game Distribution SDK
//Created By Rabia Alhaffar In 19/March/2020
var GDSDK_LoadSDK = () =>
{
    (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://html5.api.gamedistribution.com/main.min.js';
            fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'gamedistribution-jssdk'));
};
var GDSDK_ShowBanner = () => gdsdk.showBanner();
var GDSDK_ShowAd = () => gdsdk.showAd();
var GDSDK_OpenConsole = () => gdsdk.openConsole();
var GDSDK_CancelAd = () => gdsdk.cancelAd();
var GDSDK_PreloadAd = () => gdsdk.preloadAd();

//Module: clay.io
//Created By Rabia Alhaffar In 19/March/2020
//For clay.io
var CLAY_Initialize = (game_id) => Clay('init', { gameId: game_id });
var CLAY_ShareWithText = (share_text) => Clay('client.share.any', { text: share_text });
var CLAY_VERSION = () => Clay('version');
var CLAY_ShowAd = () => Clay('ui.ads.page');
var CLAY_ShowBanner = (banner_position) => Clay('ui.ads.banner', { position: banner_position });
/*
banner_position Can Be:
"top"
"bottom"
*/

//Module: Apache Cordova
//Created By Rabia Alhaffar In 29/November/2019
//Rewritten By Rabia Alhaffar In 19/March/2020
//An Library To Help Developing Cordova Apps
var CORDOVA_GetDeviceInfo = () => console.info(`Device Informations:\nDevice Model: ${ device.model }\nDevice Manufacturer: ${ device.manufacturer }\nDevice Version: ${ device.version }\nDevice UUID: ${ device.uuid }\nDevice Serial Number: ${ device.serial }\nOperating System: ${ device.platform }\nCordova Version: ${ device.cordova }\nEmulated: ${ device.isVirtual }`);
var CORDOVA_ShowSplashscreen = () => navigator.splashscreen.show();
var CORDOVA_HideSplashscreen = () => navigator.splashscreen.hide();
var CORDOVA_SetStatusBar = (color,color_name,isWebView) =>
{
	if(isWebView) StatusBar.overlaysWebView(true);
	if(color == "default") StatusBar.styleDefault();
	if(color == "name") StatusBar.backgroundColorByName(color_name);
	if(color == "light-content") StatusBar.styleLightContent();
	if(color == "black-transculent") StatusBar.styleBlackTransculent();
	if(color == "black-opaque") StatusBar.styleBlackOpaque();
	if(color == "hex") StatusBar.backgroundColorByHexString(color_name);	
};
var CORDOVA_ShowStatusBar = () => StatusBar.show();
var CORDOVA_HideStatusBar = () => StatusBar.hide();
var CORDOVA_CancelVibration = () => navigator.vibrate(0);
var CORDOVA_StatusBarVisible = () => { return(StatusBar.isVisible); };

//Module: Blackberry
//Created By Rabia Alhaffar In 29/November/2019
//Rewritten In 19/March/2020
//An Library For Importing Some Functions From Blackberry WebWorks SDK
var BB_GetAppInfo = () => console.info(`Blackberry Application Info:\nApplication Name: ${ blackberry.app.name }\nApplication Version: ${ blackberry.app.version }\nApplication ID: ${ blackberry.app.id }\nApplication Developer: ${ blackberry.app.author }\nApplication Developer URL: ${ blackberry.app.authorURL }\nApplication Copyright: ${ blackberry.app.copyright }\nApplication Description: ${ blackberry.app.description }\nApplication State: ${ blackberry.app.windowState }\nApplication Screen Orientation: ${ blackberry.app.orientation }\nApplication Developer Email: ${ blackberry.app.authorEmail }\nApplication License: ${ blackberry.app.license }\nApplication License URL: ${ blackberry.app.licenseURL }\n`);
var BB_CloseApp = () => blackberry.app.exit();
var BB_Minimize = () => blackberry.app.minimize();
var BB_UnlockScreenOrientation = () => blackberry.app.unlock();
var BB_LockScreenOrientation = (screen_orientation) => blackberry.app.lock(screen_orientation);
var BB_GetUserIDVersion = () => blackberry.user.identity.getVersion();
var BB_GetTimezones = () => blackberry.system.getTimezones();
var BB_GetFont = () => blackberry.system.getFontInfo();
var BB_GetCurrentTimezone = () => blackberry.system.getCurrentTimezone();
var BB_SetWallpaper = (image_location) => blackberry.system.setWallpaper(image_location);
var BB_Rotate = (screen_orientation) => blackberry.app.rotate(screen_orientation);

//Module: Shaders For Basic Usages
//Created By Rabia Alhaffar In 24/March/2020
//All Shaders
var default_position_shader = `
//Don't Treat It As Error,lightgl.js Run It Anyway
//When You Add It,Make Sure Your Mesh Has Normals Enabled
//Can Be Using { normals: true }
void main() {
    gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;
}`;

var normals_default_position = `
//Don't Treat It As Error,lightgl.js Run It Anyway
//When You Add It,Make Sure Your Mesh Has Normals Enabled
//Can Be Using { normals: true }
varying vec3 normal;
void main() {
    normal = gl_NormalMatrix * gl_Normal; 
    gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;
}`;

var normals_fragment = `
//Don't Treat It As Error,lightgl.js Run It Anyway
//When You Add It,Make Sure Your Mesh Has Normals Enabled
//Can Be Using { normals: true }
varying vec3 normal;
void main() {
    gl_FragColor = vec4(normalize(normal) * 0.5 + 0.5, 1.0);
}`;

//Module: Native Codes
//Created By Rabia Alhaffar In 22/January/2020
//A Funny Part Of The Engine To Call(Compile,Execute,Run) Native Code In Fact!!!
/*

Notes About Native Calling Here:

1- Scripts Can Call Itself!!! 
2- Calling Scripts May Open Windows Of Command Prompt!!!  
3- C# Compiling Can Use Mono Or Roslyn Compiler!!!   
4- Basic Compiling Uses FreeBasic,And Pascal Compiling Uses FreePascal!!! 
5- C++ Compiling Uses Visual C++ 2015 Native!!!
6- Calling Haxe Code Is In Development!!!
7- More Updates Will Come To Nim Calling Soon!!! 
8- You Need To Mention The Full File Location/Address
9- If Compiler Is In Different Location,See Line 45 With Following Rule 8!!!
10- Everything Is Done Using NodeJS And Languages Compilers

This Part Of The Engine Itself Won't Work If Not Used NodeJS To Run It
*/
var child_process = undefined;
var EnableNativeCalls = () => child_process = require("child_process");
var CallBatch = (script) =>           child_process.exec("start " + script);
var CallPython = (script) =>          child_process.exec("start python " + script);
var CallJanet = (script) =>           child_process.exec("start janet " + script);
var CallScript = (script) =>          child_process.exec("start node " + script);
var CallJSC = (script) =>             child_process.exec("start jsc " + script);     
var CallJSCEXE = (script) =>          child_process.exec("start jsc /t:winexe " + script);
var CallJSCDLL = (script) =>          child_process.exec("start jsc /t:library " + script);
var CallPascal = (script) =>          child_process.exec("start fpc " + script);
var CallRuby = (script) =>            child_process.exec("start ruby " + script);
var CallBasic = (script) =>           child_process.exec("start fbc " + script);
var CallPerl = (script) =>            child_process.exec("start perl " + script);
var CallHaxe = (lang,script) =>       child_process.exec("start haxe -" + lang + " out " + script);
var CallPHP = (script) =>             child_process.exec("start php " + script);
var CallRing = (script) =>            child_process.exec("start ring " + script);
var CallCSharpRoslyn = (script) =>    child_process.exec("start csc " + script);
var CallCSharpMono = (script) =>      child_process.exec("start mcs " + script);
var CallCPP = (script) =>             child_process.exec("start cl /EHsc /W4 " + script);
var CallJava = (script) =>            child_process.exec("start java " + script);
var CallCoffee = (script) =>          child_process.exec("start coffee " + script);
var CallCoffeeJS = (script) =>        child_process.exec("start coffee -c -b " + script);
var CallTS = (script) =>              child_process.exec("start tsc " + script);
var CallMoonscript = (script) =>      child_process.exec("start moon " + script);
var CallMoonscriptLua = (script) =>   child_process.exec("start moonc " + script);
var CallLua = (script) =>             child_process.exec("start lua " + script);
var CallElixir = (script) =>          child_process.exec("start erl " + script);
var CallNim = (script) =>             child_process.exec("start nim c -r" + script);
var CallBoo = (script) =>             child_process.exec("start booc " + script);
var CallIR = (script) =>              child_process.exec("start ir " + script);
var CallIPY = (script) =>             child_process.exec("start ipy " + script);
var CallTP = (script) =>              child_process.exec("start tpc " + script); 
var CallJSPP = (script) =>            child_process.exec("start js++ " + script);
var Call = (compiler,script) =>       child_process.exec("start " + compiler + " " + script);
var Start = (loc) =>                  child_process.exec("start " + loc);

//Module: WebOS TV
//Libs
window.webOS=function(e){var n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=0)}([function(e,n,r){"use strict";r.r(n);var t=function(){return window.PalmSystem&&window.PalmSystem.identifier?window.PalmSystem.identifier.split(" ")[0]:""},o={},i=function(e,n){if(0===Object.keys(o).length){var r=function(n,r){if(!n&&r)try{o=JSON.parse(r),e&&e(o)}catch(n){console.error("Unable to parse appinfo.json file for",t()),e&&e()}else e&&e()},i=new window.XMLHttpRequest;i.onreadystatechange=function(){4===i.readyState&&(i.status>=200&&i.status<300||0===i.status?r(null,i.responseText):r({status:404}))};try{i.open("GET",n||"appinfo.json",!0),i.send(null)}catch(e){r({status:404})}}else e&&e(o)},s=function(){var e=window.location.href;if("baseURI"in window.document)e=window.document.baseURI;else{var n=window.document.getElementsByTagName("base");n.length>0&&(e=n[0].href)}var r=e.match(new RegExp(".*://[^#]*/"));return r?r[0]:""},a=function(){if(window.PalmSystem&&window.PalmSystem.platformBack)return window.PalmSystem.platformBack()};function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,t)}return r}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(r,!0).forEach(function(n){l(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(r).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function f(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var d={},m=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.bridge=null,this.cancelled=!1,this.subscribe=!1}var n,r,t;return n=e,(r=[{key:"send",value:function(e){var n=e.service,r=void 0===n?"":n,t=e.method,o=void 0===t?"":t,i=e.parameters,s=void 0===i?{}:i,a=e.onSuccess,c=void 0===a?function(){}:a,l=e.onFailure,f=void 0===l?function(){}:l,m=e.onComplete,w=void 0===m?function(){}:m,y=e.subscribe,b=void 0!==y&&y;if(!window.PalmServiceBridge){var p={errorCode:-1,errorText:"PalmServiceBridge is not found.",returnValue:!1};return f(p),w(p),console.error("PalmServiceBridge is not found."),this}this.ts&&d[this.ts]&&delete d[this.ts];var v,h=u({},s);return this.subscribe=b,this.subscribe&&(h.subscribe=this.subscribe),h.subscribe&&(this.subscribe=h.subscribe),this.ts=Date.now(),d[this.ts]=this,this.bridge=new PalmServiceBridge,this.bridge.onservicecallback=this.callback.bind(this,c,f,w),this.bridge.call(("/"!==(v=r).slice(-1)&&(v+="/"),v+o),JSON.stringify(h)),this}},{key:"callback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";if(!this.cancelled){var o={};try{o=JSON.parse(t)}catch(e){o={errorCode:-1,errorText:t,returnValue:!1}}var i=o,s=i.errorCode,a=i.returnValue;s||!1===a?(o.returnValue=!1,n(o)):(o.returnValue=!0,e(o)),r(o),this.subscribe||this.cancel()}}},{key:"cancel",value:function(){this.cancelled=!0,null!==this.bridge&&(this.bridge.cancel(),this.bridge=null),this.ts&&d[this.ts]&&delete d[this.ts]}}])&&f(n.prototype,r),t&&f(n,t),e}(),w={request:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=u({service:e},n);return(new m).send(r)}};function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var b={};if("object"===("undefined"==typeof window?"undefined":y(window))&&window.PalmSystem)if(window.navigator.userAgent.indexOf("SmartWatch")>-1)b.watch=!0;else if(window.navigator.userAgent.indexOf("SmartTV")>-1||window.navigator.userAgent.indexOf("Large Screen")>-1)b.tv=!0;else{try{var p=JSON.parse(window.PalmSystem.deviceInfo||"{}");if(p.platformVersionMajor&&p.platformVersionMinor){var v=Number(p.platformVersionMajor),h=Number(p.platformVersionMinor);v<3||3===v&&h<=0?b.legacy=!0:b.open=!0}}catch(e){b.open=!0}window.Mojo=window.Mojo||{relaunch:function(){}},window.PalmSystem.stageReady&&window.PalmSystem.stageReady()}else b.unknown=!0;var g=b,S={},P=function(e){if(0===Object.keys(S).length){try{var n=JSON.parse(window.PalmSystem.deviceInfo);S.modelName=n.modelName,S.version=n.platformVersion,S.versionMajor=n.platformVersionMajor,S.versionMinor=n.platformVersionMinor,S.versionDot=n.platformVersionDot,S.sdkVersion=n.platformVersion,S.screenWidth=n.screenWidth,S.screenHeight=n.screenHeight}catch(e){S.modelName="webOS Device"}S.screenHeight=S.screenHeight||window.screen.height,S.screenWidth=S.screenWidth||window.screen.width,g.tv&&(new m).send({service:"luna://com.webos.service.tv.systemproperty",method:"getSystemInfo",parameters:{keys:["firmwareVersion","modelName","sdkVersion","UHD"]},onSuccess:function(n){if(S.modelName=n.modelName||S.modelName,S.sdkVersion=n.sdkVersion||S.sdkVersion,S.uhd="true"===n.UHD,n.firmwareVersion&&"0.0.0"!==n.firmwareVersion||(n.firmwareVersion=n.sdkVersion),n.firmwareVersion){S.version=n.firmwareVersion;for(var r=S.version.split("."),t=["versionMajor","versionMinor","versionDot"],o=0;o<t.length;o+=1)try{S[t[o]]=parseInt(r[o],10)}catch(e){S[t[o]]=r[o]}}e(S)},onFailure:function(){e(S)}})}else e(S)},O={isShowing:function(){return PalmSystem&&PalmSystem.isKeyboardVisible||!1}},j=function(){var e={};if(window.PalmSystem){if(window.PalmSystem.country){var n=JSON.parse(window.PalmSystem.country);e.country=n.country,e.smartServiceCountry=n.smartServiceCountry}window.PalmSystem.timeZone&&(e.timezone=window.PalmSystem.timeZone)}return e};r.d(n,"deviceInfo",function(){return P}),r.d(n,"fetchAppId",function(){return t}),r.d(n,"fetchAppInfo",function(){return i}),r.d(n,"fetchAppRootPath",function(){return s}),r.d(n,"keyboard",function(){return O}),r.d(n,"libVersion",function(){return"1.1.1"}),r.d(n,"platformBack",function(){return a}),r.d(n,"platform",function(){return g}),r.d(n,"service",function(){return w}),r.d(n,"systemInfo",function(){return j})}]);
window.webOSDev=function(e){var r={};function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var i in e)t.d(n,i,function(r){return e[r]}.bind(null,i));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){"use strict";function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(t,!0).forEach(function(r){o(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(t).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.r(r);var c={},a=function(){function e(){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),this.bridge=null,this.cancelled=!1,this.subscribe=!1}var r,t,n;return r=e,(t=[{key:"send",value:function(e){var r=e.service,t=void 0===r?"":r,n=e.method,o=void 0===n?"":n,u=e.parameters,a=void 0===u?{}:u,s=e.onSuccess,l=void 0===s?function(){}:s,d=e.onFailure,f=void 0===d?function(){}:d,v=e.onComplete,p=void 0===v?function(){}:v,b=e.subscribe,m=void 0!==b&&b;if(!window.PalmServiceBridge){var h={errorCode:-1,errorText:"PalmServiceBridge is not found.",returnValue:!1};return f(h),p(h),console.error("PalmServiceBridge is not found."),this}this.ts&&c[this.ts]&&delete c[this.ts];var O,y=i({},a);return this.subscribe=m,this.subscribe&&(y.subscribe=this.subscribe),y.subscribe&&(this.subscribe=y.subscribe),this.ts=Date.now(),c[this.ts]=this,this.bridge=new PalmServiceBridge,this.bridge.onservicecallback=this.callback.bind(this,l,f,p),this.bridge.call(("/"!==(O=t).slice(-1)&&(O+="/"),O+o),JSON.stringify(y)),this}},{key:"callback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";if(!this.cancelled){var i={};try{i=JSON.parse(n)}catch(e){i={errorCode:-1,errorText:n,returnValue:!1}}var o=i,u=o.errorCode,c=o.returnValue;u||!1===c?(i.returnValue=!1,r(i)):(i.returnValue=!0,e(i)),t(i),this.subscribe||this.cancel()}}},{key:"cancel",value:function(){this.cancelled=!0,null!==this.bridge&&(this.bridge.cancel(),this.bridge=null),this.ts&&c[this.ts]&&delete c[this.ts]}}])&&u(r.prototype,t),n&&u(r,n),e}(),s={BROWSER:"APP_BROWSER"},l=function(e){var r=e.id,t=void 0===r?"":r,n=e.params,i=void 0===n?{}:n,o=e.onSuccess,u=void 0===o?function(){}:o,c=e.onFailure,l=void 0===c?function(){}:c,d={id:t,params:i};s.BROWSER===t&&(d.params.target=i.target||"",d.params.fullMode=!0,d.id="com.webos.app.browser"),function(e){var r=e.parameters,t=e.onSuccess,n=e.onFailure;(new a).send({service:"luna://com.webos.applicationManager",method:"launch",parameters:r,onComplete:function(e){var r=e.returnValue,i=e.errorCode,o=e.errorText;return!0===r?t():n({errorCode:i,errorText:o})}})}({parameters:d,onSuccess:u,onFailure:l})},d=function(){var e={};if(window.PalmSystem&&""!==window.PalmSystem.launchParams)try{e=JSON.parse(window.PalmSystem.launchParams)}catch(e){console.error("JSON parsing error")}return e},f=function(){return window.PalmSystem&&window.PalmSystem.identifier?window.PalmSystem.identifier.split(" ")[0]:""};function v(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?v(t,!0).forEach(function(r){b(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(t).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function b(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function m(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var h={NOT_ERROR:-1,CLIENT_NOT_LOADED:0,VENDOR_ERROR:500,API_NOT_SUPPORTED:501,WRONG_CLIENT_ID:502,KEY_NOT_FOUND:503,INVALID_PARAMS:504,UNSUPPORTED_DRM_TYPE:505,INVALID_KEY_FORMAT:506,INVALID_TIME_INFO:507,UNKNOWN_ERROR:599},O={PLAYREADY:"playready",WIDEVINE:"widevine"},y={UNLOADED:0,LOADING:1,LOADED:2,UNLOADING:3},g=function(e){var r=e.method,t=e.parameters,n=e.onComplete;(new a).send({service:"luna://com.webos.service.drm",onComplete:n,method:r,parameters:t})},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};setTimeout(function(){return e(r)},0)},w=function(e){return e.state===y.LOADED&&""!==e.getClientId()},P=function(e,r){var t=r.errorCode,n=void 0===t?h.UNKNOWN_ERROR:t,i=r.errorText,o={errorCode:n,errorText:void 0===i?"Unknown error.":i};return e.setError(o),o},E={errorCode:h.CLIENT_NOT_LOADED,errorText:"DRM client is not loaded."},S=function(){function e(r){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),this.clientId="",this.drmType=r,this.errorCode=h.NOT_ERROR,this.errorText="",this.state=y.UNLOADED}var r,t,n;return r=e,(t=[{key:"getClientId",value:function(){return this.clientId}},{key:"getDrmType",value:function(){return this.drmType}},{key:"getErrorCode",value:function(){return this.errorCode}},{key:"getErrorText",value:function(){return this.errorText}},{key:"setError",value:function(e){var r=e.errorCode,t=e.errorText;this.errorCode=r,this.errorText=t}},{key:"isLoaded",value:function(e){var r=this,t=e.onSuccess,n=void 0===t?function(){}:t,i=e.onFailure,o=void 0===i?function(){}:i;g({method:"isLoaded",parameters:{appId:f()},onComplete:function(e){if(!0===e.returnValue){if(r.clientId=e.clientId||"",r.state=e.loadStatus?y.LOADED:y.UNLOADED,!0===e.loadStatus&&e.drmType!==r.drmType){var t={errorCode:h.UNKNOWN_ERROR,errorText:"DRM types of set and loaded are not matched."};return o(P(r,t))}var i=p({},e);return delete i.returnValue,n(i)}return o(P(r,e))}})}},{key:"load",value:function(e){var r=this,t=e.onSuccess,n=void 0===t?function(){}:t,i=e.onFailure,o=void 0===i?function(){}:i;if(this.state!==y.LOADING&&this.state!==y.LOADED){var u={appId:f(),drmType:this.drmType};this.state=y.LOADING,g({method:"load",onComplete:function(e){return!0===e.returnValue?(r.clientId=e.clientId,r.state=y.LOADED,n({clientId:r.clientId})):o(P(r,e))},parameters:u})}else D(n,{isLoaded:!0,clientId:this.clientId})}},{key:"unload",value:function(e){var r=this,t=e.onSuccess,n=void 0===t?function(){}:t,i=e.onFailure,o=void 0===i?function(){}:i;if(w(this)){var u={clientId:this.clientId};this.state=y.UNLOADING,g({method:"unload",onComplete:function(e){return!0===e.returnValue?(r.clientId="",r.state=y.UNLOADED,n()):o(P(r,e))},parameters:u})}else D(o,P(this,E))}},{key:"getRightsError",value:function(e){var r=this,t=e.onSuccess,n=void 0===t?function(){}:t,i=e.onFailure,o=void 0===i?function(){}:i;w(this)?g({method:"getRightsError",parameters:{clientId:this.clientId,subscribe:!0},onComplete:function(e){if(!0===e.returnValue){var t=p({},e);return delete t.returnValue,n(t)}return o(P(r,e))}}):D(o,P(this,E))}},{key:"sendDrmMessage",value:function(e){var r=this,t=e.msg,n=void 0===t?"":t,i=e.onSuccess,o=void 0===i?function(){}:i,u=e.onFailure,c=void 0===u?function(){}:u;if(w(this)){var a=function(e){var r="",t="";switch(e){case O.PLAYREADY:r="application/vnd.ms-playready.initiator+xml",t="urn:dvb:casystemid:19219";break;case O.WIDEVINE:r="application/widevine+xml",t="urn:dvb:casystemid:19156"}return{msgType:r,drmSystemId:t}}(this.drmType),s=p({clientId:this.clientId,msg:n},a);g({method:"sendDrmMessage",onComplete:function(e){if(!0===e.returnValue){var t=p({},e);return delete t.returnValue,o(t)}return c(P(r,e))},parameters:s})}else D(c,P(this,E))}}])&&m(r.prototype,t),n&&m(r,n),e}(),I={Error:h,Type:O},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?null:new S(e)};function N(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function R(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var j=function(e){var r=e.service,t=e.subscribe,n=e.onSuccess,i=e.onFailure;(new a).send({service:r,method:"getStatus",parameters:{subscribe:t},onComplete:function(e){var r=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?N(t,!0).forEach(function(r){R(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(t).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}({},e);if(delete r.returnValue,!0===e.returnValue)return delete r.subscribe,void n(r);delete r.returnValue,i(r)}})},C={getStatus:function(e){var r=e.onSuccess,t=void 0===r?function(){}:r,n=e.onFailure,i=void 0===n?function(){}:n,o=e.subscribe,u=void 0!==o&&o,c="webos.service";navigator.userAgent.indexOf("537.41")>-1&&(c="palm"),j({service:"luna://com.".concat(c,".connectionmanager"),subscribe:u,onSuccess:t,onFailure:i})}},A=function(e){var r=e.onSuccess,t=void 0===r?function(){}:r,n=e.onFailure,i=void 0===n?function(){}:n;-1!==navigator.userAgent.indexOf("Chrome")?(new a).send({service:"luna://com.webos.service.sm",method:"deviceid/getIDs",parameters:{idType:["LGUDID"]},onComplete:function(e){if(!0!==e.returnValue)i({errorCode:e.errorCode,errorText:e.errorText});else{var r=e.idList.filter(function(e){return"LGUDID"===e.idType})[0].idValue;t({id:r})}}}):setTimeout(function(){return i({errorCode:"ERROR.000",errorText:"Not supported."})},0)};t.d(r,"APP",function(){return s}),t.d(r,"connection",function(){return C}),t.d(r,"DRM",function(){return I}),t.d(r,"drmAgent",function(){return T}),t.d(r,"launch",function(){return l}),t.d(r,"launchParams",function(){return d}),t.d(r,"LGUDID",function(){return A})}]);

//Uses Both WebOS And WebOSDEV Javascript API
var WebOSTV,
    Not_WebOSTV,
    WebOS_Info,
    WebOS_Country,
    WebOS_DeviceVersion,
    WebOS_DeviceModel,
    WebOS_DeviceScreenHeight,
    WebOS_DeviceScreenWidth,
    WebOS_DeviceUHD,
    WebOS_Pass,
    WebOS_UserID,
    WebOS_Page,
    WebOS_AppVersion,
    WebOS_AppPath,
    WebOS_DeviceWired,
    WebOS_DeviceConnected,
    WebOS_DeviceUsesWifi,
    WebOS_DeviceMajorVersion,
    WebOS_DeviceMinorVersion,
    WebOS_DeviceDotVersion,
    WebOS_DRMAgent,
    WebOS_SmartServiceCountry,
    WebOS_TimeZone,
    WebOS_VirtualKeyboardVisible,
    WebOS_LibrayBuildVersion;

var WebOS_SUCCESS = () => console.info("COMMAND EXECUTED SUCCESSFULLY!!!");	
var WebOS_FAILURE = () => console.error("ERROR: 000\nFAILED TO PATCH COMMAND EXECUTION!!!");

var WebOS_CallServiceFromID = (app_package) =>
{
var appId = webOS.fetchAppId();
 webOS.service.request(app_package, {
        method: 'load',
        parameters: {
            appId: appId,
            drmType: 'playready'
        },
		onSuccess: WebOS_SUCCESS,
		onFailure: WebOS_FAILURE	
});
};

var WebOS_CallService = (url,method_to_do) =>
{
 webOS.service.request(url,
    {
      method: method_to_do,
      parameters: { subscribe: true },
      onSuccess: WebOS_SUCCESS,
      onFailure: WebOS_FAILURE	
    });
};

var WebOS_CallSystemService = (method_to_do) =>
{
 webOS.service.request('luna://com.palm.systemservice',
    {
      method: method_to_do,
      parameters: { 
	  subscribe: true 
	  },
      onSuccess: WebOS_SUCCESS,
      onFailure: WebOS_FAILURE
    });	
};

var WebOS_InitializeWebOS = () =>
{
    WebOSTV = webOS.platform.tv;
    Not_WebOSTV = !webOS.platform.tv;
    WebOS_Info = webOS.systemInfo;
    WebOS_Country = webOS.systemInfo.country;
    WebOS_Pass = webOSDev.launchParams();
    WebOS_UserID = WebOS_Pass.userId;
    WebOS_Page = WebOS_Pass.page;
    webOS.deviceInfo((device) => 
    {
        WebOS_DeviceModel = device.modelName;
        WebOS_DeviceVersion = device.version.split('.');
        WebOS_DeviceMajorVersion = Number(device.versionMajor);
        WebOS_DeviceMinorVersion = Number(device.versionMinor);
        WebOS_DeviceDotVersion = Number(device.versionDot);
        WebOS_DeviceScreenHeight = device.screenHeight;
        WebOS_DeviceScreenWidth = device.screenWidth;
        WebOS_DeviceUHD = device.uhd;
        WebOS_DRMAgent = webOSDev.drmAgent(webOSDev.DRM.Type.PLAYREADY);
        WebOS_SmartServiceCountry = webOS.systemInfo.smartServiceCountry;
        WebOS_TimeZone = webOS.systemInfo.timezone;
        WebOS_VirtualKeyboardVisible = webOS.keyboard.isShowing();
        WebOS_LibrayBuildVersion = Number(webOS.libVersion.split('.')[0]);
    });
};

var WebOS_SimulateBackKeyPress = () => webOS.platformBack();
var WebOS_GetAppID = () => webOS.fetchAppId();
var WebOS_TrackWebOSDevice = () => console.info("Device Model: " + WebOS_DeviceModel + "\nDevice Version: " + WebOS_DeviceVersion + "\nMajor Version: " + WebOS_DeviceMajorVersion + "\nMinor Version: " + WebOS_DeviceMajorVersion + "\nMinor Version: " + WebOS_DeviceMajorVersion + "\nMedium Version: " + WebOS_DeviceDotVersion + "\nScreen Height: " + WebOS_DeviceScreenHeight + "\nScreen Width: " + WebOS_DeviceScreenWidth + "UHD: " + WebOS_DeviceUHD);
var WebOS_GetAppPath = () => webOS.fetchAppRootPath();	
var WebOS_GetAppInfo = () =>
{
var path = webOS.fetchAppRootPath();
 webOS.fetchAppInfo(function (info) {
  if (info) 
  {
  WebOS_AppVersion = Number(info.version.split('.'));   
    }
}, path + 'appinfo.json');
};	

//From Here,WebOSDev API Functions Start
var WebOS_GetNetworkState = () =>
{
webOSDev.connection.getStatus({
    onSuccess: function (res) {
		WebOS_DeviceConnected = res.isInternetConnectionAvailable;
        WebOS_DeviceWired = res.wired;
        WebOS_DeviceUsesWifi = res.wifi;
            },
    onFailure: WebOS_FAILURE,
    subscribe: true
});
};

var WebOS_LaunchBrowserWithURL = (url) =>
{
webOSDev.launch({
    id: webOSDev.APP.BROWSER,
    params: { target: url },
    onSuccess: WebOS_SUCCESS,
    onFailure: WebOS_FAILURE
});	
};

var WebOS_LaunchApp = (app_package) =>
{
webOSDev.launch({
    id: app_package,
    params: 
	{
        userId: 'user',
        page: 'shown page'
    },
    onSuccess: WebOS_SUCCESS,
    onFailure: WebOS_FAILURE
});	
}; 

//Module: Tizen
//Created By Rabia Alhaffar In 27/March/2020
//For Tizen OS
//See Here: https://developer.samsung.com/SmartTV/develop/api-references.html
//Also: Don't Forget To Add Needed From API References (Prerequisites)

//Emptied For Some Cases
var Tizen_SUCCESS = () => {};
var Tizen_FAILURE = () => {};

//Video And Window
var Tizen_SetWindowVideoInputSource = (source) => tizen.tvwindow.setSource(source,Tizen_SUCCESS,Tizen_FAILURE);
var Tizen_WindowVideoInputSource = () => { return tizen.tvwindow.getSource(); };
var Tizen_Resolution = () => { return tizen.tvwindow.getVideoResolution(); };

//Input
var Tizen_SupportedKeys = () => { return tizen.tvinputdevice.getSupportedKeys(); };
var Tizen_RegisterKey = (key) => tizen.tvinputdevice.registerKey(key);
var Tizen_UnregisterKey = (key) => tizen.tvinputdevice.unregisterKey(key);
var Tizen_RegisterKeys = (keys) => tizen.tvinputdevice.registerKeyBatch(keys,Tizen_SUCCESS,Tizen_FAILURE);
var Tizen_UnregisterKeys = (keys) => tizen.tvinputdevice.unregisterKeyBatch(keys,Tizen_SUCCESS,Tizen_FAILURE);
var Tizen_KeyCode = (key) => { return tizen.tvinputdevice.getKey(key).code; };

//Display Control
var Tizen_3DEffectMode = () => { return tizen.tvdisplaycontrol.get3DEffectMode(); };
var Tizen_3DModeEnabled = () => { return tizen.tvdisplaycontrol.is3DModeEnabled(); };

//Audio Control
var Tizen_Mute = () => tizen.tvaudiocontrol.setMute(true);
var Tizen_Unmute = () => tizen.tvaudiocontrol.setMute(false);
var Tizen_Muted = () => { return tizen.tvaudiocontrol.isMute(); };
var Tizen_IncreaseVolume = () => tizen.tvaudiocontrol.setVolumeUp();
var Tizen_DecreaseVolume = () => tizen.tvaudiocontrol.setVolumeDown();
var Tizen_SetVolume = (v) => tizen.tvaudiocontrol.setVolume(v); //From 1 To 100
var Tizen_GetVolume = () => tizen.tvaudiocontrol.getVolume();
var Tizen_ListenVolumeChange = (l) => tizen.tvaudiocontrol.setVolumeChangeListener(l);
var Tizen_UnlistenVolumeChange = () => tizen.tvaudiocontrol.unsetVolumeChangeListener();
var Tizen_AudioOutputMode = () => { return tizen.tvaudiocontrol.getOutputMode(); };
var Tizen_PlaySound = (beep) => tizen.tvaudiocontrol.playSound(beep);

//Voice Control
var Tizen_Client = () => { return tizen.voicecontrol.getVoiceControlClient(); };
var Tizen_Language = () => { return tizen.voicecontrol.getVoiceControlClient().getCurrentLanguage(); };
var Tizen_VoiceCommand = (c) => { return new tizen.VoiceControlCommand(c); };
var Tizen_RegisterVoiceCommandsList = (list) => tizen.voicecontrol.getVoiceControlClient().setCommandList(list,"FOREGROUND"); //List Is JavaScript Array Consists Of Tizen_VoiceCommand() Voice Commands
var Tizen_AddVoiceCommandListener = (l) => { return tizen.voicecontrol.getVoiceControlClient().addResultListener(l); };
var Tizen_RemoveVoiceCommandListener = (l) => { return tizen.voicecontrol.getVoiceControlClient().removeResultListener(l); };
var Tizen_AddLanguageChangeListener = (l) => { return tizen.voicecontrol.getVoiceControlClient().addLanguageChangeListener(l); };
var Tizen_RemoveLanguageChangeListener = (l) => { tizen.voicecontrol.getVoiceControlClient().removeLanguageChangeListener(l); };
var Tizen_DisableVoiceControls = () => { tizen.voicecontrol.getVoiceControlClient().release(); }; 

//WebView Settings
var Tizen_SetWebUserAgent = (useragent_string) => tizen.websetting.setUserAgentString(useragent_string,Tizen_SUCCESS,Tizen_FAILURE);
var Tizen_RemoveWebCookies = () => tizen.websetting.removeAllCookies(Tizen_SUCCESS,Tizen_FAILURE);

//Time
var Tizen_CurrentTime = () => { return tizen.time.getCurrentDateTime().toLocaleString(); };
var Tizen_LocalTimezone = () => { return tizen.time.getLocalTimezone(); };
var Tizen_Timezone = (place) => { return new tizen.TZDate(new Date(),place).toString(); };
var Tizen_AvailableTimezones = () => { return tizen.time.getAvailableTimezones(); };
var Tizen_TimezoneExists = (place) => { return tizen.time.getAvailableTimezones().indexOf(place) > -1; };
var Tizen_LongDateFormat = () => { return tizen.time.getDateFormat(); };
var Tizen_ShortDateFormat = () => { return tizen.time.getDateFormat(true); };
var Tizen_TimeFormat = () => { return tizen.time.getTimeFormat(); };
var Tizen_LeapYear = () => { return tizen.time.isLeapYear(tizen.time.getCurrentDateTime().getFullYear()); };
var Tizen_TimezoneDate = () => { return new tizen.TZDate(); };
var Tizen_ListenDateTimeChange = (l) => { tizen.time.setDateTimeChangeListener(l); };
var Tizen_UnlistenDateTimeChange = () => { tizen.time.unsetDateTimeChangeListener(); };
var Tizen_ListenTimezoneChange = (l) => { tizen.time.setTimezoneChangeListener(l); };
var Tizen_UnlistenTimezoneChange = () => { tizen.time.unsetTimezoneChangeListener(); };

//System Info
//For Properties And Capabilities,See Link Below!!!
//https://developer.samsung.com/SmartTV/develop/api-references/tizen-web-device-api-references/systeminfo-api.html
var Tizen_AvailableRAM = () => { return tizen.systeminfo.getAvailableMemory() * 1000 + "GB"; };
var Tizen_DeviceCapabilities = () => { return tizen.systeminfo.getCapabilities(); };
var Tizen_DeviceCapability = (c) => { return tizen.systeminfo.getCapability(c); };
var Tizen_PropertyValue = (p) => { tizen.systeminfo.getPropertyValue(p,Tizen_SUCCESS,Tizen_FAILURE); };

//Data Saving
var Tizen_SaveData = (data_name,raw_data,password) => { tizen.keymanager.saveData(data_name,raw_data,password,Tizen_SUCCESS); }; //password Can Be Set To Null,password Is Password To Encrypt Saved Raw Data
var Tizen_RemoveData = (data_name) => tizen.keymanager.removeData({ "name": data_name });
var Tizen_Data = (data_name) => { return tizen.keymanager.getData({ "name": data_name }); };

//Download
var Tizen_DownloadAPISupported = () => { return tizen.systeminfo.getCapability("http://tizen.org/feature/download"); };
var Tizen_DownloadRequest = (url,location,name,download_mode) => { return new tizen.DownloadRequest(url,location,name,download_mode); };
/*
1- Location Can Be "downloads","documents",etc...
2- If You Set Parameter name Value To null,Tizen Will Download The File In His Original Name
3- download_mode Can Be "WIFI","CELLUAR",Or "ALL",Which Means What Way User Wants To Download File
*/
var Tizen_DownloadFile = (url,location,name,download_mode,listener) => { return tizen.download.start(new tizen.DownloadRequest(url,location,name,download_mode),listener); };
//NOTES: Tizen_DownloadFile() Downloads A File
//But You Must Store It As Value In A Variable
//Cause It Returns Himself As Download ID
var Tizen_CancelDownload = (tizen_downloadfile_as_id) => tizen.download.cancel(tizen_downloadfile_as_id);
var Tizen_PauseDownload = (tizen_downloadfile_as_id) => tizen.download.pause(tizen_downloadfile_as_id);
var Tizen_ResumeDownload = (tizen_downloadfile_as_id) => tizen.download.resume(tizen_downloadfile_as_id);
var Tizen_DownloadState = (tizen_downloadfile_as_id) => { return tizen.download.getState(tizen_downloadfile_as_id); };
var Tizen_DownloadRequestInfo = (tizen_downloadfile_as_id) => { return tizen.download.getDownloadRequest(tizen_downloadfile_as_id); };

//Packages
var Tizen_InstallPackage = (file_package) => tizen.package.install(file_package.toURI(),Tizen_SUCCESS,Tizen_FAILURE);
var Tizen_UninstallPackage = (package_id) => tizen.package.uninstall(package_id,Tizen_SUCCESS,Tizen_FAILURE);

//Application
//You Can Use Function Below This Comment To Get Info About The App(Assign It As Value To Variable)
var Tizen_CurrentApp = () => { return tizen.application.getCurrentApplication(); };
var Tizen_CurrentAppID = () => { return tizen.application.getCurrentApplication().appInfo.id; };
var Tizen_KillApp = (app_target_id) => tizen.application.kill(app_target_id,Tizen_SUCCESS,Tizen_FAILURE);
var Tizen_LaunchApp = (app_target_id) => tizen.application.launch(app_target_id,Tizen_SUCCESS);
var Tizen_AppInfo = () => { return tizen.application.getAppInfo(null); };
var Tizen_CloseApp = () => tizen.application.getCurrentApplication().exit();
var Tizen_HideApp = () => tizen.application.getCurrentApplication().hide();

//Archives
var Tizen_ReadArchive = (directory) => tizen.archive.open(directory,"r",Tizen_SUCCESS);
var Tizen_OpenArchive = (directory,mode) => tizen.archive.open(directory,mode,Tizen_SUCCESS);
var Tizen_ExtractArchive = (directory,extract_directory) =>
{
    tizen.archive.open(directory,"rw",(archive) =>
    {
        var extra = archive.extractAll(extract_directory);
        tizen.archive.abort(extra);
        archive.close();
    });
};
var Tizen_CreateArchive = (directory,files) =>
{
    tizen.archive.open(directory,"rw",(archive) =>
    {
        for(var arc = 0;arc < files.length;arc++) archive.add(files[arc],null,null,null);
        archive.close();
    },null,null);
};

//Alarms
//Tizen_Alarm() Assigned As Value To Variable,Cause Also Treated As Alarm ID
//In Case User Wants To Control It
var Tizen_Alarm = (date) => { return new tizen.AlarmAbsolute(date); };
var Tizen_AddAlarm = (alarm,app_target_id) => tizen.alarm.add(alarm,app_target_id,null);
var Tizen_RemoveAlarm = (alarm) => tizen.alarm.add(alarm);
var Tizen_AllAlarms = () => { return tizen.alarm.getAll(); };
var Tizen_RemoveAllAlarms = () => tizen.alarm.removeAll();
var Tizen_GetAlarm = (alarm) => { return tizen.alarm.get(alarm); };