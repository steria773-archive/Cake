# Cake
A HTML5 Game Framework/Engine To Make HTMl5 Games Rapidly!!!
<img src="CAKE.png">
> This Readme Is Needed To Be Completed!!!

## How Much Is It Easy?
```javascript
//Created By Rabia Alhaffar In 6/February/2020
CreateCanvas(WindowWidth,WindowHeight);
Initialize();
SetCanvasBackgroundColor("black");
SetDrawingMode("fill");
cakecanvas.onmousemove = (e) => 
{
DrawCircle(e.clientX,e.clientY,20,RandomColor);
RandomColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
cakepen.globalAlpha = Math.random();
};
cakecanvas.ontouchmove = (e) =>
{
DrawCircle(e.pageX,e.pageY,20,RandomColor);
RandomColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
cakepen.globalAlpha = Math.random();    
};
```
Result Can Be Found [Here](https://rabios.github.io/Cake/examples/input_03.html)
## Features

### Graphics
- CanvasRenderingContext2D
  - Functions Made For Drawing Graphics Easily
  - Collections Of Filters Applying Functions To Style Game Content
  - Collections Of Game GUIs To Extend Game Content
  - Ability To Switch Context Or Canvas That CanvasRenderingContext2D Or WebGL Is Drawing On
  - Ability To Control Canvas(Resizing,Destroying,Hiding,Showing)
  - Ability To Take Screenshots(PC Browsers)
  - A 3D System Called Space To Make 3D Polygons And Shapes With 2D Graphics
- WebGL
  - Made From Pure WebGL

### Physics
- A Lightweight Physics Engine Based On Collision Detection(Size Of 4kb)
- Physics(Collision Detection) Not Limited Only To Game Objects(Components) But Also For Shapes That Is Drawn

### Input
- Event Creation Made Easy
- Gamepad,Mouse,Touch Events Functions Pre-made For Easy Use

### Audio
- Powered By WebAudio API
- A Component `Music()` For Playing,Pausing,Resuming Playing Sounds 

### Detection
- Detecting Made For:
1. Device Operating System Detection
2. Browser Features Detection
3. Native Features Detection

> Also,It Can Detect Many Other Things

### Customization
Most Of Cake Game Framework/Engine Functions Written As Variables With Arrow Function Values,Allowing It To Be Modified In-Game Or Web Console Or From Code

### Scripting(Game Programming)
- Coding The Game Can Be In JavaScript Or Any Programming Language(s) That Compiles To JavaScript(Your Call)
- Also You Can Use Any Language But You Need To Find A Way To Compile That Language's Code To JavaScript
- You Can Call Native Code (From Device) With It's Default Compiler(Python,Ruby, Or Any)
- Scripting Languages Tested On Cake Game Framework/Engine:
1. JavaScript 
2. CoffeeScript
3. LiveScript
4. TypeScript
5. ColaScript
6. ToffeeScript
7. Python(Via Transcrypt)
8. JS++

> Formula Here Is: Programming Language -> Compiles To/Is JavaScript Code + `cake.js` = Web Game

> NOTE: This Does Not Means That Other Than These Languages Won't Work!!!

## Showcase
Cake Can Be Used For Huge HTML5 Games,Altough There Is Some Simple Games And Examples Developed And Made By The Same Framework/Engine Developer

### Apps
1. [Akizami](https://rabios.github.io/Cake/apps/akizami.html)

### Games

1. [Treasure Island](https://rabios.github.io/Cake/games/treasure_island.html)
2. [Pong](https://rabios.github.io/Cake/games/pong.html)
3. [Rotator](https://rabios.github.io/Cake/games/rotator.html)
4. [Dash](https://rabios.github.io/Cake/games/dash.html)
5. [Evada](https://rabios.github.io/Cake/games/evada.html)

### Examples

1. [Hello Cake](https://rabios.github.io/Cake/examples/graphics_01.html)
2. [Chocolate Cake](https://rabios.github.io/Cake/examples/graphics_02.html)
3. [Colorful](https://rabios.github.io/Cake/examples/graphics_03.html)
4. [Scrolling Background](https://rabios.github.io/Cake/examples/component_03.html)
5. [Scrolling Sides](https://rabios.github.io/Cake/examples/component_02.html)
6. [Input With Keyboard](https://rabios.github.io/Cake/examples/input_01.html)
7. [Input With Mouse And Touch](https://rabios.github.io/Cake/examples/input_03.html)
8. [Physics Example(Rectangles Collision)](https://rabios.github.io/Cake/examples/physics_01.html)
9. [Launchpad](https://rabios.github.io/Cake/examples/launchpad.html)
10. [Button Example](https://rabios.github.io/Cake/examples/button_01.html)
11. [Controlling Components](https://rabios.github.io/Cake/examples/component_01.html)
12. [Safe Type Checking](https://rabios.github.io/Cake/examples/compiler_01.html)
13. [3D Graphics(Taken And Forked/Modified From explorercanvas Repo)](https://rabios.github.io/Cake/examples/graphics_04.html)

### Experiments

1. [Component Interaction With Mouse And Touch](https://rabios.github.io/Cake/experiments/experiment_01.html)
2. [Interactive Canvas](https://rabios.github.io/Cake/experiments/experiment_02.html)
3. [Gradients](https://rabios.github.io/Cake/experiments/experiment_03.html)
4. [Integration With Other HTML5 Game Engines](https://rabios.github.io/Cake/experiments/experiment_04.html)
5. [Artboard(Which Led To Create Akizami)](https://rabios.github.io/Cake/experiments/experiment_05.html)

## Soon
1. Updating Wiki/Documentation
2. More New Examples And Features
3. New Tests For Other Programming Languages
4. More Bug Fixes
6. Adding Cheatsheets And Full Manual
7. Adding Tools To Framework/Engine

> If I Had Freetime,More Examples Come Soon!!! 
