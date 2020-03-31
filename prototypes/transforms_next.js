//Created By Rabia Alhaffar In 31/March/2020
//Transformations Getted By Context
var Translate = (x,y,z) =>
{
    if(Unknown(x)) x = 0;
    if(Unknown(y)) y = 0;
    if(Unknown(z)) z = 0;
    if(cakecanvas.getContext("2d") != null) cakepen.translate(x,y);
    else cakepen.translate(x,y,z);
};
var Rotate = (angle,x,y,z) =>
{
    if(Unknown(angle)) angle = 0;
    if(Unknown(x)) x = 0;
    if(Unknown(y)) y = 0;
    if(Unknown(z)) z = 0;
    if(cakecanvas.getContext("2d") != null) cakepen.rotate(angle);
    else cakepen.rotate(angle,x,y,z);
};
var Scale = (x,y,z) =>
{
    if(Unknown(x)) x = 0;
    if(Unknown(y)) y = 0;
    if(Unknown(z)) z = 0;
    if(cakecanvas.getContext("2d") != null) cakepen.scale(x,y);
    else cakepen.scale(x,y,z);
};