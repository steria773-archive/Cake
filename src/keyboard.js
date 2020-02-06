//Cake Keyboard Controlling Example
//Cake Uses Mousetrap For Keyboard Controlling,See https://craig.is/killing/mice
//Mousetrap.bind(key Or More Than One,Event/Event Listener Or Function To Call Or Made Outside Or Inside Like This Example
//Could Be Found At Cake Game Engine\Versions\canvas\addlibs

/*
Mousetrap.bind("c",function()
{
	alert("Hello Cake");
});
*/
document.addEventListener("keydown",IsKeyDown);
document.addEventListener("keyup",IsKeyUp);
var IsKeyUp = (KeyboardKey) => {};
var IsKeyDown = (KeyboardKey) => {};
var KeyboardKeyHit = (Keyboard_Key) =>
{
	if(KeyboardKey.key == Keyboard_Key) { return true; }
	else { return false; }
};