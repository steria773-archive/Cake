//Created By Rabia Alhaffar In 23/November/2019
//Cake 3D Graphics Library
//NOTES: It Uses LightGL.js As Dependency!!!
var cakepen;
var caketracer;
var CanvasHeight;
var CanvasWidth;
var Triangles;
var Triangle_Strip;
var Fan;
var Lines;
var Line_Loop;
var Line_Strip;
var Points;
var WebGL_Version;
var RandomRed = Math.floor(Math.random() * 1.0);
var RandomGreen = Math.floor(Math.random() * 1.0);
var RandomBlue = Math.floor(Math.random() * 1.0);
var RandomAlpha = Math.floor(Math.random() * 1.0);
var RandomPosition;
var GLSL_Version;
var WebGL_Vendor;
var cakepen_debugger;
var GPU;
var Unmasked_Renderer;
var Initialize_LightGL = () =>
{
	cakepen = GL.create();
	cakepen_debugger = cakepen.getExtension("WEBGL_debug_renderer_info");
	Unmasked_Renderer = cakepen.getParameter(cakepen_debugger.UNMASKED_RENDERER_WEBGL)
	GPU = cakepen.getParameter(cakepen_debugger.UNMASKED_VENDOR_WEBGL);
	caketracer = GL.Raytracer();
	RandomPosition = GL.Vector.randomDirection();
	WebGL_Vendor = cakepen.getParameter(cakepen.VENDOR);
	WebGL_Version = cakepen.getExtension(cakepen.VERSION);
	GLSL_Version = cakepen.getParameter(cakepen.SHADING_LANGUAGE_VERSION);
};
var GetExtension = (webgl_extension) => cakepen.getExtension(webgl_extension);
var SetAntialiasing = (x) => options.antialias = x;
var SetAlpha = (x) => options.Alpha = x;
var Initialize_WebGL_Modes = () =>
{
    Triangles = cakepen.TRIANGLES;
    Triangle_Strip = cakepen.TRIANGLE_STRIP;
    Fan = cakepen.TRIANGLE_FAN;
    Lines = cakepen.LINES;
    Line_Strip = cakepen.LINE_STRIP;
    Line_Loop = cakepen.LINE_LOOP;
    Points = cakepen.POINTS;	
};
var LoadIdentity = () => cakepen.loadIdentity();
var WebGL_ToggleFullscreen = () => cakepen.fullscreen();
var ClearWebGLCanvas = () => cakepen.clear(cakepen.COLOR_BUFFER_BIT | cakepen.DEPTH_BUFFER_BIT);
var ClearWebGLCanvasColor = (r,g,b,a) => cakepen.clearColor(r,g,b,a);
var Position = (x,y,z) => new GL.Vector(x,y,z);
var PositionFromAngles = (angle_x,angle_y) => GL.Vector.fromAngles(angle_x,angle_y);
var Translate = (x,y,z) => cakepen.translate(x,y,z);
var Rotate = (angle,x,y,z) => cakepen.rotate(angle,x,y,z);
var Scale = (x,y,z) => cakepen.scale(x,y,z);
var Transform = (mode,a,b,c,d) =>
{
	if(mode == "translate") cakepen.translate(a,b,c);
	if(mode == "rotate") cakepen.rotate(a,b,c,d);
	if(mode == "scale") cakepen.scale(a,b,c);
};
var Update = () => cakepen.animate();
var Cube = () => GL.Mesh.cube();
var Plane = () => GL.Mesh.plane();
var Sphere = () => GL.Mesh.sphere();
var Color = (r,g,b,a) => cakepen.color(r,g,b,a);
var BeginDrawing = (mode) => cakepen.begin(cakepen.mode);
var EndDrawing = () => cakepen.end();
var Enable = (gl_feature) => cakepen.enable(cakepen.gl_feature);
var Disable = (gl_feature) => cakepen.disable(cakepen.gl_feature);
function Camera(x,y,z)
{
	this.Position = new GL.Vector(x,y,z);
	this.Render = function() { this.Position.add(position_from_Angles);	};
}
var Perspective = (fov,aspect,near,far) => cakepen.perspective(fov,aspect,near,far);
var Orthographic = (left,right,bottom,top,near,far) => cakepen.ortho(left,right,bottom,top,near,far);
var Frustum = (left,right,bottom,top,near,far) => cakepen.frustum(left,right,bottom,top,near,far);
var Look = (x1,y1,z1,x2,y2,z2,x3,y3,z3) => cakepen.lookAt(x1,y1,z1,x2,y2,z2,x3,y3,z3);
var SetViewport = (x,y,height,width) => cakepen.viewport(x,y,height,width);
var ResetViewport = () => cakepen.viewport(0,0,cakepen);
var SetPointSize = (size) => cakepen.pointSize(size);
var DrawVertex = (vertexes) => cakepen.vertex(vertexes);
var Start = () => cakepen.ondraw();
var SetMatrix = (matrix_mode) => cakepen.matrixMode(cakepen.matrix_mode);
var StopMatrix = () => cakepen.popMatrix();	
var PushMatrix = () => cakepen.pushMatrix();
var PolyOffset = (mode,x,y) => cakepen.OffsetPolygon(x,y);
var LoadMeshFromJSON = (json_file,options) => GL.Mesh.load(json_file,options);
var Texture = (height,width,options) => GL.Texture(height,width,options);
var TextureFromImage = (image,options) => GL.Texture.fromImage(image,options);
var TextureFromURL = (url,options) => GL.Texture.fromURL(url,options);
function Vector(x,y,z)
{
	this.x = x;
	this.y = y;
	this.z = z;
	this.Vector = new GL.Vector(this.x,this.y,this.z);
	this.Min = function() { this.Vector.min(this.x,this.y); };
	this.Max = function() { this.Vector.min(this.x,this.y); };
	this.Add = function() { this.Vector.add(this.x,this.y,this.z); };
	this.Sub = function() { this.Vector.subtract(this.x,this.y,this.z); };
	this.Multiple = function() { this.Vector.multiply(this.x,this.y,this.z); };
	this.Divide = function() { this.Vector.divide(this.x,this.y,this.z); };
	this.Cross = function() { this.Vector.cross(this.x,this.y,this.z); };
	this.Unit = function() { this.Vector.unit(this.x,this.y); };
	this.Negative = function() { this.Vector.negative(this.x,this.y); };
	this.Equals = function(vector) { this.Vector.equals(vector); };
	this.Dot = function(vector) { this.Vector.dot(vector); };
	this.Length = function() { this.Vector.length(); };
	this.Initialize = function(new_x,new_y,new_z) { this.Vector.init(new_x,new_y,new_z); };
	this.ToAngles = function() { this.Vector.toAngles(); };
	this.AngleTo = function(angle) { this.Vector.angleTo(angle); };
}
var ClearEverything = () => cakepen.clearDepth = 1.0;
//From 0.0 To 1.0
var SetClearingDepth = (depth) => cakepen.clearDepth = depth;	
var GLKey = (k) => GL.keys.k;