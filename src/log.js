//Cake Keyboard Keys,Mouse Buttons,Touch Recording API
//This Is For Recording,For Game Controlling Check canvas/addlibs/mousetrap.js
var Keycode,MouseX,MouseY,MouseButton,MouseButtonName,TouchX,TouchY;
var Log = (log) => console.log(log);
var RecordKeyboard = (KeyboardKey) =>
{
	Keycode = Keycode || window.event,KeyboardKey = Keycode.key  || Keycode.keycode;
    console.log(`Key Pressed: ${KeyboardKey.key} , Keycode: ${KeyboardKey.keycode}`);		
};
var RecordMouse = (event) =>
{
		MouseX = event.clientX,MouseY = event.clientY,MouseButton = event.button;
		if(MouseButton == 0) MouseButtonName = "Left";
		if(MouseButton == 1) MouseButtonName = "Middle(Wheel)"
		if(MouseButton == 2) MouseButtonName = "Right";
		console.log(`Mouse X Position: ${MouseX} , Mouse Y Position: ${MouseY} , Button Pressed: ${MouseButtonName} Mouse Button`);
};
var RecordTouch = (event) =>
{
	    TouchX = event.pageX,TouchY = event.pageY;
		console.log(`Touch X Position: ${TouchX} , Touch Y Position: ${TouchY}`);
};
document.addEventListener("keydown",RecordKeyboard);
document.addEventListener("keyup",RecordKeyboard);
document.addEventListener("mousemove",RecordMouse);
document.addEventListener("click",RecordMouse);
document.addEventListener("touchmove",RecordTouch);
document.addEventListener("touchstart",RecordTouch);
var ClearConsole = () => console.clear();	