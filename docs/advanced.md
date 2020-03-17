# Advanced Features Of Cake Game Engine

## Native Code (Call Code From Your Device)

### Brief
Node.js Module `child_process` Makes It Easy To Do That,The Main Problem Is This Part Of The Engine Which Calls Native Codes From Your Device Is Not Comes With Build (You May Grap It From Source)

### Requirements
1. Node.js (`native.js` From Cake's Source Code Needs That)
2. Programming Language's Compiler You Want To Use (With Describe The Full Location/Address Of The Compiler),To Make Sure Node.js Run It
3. Your Files You Want To Run
4. File `native.js` From Cake's Source Code,With Adding Your Files You Want To Run (Functions Included In Same File)
5. Batch File,With The Following Code:
```batch
start node native.js
```

## Using The Rendering Context Of Cake

### Brief
That's If You Thinked About Adding More Graphics Functions To The Engine Or Want To Use It's Context For For Bezier Curve Function(s)

### How To Do That?
Use `cakepen` To Achieve That

```javascript
CreateCanvas(600,600,"black");
Initialize();
cakepen.fillStyle = "blue";
cakepen.fillRect(100,100,100,50);
```
> NOTES: If You Also Want To Modify Game Canvas,Use `cakecanvas`

## Modification Of Cake Game Engine Functions
Want To Achieve That? It's Simple And Easy!!!

```javascript
//Function ApplyMod() Which Is Not Very Useful For Example,Let's Modify It
//Most Functions In Cake Are Using Variables It's Values Are Arrow Functions!!!
ApplyMod = () =>
{
    //Your Code Here,Add Parameters Above!!!
};
```

## Using Customized Game Code On Each OS/Browser

### Brief
Some Operating Systems/Browsers Faces Problems When Running JavaScript Code Sometimes,Cause That Browser/Operating System Does Not Support It!!!

### How To Do That?
See This For Example:
```javascript
//With Operating Systems (There Are Very Many Operating Systems/Browsers Can Be Checked With Cake)
//Let's Use From Them Android And iOS
if(Android)
{
    //Custom Code Runs Only On Android
}
if(iOS)
{
    //Custom Code Runs Only On iOS
}
if(Windows)
{
    //Custom Code Runs Only On Windows 
}


// With Browsers (There Are Very Many Operating Systems/Browsers Can Be Checked With Cake)
//Let's Take Firefox And Chrome For Example
if(Firefox)
{
    //Custom Code Runs Only On Mozilla Firefox Browser
}
if(Chrome)
{
    //Custom Code Runs Only On Google Chrome Browser
}
```

## Updating Cake Game Engine Online

### Brief
If You Don't Want Each Time You Upload Your Updated Game Code To Upload Latest Version Of Cake Each Time,
Or You Want To Use New Features Of Cake Into Your Game

### How To Do That?
Do This:

```javascript
UpdateCake(); //That's All,It Will Do That By Importing Cake From jsDelivr CDN!!!
```

## Integration
See [This](https://cake-engine.github.io/Cake/site/list_integration.html)