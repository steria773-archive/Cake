var delay;
var editor = CodeMirror.fromTextArea(document.getElementById('code'),
{
     mode: 'htmlmixed',
     theme: 'monokai',
     autoCloseTags: true,
     autoCloseBrackets: true,
     lineWrapping: true,
     scrollbarStyle: "simple",
     lineNumbers: true,
     styleActiveLine: true,
     blastCode: 
     {
         effect: 2
     },
     extraKeys:
     {
         "Home":() => 
         {
           if(!Fullscreen) ToggleFullscreen();
           editor.setOption("fullScreen", !editor.getOption("fullScreen"))
           }
     },
     highlightSelectionMatches: { showToken: /\w/ }
});
editor.on("change", () => 
{
    clearTimeout(delay);
    delay = setTimeout(UpdateEditor, 1);
});
var UpdateEditor = () => 
{
    var previewFrame = document.getElementById('preview');
    var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
    preview.open();
    preview.write(editor.getValue());
    preview.close();
}
setTimeout(UpdateEditor, 1);

var setExample = (e) =>
{
    if(e == 0) editor.setOption("value",``);
    if(e == 1) editor.setOption("value",
`<!DOCTYPE html>
<html>
<head><title>GRADIENT</title></head>
<body>
<canvas height="400" width="400"></canvas>
</body>
<script>
Initialize();
SetCanvasBackgroundColor("black");
SetDrawingMode("fill");
DrawGradientRect(0,0,CanvasWidth,CanvasHeight,
[
[ 0.0,"lightblue" ],
[ 0.25,"aqua" ],
[ 0.50,"cyan" ],
[ 0.75,"blue" ],
[ 1.0,"darkblue" ]
]);
</script>
</html>
`);
if(e == 2) editor.setOption("value",
`<!DOCTYPE html>
<html>
<head><title>COLORFUL</title></head>
<body></body>
<script>
var Random_X = Math.floor(Math.random() * 400);
var Random_Y = Math.floor(Math.random() * 400);
CreateCanvas(400,400,u,"black 3px solid");
Initialize();
SetDrawingMode("custom");
var Scene_1 = new Level(() =>
{  
DrawSquare(Random_X,Random_Y,50,RandomColor(),RandomColor());
Random_X = Math.floor(Math.random() * 400);
Random_Y = Math.floor(Math.random() * 400);
DrawFPS(Scene_1);
},120);
Scene_1.Start();
</script>
</html>
`);
if(e == 3) editor.setOption("value",
`<!DOCTYPE html>
<html>
<head><title>Your Game Name</title></head>
<body>

</body>
<script>

</script>
</html>`);
if(e == 4) editor.setOption("value",
`<!DOCTYPE html>
<html>
<head>
  <title>SKETCH WITH MOUSE</title>
  </head>
  <body></body>
  <script>
  CreateCanvas(window.innerWidth,window.innerHeight,"black");
  Initialize();
  SetDrawingMode("fill");
  cakecanvas.onmousemove = (e) =>
  {
    DrawCircle(e.clientX,e.clientY,20,RandomColor(),RandomColor(),RandomAlpha());
  };
  </script>
</html>`);
if(e == 5) editor.setOption("value",
`<!DOCTYPE html>
<html>
<head><title>Drawing Shapes</title></head>
<body></body>
<script>
//Created By Rabia Alhaffar In 18/February/2020
//Example About Drawing Shapes
CreateCanvas(window.innerWidth,window.innerHeight,"black");
Initialize();
SetDrawingMode("fill");
var ligrad = new LinearGradient(850,140,800,800,
    [
        [ 0.0,"lightblue" ],
        [ 0.25,"aqua" ],
        [ 0.50,"cyan" ],
        [ 0.75,"blue" ],
        [ 1.00,"darkblue" ]
    ]);
var roundgrad = new LinearGradient(600,400,600,600,
    [
        [ 0.0,"white" ],
        [ 0.25,"wheat" ],
        [ 0.50,"silver" ],
        [ 0.75,"grey" ],
        [ 1.00,"black" ]
    ]);
var radgrad = new RadialGradient(200,200,1000,1000,50,
    [
        [ 0.0,"lightyellow" ],
        [ 0.25,"yellow" ],
        [ 0.50,"orange" ],
        [ 0.75,"red" ],
        [ 1.00,"darkred" ]
    ])
DrawRect(100,100,150,75,"blue");
DrawSquare(300,100,80,"cyan");
DrawCircle(480,140,50,"red");
DrawTexture("CAKE_APP_ICON.png",600,300,100,100);
SetFont("40px Cambria");
DrawText(570,150,"HELLO CAKE","blue",u);
DrawLine([ 850,140 ],[ 1200,140 ],20,ligrad.gradient);
DrawGradientRect(100,300,300,300,
    [
        [ 0.0,"lightyellow" ],
        [ 0.25,"yellow" ],
        [ 0.50,"orange" ],
        [ 0.75,"red" ],
        [ 1.00,"darkred" ]
    ]);
DrawTriangle([ 430,200 ],[ 700,300 ],[ 500,400 ],"purple");
DrawRoundedRect(800,400,300,300,100,roundgrad.gradient);
DrawCircle(600,600,100,radgrad.gradient,radgrad.gradient);
cakecanvas.onclick = () => ToggleFullscreen();
</script>
</html>
`)
};

var editor_help = () => alert("Welcome To Cake Game Engine Code Editor!!!\nPress Home Key Inside Code Editor To Toggle Fullscreen Mode In Code Editor\nPress Ctrl And Z To Undo\nPress Ctrl And Y To Redo\nPress Ctrl And R To Refresh");
document.addEventListener("keydown",(e) =>
{
    if(e.key == "ctrl" && e.key == "z") editor.undo();
    if(e.key == "ctrl" && e.key == "y") editor.redo();
    if(e.key == "ctrl" && e.key == "r") editor.refresh();
});
setTimeout(() =>
{
    alert("If Editor Does Not Load Examples Properly Or Correctly,Please Reload/Refresh Editor Page!!!");
},1500);
