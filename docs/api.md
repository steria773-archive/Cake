# Cake Game Engine API

> NOTES: This API Contains All Functions Of Cake Game Engine,It Should Considered To Be Main

> NOTES: This API Documentation Is In Development

## Audio
```javascript
PlayAudio(src)              //Plays Audio File
//var song1 = new Music("game.ogg");
Music(src)                  //Music Component
Music.Play()                //Plays Music Component
Music.Pause()               //Pauses Music Component
Music.Resume()              //Resumes Music Component Playing
```
## Components
## Graphics
## Scripting
## GUI
## Levels
## Loading And Splashscreen
## Native
## Physics
## XBOX
## Steam
## Storage
## Support
```javascript
CANVAS()                    //Checks Support For CanvasRenderingContext2D
WEBGL()                     //Checks Support For WebGLRenderingContext
MP3()                       //Checks Support Of Playing MP3 Files
MPEG()                      //Checks Support Of Playing MPEG Files
AIFF()                      //Checks Support Of Playing AIFF Files
MP4()                       //Checks Support Of Playing MP4 Files
OGG()                       //Checks Support Of Playing OGG Files
WAV()                       //Checks Support Of Playing WAV Files
WEBM()                      //Checks Support Of Playing WEBM Files
WEBXR()                     //Checks Support Of WebXR Technology
WEBVR()                     //Checks Support Of WebVR Technology
JAVA()                      //Checks Support Of Java Applets
ONLINE()                    //Checks If Device Is Online
```
## Mobile
```javascript
Vibrate(milliseconds)       //Vibrates The Device
StopVibrating()             //Stops Vibration Even It Is Looping
ShowBatteryLevel()          //Gives Info About Battery Level
UnlockDeviceRotation()      //Unlocks Device From Lock Device Rotation
LockDeviceRotation()        //Locks Device In A Position
/*
Position Could Be:

    "any"
    "natural"
    "landscape"
    "portrait"
    "portrait-primary"
    "portrait-secondary"
    "landscape-primary"
    "landscape-secondary"

*/
```
## Content
```javascript
AddContent(src,width,height)          //Add Content(JAR,SWF) With Width And Height
```
## Native Code
## Browser
## Cursor
```javascript
HideCursor()                //Hides The Cursor(In Canvas)
ShowCursor()                //Shows The Cursor
SetCursor(src,type,size)  
/*
type Can Be:

"color" And src Value Is Color
"image" And src Value Is Image Source
"icon" And src Value Is CSS document.style.cursor Style

*/
```
## Fullscreen
```javascript
Fullscreen                  //Variable Returns True If Browser In Fullscreen,Else Returns False
ToggleFullscreen()          //Toggles Fullscreen Mode
ExitFullscreen()            //Exit From Fullscreen Mode
```
## Filters
## Pointer
```javascript
LockPointer()               //Locks Pointer In Canvas
UnlockPointer()             //Unlock Pointer(Stop Pointer Lock)
```
## Game
```javascript
RestartGame()               //Restarts The Game
CrashGame()                 //Crashes The Game And Browser LOL
Title(game_title)           //Sets Game Title
UpdateCake()                //Updates Cake Game Engine Online
Destroy(component)          //Destroy A Component
StartProcess(location)      //Starts Process From Location
ViewSourceCode(index)       //View Source Code Of A File(From Index)
ViewGameSourceCode()        //Show Game Source Code(If Game Only Consisted Of .html File And .js File)
```
## Utilities
## Input
## Integration
```javascript
IntegrateWith(engine)       //To Integrate Cake With Another HTML5 Game Engine/Framework
//Must Be Done After Initialize() If Engine/Framework Uses Canvas,Else Just Use IntegrateWith()
```
And Not All HTML5 Game Engines/Frameworks Supported,There Is A Few Number Of Game Engines And Frameworks,List [Here](https://rabios.github.io/Cake/site/list_integration.html)