//Created By Rabia Alhaffar In 23/April/2019
//An Tracking Objects,PC,Player,And Game Specifications For Cake Game Framework!!!
//Works Successfully But It Still In Development!!!
var RAM = navigator.deviceMemory;
var OS_Codename = window.navigator.oscpu;
var Location = navigator.geolocation;
var Device_Languages = navigator.languages;
var TrackGameObject = (object) => console.info(`Object ${object.name} Properties:\nX Position: ${object.x}\nY Position: ${object.y}\nWidth: ${object.width}\nHeight: ${object.width}\nSpeed X: ${object.speedX}\nSpeed Y: ${object.speedY}\nGravity: ${object.gravity}\nGravity Speed: ${object.gravitySpeed}\nBouncing: ${object.bounce}\n`);
var TrackWebGL = () =>
{
	    var gl = document.createElement("canvas").getContext("webgl"),ext = gl.getExtension("WEBGL_debug_renderer_info");
		console.info(`WebGL Properties:\nWebGL Version: ${gl.getParameter(gl.VERSION)}\nWebGL GLSL Version: ${gl.getParameter(gl.SHADING_LANGUAGE_VERSION)}\nWebGL Vendor/Provider: ${gl.getParameter(gl.VENDOR)}\nWebGL GPU Vendor: ${gl.getParameter(ext.UNMASKED_VENDOR_WEBGL)}\nPC GPU: ${gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)}\n`);
};		
var TrackDevice = () => console.info(`Device Info:\nDevice OS: ${window.navigator.userAgent}\nDevice Browser OS: ${navigator.platform}\nDevice Language: ${navigator.language}\nJava Enabled: ${navigator.javaEnabled()}\nIs The Device Online: ${navigator.onLine}\nDevice RAM: ${navigator.deviceMemory} GB\nOperating System Real Name: ${window.navigator.oscpu}\nDevice Location: ${navigator.geolocation}\nLanguages List: ${navigator.languages}\n`);
var TrackCanvas = () => console.info(`Game Canvas Info:\nCanvas Height: ${cakecanvas.height}\nCanvas Width: ${cakecanvas.width}\n`);