//Created By Rabia Alhaffar In 18/February/2020
/*
GUI TYPES:

1- BUTTONS
2- TEXTINPUT
3- CHECKBOX
4- BARS
5- WINDOW

*/
var nolag = true; //A Way To Stop Loop Of Alerting
CreateCanvas(window.innerWidth,window.innerHeight,"black");
Initialize();
SetDrawingMode("fill");
var chk = new Checkbox(100,100,50,"blue",() => {});
var btn1 = new Button(200,100,200,100,"CLICK ME",
{
    'default': { top: '#1879BD', bottom: '#084D79' },
    'hover': { top: '#678834', bottom: '#093905' },
    'active': { top: '#EB7723', bottom: '#A80000' }
  },
  () => 
  {
      btn1.x = Math.floor(Math.random() * CanvasWidth);
      btn1.y = Math.floor(Math.random() * CanvasHeight);
  });
var bar1 = new Bar(500,100,40,40,"cyan");
var Scene = new Level(() =>
{
ClearCanvas();
chk.Update();
btn1.Update();
bar1.Update();
bar1.width += 5;
if(chk.checked && nolag) 
{
    nolag = false;
    alert("Checkbox Checked!!!");
}
},120);
Scene.Start();