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
```javascript
Info(title,info)                  //Gives Information About Thing,With Title
Exception(name,code,description)  //Throws Exception With Title,Exception Codenumber,And Description About
Warn(name,description)            //Throws Warning With Title,Description
Error(name,code,description)      //Throws Error With Title,Error Codenumber And Description
Trace()                           //Trace Console
Log(msg)                          //Logs Something To The Console
ClearConsole()                    //Clears The Console
EnableAccelerometer()             //Enable Accelerometer Tracking (Made For Chrome)
StartConsoleTimer()               //End Console Timer
EndConsoleTimer()                 //Start Console Timer
FixValuesFromArray(array,type)    //Fix A Array Variables/Values,Same As FixValue() But For Arrays
FixValue(variable_or_value,type)  //Fix A Variable/Value And Reset It To A Value According To type (type Must Be String)
/*
type Can Be:

bool
string
int
char
array

*/

Import(src)                       //Imports A Script (Local Or From Online CDN)
Unknown(variable_or_value)        //Checks If A Variable And/Or Value Is Undefined Or NaN (Useful To Fix And Debug Bugs If Happen And/Or Correcting Variables)
Do(c)                             //Eval JavaScript Code
Help(f)                           //Gives Function Source Code
```
## GUI
## Levels
## Loading And Splashscreen
```javascript
SetLoadingImage(image_src,level,time)       //Sets Loading Image Then Go To Level After Time In Milliseconds
SetLoadingLevel(loading_level,level,time)   //Sets Loading Level Then Go To A Level After Time In Milliseconds
SetSplashscreen(image_src,level,time)       //Sets Background Image As Splashscreen Then Go To Level After Time In Milliseconds

```

## Native
## Physics
## XBOX
## Steam
## Storage
```javascript

```
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
AddContent(src,width,height)          //Add Content (JAR,SWF) With Width And Height
```
## Native Code
## Browser
```javascript 
ReloadHistory()             //Reloads Window
NextHistory()               //Go Next (In History)
BackHistory()               //Go Back (In History)
```
## Cursor
```javascript
HideCursor()                //Hides The Cursor (In Canvas)
ShowCursor()                //Shows The Cursor
SetCursor(src,type,size)    //Sets Cursor
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
```javascript

```

## Pointer
```javascript
LockPointer()               //Locks Pointer In Canvas
UnlockPointer()             //Unlock Pointer (Stop Pointer Lock)
```
## Game
```javascript
RestartGame()               //Restarts The Game
CrashGame()                 //Crashes The Game And Browser LOL
Title(game_title)           //Sets Game Title
UpdateCake()                //Updates Cake Game Engine Online
Destroy(component)          //Destroy A Component
StartProcess(location)      //Starts Process From Location
ViewSourceCode(index)       //View Source Code Of A File (From Index)
ViewGameSourceCode()        //Show Game Source Code (If Game Only Consisted Of .html File And .js File)
```
## Utilities
```javascript
u                                                //Variable Made As Shortcut Of undefined
RandomColor()                                    //Returns Random Color (In RGB)
RandomAlpha()                                    //Returns Random Alpha
Swap(variable_or_value,variable_or_value)        //Swap Variable's Values

```

## Input
Keyboard,Mouse,And Touch Can Be Done With `addEventListener()`,But That Doesn't Means That Functions Made
```javascript
//NOTES: Gamepad Features Works On Chrome
GamepadID(gamepad_index)                      //Gets Name/ID Of The Gamepad If Connected (From Gamepad's Index)
GamepadConnected(gamepad_index)               //Checks If Gamepad Is Connected (Gamepad Getted From It's Index)
GamepadButtonPressed(gamepad_index,button)    //Checks If Gamepad Button Is Pressed From A Gamepad Getted With It's Index
GamepadButtonTouched(gamepad_index,button)    //Same As GamepadButtonPressed() But When Button Touched
Listen()                                      //Listen To All Interactions With Canvas (Clicking,Moving,Dragging,Touching,And Many...)
GamepadAxeValue(gamepad_index,axe)            //Getting Values Of Gamepad Axes From It's Index (For Game Controlling With Analogs)
```
## Cheating
```javascript
InputCheatCode()            //Asks Player To Enter Cheat Code
CheckCheatCode(cheatcode)   //Checks If Cheat Code Entered By Player Is A Cheat Code
SetCheatCode(cheatcode)     //Sets Cheat Code
```
## Integration
```javascript
IntegrateWith(engine)       //To Integrate Cake With Another HTML5 Game Engine/Framework
//Must Be Done After Initialize() If Engine/Framework Uses Canvas,Else Just Use IntegrateWith()
```
And Not All HTML5 Game Engines/Frameworks Supported,There Is A Few Number Of Game Engines And Frameworks,List [Here](https://rabios.github.io/Cake/site/list_integration.html)

## Variables