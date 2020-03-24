//Created By Rabia Alhaffar In 15/February/2020
//Events Binding(Instead Of Using Mousetrap.js)
//A New Update Next Week Will Use This
var KeyUp = () => {};
var KeyDown = () => {};
var KeyHit = () => {};
var Tap = () => {};
var Swipe = () => {};
var Click = () => {};
var MouseButtonDown = () => {};
var MouseButtonUp = () => {};
var Hover = () => {};
var GamepadID = (gamepad) => navigator.getGamepads()[gamepad].id; 
var GamepadConnected = (gamepad) => navigator.getGamepads()[gamepad].connected;
var GamepadButtonPressed = (gamepad,button) => navigator.getGamepads()[gamepad].buttons[button].pressed;
var GamepadButtonTouched = (gamepad,button) => navigator.getGamepads()[gamepad].buttons[button].touched;
var GamepadAxeValue = (gamepad,axe) => navigator.getGamepads()[gamepad].axes[axe];
document.onkeyup = KeyUp;
document.onkeydown = KeyDown;
document.onkeypress = KeyHit;
document.ontouchstart = Tap;
document.ontouchmove = Swipe;
document.onclick = Click;
document.onmousedown = MouseButtonDown;
document.onmouseup = MouseButtonUp;
document.onmouseover = Hover;