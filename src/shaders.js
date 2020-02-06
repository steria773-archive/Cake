var CreateShader = (shader,type,glsl_code) =>
{
   if(type == "vertex") shader = cakepen.createShader(cakepen.VERTEX_SHADER);
   if(type == "fragment") shader = cakepen.createShader(cakepen.FRAGMENT_SHADER);
   cakepen.shaderSource(shader,glsl_code);  
   cakepen.compileShader(shader);
};
var AttachShaderToObject = (program,vertex,fragment) =>
{
         program = cakepen.createProgram();
         cakepen.attachShader(program,vertex);
         cakepen.attachShader(program,fragment);
         cakepen.linkProgram(program);
         cakepen.useProgram(program);
};
var CompileShader = (shader) => cakepen.compileShader(shader);
function Shader(gl_Position,gl_FragColor)
{
this.angle = 0,this.angle_x = 0,this.angle_y = 0,this.angle_z = 0;
this.x = 0,this.y = 0,this.z = 0;
this.scale_x = 0,this.scale_y = 0,this.scale_z = 0;
this.Shader = new GL.Shader(gl_Position,gl_FragColor);
this.SetPosition = function(position_x,position_y,position_z) { this.x = position_x,this.y = position_y,this.z = position_z; };
this.SetRotation = function(a,ax,ay,az) { this.angle = a,this.angle_x = ax,this.angle_y = ay,this.angle_z = az; };
this.SetScalation = function(sx,sy,sz) { this.scale_x = sx,this.scale_y = sy,this.scale_z = sz; };
this.Draw = function(mesh_type)
{
cakepen.translate(this.x,this.y,this.z);
cakepen.rotate(this.angle,this.angle_x,this.angle_y,this.angle_z);
cakepen.scale(this.scale_x,this.scale_y,this.scale_z);
if(mesh_type == "Cube") this.Shader.draw(GL.Mesh.cube());
if(mesh_type == "Plane") this.Shader.draw(GL.Mesh.plane());
if(mesh_type == "Sphere") this.Shader.draw(GL.Mesh.sphere());
};
}