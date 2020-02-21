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
