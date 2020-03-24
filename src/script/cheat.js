//Created By Rabia Alhaffar In 25/April/2019
//An Cake Cheatcoding Library Example!!!
//It Could Add Cheats To Your Game By Prompting
//Next Version:Add Keyboard Key Chains
var cheat;
var InputCheatCode = () => cheat = prompt("Enter Cheatcode:");
var CheckCheatCode = (cheatcode) => (cheat == cheatcode);
var SetCheatCode = (cheatcode) => cheat = cheatcode;