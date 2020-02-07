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
    cakecanvas.addEventListener("touchmove",(e) => { cakepen.arc(e.pageX, e.pageY, cursor_size, 90, 180 * Math.PI); cakepen.fill(); });
    cakecanvas.addEventListener("touchstart",(e) => { cakepen.arc(e.pageX, e.pageY, cursor_size, 90, 180 * Math.PI); cakepen.fill(); });  
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
    cakecanvas.addEventListener("touchmove",(e) => { cakepen.drawImage(cursor_image,e.pageX,e.pageY); });
    cakecanvas.addEventListener("touchstart",(e) => { cakepen.drawImage(cursor_image,e.pageX,e.pageY); });  
       
}
if(type == "icon") cakecanvas.style.cursor = img_src; //CSS Style,Your Call ;)
};