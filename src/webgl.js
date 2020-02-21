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
var InitializeWebGL = () =>
{
    cakecanvas = document.getElementsByName("canvas")[0];
    cakepen = cakecanvas.getContext('webgl');
    if(!cakepen) console.error("WEBGL NOT SUPPORTED!!!");
    TRIANGLES = cakepen.TRIANGLES;
    LINES = cakepen.LINES;
    POINTS = cakepen.POINTS;
    TRIFAN = cakepen.TRIANGLE_FAN;
    TRISTRIP = cakepen.TRIANGLE_STRIP;
    LINELOOP = cakepen.LINE_LOOP;
    LINESTRIP = cakepen.LINE_STRIP;
    GPU = cakepen.getParameter(cakepen_debugger.UNMASKED_VENDOR_WEBGL);
    GL_VER = cakepen.getExtension(cakepen.VERSION);
    GLSL_VER = cakepen.getParameter(cakepen.SHADING_LANGUAGE_VERSION);
    UNMASKED = cakepen.getParameter(cakepen_debugger.UNMASKED_RENDERER_WEBGL);
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
var CreateShader = (shader_variable,type,src) =>
{
    shader_variable = cakepen.createShader(type);
    cakepen.shaderSource(shader_variable,src);
    cakepen.compileShader(shader_variable);
    console.info(cakepen.getShaderParameter(shader_variable,cakepen.COMPILE_STATUS) ? "Shader Compiled Successfully!!!" : "Shader Compilation Failed!!!");
    console.info(cakepen.getShaderInfoLog(shader_variable));
    console.info(cakepen.getShaderSource(shader_variable));
    cakepen.deleteShader(shader_variable);
};
var CreateProgram = (program,vertex,frag) => 
{
    program = cakepen.createProgram();
    cakepen.attachShader(program,vertex);
    cakepen.attachShader(program,frag);
    cakepen.linkProgram(program);
    cakepen.validateProgram(program);
    console.info(cakepen.getAttachedShaders(program));
    console.info(cakepen.getShaderSource(vertex));
    console.info(cakepen.getShaderSource(frag));
    console.info(cakepen.getShaderInfoLog(vertex));
    console.info(cakepen.getShaderInfoLog(frag));
    console.info(cakepen.getProgramParameter(cakepen.LINK_STATUS) ? "Program Created Successfully!!!" : "Program Creation Failed!!!");
    console.info(cakepen.getProgramInfoLog(program));
    cakepen.deleteProgram(program);
};
var CreateBuffer = (buffer,arr) =>
{
    buffer = cakepen.createBuffer();
    cakepen.bindBuffer(cakepen.ARRAY_BUFFER, buffer);
    cakepen.bufferData(cakepen.ARRAY_BUFFER, new Float32Array(arr), cakepen.STATIC_DRAW);
};
var SetGeometry = (program,pos_buffer,pos_arr) =>
{
    cakepen.getAttribLocation(program, "a_position");
    pos_buffer = cakepen.createBuffer();
    cakepen.bindBuffer(cakepen.ARRAY_BUFFER,pos_buffer);
    cakepen.bufferData(cakepen.ARRAY_BUFFER,new Float32Array(pos_arr),cakepen.STATIC_DRAW);
};
var SetColor = (program,color_buffer,color_arr) =>
{
  var color_buffer = cakepen.createBuffer();
  cakepen.bindBuffer(cakepen.ARRAY_BUFFER, color_buffer);
  cakepen.bufferData(cakepen.ARRAY_BUFFER,new Float32Array(color_arr),cakepen.STATIC_DRAW);
  cakepen.enableVertexAttribArray(cakepen.getAttribLocation(program, "a_color"));
  cakepen.bindBuffer(cakepen.ARRAY_BUFFER, color_buffer);
  cakepen.vertexAttribPointer(cakepen.getAttribLocation(program, "a_color"), 4, cakepen.FLOAT, false, 0,);
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
var GLTranslate = (x,y,z) => cakepen.translate(x,y,z);
var GLRotate = (angle,x,y,z) => cakepen.rotate(angle,x,y,z);
var GLScale = (x,y,z) => cakepen.scale(x,y,z);
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
var END = () => cakepen.finish();
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
var BindBufferContent = (content,buffer,size) =>
{
    cakepen.enableVertexAttribArray(content);
    cakepen.bindBuffer(cakepen.ARRAY_BUFFER, buffer);
    cakepen.vertexAttribPointer(content, size, cakepen.FLOAT, false, 0, start);
};