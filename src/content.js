//Created By Rabia Alhaffar In 4/January/2020
//A Module To Add Flash SWF And Java JAR Content!!!
var AddContent = (source,w,h) =>
{
var content = document.createElement("object");
content.src = source,content.height = h,content.width = w;
document.getElementsByTagName("body")[0].appendChild(content);
};