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