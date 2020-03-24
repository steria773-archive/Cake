//Created By Rabia Alhaffar In 24/March/2020
//Prototype For New WebGL 3D Drawing Functions
var DrawModel = (content) =>
{
    if(Unknown(content.model)) content.model = "cube";
    if(Unknown(content.shaders[0])) content.shaders[0] = default_position_shader;
    if(Unknown(content.shaders[1])) content.shaders[1] = "";
    if(Unknown(content.position[0])) content.position[0] = 0;
    if(Unknown(content.position[1])) content.position[1] = 0;
    if(Unknown(content.position[2])) content.position[2] = 0;
    if(Unknown(content.rotation[0])) content.rotation[0] = 0;
    if(Unknown(content.rotation[1])) content.rotation[1] = 0;
    if(Unknown(content.rotation[2])) content.rotation[2] = 0;
    if(Unknown(content.rotation[3])) content.rotation[3] = 0;
    if(Unknown(content.scalation[0])) content.scalation[0] = 0;
    if(Unknown(content.scalation[1])) content.scalation[1] = 0;
    if(Unknown(content.scalation[2])) content.scalation[2] = 0;
    if(Unknown(content.size)) content.size = 0;
    if(Unknown(content.options)) content.options = { normals: false };
    var model_shaders = new GL.Shader(content.shaders[0],content.shaders[1]);
    cakepen.loadIdentity();
    cakepen.translate(content.position[0],content.position[1],content.position[2]);
    cakepen.rotate(content.rotation[0],content.rotation[1],content.rotation[2],content.rotation[3]);
    if(content.model == "cube")
    {
        cakepen.scale(content.size,content.size,-content.size);
        model_shaders.draw(GL.Mesh.cube(content.options));
        cakepen.translate(-content.position[0],-content.position[1],-content.position[2]);
        cakepen.rotate(-content.rotation[0],-content.rotation[1],-content.rotation[2],-content.rotation[3]);
        cakepen.scale(-content.size,-content.size,content.size);
    }
    if(content.model == "ball")
    {
        cakepen.scale(content.size,content.size,-content.size);
        model_shaders.draw(GL.Mesh.sphere(content.options));
        cakepen.translate(-content.position[0],-content.position[1],-content.position[2]);
        cakepen.rotate(-content.rotation[0],-content.rotation[1],-content.rotation[2],-content.rotation[3]);
        cakepen.scale(-content.size,-content.size,content.size);
    }
    if(content.model == "plane")
    {
        cakepen.scale(content.size,content.size,-content.size);
        model_shaders.draw(GL.Mesh.plane(content.options));
        cakepen.translate(-content.position[0],-content.position[1],-content.position[2]);
        cakepen.rotate(-content.rotation[0],-content.rotation[1],-content.rotation[2],-content.rotation[3]);
        cakepen.scale(-content.size,-content.size,content.size);
    }
    if(content.model == "cuboid")
    {
        cakepen.scale(content.scalation[0],content.scalation[1],-content.scalation[2]);
        model_shaders.draw(GL.Mesh.cube(content.options));
        cakepen.translate(-content.position[0],-content.position[1],-content.position[2]);
        cakepen.rotate(-content.rotation[0],-content.rotation[1],-content.rotation[2],-content.rotation[3]);
        cakepen.scale(-content.scalation[0],-content.scalation[1],content.scalation[2]);
    }
    if(content.model == "field")
    {
        cakepen.scale(content.scalation[0],content.scalation[1],-content.scalation[2]);
        model_shaders.draw(GL.Mesh.plane(content.options));
        cakepen.translate(-content.position[0],-content.position[1],-content.position[2]);
        cakepen.rotate(-content.rotation[0],-content.rotation[1],-content.rotation[2],-content.rotation[3]);
        cakepen.scale(-content.scalation[0],-content.scalation[1],content.scalation[2]);
    }
    if(content.model == "sphere")
    {
        cakepen.scale(content.scalation[0],content.scalation[1],-content.scalation[2]);
        model_shaders.draw(GL.Mesh.sphere(content.options));
        cakepen.translate(-content.position[0],-content.position[1],-content.position[2]);
        cakepen.rotate(-content.rotation[0],-content.rotation[1],-content.rotation[2],-content.rotation[3]);
        cakepen.scale(-content.scalation[0],-content.scalation[1],content.scalation[2]);
    }
};